# Test Case-06
Feature: Verify square class card for Student user(Users with 4 or more classes)

    Scenario:Verify square class card for Student user(Users with 4 or more classes)
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Class name should be displayed on each of my cards
        Then User verifies Background each of myCards
        Then class picture set on each class card
        Then User verifies rectangular class cards is displayed one in a row or not
        Then User verifies Class avatar with equivalent icon and label,Assignment,Student & Groups,Graph,Programs
        And  User Click the "Pen and Paper" icon
        Then User verifies that link navigated to the Class Results by Assignment page for that class or not
        And User navigating to home page
        And  User Click the "People" icon
        Then User verifies that link navigated to the Student & Group page for that class or not
        And User navigating to home page
        And User Click the "Graph" icon
        Then User verifies that link navigated to the Class Results by Data page for that class or not
        And User navigating to home page
        #And  User Click the 'Book' icon
        Then User verifies Dropdown that contains the programs associated with that class should be expanded or not

        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher05 | testing123$ |