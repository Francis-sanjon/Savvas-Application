const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from "../PageObject/BaseClass.spec";
import Home from '../PageObject/01_Home.spec';
const home =new Home()
const bs = new BaseClass();
let len;
describe('', () => {
   
    Then('User Verify if scroll bar is not displayed in My Programs section', () => {
     
      home.getPgrmImg().then(($data)=>{
            len=$data.length;
            if(len>4){
             home.getMyProgramList().should('be.visible').get('.d-none').should('have.css', 'overflow-y', 'scroll')
            }else if(len<4)
            {
              home.getMyProgramList().should('be.visible').get('.d-none').should('not.have.css', 'overflow-y', 'scroll')
            }
        })

                
    })

})






















