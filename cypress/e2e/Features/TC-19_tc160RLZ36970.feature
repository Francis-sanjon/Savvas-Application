Feature: TC-19_Verify clicking on the Square Google class card title navigates to the assignment listing page of that class for Student

    Scenario Outline:Verify clicking on the Square Google class card title navigates to the assignment listing page of that class for Student
        Given User launche the Realize login Page
        When User logins Savvas Appllication with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Mouse hover on the class card title
        Then User verify it displays with underline on the class card title
        And User Hovers on the colorbar area
        Then verify cursor turns into hand symbol
        Then User Verifies class card image clickable or not
        And User clicks class card header1
        Then User verifies which nagating to assignment listing page

        Examples:
            | username                               | password                                     |
            | autostuddashon02@gedu-demo-pearson.com | U2FsdGVkX18yfjLO6h90476D0vJgs5VzTunWdRnHut8= |