import { useReducer, useEffect } from "react";
import { useParams } from "react-router";
import { apiGet } from '../misc/config';
import { Loader } from '../misc/Loader';
import { FETCH_SUCCESS, FETCH_FAILED } from '../reducer/showType';
import { initialState, reducer } from '../reducer/showAction';
import ShowMainData from "../components/Show/ShowMainData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";
import { ShowPageWrapper, InfoBlock } from "./Show.styled";



const ShowDetail = () => {

    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
            .then(data => {
                if (isMounted) {
                    dispatch({ type: FETCH_SUCCESS, show: data })
                }
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: FETCH_FAILED, error: err.message })
                }
            });

        return () => {
            isMounted = false;
        }
    }, [id]);

    if (isLoading) {
        return Loader();
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
            />

            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premeired={show.premeired}
                />
            </InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons
                    seasons={show._embedded.seasons}
                />
            </InfoBlock>
            <InfoBlock>
                <h2>Casts</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>


        </ShowPageWrapper>
    )
}

export default ShowDetail
