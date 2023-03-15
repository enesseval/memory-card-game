import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container">
			<Header />
			<CardList />
			<Footer />
		</div>
	);
}

export default App;
