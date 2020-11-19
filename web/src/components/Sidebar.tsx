import React from 'react'
import '../styles/components/sidebar.css'
import {FaHome, FaStar, FaUserFriends, FaUserCircle} from 'react-icons/fa'
import {GiEarthAmerica} from 'react-icons/gi'

function Sidebar(){
    return(
        <aside>
            <h1>StarCoding</h1>
            <div id="vdivisor"></div>
            <input type="text" className="searchBar" placeholder="Pesquisar..."/>
            <a href="#">
                <FaHome style={{color: '#fff'}}/>
                <p>Inicio</p>
                </a>
            <a href="#">
                <FaStar style={{color: '#fff'}}/>
                <p>Favoritos</p>
            </a>
            <a href="#">
                <GiEarthAmerica style={{color: '#fff'}}/>
                <p>Descubra</p>
                </a>
            <a href="#">
                <FaUserFriends style={{color: '#fff'}}/>
                <p>Seguindo</p>
                </a>
            <a href="#">
                <FaUserCircle style={{color: '#fff'}}/>
                <p>Perfil</p>
                </a>
        </aside>
    )
}
export default Sidebar