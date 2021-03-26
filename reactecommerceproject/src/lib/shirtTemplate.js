import email from './emailJS';

const shirtEmailTemplate = (shirtOrderData) => {
    // create new object to pass into the emailJS template so that you can call it from one variable
// address: "11500 Jollyville Rd"
// articleClothing: "Hoodie"
// brand: "Bella+Canvas"
// city: "Austin"
// company: "Manning Signs"
// description: undefined
// email: "parkerlmanning@hotmail.com"
// firstName: "Parker"
// inkNumberBack: 3
// inkNumberFront: "4"
// lastName: "Manning"
// orderType: "shirt"
// previousCustomer: "Returning Client"
// recipient: ""
// shirtQuantity: 26
// template: "template_6u0hilf"
// zip: "78759-2465"
    let emailTemplate = {
        to: shirtOrderData.recipient,
        message:
        `This is inside emailTemplate.message - ${shirtOrderData.company} - company, ${shirtOrderData.firstName} - this.firstName`
    }
    email(emailTemplate)

}

export default shirtEmailTemplate;