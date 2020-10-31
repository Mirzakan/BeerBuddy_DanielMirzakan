import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar(){

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand> BeerBuddy </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Browse Beers</Nav.Link>
                    <Nav.Link href="/favorite_beers">Favorite Beers</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}