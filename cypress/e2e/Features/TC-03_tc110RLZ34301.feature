# Test Case-03

Feature: Verify the Help Icon Updated with latest styles in Dashboard Page

   Scenario Outline:Verify the Help Icon Updated with latest styles in Dashboard Page
     Given User launche the Realize login Page
      When User logins Savvas Appllication with valid '<username>' and valid '<password>'
       Then User verifies the Realize Dashboard Page
      Then User verifies profile is visible or not
        And User clicks profile icon
       And User clicks Setting Icon
        Then User Verify the UserName displayed on the profile shows as firstname
        Then User verifies the length of UserName
        Then User verifies if the length of the first name less than X char then ellipsis should not be displayed
        And User clicks Home Button
        Then User verifies username displayed without ellipsis
        And User clicks Browse Button
        Then User verifies username displayed without ellipsis
        And User clicks Classes Menu
        Then User verifies username displayed without ellipsis from homepage
        And User clicks Grades Menu
        Then User verifies username displayed without ellipsis from homepage


        Examples:
            | username     | password    |
            | stud1_test01 | testing123$ |