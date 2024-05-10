import React, { useState } from 'react';
import '../styles/styles.css';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png'; // Home button icon

const AtbashDecoder = () => {
  const [inputText, setInputText] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const dictionary = {'a':'z','b':'y','c':'x','d':'w','e':'v','f':'u','g':'t','h':'s','i':'r','j':'q','k':'p','l':'o','m':'ñ','n':'n','ñ':'m','o':'l','p':'k','q':'j','r':'i','s':'h','t':'g','u':'f','v':'e','w':'d','x':'c','y':'b','z':'a'};

  const decodeAtbash = () => {    
    let coded_string = inputText.toLowerCase(); 
    let decoded_string = '';
    for (let i = 0; i < coded_string.length; i++) {
      const char = coded_string[i];
      if (char in dictionary){
        decoded_string += dictionary[char];
      } else {
        decoded_string += char;
      }
    }
    
    console.log(decoded_string)
    setDecodedText(decoded_string);
  };
    

  return (
    <div className="container">
      <h1 className='title'>Atbash Decode</h1>
      <textarea
        className="textarea"
        placeholder="Ingresar mensaje codificado.."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="button" onClick={decodeAtbash}>Decodificar</button>
      <div className="result">
        <h2>Mensaje decodificado:</h2>
        <p>
          {decodedText.split('').map((char, index) => (
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

export default AtbashDecoder;
