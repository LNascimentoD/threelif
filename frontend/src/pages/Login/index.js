import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImage from "../../assets/image_login.jpg";

export default function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <img src={logoImage} alt="" />

        <section className="form-container">
          <form>
            <h1>Log-in</h1>

            <input placeholder="Username" />
            <input placeholder="Password" />

            <button>
              <strong>Entrar</strong>
            </button>

            <Link to="/">Forgot password</Link>
          </form>

          <Link to="/register">Criar conta grátis</Link>
        </section>
      </div>
    </div>
  );
}
