import emailjs from 'emailjs-com';
require('dotenv').config()
const serviceID = process.env.REACT_APP_SERVICE_ID
const userID = process.env.REACT_APP_USER_ID
const shirtTemplate = "template_6u0hilf";

const sendEmail = (templateParams)  => {

      console.log(templateParams, 'in sendEmail')
        emailjs.send(serviceID,shirtTemplate, templateParams, userID)
            .then((result) => {
            console.log(result.text, result.status, "Success!")
        }, (error) => {
          console.log(error, "error");
      });
}
  
export default sendEmail