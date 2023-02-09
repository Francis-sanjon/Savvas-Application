# Test Case-04
Feature: Verify clicking on the Rectangular class card title navigates to the assignment listing page of that class for Teacher user

    Scenario Outline:Verify clicking on the Rectangular class card title navigates to the assignment listing page of that class for Teacher user
        Given User launche the Realize login Page
        When User logins Savvas Appllication with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Mouse hover on the class card title
        Then User verify it displays with underline on the class card title
        And User Hover on the colorbar area
        Then verify cursor turns into hand symbol
        Then User Verify class card image clickable or not
        And User clicks class card header
        Then User verifies which nagating to assignment listing page

        Examples:
            | username     | password    |
            | stud1_test01 | testing123$ |