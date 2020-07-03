import React, { Component } from "react";
import { Link } from "react-router-dom";

import firebase from "../../fireConnection";

import "./styles.css";

import loginImage from "../../assets/image_login.jpg";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.login = this.login.bind(this);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        alert("O Usuário Já Está Logado");
      }
    });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  login(event) {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          alert("Senha Errada");
        } else {
          alert("Error Code:" + error.code);
        }
      });

    event.preventDefault();
  }

  // Log-off para todos os usuários. Executo só na primeira execução da aplicação.
  componentDidMount() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <img src={loginImage} alt="" />

          <section className="form-container">
            <form onSubmit={this.login}>
              <h1>Log-in</h1>

              <input
                placeholder="E-mail"
                type="email"
                value={this.state.email}
                onChange={this.updateEmail}
              />
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.updatePassword}
              />

              <button type="submit">
                <strong>Entrar</strong>
              </button>

              <Link to="/">Esqueci a Senha</Link>
            </form>

            <Link to="/register">Criar conta grátis</Link>
          </section>
        </div>
      </div>
    );
  }
}
