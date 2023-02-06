
# Test Case-09
Feature: Verify new class details page is not displayed with new UI

    Scenario:Verify new class details page is not displayed with new UI
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Hover on Classes subnav
        Then User verifies class list popup modesl is displayed or not
        And User Click on any classes displayed in class list popup modal
        Then User verifies new class details page is not displayed

        Examples:
            | username              | password    |
            | teacher_noclasslist01 | testing123$ |