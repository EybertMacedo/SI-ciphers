import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="container">
      <h1 className='title'>Cipher algorithms</h1>     
      <div className="buttons">
        <ol class="alternating-colors">
          <li>
            <Link to="/atbash" className={"mpLink"}>
              Atbash Decoder
            </Link>
            <p>Cifrado de sustitución donde cada letra del texto sin formato se reemplaza con su letra correspondiente del final del alfabeto.</p>
          </li>
          <li>
            <Link to="/one-time-pad" className={"mpLink"}>
              One-Time Pad Cipher
            </Link>
            <p>Basado en sumatoria modular, combina cada carácter del texto sin formato con un carácter de una clave generada aleatoriamente, ofreciendo un cifrado irrompible.</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MainPage;
