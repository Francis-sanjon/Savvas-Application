# Test Case-05
Feature: TC-05_Verify square class card for Student user(Users with 4 or more classes)

    Scenario Outline:Verify square class card for Student user(Users with 4 or more classes)
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Class name should be displayed on each of my cards
        Then User verifies Background each of myCards
        Then class picture set on each class card
        Then User verifies Square class cards is displayed two in a row or not
        Then User verifies Original picture "Pen and Paper","People","Graph","Book" fill the whole container or not
        And User Click the "Pen and Paper" icon
        Then User verifies which navigating to Assignment listing page or not
        And User navigating to home page
        And User Click the "People" icon
        Then User verifies which navigating to Class Discussions page for that class or not
        And User navigating to home page
        And User Click the "Graph" icon
        Then User verifies that link navigated to the Class Results by Assignment page for that class or not
        And User navigating to home page
        And User Click the "Book" icon Dropdown
        Then User verifies that display the programs associated with the class


        Examples:
            | username                      | password                                     |
            | MSuite49win10chrome_teacher05 | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= |