import React, {Component} from 'react'
import * as SIcon from 'react-icons/si'

export default class About extends Component {
    render(){
        return(
            <div className='container-fluid' style={{background: 'linear-gradient(to top,#808080,#949494,#a9a9a9,#bebebe,#d3d3d3)', height:'100%'}}>
                    <div className='container' style={{background: 'linear-gradient(to right bottom,#00ffff,#00dbff,#00afff,#0078ff,#9400d3)', paddingTop:'3rem', paddingBottom:'3rem'}}>
                        <img src='https://media.licdn.com/dms/image/C4D03AQHaMEjAbsrWoQ/profile-displayphoto-shrink_800_800/0/1515785247498?e=1683158400&v=beta&t=o40iy_R6lMd6zZwKRogKriYvVfw_HX0Cw4vl1j2-Mkw' className='img-fluid img-thumbnail shadow-4' style={{maxHeight:'20rem'}} alt=''></img>
                    <div className='col'>
                        <div className='container' style={{backgroundColor:'rgb(255,255,255,0.6)', borderRadius:'5px', paddingBottom:'2px', marginBottom:'2px'}}>
                        <h1>Who I am</h1>
                        <h5>A veteran with a diverse work background, I have a long history of 'sink or swim' adaptation across multiple industries and fields, but like many others, sought a career that could better my life and provide the sort of creative fulfillment many seek and often struggle to find. Looking for a change, I spent a year in Code Immersives NYC's Fullstack Web Developer program, learning the ins and outs of developing responsive, mobile-first apps primarily in React. </h5>
                        <br/>
                        <h5>I enjoyed success in the learning environment, and found a new calling in the tech industry, finally settling into a niche as a Cloud Engineer Associate with certification in Google Cloud. Whether it's IaaS or SaaS, migration and containerization, I'm always eager to learn and grow with new opportunities!</h5>
                        <div className='container' style={{borderTop:'2px solid rgb(000,000,000,1.0)', paddingTop:'2rem', paddingBottom:'2rem'}}>
                            <div className='row'>
                                <div className='col'>
                                    <a href='https://www.linkedin.com/in/piercecollazo/' target='_blank'>
                                        <SIcon.SiLinkedin size={54} />
                                    </a>
                                </div>

                                <div className='col'>
                                    <a href='https://github.com/piercecollazo' target='_blank'>
                                        <SIcon.SiGithub size={54} />
                                    </a>
                                </div>
                            </div>

                        </div>
                        </div>
                        <div className='row justify-content-center' style={{backgroundColor:'rgb(000,000,000,0.2)', padding:'2rem', borderRadius:'5px', }}>
                            <div className='row container justify-content-center'>
                            <h2>My current stack</h2>
                            </div>
                            <div className='row container justify-content-center' style={{justifyContent:'space-evenly'}}>
                                <div className='col container'>
                                    <SIcon.SiReact size={54} />
                                    <h5>React</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiNodedotjs size={54} />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiMongodb size={54} />
                                    <h5>Mongodb</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiGooglecloud size={54} />
                                    <h5>GCP</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiBootstrap size={54} />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiDocker size={54} />
                                    <h5>Docker</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiKubernetes size={54} />
                                    <h5>Kubernetes</h5>
                                </div>
                                <div className='col container'>
                                    <SIcon.SiCss3 size={54} />
                                    <h5>CSS</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                

                <div className='row'>

                </div>
            </div>
        )
    }
}