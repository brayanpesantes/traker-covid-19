import React, { useState, useEffect } from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";

import { fechData } from "./api";
import coronaImage from "./img/covid.png";

const App = () => {
	const [state, setState] = useState({});
	const [country, setCountry] = useState("");

	const getData = async () => {
		const data = await fechData();
		setState(data);
	};

	const handleCountryChange = async (country) => {
		const dataCountry = await fechData(country);
		setState(dataCountry);
		setCountry(country);
		console.log(dataCountry);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.container}>
			<img src={coronaImage} alt="Icono" className={styles.image} />
			<Cards data={state} />
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Charts data={state} country={country} />
		</div>
	);
};

export default App;
