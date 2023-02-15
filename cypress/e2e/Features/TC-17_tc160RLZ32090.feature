Feature: TC-17_Verify logged in avatar icon and username are displayed in top navbar of home page for EB Plus Teacher

    Scenario Outline:Verify logged in avatar icon and username are displayed in top navbar of home page for EB Plus Teacher
        Given User launche the Realize login Page
        When User logins Savvas Appllication as EB Plus teacher '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies logged in avatar icon in home page
        Then User verifies logged in username is displayed next to the avatar icon on top navbar


        Examples:
            | username                                             | password    |
            | schstfusername_10000000000000000000@a7nplusdistrict3 | testing123$ |