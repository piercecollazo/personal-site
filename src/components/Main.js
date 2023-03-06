import React, {Component} from 'react'

export default class Main extends Component {
    
    render(){
        return(
            <div>
                <header className="container-fluid bg-image mask" style={{height: '100vh', width:'100vw', backgroundColor: 'rgba(0,0,0,0.6)', backgroundImage: 'url("https://i.ibb.co/r6Z9XrG/portfolio-background.jpg")'}}>
                    <div className="container d-flex h-100 align-items-center">
                        <div className="mx-auto text-center justify-space-between">
                            <h1 className="mx-auto text-white my-0 text-uppercase">Fullstack Web Development and Cloud Engineering</h1>
                            <h2 className="text-white mx-auto mt-2 mb-5">Web development by Alex Collazo</h2>
                            {/* <a className="btn btn-primary js-scroll-trigger" href="#about">Resume</a>
                            <a className="btn btn-primary js-scroll-trigger" href="#about">Projects</a>
                            <a className="btn btn-primary js-scroll-trigger" href="#about">About me</a>
                            <a className="btn btn-primary js-scroll-trigger" href="#about">Contact</a> */}
                        </div>
                    </div>
                </header>
                <div className                                                  ="container-fluid">
                    
                </div>
            </div>
        )
    }
}