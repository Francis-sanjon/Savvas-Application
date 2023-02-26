import { When } from '@badeball/cypress-cucumber-preprocessor';
import Home from '../PageObject/Home.spec'
import BaseClass from "../PageObject/BaseClass.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'

const home = new Home();
const bs = new BaseClass();
const profilePage = new ProfilePage()
describe('', () => {

  When("User logins Savvas Appllication as EB Plus teacher {string} and valid {string}", async (username, password) => {
    bs.savvasLogin(username, password)
  })
  When("User verifies logged in avatar icon in home page", () => {
     home.getLoginAvatar().should('be.visible')
  })
  When("User verifies logged in username is displayed next to the avatar icon on top navbar", () => {
      profilePage.getProfileName().should('be.visible')
  })
})