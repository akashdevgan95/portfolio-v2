import React from 'react';
import {Container, Row, Col} from 'reactstrap';

//components
import SectionHeading from '../../components/sectionHeading/sectionHeading';

const Footer = () => {
    return (
        <footer className='projects mt-5 pt-5 mt-md-0 pt-md-0 container'>
            <Row className='full-vh-height align-items-center'>
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                    <Row>
                        <Col>
                            <SectionHeading title='Get in Touch'/>
                            <p className='gray-color-text'>Do you have project in mind? Let's chat</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 12 }} md={{ size: 6 }} className='form-container'>
                        <div class="form__group field">
                            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
                            <label for="name" class="form__label">Name</label>
                        </div>
                        </Col>
                        <Col xs={{ size: 12 }} md={{ size: 6 }}>
                            <label className='gray-color-text'>Email</label>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;