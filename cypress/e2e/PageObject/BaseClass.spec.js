import 'crypto-js';
import Encryptions from '../EncryptAndDecrypt/Encryptions'
const encrypt = new Encryptions();
class BaseClass {

    savvasLogin(username, password) {
       
        cy.get('#username').type(username)
        cy.get('#password').type(encrypt.decrip(password))
        cy.get('#signInBtn').click()

    }

    windowHandle(Locator) {
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })
        Locator.click()
        cy.get('@windowopen').then((stub) => {
            //const str=cy.log(stub.args[0][0]) // or console.log
            cy.visit(stub.args[0][0]) // or console.log
            //  cy.wait(5000)
            //cy.visit('/')
            // cy.go('back')
        })
    }
    split() {
        var element = document.getElementById('#studentName');

        // Get the text from the element
        //var text = element.innerText;
        var text = element.textContent;

        // Log the text to the console
        return text;
    }
    length(locator) {
        cy.get(locator).then((data) => {
            let len = data.length;
            return len;
        })
    }
    msg() {
        return new Promise((resolve, reject) => {
            cy.get('#studentName').then((data) => {
                let firstLastName = data.text().toString();
                let firstName = firstLastName.split(" ")[0];
                let firstNameString = JSON.stringify(firstName);
                resolve(firstNameString);
            });
        });
    }

    resetLanguage() {
        let condition = '';
        home.getSetting().then((data) => {
            let condition = data.text()
            cy.log(condition)
            if (condition !== 'Settings') {
                home.getSetting().should('have.text', 'Configuración').click()

                profilePage.getPreparedLanguage().click()
                cy.get('.ng-binding').eq(21).click()
                profilePage.getSaveBtn().click()
                cy.wait(10000)
                profilePage.getRealizeImg().click()
                home.getprofileIcon().click()
            }

        })
    }


    Encrypt(value) {
        const password = value;
        const key = 'mykey';
        const cipher = crypto.createCipher('aes-256-cbc', key);
        let encrypted = cipher.update(password, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return Cypress.env('password', encrypted);

    }
    Decrypt(value) {
        const key = 'mykey';
        const encryptedPassword = value;
        const decipher = crypto.createDecipher('aes-256-cbc', key);
        let decrypted = decipher.update(encryptedPassword, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        cy.log(decrypted);
        let pass = decrypted;
    }

}

export default BaseClass