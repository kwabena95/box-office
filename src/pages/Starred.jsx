import { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout/MainPageLayout'
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import { Loader } from '../misc/Loader';
import ShowGrid from '../components/Show/ShowGrid';


const Starred = () => {

    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (starred && starred.length > 0) {

            const promises = starred.map(showId => apiGet(`/shows/${showId}`));
            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(data => {
                    setShows(data);
                    setIsLoading(false);
                }).catch(err => {
                    setError(err.message)
                })
        } else {
            setIsLoading(false);
        }

    }, [starred]);

    return (
        <MainPageLayout>
            {isLoading && Loader()}
            {error && <div>Error occured: {error}</div>}
            {!isLoading && !shows && <div style={{ textAlign: 'center', marginTop: '10rem', fontWeight: 'bold', fontSize: '2rem' }}>No shows has been added</div>}
            {!isLoading && !error && <ShowGrid data={shows} />}
        </MainPageLayout>
    )
}

export default Starred
