import ActorCard from './ActorCard';
import IMAGE_NOT_FOUND from '../../image/not-found.png';
import { FlexGrid } from '../Style';

const ActorGrid = ({ data }) => {
    return (
        <FlexGrid>
            {
                data.map(({ person }) =>
                    <ActorCard
                        key={person.id}
                        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
                        name={person.name}
                        gender={person.gender}
                        country={person.country ? person.country.name : null}
                        birthday={person.birthday}
                        deathday={person.deathday}

                    />
                )

            }
        </FlexGrid>
    )
}

export default ActorGrid
