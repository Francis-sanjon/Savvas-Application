# Test Case-01
Feature: Verify the Help Icon Updated with latest styles in Dashboard Page

    Background:
        Given User launche the Realize login Page

    Scenario:Verify the Help Icon Updated with latest styles in Dashboard Page
        When User logins Savvas Appllication with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Help Icon Present in TopNavbar with Question Mark Icon enrolled with Circle Icon or not
        Then User verifies Black Colour question mark button should present in Top Navbar with White background colour
        And User Clicks Help Icon
        Then User Verifies Drop Down background colour
        And User verifies DropDown values background colour should displayed in White colour
        Then User verifies Prime Shade on Help Icon when mouseOver
        Then User Verifies Search Text Box apperars on the Top of the Drop Down Values
        And User Enters some value in Textbox
        And User hits enter
        And User verifies the Result of Textbox
        And User close the popup
        And User clicks Help Icon
        And User clicks Help for this Page
        Then User verifies the result for help for this page option
        And User close the popup
        And User clicks Help Icon
        And User clicks Program Training option
        Then User verifies the url for Program Training
        And User navigating to home page
        And User clicks Help Icon
        And User clicks Technical Support option
        Then User verifies the url for Technical Support
        And User navigating to home page
        And User clicks Help Icon
        And User clicks Contact a Program Specialist option
        Then User verifies the url for Contact a Program Specialist

        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher04 | testing123$ |

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

# Test Case-03

Feature: Verify the Help Icon Updated with latest styles in Dashboard Page

    Scenario:Verify the Help Icon Updated with latest styles in Dashboard Page
        When User logins Savvas Appllication with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies profile is visible or not
        And User clicks profile Icon
        And User clicks Setting Icon
        Then User Verify the UserName displayed on the profile shows as firstname
        Then User verifies the length of UserName
        Then User verifies if the length of the first name less than X char then ellipsis should not be displayed
        And user clicks Home Button
        Then User verifies username displayed without ellipsis
        And user clicks Browse Button
        Then User verifies username displayed without ellipsis
        And User clicks Classes Menu
        Then User verifies username displayed without ellipsis
        And User clicks Grades Menu
        Then User verifies username displayed without ellipsis


        Examples:
            | username     | password    |
            | stud1_test01 | testing123$ |

# Test Case-04
Feature: Verify clicking on the Rectangular class card title navigates to the assignment listing page of that class for Teacher user

    Scenario:Verify clicking on the Rectangular class card title navigates to the assignment listing page of that class for Teacher user
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
            | username                      | password    |
            | MSuite49win10chrome_teacher07 | testing123$ |


# Test Case-05
Feature: Verify square class card for Student user(Users with 4 or more classes)

    Scenario:Verify square class card for Student user(Users with 4 or more classes)
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Class name should be displayed on each of my cards
        Then User verifies Background each of myCards
        Then class picture set on each class card
        #Then User verifies Square class cards is displayed two in a row or not
        # Then User verifies Original picture "Assignments","Discuss","Programs" fill the whole container or not
        And User Click the "Pen and Paper" icon
        Then User verifies which navigating to Assignment listing page or not
        And User navigating to home page
        And User Click the "People" icon
        Then User verifies which navigating to Class Discussions page for that class or not
        And User navigating to home page
        And User Click the "Graph" icon
        Then User verifies that link navigated to the Class Results by Assignment page for that class or not
        And User navigating to home page
        And User Click the "Book" icon Dropdown
        Then User verifies that display the programs associated with the class


        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher05 | testing123$ |

# Test Case-06
Feature: Verify square class card for Student user(Users with 4 or more classes)

    Scenario:Verify square class card for Student user(Users with 4 or more classes)
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies Class name should be displayed on each of my cards
        Then User verifies Background each of myCards
        Then class picture set on each class card
        Then User verifies rectangular class cards is displayed one in a row or not
        Then User verifies Class avatar with equivalent icon and label,Assignment,Student & Groups,Graph,Programs
        And  User Click the "Pen and Paper" icon
        Then User verifies that link navigated to the Class Results by Assignment page for that class or not
        And User navigating to home page
        And  User Click the "People" icon
        Then User verifies that link navigated to the Student & Group page for that class or not
        And User navigating to home page
        And User Click the "Graph" icon
        Then User verifies that link navigated to the Class Results by Data page for that class or not
        And User navigating to home page
        #And  User Click the 'Book' icon
        Then User verifies Dropdown that contains the programs associated with that class should be expanded or not

        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher05 | testing123$ |

# Test Case-07
Feature: Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user

    Scenario:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user
        When User logins Savvas Appllication as Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User Verify if scroll bar is not displayed in My Programs section

        Examples:
            | username          | password    |
            | rght149390_stud05 | testing123$ |


# Test Case-08
Feature: Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user

    Scenario:Verify scroll bar is displaying for My Programs section if the screen viewport is small (Max is 5 Programs but displaying only 4 programs) for Student user
        When User logins Savvas Appllication as Admin User with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User clicks on any Program in My Program section
        Then User verifies new TOC page is displayed or not

        Examples:
            | username       | password   |
            | realize_admin2 | savvas@123 |


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

# Test Case-10
Feature: Verify rectangular/square class card based on screen resolution for teacher user

    Scenario:Verify rectangular/square class card based on screen resolution for teacher user
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        Then User verifies rectangular class card is displayed in full browser window
        And User Change bowser resolution to 767 and verify mobile class card
        Then User verifies mobile class card is displayed or not when browser resolution is below 768
        And User Change bowser resolution to 800 and verify rectangular class card
        #Then User verifies Rectangular class card is displayed or not when browser resolution is 768 or above

        Examples:
            | username               | password    |
            | smokesuite17_teacher01 | testing123$ |

# Test Case-11
Feature: Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student

    Scenario:Verify clicking on the Rectangular Google class card title navigates to the assignment listing page of that class for Student
        When User logins Savvas Appllication as Google Student with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        And User Mouse hover on the class card title
        Then User verify it displays with underline on the class card title
        And User Hover on the colorbar area
        Then verify cursor turns into hand symbol
        Then User Verify class card image clickable or not
        And User clicks class card header
        Then User verifies which nagating to assignment listing page

        Examples:
            | username                               | password    |
            | autostuddashon01@gedu-demo-pearson.com | testing123$ |


# Test Case-12
Feature: Verify tooltip displayed for square class card quicklinks

    Scenario:Verify tooltip displayed for square class card quicklinks
        When User logins Savvas Appllication as Teacher with valid '<username>' and valid '<password>'
        Then User verifies the Realize Dashboard Page
        #Then User Verifies the square class cards in new Realize homepage
        And User Hover 'Pen and Paper' icon
        Then User verifies Tooltip message 'Assignments' is displayed or not
        And User Hover 'People' icon
        Then User verifies Tooltip message 'Student & Groups' is displayed or not
        And User Hover 'Graph' icon
        Then User verifies Tooltip message 'Data' is displayed or not
        And User Hover 'Book' icon
        Then User verifies Tooltip message 'Programs' is displayed or not

        Examples:
            | username                      | password    |
            | MSuite49win10chrome_teacher06 | testing123$ |
