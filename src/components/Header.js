import React from "react";
import { useSelector } from "react-redux";

function Header() {
	const count = useSelector((state) => state.card.count);
	const point = useSelector((state) => state.card.point);
	return (
		<div className="header">
			<h1>Memory Card Game</h1>
			<p>Your Score: {point}</p>
			<p>Count: {count}</p>
		</div>
	);
}

export default Header;
