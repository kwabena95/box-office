import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";


const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title title='Box Office' subTitle='Are you looking for a movie or an actor?' />
            <Navbar />
            {children}
        </div>
    )
}

export default MainPageLayout
