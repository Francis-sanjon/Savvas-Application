Feature: TC-13_Verify Class card Header background colour should persist between logins for GC Student


    Scenario: Verify Class card Header background colour should persist between logins for GC Student
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User Verifies the square class cards header colour in new Realize homepage
        And User Clicks profile Icon
        And User Clicks SignOut button
        Given User launche the Realize login Page
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User Verifies the square class cards header colour in new Realize homepage1
        And User Clicks profile Icon
        And User Clicks SignOut button

        Examples:
            | username                      | password                                     |
            | MSuite49win10chrome_teacher04 | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= |