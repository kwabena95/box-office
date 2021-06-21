import { useState } from 'react';
import MainPageLayout from "../components/MainPageLayout/MainPageLayout"

const Home = () => {
    const [searchInput, setSearchInput] = useState('');

    const onInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    // fetch api
    const onSearch = async () => {
        let API_URL = `https://api.tvmaze.com/search/shows?q=${searchInput}`;

        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    }

    // grab search result by pressing enter button
    const onKeyDown = (e) => {
        if (e.keyCode === 13) onSearch();
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={searchInput} />
            <button type='button' onClick={onSearch}>Search</button>
        </MainPageLayout>
    )
}

export default Home
