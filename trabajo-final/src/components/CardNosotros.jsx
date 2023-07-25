import Card from 'react-bootstrap/Card';
import '../css/CardNosotros.css';
import yo from '../assets/gere.jpeg';
import nadir from '../assets/nadir.png';
import colo from '../assets/pablo.jpg';
import lucas from '../assets/lucas.png';
import backgroundImage from '../assets/logoMilaNadir.jpeg';

const CardNosotros = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="main-title">Bienvenido a Mila Nadir</h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div className="col-lg-6">
          <div>
            <img src={backgroundImage} alt="Fondo" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <h2>Creadores de la Gran Sanguchería Mila Nadir</h2>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-lg-3 mb-4'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={yo} />
              <Card.Body>
                <Card.Title>Gere</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-6 col-lg-3 mb-4'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={nadir} />
              <Card.Body>
                <Card.Title>Lucas</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-6 col-lg-3 mb-4'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={colo} />
              <Card.Body>
                <Card.Title>Pablo</Card.Title>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-6 col-lg-3 mb-4'>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={lucas} />
              <Card.Body>
                <Card.Title>Nadir</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <a href="/"><button className="btn-volver">Volver al inicio</button></a>
    </>
  );
}

export default CardNosotros;

