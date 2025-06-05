Feature: TESTING THE HOME PAGE

  Background: 
    Given I visit the FMI homepage

  Scenario Outline: VALIDATE MEDIA LINKS 
    When I check the existence of the "<Element Name>" link with href "<Href>" and title "<Title>"
    When I click on the "<Element Name>" using "<Click Method>"
    Then the URL should include "<Expected URL>" and return status 200

    Examples:
      | Element Name     | Href                                | Expected URL                                       | Click Method           | Title|
      | linkFacebook     | https://www.facebook.com/fmi.org.ua/| https://www.facebook.com/fmi.org.ua/               | clickFacebookLink      |Факультет математики та інформатики ЧНУ ім. Ю. Федьковича|
      | linkInstagram    | https://www.instagram.com/m._i_.f/  | https://www.instagram.com/m._i_.f/                 | clickInstagramLink     |Профбюро студентів ФМІ|
      | linkYoutube      | https://youtube.com/@MathTube_      | https://www.youtube.com/@MathTube_                 | clickYoutubeLink       |Youtube|
      
  Scenario: VALIDATE EMAIL LINK IN THE TOP PANEL
    When I check the email link in the top panel
    Then the email link should be visible
    And the email link should be valid

  Scenario: VALIDATE THE OPENING OF THE SEARCH FIELD
    When I click on the search icon
    Then the search input field should be visible
    And I type a search term
    And the URL should change after the search

  Scenario: VALIDATE THE LOGO NAVIGATION
    When I see the logo
    And I click on the logo picture
    Then the homepage should be accessible

  Scenario: VALIDATE THE NEWS SUB-MENU
    When I hover over the news menu
    Then the news sub-menu should be visible
    And each news category should be clickable and lead to the correct page

  Scenario: VALIDATE THE ACTIVITIES MENU CATEGORIES AND LINKS
    When I open the activities menu
    Then all activity categories should be displayed
    And each activity link should be clickable and lead to the correct page

  Scenario: VALIDATE THE STUDENT MENU CATEGORIES AND LINKS
    When I open the student menu
    Then all student categories should be displayed
    And each student link should be clickable and lead to the correct page

  Scenario: VALIDATE THE APPLICANT SUB-MENU
    When I hover over the applicant menu
    Then the applicant sub-menu should be visible
    And each applicant category should be clickable and lead to the correct page

  Scenario: VALIDATE THE DEPARTMENT SUB-MENU
    When I hover over the department menu
    Then the department sub-menu should be visible
    And each department category should be clickable and lead to the correct page

  Scenario: VALIDATE THE ABOUT US SUB-MENU CATEGORIES AND LINKS
    When I open the about us menu
    Then all about us categories should be displayed
    And each about us link should be clickable and lead to the correct page

  Scenario: VALIDATE THE SEARCH FUNCTIONALITY WITH NO RESULTS
    When I click on the search button one time
    Then the search field should be visible
    And I type "Невідомий текст" into the search field
    And the URL should contain "https://fmi.chnu.edu.ua/poshuk/?query="
    And I should see "Нічого не знайдено."

  Scenario: VALIDATE THE SEARCH FUNCTIONALITY WITH RESULTS
    When I click on the search button one time
    And I type "Скутар" in the search field
    Then I should see search results
    When there are multiple result pages
    Then I should navigate through each page

  Scenario Outline: VALIDATE THE FUNCTIONALITY OF THE BANNER BUTTONS
    When I check the existence of the "<button>" banner button
    And I click on the "<button>" banner button
    Then the URL should be "<expectedLink>"
    And the page should return a successful status code for "<expectedLink>"

    Examples:
      | button          | expectedLink        |
      | bannerBtnFirst  | linkBannerBtnFirst  |


  Scenario: VALIDATE LINKS IN LATEST EVENTS
    When I check all links in the latest events section
    Then each link should navigate to a different URL

  Scenario Outline: VALIDATE FLEX-2-COLUMNS LINKS
    Given I check the existence of "<element>" with href "<expectedHref>"
    When I click on "<element>"
    Then the URL should include "<expectedHref>"
    And the page should return a successful status for "<expectedHref>"

    Examples:
      | element            | expectedHref |
      | flex2Columnsfirs | https://algebra.chnu.edu.ua/abituriientu/kursy-pidhotovky-do-zno-ta-nmt-z-matematyky/kursy-pidhotovky-do-zno-nmt-2024-layfkhaky-vid-matfaku/ |
      | flex2ColumnsSec | https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/ |

  Scenario: VALIDATE ARIA-LABEL FOR PREVIOUS BUTTON
    When I click the previous button
    Then the previous button should have an "aria-label" of "Previous slide"

  Scenario: VALIDATE ARIA-LABEL FOR NEXT BUTTON
    When I click the next button
    Then the next button should have an "aria-label" of "Go to first slide"

  Scenario: VALIDATE PARTNERS LINKS STATUS CODES
    When I check all partners' links
    Then each partner link should return a valid status code

  Scenario: VALIDATE PARTNERS PAGINATION BUTTONS FUNCTIONALITY
    When I click on the first pagination button for partners
    Then the first pagination button should be active
    When I click the next arrow button for partners
    Then the second pagination button should be active
    When I click the previous arrow button for partners
    Then the first pagination button should be active again

  Scenario Outline: VALIDATE PROJECT LINKS
    Given I check the existence of "<element>" with href "<expectedHref>"
    When I click on the project link "<element>"
    Then the URL should include "<expectedHref>"
    And the page should return a successful status for "<expectedHref>"

    Examples:
      | element         | expectedHref                  |
      | partnearsFirst  | http://quaere.fmi.org.ua/#   |
      | partnearsSecond | http://tempus.chnu.edu.ua/   |

  Scenario: VALIDATE VISIBILITY OF SCROLLUP BUTTON AFTER SCROLLING DOWN
    When I scroll to the bottom of the page
    Then the scrollUp button should be visible

  Scenario: VALIDATE ACTIVATION OF PRIVACY POLICY AFTER BUTTON CLICK
    When I click on the privacy policy button
    Then the privacy policy button should be active
    And I should be redirected to the privacy policy page
    When I go back to the homepage
    And I accept all privacy policy terms
    Then the fingerprint button should be visible

  Scenario Outline: VALIDATE USEFUL LINKS AND THE TRANSFER TO THE PRIVACY SETTINGS
    When I check the existence of the "<Element Name>" link with href "<Expected URL>"
    When I click on the "<Element Name>" using "<Click Method>"
    Then the URL should include "<Expected URL>" and return status 200

    Examples:
      | Element Name    | Expected URL                                      | Click Method         |
      | linksCHNU      | https://www.chnu.edu.ua/                          | clickLinksCHNU       |
      | linksMoodle    | https://moodle.chnu.edu.ua/login/index.php        | clicklinksMoodle     |
      | linksAdmission | /abituriientu/                                    | clicklinksAdmission  |
      | privacySettings| https://www.chnu.edu.ua/polityka-konfidentsiinosti/ | clickPrivacySettings |
