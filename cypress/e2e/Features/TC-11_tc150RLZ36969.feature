# Test Case-11
Feature: Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student

    Scenario Outline:Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student
         Given User launche the Realize login Page
        When User logins Savvas Appllication as Google Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Mouse hover on the class card title
        Then User verify it displays with underline on the class card title
        And User Hover on the colorbar area
        Then verify cursor turns into hand symbol
        Then User Verify class card image clickable or not
        And User clicks class card header
        Then User verifies which nagating to assignment listing page

        Examples:
            | username                               | password    |
            | autostuddashon01@gedu-demo-pearson.com | testing123$ |