import React, {Component} from 'react'
import * as SIcon from 'react-icons/si'

export default class Navbar extends Component {
    render(){
        return(
            <div className='container-fluid' style={{background: 'linear-gradient(to top,#808080,#949494,#a9a9a9,#bebebe,#d3d3d3)'}}>
                <div className='row' style={{background: 'linear-gradient(to top,#808080,#949494,#a9a9a9,#bebebe,#d3d3d3)', paddingTop:'3rem', paddingBottom:'3rem'}}>
                        <img src='https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b' className='img-fluid img-thumbnail shadow-4' style={{maxHeight:'20rem'}} alt=''></img>
                    <div className='col'>
                        <h1>Test</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                        <div className='row justify-content-center' style={{padding:'2rem'}}>
                            <SIcon.SiReact size={54} />
                            <SIcon.SiNodedotjs size={54} />
                            <SIcon.SiMongodb size={54} />
                            <SIcon.SiGooglecloud size={54} />
                            <SIcon.SiBootstrap size={54} />
                            <SIcon.SiDocker size={54} />
                            <SIcon.SiKubernetes size={54} />
                            <SIcon.SiCss3 size={54} />
                        </div>
                    </div>
                </div>

                <div className='row'>

                </div>
            </div>
        )
    }
}