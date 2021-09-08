import PropTypes from 'prop-types';
import { a } from 'react-router-dom';
import React from 'react'

export default function Navbar(props) {
    const purpleClick = () => {
        props.darkmode('purple');
        document.body.style.backgroundColor = 'purple';
        props.showMessage("Purple DarkMode is activated","success");
    }

    const greenClick = () => {
        props.darkmode('green');
        document.body.style.backgroundColor = 'green';
        props.showMessage("Green DarkMode is activated","success");
    }

    const blackClick = () => {
        props.darkmode('black');
        document.body.style.backgroundColor = 'black';
        props.showMessage("Black DarkMode is activated","success");
    }

    const redClick = () => {
        props.darkmode('red');
        document.body.style.backgroundColor = 'red';
        props.showMessage("Red DarkMode is activated","success");
    }

    const orangeClick = () => {
        props.darkmode('orange');
        document.body.style.backgroundColor = 'orange';
        props.showMessage("Orange DarkMode is activated","success");
    }
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">AboutUs</a>
                        </li> */}
                        <li className="nav-item"></li>
                    </ul>
                    {props.mode === 'dark'?
                        <div style={{color:"white"}}>
                            Other DarkModes :
                            <img src="https://htmlcolorcodes.com/assets/images/colors/neon-orange-color-solid-background-1920x1080.png" onClick={orangeClick} style={{height:"20px", width:"20px", border:"1px solid white"}} alt="Orange" className="rounded-circle mx-2" />
                            <img src="https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkJTIwY29sb3VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" onClick={redClick} style={{height:"20px", width:"20px", border:"1px solid white"}} alt="Red" className="rounded-circle mx-2" />
                            <img src="https://artsyfartsylife.com/wp-content/uploads/2019/09/normal-purple-color-200x200.jpg" onClick={purpleClick} style={{height:"20px", width:"20px", border:"1px solid white"}} alt="Purple" className="rounded-circle mx-2" />
                            <img src="https://www.colorcombos.com/images/colors/5BC236.png" onClick={greenClick} style={{height:"20px", width:"20px", border:"1px solid white"}} alt="Green" className="rounded-circle mx-2" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/1200px-Black_colour.jpg" onClick={blackClick} style={{height:"20px", width:"20px", border:"1px solid white"}} alt="Black" className="rounded-circle mx-2" />
                        </div>:""
                    }
                    <div className={`form-check form-switch text-${props.mode} mx-2`}>
                        <input className="form-check-input" type="checkbox" onClick={props.func} id="flexSwitchCheckDefault" />
                        <label className ="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.mode==='light'?'black':'white'}}>Dark Mode</label>
                        {/* <TextArea /> */}
                    </div>
                </div>
            </div>
        </nav>      
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}

Navbar.defaultProps = {title: 'TextEditor'}