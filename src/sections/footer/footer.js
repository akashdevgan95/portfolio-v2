import React, {useState} from 'react';
import { Row, Col} from 'reactstrap';

//util
import validateEmail from '../../util/validateEmail';
import sendMail from '../../util/sendMail';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';
import Input from '../../components/input/input';

const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const submitClicked = (e) => {
        if(name.length === 0 || email.length === 0 || message.length === 0){
            setError('*Please fill in all the fields');
            return;
        }else{
            setError('');
        }

        if(!validateEmail(email)){
            setError('*Please enter a valid email address');
            return;
        }

        sendMail(name,email,message);
        setSuccessMsg('Email Sent.');

        //resetting state
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
            setError('');
            setSuccessMsg('');
        },2000);

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
                            <i className='green-color-text'>{error}</i>
                        </Col>
                    </Row>
                    <Row className={successMsg.length > 0 ? 'mt-5' : 'd-none'}>
                        <Col>
                           <i className='green-color-text'>{successMsg}</i>
                        </Col>
                    </Row>
                    <Row className={error.length > 0 ? 'mt-3' : 'mt-5'}>
                        <Col xs={{ size: 12 }} md={{ size: 3 }} className='form-container'>
                            <Input name='Name' value={name} resetError={setError} setInputValue={setName} />
                        </Col>
                        <Col xs={{ size: 12 }} md={{ size: 3 }} className='mt-5 mt-md-0'>
                            <Input name='Email' value={email} resetError={setError} setInputValue={setEmail} />
                        </Col>
                    </Row>
                    <Row className='mt-5'>
                        <Col xs={{ size: 12 }} md={{size: 6}} className='form-container'>
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