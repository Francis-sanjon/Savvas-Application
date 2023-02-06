const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor")

import Home from '../PageObject/01_Home.spec'
import ProfilePage from '../PageObject/ProfilePage.spec'
import BaseClass from "../PageObject/BaseClass.spec";
import { when } from 'cypress/types/jquery';
const home = new Home();
const bs = new BaseClass();
const profilePage = new ProfilePage()

describe('', () => {
    When("User logins Savvas Appllication As Teacher with valid '<username>' and valid '<password>'",()=>{
  
    })
    Then('User verifies the Realize Dashboard Page',()=>{
      
    })
    And('User clicks profile Icon',()=>{
      
    })
    And('User clicks Setting option',()=>{
  
    })
    Then('User verifies Setting page',()=>{
      
    })
    When('User Selects spanish language',()=>{
      
    })
    And('User clicks Save Button',()=>{
  
    })
    And('User clicks savvas Realize Icon to go Dashboard page',()=>{
      
    })
    Then('User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas',()=>{
      
    })
    And('User SignOut the Savvas Appllication',()=>{
  
    })
    And("User logins Savvas Appllication As Student with valid '<username>' and valid '<password>'",()=>{
      
    })
    Then('User verifies the Realize Dashboard Page',()=>{
      
    })
    And('User clicks profile Icon',()=>{
  
    })
    And('User clicks Setting',()=>{
      
    })
    when('User Selects spanish language',()=>{
      
    })
    And(' User clicks Save Button',()=>{
  
    })
    And('User Selects spanish language',()=>{
      
    })
    And('User clicks Save Button',()=>{
      
    })
    And('User clicks savvas Realize Icon to go Dashboard page',()=>{
  
    })
    Then('User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas',()=>{
      
    })
   
   
})
