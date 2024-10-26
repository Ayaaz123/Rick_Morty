import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RickAndMortyFetcher.css'; 

const RickAndMortyFetcher = () => {
    const [dataType, setDataType] = useState('character'); 
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://rickandmortyapi.com/api/${dataType}`;
                const response = await axios.get(url);
                setItems(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dataType]);

    return (
        <div className="container">
            <h1>Rick and Morty Data Fetcher</h1>
            <div className="dropdown-container">
                <select 
                    value={dataType} 
                    onChange={(e) => setDataType(e.target.value)} 
                    className="dropdown"
                >
                    <option value="character">Characters</option>
                    <option value="episode">Episodes</option>
                    <option value="location">Locations</option>
                </select>
            </div>

            <ul className="data-list">
                {items.map((item) => (
                    <li key={item.id} className="data-item">
                        <span className="item-id">{item.id}:</span><span className="item-name">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RickAndMortyFetcher;
