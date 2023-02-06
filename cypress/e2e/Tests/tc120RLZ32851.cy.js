///const data = require('../fixtures/xlsxData.json');
const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/01_Home.spec'
import BaseClass from "../PageObject/BaseClass.spec";
import LoginPage from '../PageObject/LoginPage.spec';
import Encryptions from '../EncryptionAndDecryption/Encryptions'
const en=new Encryptions();
const home = new Home();
const bs = new BaseClass();
const loginPage = new LoginPage();
before('Before', () => {
    cy.log('this is before block')
    cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
      let rowsLength = rows.length;
      cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
      cy.writeFile("cypress/fixtures/xlsxData.txt", { rows })
  
   })
  })

describe("User logins Savvas Appllication with valid '<username>' and valid '<password>'", () => {
    
Given('User verifies the Realize Dashboard Page',()=>{

})
Then('User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon or not',()=>{
  
})
Then('User verifies Black Colour question mark button should present in Top Navbar with White background colour',()=>{
  
})
    
And('User Clicks Help Icon',()=>{

})
Then('User Verifies Drop Down background colour',()=>{
  
})
Then('User verifies DropDown values background colour should displayed in White colour',()=>{
  
})
    
Then('User verifies Prime Shade on Help Icon when mouseOver',()=>{

})
Then('User Verifies Search Text Box apperars on the Top of the Drop Down Values',()=>{
  
})
And('User Enters some value in Textbox',()=>{
  
})
    
And('User hits enter',()=>{

})
Then('User verifies the Result of Textbox',()=>{
  
})
And('User close the popup',()=>{
  
})
    
And('User clicks Help Icon',()=>{

})
And('User clicks Help for this Page',()=>{
  
})
Then('User verifies the result for help for this page option',()=>{
  
})
    
And('User close the popup',()=>{

})
And('User clicks Help Icon',()=>{
  
})
And('User clicks Program Training option',()=>{
  
})
    
Then('User verifies the url for Program Training',()=>{

})
And('User navigating to home page',()=>{
  
})
And('User clicks Help Icon',()=>{
  
})
    
And('User clicks Technical Support option',()=>{

})
Then('User verifies the url for Technical Support',()=>{
  
})
And('User navigating to home page',()=>{
  
})
And('User clicks Help Icon',()=>{
  
})
And('User clicks Contact a Program Specialist option',()=>{
  
})
Then('User verifies the url for Contact a Program Specialist',()=>{
  
})

})