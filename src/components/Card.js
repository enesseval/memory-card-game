import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setFirstChoice, setSecondChoice } from "../redux/cardSlice";

function Card({ card }) {
	const cardId = nanoid();

	const dispatch = useDispatch();
	const firstChoice = useSelector((state) => state.card.firstChoice);
	const secondChoice = useSelector((state) => state.card.secondChoice);

	const clickHandle = (e) => {
		document.getElementById(e.target.id).classList.add("clickEvent");
		if (firstChoice === "") {
			dispatch(setFirstChoice(e.target.attributes.name.nodeValue));
		} else {
			dispatch(setSecondChoice(e.target.attributes.name.nodeValue));
		}
	};
	return (
		<div className="cards" id={cardId} name={card.name} onClick={(e) => clickHandle(e)}>
			<div className="card back" id={cardId} name={card.name}>
				MEMORY CARD GAME
			</div>
			<div className="card front">
				<img src={card.img} alt={card.name} />
			</div>
		</div>
	);
}

export default Card;
