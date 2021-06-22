import { useLocation } from 'react-router';
import { NavList, LinkStyled } from './Nav.styled';


const Links = [
    {
        to: '/',
        text: 'Home'
    },
    {
        to: '/starred',
        text: 'Starred'
    }
]

const Navbar = () => {
    const location = useLocation();

    return (
        <div>
            <NavList>
                {Links.map((link, index) => (
                    <li key={index}>
                        <LinkStyled to={link.to} className={link.to === location.pathname ? 'active' : ''}>{link.text}</LinkStyled>
                    </li>
                ))}
            </NavList>
        </div>
    )
}

export default Navbar
