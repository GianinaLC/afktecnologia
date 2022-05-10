import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { getCategoriesNavbar } from '../../services/firebase/firestore'
import { useAsync } from '../../hooks/useAsync'


const NavBar = () => {
    const [ categories, setCategories ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useAsync (
        setLoading,
        () => getCategoriesNavbar(categories),
        setCategories,
        () => console.log('Hubo un error en Navbar')
    )

    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" className='bgtNav'>
            <Container fluid>
                <Link to='/'>
                    <img src={'../images/afklogo1.png'} className="logo-app" alt="logoAFK" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({isActive}) => isActive ? 'activeCategory' : 'optionCategory'} > {cat.description} </NavLink>) }
                    </Nav>
                    < CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;