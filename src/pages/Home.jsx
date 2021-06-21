import { useState } from 'react';
import MainPageLayout from "../components/MainPageLayout/MainPageLayout"
import { apiGet } from '../misc/config';
import ShowGrid from '../components/Show/ShowGrid';
import ActorGrid from '../components/Actor/ActorGrid';



const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [result, setResult] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowsSeach = searchOption === 'shows';

    const onInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    // fetch api
    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${searchInput}`)
            .then(data => setResult(data));
    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value);
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
            return result[0].show ?
                <ShowGrid data={result} /> :
                <ActorGrid data={result} />;
        }

        return null;
    }



    return (
        <MainPageLayout>
            <input type="text" onChange={onInputChange} onKeyDown={onKeyDown} value={searchInput} placeholder='Search...' />
            <div>
                <label htmlFor='shows-search'>
                    Shows
                    <input
                        type="radio"
                        id='shows-search'
                        value='shows'
                        onChange={onRadioChange}
                        checked={isShowsSeach}
                    />
                </label>
                <label htmlFor='actors-search'>
                    Actors
                    <input
                        type="radio"
                        id='actors-search'
                        value='people'
                        onChange={onRadioChange}
                        checked={!isShowsSeach}
                    />
                </label>
            </div>
            <button type='button' onClick={onSearch}>Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home
