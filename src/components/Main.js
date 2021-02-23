import React, {Component} from 'react'

export default class Main extends Component {
    
    render(){
        return(
            <div>
                <header class="container-fluid bg-image mask" style={{height: '100vh', width:'100vw', backgroundColor: 'rgba(0,0,0,0.6)', backgroundImage: 'url("https://i.ibb.co/r6Z9XrG/portfolio-background.jpg")'}}>
                    <div class="container d-flex h-100 align-items-center">
                        <div class="mx-auto text-center">
                            <h1 class="mx-auto text-white my-0 text-uppercase">Fullstack Engineering</h1>
                            <h2 class="text-white mx-auto mt-2 mb-5">Web development by Alex Collazo</h2>
                            <a class="btn btn-primary js-scroll-trigger" href="#about">Resume</a>
                            <a class="btn btn-primary js-scroll-trigger" href="#about">Projects</a>
                            <a class="btn btn-primary js-scroll-trigger" href="#about">About me</a>
                            <a class="btn btn-primary js-scroll-trigger" href="#about">Contact</a>
                        </div>
                    </div>
                </header>
                <div class="container-fluid">
                    
                </div>
            </div>
        )
    }
}