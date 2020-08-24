import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	const fetchCountries = async () => {
		setFetchedCountries(await countries());
	};
	useEffect(() => {
		fetchCountries();
	}, [setFetchedCountries]);

	return (
		<FormControl className={styles.formCotrol}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleCountryChange(e.target.value)}
			>
				<option value="">Glogal</option>
				{fetchedCountries.map((country) => (
					<option key={country} value={country}>
						{country}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default CountryPicker;
