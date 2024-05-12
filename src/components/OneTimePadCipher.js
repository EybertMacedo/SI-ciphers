import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png';

const OneTimePadCipher = () => {
  const [inputText, setmessageString] = useState('');
  const [keyText, setKeyText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const dictionary = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9,'k':10,'l':11,'m':12,'n':13,'ñ':14,'o':15,'p':16,'q':17,'r':18,'s':19,'t':20,'u':21,'v':22,'w':23,'x':24,'y':25,'z':26}
  const preprocess_dictionary = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ü':'u','Ü':'U'}
  
  const encodeOneTimePad = () => {
    let messageString = inputText.toLowerCase();    
    let keyString = keyText.toLowerCase();    
    let aux = ''
    //Preprocesamiento de la clave
    for (let i = 0; i < keyString.length; i++){
      let char = keyString[i];
      if (char in preprocess_dictionary){
        char = preprocess_dictionary[char]
      }
      if (char in dictionary){
        aux += char
      }       
    }
    keyString = aux
    console.log(keyString)

    //Preprocesamiento del mensaje
    aux = ''
    for (let i = 0; i < messageString.length; i++){
      let char = messageString[i];
      if (char in preprocess_dictionary){
        char = preprocess_dictionary[char]
      }
      if (char in dictionary){
        aux += char
      }      
    }
    messageString = aux 
    console.log(messageString)

    //En caso de que la clave sea mas pequena que el mensaje
    while (keyString.length < messageString.length){
      keyString += keyString
    }

    let encodedString = '';

    if (messageString.length > keyText.length) {
      alert("La longitud de la clave debe ser mayor o igual que la del texto de entrada");
      return;
    }
    
    for (let i = 0; i < messageString.length; i++) {      
      if (messageString[i] in dictionary) {
        const inputCharValue = dictionary[messageString[i]];
        const keyCharValue = dictionary[keyString[i]];
        let encodedCharValue = (inputCharValue + keyCharValue)%27;
        encodedString += Object.keys(dictionary)[encodedCharValue];
        console.log(i,messageString[i], inputCharValue , keyCharValue, encodedCharValue);
      }      
    }
    setEncodedText(encodedString);
  };

  const decodeOneTimePad = () => {
    let messageString = inputText.toLowerCase();    
    let keyString = keyText.toLowerCase();    
    let aux = ''
    //Preprocesamiento de la clave
    for (let i = 0; i < keyString.length; i++){
      let char = keyString[i];
      if (char in preprocess_dictionary){
        char = preprocess_dictionary[char]
      }
      if (char in dictionary){
        aux += char
      }       
    }
    keyString = aux
    console.log(keyString)

    //Preprocesamiento del mensaje
    aux = ''
    for (let i = 0; i < messageString.length; i++){
      let char = messageString[i];
      if (char in preprocess_dictionary){
        char = preprocess_dictionary[char]
      }
      if (char in dictionary){
        aux += char
      }      
    }
    messageString = aux 
    console.log(messageString)

    //En caso de que la clave sea mas pequena que el mensaje
    while (keyString.length < messageString.length){
      keyString += keyString
    }

    let encodedString = '';

    if (messageString.length > keyText.length) {
      alert("La longitud de la clave debe ser mayor o igual que la del texto de entrada");
      return;
    }
    
    for (let i = 0; i < messageString.length; i++) {      
      if (messageString[i] in dictionary) {
        const inputCharValue = dictionary[messageString[i]];
        const keyCharValue = dictionary[keyString[i]];
        let encodedCharValue = (inputCharValue - keyCharValue)%27;
        if (encodedCharValue < 0) {
          encodedCharValue += 27; // Ajuste para asegurarse de que el resultado esté dentro del rango 0-26
      }
        encodedString += Object.keys(dictionary)[encodedCharValue];
        console.log(i,messageString[i], inputCharValue , keyCharValue, encodedCharValue);
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
        onChange={(e) => setmessageString(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Ingresar clave.."
        value={keyText}
        onChange={(e) => setKeyText(e.target.value)}        
      />
      <button style={{ marginLeft: '10px' }} className="button" onClick={encodeOneTimePad}>Cifrar</button>
      <button style={{ marginLeft: '10px' }} className="button" onClick={decodeOneTimePad}>Descifrar</button>
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
