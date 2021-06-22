import { useParams } from "react-router";
import { Loader } from '../misc/Loader';
import ShowMainData from "../components/Show/ShowMainData";
import Details from "../components/Show/Details";
import Seasons from "../components/Show/Seasons";
import Cast from "../components/Show/Cast";
import { ShowPageWrapper, InfoBlock } from "./Show.styled";
import { useShow } from "../misc/custom-hooks";



const ShowDetail = () => {

    const { id } = useParams();

    const { show, isLoading, error } = useShow(id);

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
