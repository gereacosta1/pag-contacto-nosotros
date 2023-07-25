import { useEffect, useState } from 'react'
import emailjs from "emailjs-com"
// import emailjs from 'emailjs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import backgroundImage from '../assets/logoMilaNadir.jpeg';

//rafce
const ContactoScreen = () => {

    const[formValues, setformValues]= useState({//gennerando un estado, nombre email vacios
        nombre: "",
        email: "",
    });

    const {nombre, email}=formValues;//el nombre y email que cartga el clinete se guarda en nombre, email

    const handleChange=({target})=>{//es cuando se hace algun cambio en el formulario y lo guarda, es un evento
        setformValues({
            ...formValues,
            [target.name]:target.value//se gaudar el cambio
        })
    }

    useEffect(() => {
        console.log("Se actualizó el formulario")//aviso de que se guardo el cambio
    },[formValues])

    const sendMail=(e)=>{//es la funcion que hace andar el emailjs, como mandar el 
        e.preventDefault();

        emailjs.sendForm("service_dztthea", "template_8p8p5mr", e.target, "QIJx65fcK1o-oQINU").then(response => console.log(response)).catch(error => console.log(error));
        //el then es una validacion de que esta todo ok y despues te avisa por consola si algo esta mal
        e.target.reset();//resetear el formulario
    }
    
    const [show, setShow] = useState(false);//declarando todo, 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div>
        <img src={backgroundImage} alt="Fondo" />
        </div>
          <div className="container alturaParaFooter my-4 carritoAlturaFooter">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6" id="fondo">
                <h2>CONTACTO</h2>
                <hr />
                <form className="form-mail" onSubmit={sendMail}>
                  <div className="mb-3">
                    <label className="form-label2">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Ingrese su nombre"
                      value={nombre}
                      onChange={handleChange}//cuando se crea un cambio lo guarda, en todos los imputs
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label2">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Ingrese su correo electrónico"
                      value={email}
                      onChange={handleChange}
                    />
                    <div className="form-text">
                      <i>No compartiremos tu correo electrónico con nadie más.</i>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label2">Deja tu mensaje</label>
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Escriba su consulta"
                      name="message"
                    ></textarea>
                  </div>
    
                  <div className="mb-3 md-2">
                    <Button type="submit" onClick={handleShow} className="btn btn-success me-4" value="Enviar">
                      Enviar
                    </Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>¡Mensaje enviado!</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>¡Nos pondremos en contacto contigo cuanto antes!</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cerrar
                        </Button>
                        <Button variant="success" onClick={handleClose}>
                          Aceptar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </form>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <h2>MÁS INFORMACIÓN</h2>
                <hr />
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i>Tucumán - Argentina
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (666) 666 666 666
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> Sanguchería Nadir
                  </li>
                </ul>
                <hr />
                <p>Si quieres hacer un pedido, comunícate con el número de arriba. Atendemos de jueves a domingos.</p>
                <p>sangucherianadir@gmail.com</p>
                <hr />
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default ContactoScreen;