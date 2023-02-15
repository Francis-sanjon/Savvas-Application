
# Test Case-09
Feature: TC-09_Verify new class details page is not displayed with new UI

    Scenario Outline:Verify new class details page is not displayed with new UI
        Given User launche the Realize login Page
        When User logins Savvas Appllication As Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Hover on Classes subnav
        Then User verifies class list popup modesl is displayed or not
        And User Click on any classes displayed in class list popup modal
        And User moving mousedown
        Then User verifies new class details page is not displayed

        Examples:
            | username              | password    |
            | teacher_noclasslist01 | testing123$ |