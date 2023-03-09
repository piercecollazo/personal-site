import React, {Component} from 'react'

export default class Main extends Component {
    
    render(){
        return(
            <div>
                <header className="container-fluid bg-image mask" style={{height: '100vh', width:'100vw', background: 'linear-gradient(to top,#d3d3d3,#c3d2dd,#b2d1e7,#9ecff0,#87cefa)'}}>
                    <div className="container d-flex h-100 align-items-center" style={{background:'linear-gradient(to right bottom,#a9a9a9,#7c7c7c,#515151,#2b2b2b,#000000)', opacity:'0.7', textShadow:'-1px 1px 10px rgba(0, 0, 0, 0.75)'}}>
                        <div className="mx-auto text-center justify-space-between" style={{opacity:'1.0'}}>
                            <h1 className="mx-auto text-white my-0 text-uppercase">Fullstack Web Development and Cloud Engineering</h1>
                            <h2 className="text-white mx-auto mt-2 mb-5">Web development by Alex Collazo</h2>
                            <img src='https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/50146648' />
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}