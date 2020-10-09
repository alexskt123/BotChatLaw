import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'

export default function Header({ Copyright }) {
    return (
        <Navbar sticky="bottom" bg="dark" variant="dark">
            <Navbar.Brand className="mx-auto">
                <Alert variant="secondary">
                    {Copyright}
                </Alert>
            </Navbar.Brand>
        </Navbar>
    )
}