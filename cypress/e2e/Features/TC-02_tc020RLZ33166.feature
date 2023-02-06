# Test Case-02
Feature:Verify class quick links in Realize Dashboard for spanish user

    Scenario:Verify class quick links in Realize Dashboard for spanish user
        When User logins Savvas Appllication As Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks profile Icon
        And User clicks Setting option
        Then User verifies Setting page
        When User Selects spanish language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        Then User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas
        And User SignOut the Savvas Appllication
        When User logins Savvas Appllication As Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks profile Icon
        And User clicks Setting
        When User Selects spanish language
        And User clicks Save Button
        When User Selects spanish language
        And User clicks Save Button
        And User clicks savvas Realize Icon to go Dashboard page
        Then User Verify the below data "Assignments" - as Asignaciones,"Student & Groups" - Estudiantes y grupos,"Data" - Datos,"Programs" - Programas


        Examples:
            | username                     | password    |
            | Msuite49_Dontdisturbteaher01 | testing123$ |