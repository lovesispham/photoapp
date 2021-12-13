import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../assets/img/bg-home.jpg'
const Home = () => {
    return (
        <div className="section-home" style={{backgroundImage:`url(${bg})`}}>
            <div className="container">
                <div className="box-center">
                    <div className="subtitle">WELCOME TO MINIPROJECT PHOTOAPP</div>
                    <div className="title">PHOTOGRAPHY</div>
                    <Link to="/photo/add" className="btn bg-theme">Upload Image</Link>
                </div>
            </div>
        </div>
    )
}

export default Home
