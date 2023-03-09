import React from 'react';
import { MDBInput, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card'

export default function App() {
  return (
    <div className='container-fluid align-items-center justify-content-center' style={{background:'linear-gradient(to top,#000000,#2b2b2b,#515151,#7c7c7c,#a9a9a9)'}}>
        <div className='container' style={{background:'linear-gradient(to right bottom,#b0c4de,#92d5e7,#87e3d5,#aeeaad,#f0e68c)'}}>
        <div className='row justify-content-center' style={{paddingTop:'2rem', paddingBottom:'2rem'}}>
            <Card>
        <form id='form' className='container text-center' style={{ width: '100%', maxWidth: '300px', background: 'white', padding:'3rem'}}>
            <h2>Contact us</h2>

            <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

            <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

            <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

            <MDBTextArea wrapperClass='mb-4' label='Message' />

            <MDBBtn color='primary' block className='my-4'>
                Send
            </MDBBtn>
            Or reach me at 'acollazomail@gmail.com'!
        </form>
        </Card>
        </div>
        </div>
    </div>
  );
}