
# Test Case-07
Feature: TC-07_Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user

    Scenario Outline:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User Verify if scroll bar is not displayed in My Programs section

        Examples:
            | username          | password    |
            | rght149390_stud05 | testing123$ |