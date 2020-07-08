import React from 'react'

import './styles.css';

export default function Card(props){
    return(
        <div className={props.classe}>
            <h1>Breakfast</h1>

            <h3>Informações</h3>
            <p>2 ovos</p>
            <p>1 fatia de bacon frito</p>
            <p>1 copo de suco de laranja</p>
        </div>
    )
}