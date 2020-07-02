import React, { Component } from "react";
import { FaHome, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./styles.css";

import registerImage from "../../assets/image_register.jpg";

import firebase from "../../fireConnection";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  registerUser(event) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(alert("Usuário Cadastrado com Sucesso."))
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          alert("E-mail Inválido");
        } else if (error.code === "auth/weak-password") {
          alert("Senha Fraca");
        } else {
          alert("Error Code:" + error.code);
        }
      });

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="register-container">
          <img src={registerImage} alt="" />
          <section className="form-container">
            <form onSubmit={this.registerUser}>
              <div className="header-container">
                <Link to="/">
                  <FaArrowAltCircleLeft size={40} color="#fe7600" />
                </Link>
                <a href="/register" className="titulo">
                  {" "}
                  Register{" "}
                </a>
                <Link to="/">
                  <FaHome size={40} color="#fe7600" />
                </Link>
              </div>
              <input
                type="text"
                placeholder="Username: Nicemannn"
                onChange={this.updateEmail}
              />
              <input
                type="email"
                placeholder="Email: example@example.com"
                onChange={this.updateEmail}
              />
              <input
                type="password"
                placeholder="Password: SenhaSegura14"
                onChange={this.updatePassword}
              />
              <input
                type="password"
                placeholder="Confirme a senha"
                onChange={this.updatePassword}
              />
              <button type="submit">
                <strong> Cadastrar </strong>{" "}
              </button>{" "}
            </form>{" "}
          </section>{" "}
        </div>{" "}
      </div>
    );
  }
}
