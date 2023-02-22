# Test Case-16
Feature: TC-16_Verify the Help Icon Updated with latest styles in Dashboard Page for Student

    Scenario Outline:Verify the Help Icon Updated with latest styles in Dashboard Page for Student
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle icon or not
        Then User verifies Black Colour question mark button should present in Top Navbar with White background colour for student user
        And User Clicks Help icon for student user
        Then User Verifies Drop Down background colour for student user
        Then User Verifies Search Text Box apperars on the Top of the Drop Down Values for student user
        And User Enters some value in Textbox for student user
        And User hits enter for student user
        And User verifies the Result of Textbox for student user
        And User close the popup 

        
        Examples:
            | username     | password    |
            | stud2_test02 | testing123$ |