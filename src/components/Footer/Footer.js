import { Container } from "react-bootstrap";
import './Footer.scss';

function Footer(props) {
    return (
        <footer id='footer-site'>
            <Container className="footer-container">
                <small>MicroStore es una marcar registrada.</small>
                <small>Santiago de Chile, Chile 2022</small>
            </Container>
        </footer>
    );
}

export default Footer;