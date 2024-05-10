import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png';

const OneTimePadCipher = () => {
  const [inputText, setcodedString] = useState('');
  const [keyText, setKeyText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const dictionary = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'ñ':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}

  const encodeOneTimePad = () => {
    let codedString = inputText.toLowerCase();
    let keyString = keyText.toLowerCase();
    let encodedString = '';

    if (codedString.length > keyText.length) {
      alert("La longitud de la clave debe ser mayor o igual que la del texto de entrada");
      return;
    }
    
    for (let i = 0; i < codedString.length; i++) {      
      if (codedString[i] in dictionary) {
        const inputCharValue = dictionary[codedString[i]];
        const keyCharValue = dictionary[keyString[i]];
        const encodedCharValue = (inputCharValue + keyCharValue)%27;
        encodedString += Object.keys(dictionary)[encodedCharValue];
        console.log(i,codedString[i], inputCharValue , keyCharValue, encodedCharValue);
      } else {
        encodedString += codedString[i];
      }
      
    }
    setEncodedText(encodedString);
  };

  return (
    <div className="container">
      <h1 className="title">One-Time Pad Cipher</h1>
      <textarea
        className="textarea"
        placeholder="Ingresar mensaje a cifrar.."
        value={inputText}
        onChange={(e) => setcodedString(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Ingresar clave.."
        value={keyText}
        onChange={(e) => setKeyText(e.target.value)}        
      />
      <button style={{ marginLeft: '10px' }} className="button" onClick={encodeOneTimePad}>Cifrar</button>
      <div className="result">
        <h2>Mensaje cifrado:</h2>
        <p>
          {encodedText.split('').map((char, index) => (
            char === ' ' ? <span key={index}>&nbsp;</span> :
            <span
              key={index}
              className="animated-letter"
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>
      <Link to="/">
          <img src={homeIcon} alt="Home Button" className="home-icon" />
      </Link>
    </div>    
  );
};

export default OneTimePadCipher;
