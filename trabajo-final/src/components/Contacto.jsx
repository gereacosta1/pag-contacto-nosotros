// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Form } from 'react-bootstrap';
import '../css/contacto.css';
import backgroundImage from '../assets/fondo-bar.jpg';

const Contacto = () => {
  return (   
    <div>
      <div>
        <img src={backgroundImage} alt="Fondo" />
      </div>
      <Form>
        <div className="mb-3">
          <label className="form-label">Ingresa tu Nombre y Apellido</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu nombre" />
          <label className="form-label">Ingresa tu Mail</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu mail" />
        </div>
        <div className="mb-3">
          <label className="form-label">Ingresa tu consulta</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
          <button className='btn btn-success mt-3'>Enviar</button>
        </div>
      </Form>
    </div>
  );
}

export default Contacto;
