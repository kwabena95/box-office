import { useState } from 'react';
import MainPageLayout from "../components/MainPageLayout/MainPageLayout"
import { apiGet } from '../misc/config';
const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [result, setResult] = useState(null);


    const onInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    // fetch api
    const onSearch = () => {
        apiGet(`/search/shows?q=${searchInput}`)
            .then(data => setResult(data));
    }

    // grab search result by pressing enter button
    const onKeyDown = (e) => {
        if (e.keyCode === 13) onSearch();
    }

    // render results
    const renderResult = () => {
        if (result && result.length === 0) {
            return <div>No results</div>
        }
        if (result && result.length > 0) {
            return (
                <div>
                    {result.map(item => (
                        <div key={item.show.id}>{item.show.name}</div>
                    ))}
                </div>
            )
        }

        return null;
    }

    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={searchInput} />
            <button type='button' onClick={onSearch}>Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home
