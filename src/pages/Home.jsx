import { useState } from 'react';
import MainPageLayout from "../components/MainPageLayout/MainPageLayout"
import { apiGet } from '../misc/config';
import ShowGrid from '../components/Show/ShowGrid';
import ActorGrid from '../components/Actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';
import { SearchInput, RadioInputsWrapper, SearchButtonWrapper } from './style/Home.styled';
import CustomRadio from '../components/CustomRadio';

const Home = () => {
    const [searchInput, setSearchInput] = useLastQuery();
    const [result, setResult] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');

    const isShowsSeach = searchOption === 'shows';

    const onInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    // fetch api
    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${searchInput}`)
            .then(data => {
                setResult(data);
            });

    }

    const onRadioChange = (e) => {
        setSearchOption(e.target.value);
    }

    // grab search result by pressing enter button
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSearch();
        }
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
            <SearchInput
                type="text"
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={searchInput}
                placeholder='Search...'
            />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label='Shows'
                        id='shows-search'
                        value='shows'
                        onChange={onRadioChange}
                        checked={isShowsSeach}
                    />

                </div>
                <div>
                    <CustomRadio
                        label='Actors'
                        id='actors-search'
                        value='people'
                        onChange={onRadioChange}
                        checked={!isShowsSeach}
                    />
                </div>

            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type='button' onClick={onSearch}>Search</button>
            </SearchButtonWrapper>
            {renderResult()}
        </MainPageLayout>
    )
}

export default Home
