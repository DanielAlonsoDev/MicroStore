import { Container, Button } from 'react-bootstrap';
import '../Utils/scss/main.scss';

function Home(params) {
    return (
        <main id='landing-page'>
            <Container fluid>
                <section className='welcome-image'>
                    <h2>Bienvenido a MicroStore</h2>
                    <p>Tu tienda de tecnología favorita</p>
                    <Button variant='primary'>Ver catálogo</Button>
                </section>
            </Container>
            <Container>
                <section id='category-section'>
                    <h2>Explora algunas de nuestras categorias</h2>
                    <div className='category-container'>
                        <article>
                            <img src='./images/MotherBoard.svg' alt='MotherBoard' />
                            <h3>Placas Madre</h3>
                        </article>
                        <article>
                            <img src='./images/GraphicCard.svg' alt='GraphicCard' />
                            <h3>Tarjetas Graficas</h3>
                        </article>
                        <article>
                            <img src='./images/HardDrives.svg' alt='HardDrives' />
                            <h3>Discos Duros</h3>
                        </article>
                    </div>
                </section>
            </Container>
        </main>
    );
}

export default Home;