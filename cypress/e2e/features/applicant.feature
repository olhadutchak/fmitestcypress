Feature: Applicant Page Testing

Rule:TESTING CONDITIONS OF ENTRY
    Scenario Outline: Validate element functionality and redirection
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/"
    When I check the visibility of the "<element>"
    And I click on the "<element>"
    Then I should be redirected to "<url>"
    And the status code 200 for the page should be "<url>"

  Examples:
    | element            | url                                                   |
    | roadMap           | https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/    |
    | electronicCabinet | /abituriientu/umovy-vstupu/reiestratsiia-elektronnoho-kabinetu-vstupnyka/ |
    

  Scenario: Validate the "view" button functionality for motivational letters
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/"
    When I click the "view" button for motivational letters
    Then I should be redirected to "https://fmi.chnu.edu.ua/abituriientu/motyvatsiini-lysty/"
    And the status code 200 for the page should be "https://fmi.chnu.edu.ua/abituriientu/motyvatsiini-lysty/"

  Scenario: Validate the map toggle functionality for each card
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/"
    When I click on each card link
    Then the card should toggle between collapsed and expanded states

Rule: TESTING BACHELOR
  Scenario: Validate links to "view"
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/bakalavrat/"
    Then each "view" link should respond with status 200

  Scenario Outline: Validate specialty bachelor "<discript>"
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/bakalavrat/"
    When I check the visibility of the "<element>"
    And I click on the "<element>"
    Then I should be redirected to "<url>"
    And the status code 200 for the page should be "<url>"
  Examples:
    | element                       | url                                                                                           | discript |
    | educationMathematicsS          | https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/                       | 014.04 "secondary education (mathematics)"|
    | educationInformaticsS          | difeq.chnu.edu.ua/abituriientu/osvitni-prohramy                                               | 014.09 "secondary education (informatics)"|
    | mathematics                   | https://math-analysis.chnu.edu.ua/                                                            | 111 "mathematics" |
    | appliedMathematics            | https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/                                         | 113 "applied mathematics"|
    | computerScience               | https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf                                      | 122 "computer science"|
    | systemAnalysis                | https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf                                      | 124 "system analysis"|

Rule: TESTING MAGISTRACY
   Scenario: Validate links to "view"
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/mahistratura/"
    Then each "view" link should respond with status 200

  Scenario Outline: Validate specialty magistracy "<discript>"
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/mahistratura/"
    When I check the visibility of the "<element>"
    And I click on the "<element>"
    Then I should be redirected to "<url>"
    And the status code 200 for the page should be "<url>"
  Examples:
    | element                       | url                                                                                           | discript |
    | educationMathematics          | https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/                       | 014.04 "secondary education (mathematics)"|
    | educationInformatics          | difeq.chnu.edu.ua/abituriientu/osvitni-prohramy                                               | 014.09 "secondary education (informatics)"|
    | mathematics                   | https://math-analysis.chnu.edu.ua/                                                            | 111 "mathematics" |
    | appliedMathematics            | https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/                                         | 113 "applied mathematics"|
    | computerScience               | https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf                                      | 122 "computer science"|
    | systemAnalysis                | https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf                                      | 124 "system analysis"|   

Rule: TESTING POSTGRADUATE STUDIES

  Background:
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/aspirantura/"

  Scenario: Validate that all PDF links are accessible and correctly configured
    When I collect all PDF links on the page
    Then each PDF link should have target "_blank" if it has class "link"
    Then each PDF link should return status 200 and content type pdf

Rule: TESTING OPEN DAY
  
  Background:
     Given I visit the "https://fmi.chnu.edu.ua/abituriientu/den-vidkrytykh-dverei/"
  
  Scenario: Validate the map toggle functionality for each card
    When I click on each card link
    Then the card should toggle between collapsed and expanded states

  Scenario Outline: Validate the functionality "<discript>"
    When I check the visibility of the "<element>"
    And I click on the "<element>"
    Then I should be redirected to "<url>"
    And the status code 200 for the page should be "<url>"
  Examples:
    | element                       | url                                                                                           | discript |
    | regulatoryDocButton           | /media/ratobv1d/fmi_29_042023.pdf                                                             | regulatory documents|
    | olympiadLink                  | /media/nesjasxz/math_olympiad_2022_task_round_1.pdf                                           | Всеукраїнська олімпіада 2022 з математики для абітурієнтів ЧНУ|
    | mathematicsOlympiad           | /media/zyzbmijo/olimpiada_2021.pdf                                                            | Всеукраїнська олімпіада 2021 з математики для абітурієнтів ЧНУ |

Rule: TESTING ENTRY COMPANY
  Scenario: Validate links to pdf files
    Given I visit the "https://fmi.chnu.edu.ua/abituriientu/analiz-vstupnoi-kampanii/vstup-2023/"
    When I find all PDF links on the page
    Then each PDF link should have target "_blank"
    And each PDF link should return content type pdf

Rule: TESTING DORMITORY PAGE

  Scenario: Validates titles, links, targets, and accessibility of all dormitory items including video
    Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/hurtozhytok/"
    When I collect all dormitory links and their titles
    Then each dormitory item should have the correct title and link
    And each link should open in a new tab
    And each non-video link should return status 200