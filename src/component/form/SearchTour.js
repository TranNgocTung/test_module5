import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchWithAPI();
    };

    const searchWithAPI = () => {
        const apiUrl = `http://localhost:8080/api/tour/search?title=${searchQuery}`;
        axios
            .get(apiUrl)
            .then((response) => {
                const data = response.data;
                setSearchResults(data);
            })
            .catch((error) => {
                alert("Error fetching data from API:"+ error.messages);
            });
    };

    return (
        <div className={"form-search"}>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Here"
                    title="Search Here"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button className={"btn btn-success"} type="submit">
                    Search
                </button>
            </form>
            <h6 className={`h1`}>List Search</h6>
            <hr/>
            <table className={`table table-hover`} style={{margin: "auto", width: 500}}>
                <thead className={`tbody`}>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody  style={{textAlign:"center"}}>
                    {searchResults.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchForm;