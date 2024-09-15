
import React, { useState } from 'react'
import {Link} from "react-router-dom";
import search from '../../assets/search.gif'
import './Navbar.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {setCurrentUser} from "../../actions/currentUser.js";
import profile from '../../assets/profile.png'
import '../NewsItem.js'

const Navbar = () => {
    // const dispatch=useDispatch()
    const User = localStorage.getItem("token");//useSelector((state) => (state.currentUserReducer));
    const [show, setShow] = useState(false)
    // useEffect(()=>{
    //     dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    // },[dispatch])
    const Logout=()=>{
        localStorage.removeItem("token");
        window.location.reload();
        window.location="/";
    }

    return (
        <>
        <section className="navbar-bg">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <i class='fas fa-newspaper' style={{fontSize:"27px",color:"white", marginRight:"15px"}}></i>
        <h5 style={{color:"white"}}>VAMM</h5>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>setShow(!show)}>
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show": ""}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page"  to="/">General</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/business">Business</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/sports">Sports</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/health">Health</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/science">Science</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" to="/technology">Technology</Link>
            </li>
            <li>
                <form>
                <input type={"text"} placeholder={'Search...'} id={"searchbar"}/>
                <img src={search} alt={"search"} height={'20px'} className={'search-icon'}/>
            </form>
            </li>
            <li>
                { User === null ?
                <Link to={'/Login'} className='nav-item nav-links'> Log In </Link> :
                <>
                    <img src={profile} />
                    <button className={'nav-item nav-links'} onClick={Logout}>
                        Logout
                    </button>
                </> }
            </li>
        </ul>
        </div>
    </div>
    </nav> 
    </section> 
        </>
    )
}

export default Navbar

