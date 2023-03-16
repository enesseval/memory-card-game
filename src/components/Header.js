import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setPoint } from "../redux/cardSlice";

function Header() {
	const count = useSelector((state) => state.card.count);
	const point = useSelector((state) => state.card.point);
	const first = useSelector((state) => state.card.firstChoice);
	const second = useSelector((state) => state.card.secondChoice);

	const dispatch = useDispatch();

	useEffect(() => {
		if (first !== "" && second !== "") {
			dispatch(setCount());
			if (first === second) {
				dispatch(setPoint("true"));
			} else {
				dispatch(setPoint("false"));
			}
		}
	}, [first, second, dispatch]);

	return (
		<div className="header">
			<h1>Memory Card Game</h1>
			<p>Your Score: {point}</p>
			<p>Count: {count}</p>
		</div>
	);
}

export default Header;
