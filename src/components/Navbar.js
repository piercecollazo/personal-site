import React, {Component} from 'react'

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-light bg-light ">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <div className="mx-auto text-center justify-space-between">
                <a className="btn btn-primary js-scroll-trigger" href="#about">Resume</a>
                <a className="btn btn-primary js-scroll-trigger" href="#about">Projects</a>
                <a className="btn btn-primary js-scroll-trigger" href="#about">About me</a>
                <a className="btn btn-primary js-scroll-trigger" href="#about">Contact</a>
                </div>
            </nav>
        )
    }
}