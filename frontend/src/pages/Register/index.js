import React from "react";
import { Component } from "react";

import "./styles.css";

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
      <div>
        <h1>Seja Bem-Vindo (a). </h1>
        <h4>Preencha os campos abaixo para Realizar o Cadastro. </h4>
        <br />
        <form onSubmit={this.registerUser}>
          <label> E-mail </label>
          <br />
          <input
            type="email"
            placeholder="example@example.com"
            onChange={this.updateEmail}
          />
          <br /> <br />
          <label> Password </label>
          <br />
          <input
            type="password"
            placeholder="SenhaSegura14"
            onChange={this.updatePassword}
          />
          <br /> <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}
