import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function karistir(dizi) {
	for (let i = dizi.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));

		[dizi[i], dizi[j]] = [dizi[j], dizi[i]];
	}
	return dizi;
}

function CardList() {
	const cards = useSelector((state) => state.card.items);
	const gameStatus = useSelector((state) => state.card.gameStatus);
    const point = useSelector((state) => state.card.point);

    let arr = karistir(cards.concat(cards));

    const handleButton = (stat) => {
		console.log(stat);
    };

    return (
		<div className="cardList">
			{gameStatus === "end" &&
				(point > 0 ? (
					<div className="gameEnd">
						<h1 className="vic">VİCTORY</h1>
						<button onClick={() => handleButton("victory")} className="vicBut">
							Play Again
						</button>
					</div>
				) : (
					<div className="gameEnd">
						<h1 className="lose">GAME OVER</h1>
						<button onClick={() => handleButton("lose")} className="loseBut">
							Try Again
						</button>
					</div>
				))}
			{gameStatus === "continue" && arr.map((card, key) => <Card card={card} key={key} />)}
		</div>
    );
}

export default CardList;
