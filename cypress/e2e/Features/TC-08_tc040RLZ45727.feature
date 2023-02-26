
# Test Case-08
Feature: TC-08_Verify new TOC page is displayed while clicking on any program in My Programs section  for  Admin  user when show.browse.navbar.integration='ON

    Scenario Outline:Verify new TOC page is displayed while clicking on any program in My Programs section  for  Admin  user when show.browse.navbar.integration='ON
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Admin User with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks on any Program in My Program section
        Then User verifies new TOC page is displayed or not

        Examples:
            | username       | password   |
            | realize_admin2 | U2FsdGVkX1+tcLNbny9dXLr80afxEkghT6dJd5adtGg= |