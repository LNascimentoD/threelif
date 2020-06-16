import React from 'react';

import './styles.css';

import logoImage from '../../assets/image_login.jpg'

export default function Logon(){
    return (
        <div className="login-container">
            <img src={logoImage} alt=''/>

            <section className="form-container">
                <form>
                    <h1>Log-in</h1>

                    <input placeholder="Username"/>
                    <input placeholder="Password"/>

                    <button><strong>Entrar</strong></button>

                    <a>Forgot password</a>
                </form>

                <a>Criar conta grátis</a>
            </section>
        </div>
    );
}