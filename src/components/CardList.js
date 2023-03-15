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

	let arr = karistir(cards.concat(cards));

	console.log(arr);
	return (
		<div className="cardList">
			{arr.map((card) => (
				<Card card={card} key={(card.id + 1) * Math.random() * 1} />
			))}
		</div>
	);
}

export default CardList;
