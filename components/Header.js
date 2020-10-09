import Navbar from 'react-bootstrap/Navbar'

export default function Header({ HeaderName }) {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="index">
                <img
                    alt=""
                    src="logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {HeaderName}
            </Navbar.Brand>
        </Navbar>
    )
}