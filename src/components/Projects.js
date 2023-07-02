import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Projects extends Component {
    render(){
        return(
            <div className='container-fluid' style={{background: 'linear-gradient(to top,#a9a9a9,#9f9f9f,#949494,#8a8a8a,#808080)'}}>
                <div className='container' style={{background: 'linear-gradient(to right bottom,#FF6347,#ff005f,#f7008a,#c500c3,#0000FF)'}}>
                <div className='row' style={{justifyContent: 'space-evenly', paddingTop:'2rem', paddingBottom:'2rem'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.nasa.gov/sites/default/files/s132e012209_sm.jpg" className='fluid' style={{height:'15rem'}} />
                    <Card.Body>
                        <Card.Title>Space Page</Card.Title>
                        <Card.Text>
                            A static web page project showing off API usage to stay up to date with the crews and
                            position of the International Space Station!
                        </Card.Text>
                        <div className='row align-items-center justify-content-center'>
                        <Button variant="dark" href='https://piercecollazo.github.io/space-page/' target={'_blank'}>Visit Project</Button>
                        <Button variant="dark" href='https://github.com/piercecollazo/space-page' target={'_blank'}>Github</Button>
                        </div>
                    </Card.Body>
                </Card>

                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.nps.gov/inde/learn/historyculture/images/firstbankexterior960.jpg" className='fluid' style={{height:'15rem'}} />
                    <Card.Body>
                        <Card.Title>Bank Page</Card.Title>
                        <Card.Text>
                            A fullstack project showing off a mock up of a bank accounting website, inspired by Chase bank's
                            account pages! *3/9/2023* Temporarily down while refactoring for updated dependances
                        </Card.Text>
                        <Button variant="dark" disabled={true} href='https://piercecollazo.github.io/bank-page/' target={'_blank'}>Visit Project</Button>
                        <Button variant="dark" href='https://github.com/piercecollazo/bank-page' target={'_blank'}>Github</Button>
                    </Card.Body>
                </Card> */}
                </div>
                </div>
            </div>
        )
    }
}