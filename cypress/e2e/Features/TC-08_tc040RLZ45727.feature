
# Test Case-08
Feature: Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user

    Scenario Outline:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Admin User with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks on any Program in My Program section
        Then User verifies new TOC page is displayed or not

        Examples:
            | username       | password   |
            | realize_admin2 | savvas@123 |