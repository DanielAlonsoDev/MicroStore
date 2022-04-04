import { Container } from "react-bootstrap";
import '../Utils/scss/main.scss';

function Home(params) {
    return(
        <section id="landing-page">
            <Container fluid>
                <div className="welcome-image">
                    <h2>Bienvenido a MicroStore</h2>
                    <p>Tu tienda de tecnología favorita</p>
                </div>
            </Container>
        </section>
    );
}

export default Home;