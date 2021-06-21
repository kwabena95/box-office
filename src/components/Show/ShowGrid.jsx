import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png';
import { FlexGrid } from '../Style';

const ShowGrid = ({ data }) => {
    return (
        <FlexGrid>
            {
                data.map(({ show }) =>
                    <ShowCard
                        key={show.id}
                        id={show.id}
                        name={show.name}
                        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
                        summary={show.summary}
                    />
                )
            }
        </FlexGrid>
    )
}

export default ShowGrid
