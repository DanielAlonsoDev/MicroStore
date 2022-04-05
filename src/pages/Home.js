import '../Utils/scss/main.scss';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home(params) {
    return (
        <main id='landing-page'>
            <Container fluid>
                <section className='welcome-image'>
                    <h2>Bienvenido a MicroStore</h2>
                    <p>Tu tienda de tecnología favorita</p>
                    <Link to={'/catalogue/all'}>
                        <Button>Ver productos</Button>
                    </Link>
                </section>
            </Container>
            <Container>
                <section id='category-section'>
                    <h2>Explora algunas de nuestras categorias</h2>
                    <div className='category-container'>
                        <article>
                            <Link to={'/catalogue/motherboard'}><img src='./images/MotherBoard.svg' alt='MotherBoard' /></Link>
                            <h3>Placas Madre</h3>
                        </article>
                        <article>
                            <Link to={'/catalogue/gpu'}>
                                <img src='./images/GraphicCard.svg' alt='GraphicCard' />
                            </Link>
                            <h3>Tarjetas Graficas</h3>
                        </article>
                        <article>
                            <Link to={'/catalogue/cpu'}>
                                <img src='./images/HardDrives.svg' alt='HardDrives' />
                            </Link>

                            <h3>Procesadores</h3>
                        </article>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default Home;