import * as emailjs from 'emailjs-com';
    
const sendMail = (name,email,message) => {
    
    const template_params = {
        'reply_to': 'reply_to_value',
        'from_name': `Name = ${name}, Email=${email}`,
        'to_name': 'Akash Devgan',
        'message_html': message
    }

    // sending email
    emailjs.send('default_service', 'template_irj9VpVu', template_params,'user_J1BaBJ9MLt7ktiemyfGXi',);
}

export default sendMail;