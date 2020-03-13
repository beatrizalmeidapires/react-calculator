import React, {useState} from 'react';
import './Login.css';

function Login(){

    const [text, setText] = useState('Please enter your details')

    function enter(){
        if(name === "Beatriz"){
            setText('Welcome ' + name);
        } else {
            setText('Your not a real princess, go away!!');
        }
    }

    let name;

    function handleChange(event){
        name = event.target.value;
    }


    return ( <div className="form">
        <h3>{text}</h3>
           <div className="username-section"> 
              <label htmlFor="">Username </label>
              <input type="text" onChange={handleChange}/>
            </div>
            <div className="password-section">
              <label htmlFor="">Password </label>
              <input type="password"/>
            </div>
            <button className="enter-button" onClick={enter}>Enter</button>
    </div>
    )}

export default Login;