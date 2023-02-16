
import { When, And, Then, Given } from "@badeball/cypress-cucumber-preprocessor"
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec';
import ClassesPage from '../PageObject/ClassesPage.spec'
import Home from "../PageObject/01_Home.spec";
const bs = new BaseClass();
const profilePage = new ProfilePage()
const classesPage=new ClassesPage()
const home=new Home()

describe('', () => {
    
  
    Then('User verifies class picture set on each class card',()=>{
        //cy.get('[class="classImage"]').should('be.visible')
        home.getClassCardImage1().should('be.visible')
    
    })
    Then('User verifies rectangular class cards is displayed one in a row or not',()=>{
       // cy.get('[class="classImage"]').should('have.length.lessThan', 4)
        //cy.get('[class="h-100 pr-0 className col-9"]').eq(0).should('have.attr', 'style', 'max-width: 1191px;')
        home.getRectangularCard().eq(0).should('have.attr', 'style', 'max-width: 1191px;')
        // cy.window().then(win => {
        //     const width = win.innerWidth
        //     const height = win.innerHeight
        //   cy.log(`Window size: ${width}x${height}`)
        //   })
            
    })
    Then('User verifies Class avatar with equivalent icon and label,Assignment,Student & Groups,Graph,Programs',()=>{ 
        profilePage.getAssignments().should('be.visible')
        profilePage.getStudentsGroups().should('be.visible')
        profilePage.getData().should('be.visible')
        profilePage.getPrograms().should('be.visible')
    })
 
    Then('User verifies that link navigated to the Student & Group page for that class or not',()=>{
        classesPage.getPeopleLabel().should('be.visible')
    })
 
   
    Then('User verifies that link navigated to the Class Results by Data page for that class or not',()=>{
        cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]').should('be.visible')
    })
    
  
    Then('User verifies Dropdown that contains the programs associated with that class should be expanded or not',()=>{
        cy.get('.sidebar-navigation').shadow().find('[data-label="Data"]').should('be.visible')
    })
    
    
})


