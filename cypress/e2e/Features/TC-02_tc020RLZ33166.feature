# Test Case-02
Feature:TC-02_Verify class quick links in Realize Dashboard for spanish user

    Scenario Outline:Verify class quick links in Realize Dashboard for spanish user
        Given User launche the Realize login Page
        When User logins Savvas Appllication As Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks profile Icon
        And User clicks Setting option
        Then User verifies Setting page
        And User Clicks on prepared language
        When User Selects spanish language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        Then User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas
        And User Clicks profile Icon
        And User clicks Setting
        And User Clicks on prepared language
        When User Selects English language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        And User Clicks profile Icon
        And User SignOut the Savvas Appllication
        Given User launche the Realize login Page
        Then User verifies the login page
        When User logins Savvas Appllication As Student with valid '<username1>' and valid '<password1>'
        Then User verifies the Realize Dashboard Page
        And User Clicks profile Icon
        And User clicks Setting option
        Then User verifies Setting page
        And User Clicks on prepared language
        When User Selects spanish language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        Then User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas
        And User Clicks profile Icon
        And User clicks Setting
        And User Clicks on prepared language
        When User Selects English language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        And User Clicks profile Icon
        And User SignOut the Savvas Appllication

        Examples:
            | username                     | password                                     | username1                    | password1                                    |
            | Msuite49_Dontdisturbteaher01 | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= | Msuite49_Dontdisturbteaher01 | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= |