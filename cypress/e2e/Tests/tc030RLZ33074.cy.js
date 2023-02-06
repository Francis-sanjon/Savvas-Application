const { When, Then, And } = require("@badeball/cypress-cucumber-preprocessor")
import BaseClass from '../PageObject/BaseClass.spec'
import Home from "../PageObject/01_Home.spec";
import ProfilePage from '../PageObject/ProfilePage.spec'
import 'cypress-real-events'
const bs = new BaseClass();
const home = new Home()
const profilePage = new ProfilePage();


describe('', () => {

    



})