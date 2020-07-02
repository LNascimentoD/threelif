import React from 'react';
import { FiHome } from 'react-icons/fi'

import Card from '../../components/Card'

import './styles.css';

export default function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="left-bar">
                <img src="https://api.adorable.io/avatars/175/abott@adorable.png" alt=""/>
                <span>Lucas Nasc.</span>

                <ul className="menu">
                    <li><FiHome size={20}/><p>Dashboard</p></li>
                    <li className="clicked"><FiHome size={20}/><p>Dashboard</p></li>
                    <li><FiHome size={20}/><p>Dashboard</p></li>
                    <li><FiHome size={20}/><p>Dashboard</p></li>
                </ul>
            </div>
            <div className="content-container">
                <div className="cards-container">
                    <h1>Suas Refeições</h1>
                    <div className="cards">
                        <Card />
                        <br />
                        <Card />
                        <br />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )   
}