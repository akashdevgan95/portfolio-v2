import React, {useState} from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import Input from '../../components/input/input';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const submitClicked = (e) => {

        console.log()

        if(name.length === 0 || email.length === 0 || message.length === 0){
            setError('*Please fill all fields');
            return;
        }else{
            setError('');
        }

        if(!validateEmail(email)){
            setError('*Please enter a valid address');
            return;
        }

        console.log('success');
    }


    return (
        <footer className='contact mt-5 pt-5 mt-md-0 pt-md-0 container'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Get in Touch'/>
                            <p className='gray-color-text'>Do you have project in mind? Let's chat</p>
                        </Col>
                    </Row>
                    <Row className={error.length > 0 ? 'mt-5' : 'd-none'}>
                        <Col>
                            {error.length > 0 ? <i className='green-color-text'>{error}</i> : null}
                        </Col>
                    </Row>
                    <Row className={error.length > 0 ? 'mt-3' : 'mt-5'}>
                        <Col xs={{ size: 12 }} md={{ size: 3 }} className='form-container'>
                            <Input name='Name' value={name} resetError={setError} setInputValue={setName} />
                        </Col>
                        <Col xs={{ size: 12 }} md={{ size: 3 }}>
                            <Input name='Email' value={email} resetError={setError} setInputValue={setEmail} />
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 6 }} className='form-container'>
                            <Input name='Message' value={message} resetError={setError} setInputValue={setMessage} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <button onClick={submitClicked} className='green-border-btn mt-4 p-2 px-4'>Send</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;