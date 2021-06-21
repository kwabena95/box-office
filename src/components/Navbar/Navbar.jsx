import { Link } from 'react-router-dom';



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
    return (
        <div>
            <ul>
                {Links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar
