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

	let arr = karistir(cards.concat(cards));

	return (
		<div className="cardList">
			{gameStatus === "end" && <div>game finish</div>}
			{gameStatus === "continue" && arr.map((card, key) => <Card card={card} key={key} />)}
		</div>
	);
}

export default CardList;
