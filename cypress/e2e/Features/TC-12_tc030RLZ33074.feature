
# Test Case-12
Feature: Verify tooltip displayed for square class card quicklinks

    Scenario:Verify tooltip displayed for square class card quicklinks
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        #Then User Verifies the square class cards in new Realize homepage
        And User Hover 'Pen and Paper' icon
        Then User verifies Tooltip message 'Assignments' is displayed or not
        And User Hover 'People' icon
        Then User verifies Tooltip message 'Student & Groups' is displayed or not
        And User Hover 'Graph' icon
        Then User verifies Tooltip message 'Data' is displayed or not
        And User Hover 'Book' icon
        Then User verifies Tooltip message 'Programs' is displayed or not

        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher06 | testing123$ |