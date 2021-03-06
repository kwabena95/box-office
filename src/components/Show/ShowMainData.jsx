import IMG_PLACEHOLDER from '../../image/not-found.png';
import { Star } from '../Style';
import { MainDataWrapper, HeadLine, TagList } from './style/ShowMainData.styled';



const ShowMainData = ({ name, rating, summary, tags, image }) => {
    return (
        <MainDataWrapper>
            <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
            <div className='text-side'>
                <HeadLine>
                    <h1>{name}</h1>
                    <div>
                        <Star active />
                        <span>{rating.average || 'N/A'}</span>
                    </div>
                </HeadLine>
                <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />

                <TagList>
                    Tags:{' '}
                    <div>
                        {tags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                </TagList>
            </div>
        </MainDataWrapper>
    )
}

export default ShowMainData
