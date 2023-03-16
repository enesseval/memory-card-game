import { useDispatch, useSelector } from "react-redux";
import { gameStatus, setCount, setFirstChoice, setPoint, setSecondChoice } from "../redux/cardSlice";

function Card({ card }) {
	const first = useSelector((state) => state.card.firstChoice);
	const second = useSelector((state) => state.card.secondChoice);

	const dispatch = useDispatch();

	if (document.querySelectorAll(".trueChoice").length === 4) {
		dispatch(gameStatus("end"));
	}
	if (first !== "" && second !== "") {
		dispatch(setCount());
		if (first === second) {
			dispatch(setFirstChoice(""));
			dispatch(setSecondChoice(""));
			dispatch(setPoint("true"));
			document.querySelectorAll(".clickEvent").forEach((item) => {
				item.classList.remove("clickEvent");
				item.classList.add("trueChoice");
			});
		}
		if (first !== second && second !== "") {
			dispatch(setFirstChoice(""));
			dispatch(setSecondChoice(""));
			dispatch(setPoint("false"));
			setTimeout(() => {
				document.querySelectorAll(".clickEvent").forEach((item) => {
					item.classList.remove("clickEvent");
				});
			}, 1000);
		}
	}

	const clickHandle = (e) => {
		if (first === "") {
			dispatch(setFirstChoice(e.target.innerHTML));
			e.target.parentElement.classList.add("clickEvent");
		} else {
			dispatch(setSecondChoice(e.target.innerHTML));
			e.target.parentElement.classList.add("clickEvent");
		}
	};

	return (
		<div className="cards" name={card.name} onClick={(e) => clickHandle(e)}>
			<div className="card back" name={card.name}>
				{card.name}
			</div>
			<div className="card front">
				<img src={card.img} alt={card.name} />
			</div>
		</div>
	);
}

export default Card;
