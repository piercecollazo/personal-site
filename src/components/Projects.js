import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Navbar extends Component {
    render(){
        return(
            <div className='container-fluid' style={{background: 'linear-gradient(to top,#a9a9a9,#9f9f9f,#949494,#8a8a8a,#808080)'}}>
                <div className='row' style={{justifyContent: 'space-evenly'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg" className='fluid' style={{height:'15rem'}} />
                    <Card.Body>
                        <Card.Title>Space Page</Card.Title>
                        <Card.Text>
                            A static web page project showing off API usage to stay up to date with the crews and
                            position of the International Space Station!
                        </Card.Text>
                        <div className='row align-items-center justify-content-center'>
                        <Button variant="primary">Visit Project</Button>
                        <Button variant="primary">Github</Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.nps.gov/inde/learn/historyculture/images/firstbankexterior960.jpg" className='fluid' style={{height:'15rem'}} />
                    <Card.Body>
                        <Card.Title>Bank Page</Card.Title>
                        <Card.Text>
                            A fullstack project showing off a mock up of a bank accounting website, inspired by Chase bank's
                            account pages!
                        </Card.Text>
                        <Button variant="primary">Visit Project</Button>
                        <Button variant="primary">Github</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}