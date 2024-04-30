'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from './SearchBar.module.css'

import axios from "axios";

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");



    const getAllPokemons = (value) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`)
            .then((response) => {

                setResults(response.data.results.filter((poke) => {
                    return (
                        value &&
                        poke &&
                        poke.name &&
                        poke.name.toLowerCase().includes(value)
                    );
                }));

            }).catch((error) => {
                console.log(error);
            })
    }

    const handleChange = (value) => {
        setInput(value);
        getAllPokemons(value);
    };

    return (
        <div className={styles.inputWrapper}>
            <FaSearch id={styles.searchIcon} />
            <input id={styles.searchInput}

                placeholder="Search pokemon..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
