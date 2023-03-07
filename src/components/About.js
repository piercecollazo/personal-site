import React, {Component} from 'react'
import * as Icon from 'react-bootstrap-icons';
import * as SIcon from 'react-icons/si'

export default class Navbar extends Component {
    render(){
        return(
            <div className='container' style={{background: 'linear-gradient(to right top,#a9a9a9,#9f9f9f,#949494,#8a8a8a,#808080)'}}>
                <div className='row' style={{background: 'linear-gradient(to right top,#a9a9a9,#9f9f9f,#949494,#8a8a8a,#808080)'}}>
                        <img src='https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b' className='img-fluid img-thumbnail shadow-4' style={{}}></img>
                    <div className='col'>
                        <h1>Test</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        <div className='row justify-content-center'>
                            <SIcon.SiReact />
                            <SIcon.SiNodedotjs />
                            <SIcon.SiMongodb />
                            <SIcon.SiGooglecloud />
                            <SIcon.SiBootstrap />
                            <SIcon.SiDocker />
                            <SIcon.SiKubernetes />
                            <SIcon.SiCss3 />
                        </div>
                    </div>
                </div>

                <div className='row'>

                </div>
            </div>
        )
    }
}