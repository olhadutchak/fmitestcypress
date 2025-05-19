Feature: Testing Scientific Activity Menu Items

  Background:
    Given I open the website page "https://fmi.chnu.edu.ua/diialnist/naukova/konferentsii/"

  Scenario: Validate conference links
    Given I open the website page "https://fmi.chnu.edu.ua/diialnist/naukova/konferentsii/"
    Then I should see "Сайт конференції" links
    And each conference link should have correct href and respond with status 200

  Scenario Outline: Validate seminar card text toggling
    Given I open the website page "https://cmt.chnu.edu.ua/seminar-chernivetskoho-matematychnoho-tovarystva/?_gl=1*gdqat5*_ga*MTIxNjIzMTA5Mi4xNzI4ODQ4NzU4*_ga_Q6273NZQ6Z*MTczNjI3NzA0MC4xMjMuMS4xNzM2Mjc3MDQ1LjAuMC4w"
    When I click on seminar card header at index <index>
    Then the corresponding seminar text should become visible

    Examples:
      | index |
      | 0     |
      | 1     |
      | 2     |
      | 3     |
      | 4     |
      | 5     |
      | 6     |
      | 7     |
      | 8     |
      | 9     |
      | 10    |
      | 11    |
      | 12    |
      | 13    |
      | 14    |
      | 15    |

  Scenario: Validate postgraduate items
    Given I open the website page "https://fmi.chnu.edu.ua/diialnist/naukova/aspirantura/"
    Then all postgraduate items should have correct titles, hrefs, and targets

  Scenario Outline: Validate scientific school card toggle
    Given I open the website page "https://fmi.chnu.edu.ua/diialnist/naukova/naukovi-shkoly/"
    When I click on scientific school card header at index <index>
    Then the corresponding scientific school text should become visible

    Examples:
      | index |
      | 0     |
      | 1     |
      | 2     |
      | 3     |
      | 4     |
  
  Rule: TESTING SHKOLY TA SYMPOZIUMY
    Background:
      Given I open the website page "https://fmi.chnu.edu.ua/diialnist/mizhnarodna/shkoly-ta-sympoziumy/"

    Scenario: Lightbox image viewer should open and close correctly
      When I click each image in the lightbox gallery
      Then the image viewer should appear and be closable

  Rule: TESTING THE PROJECTS MENU ITEM
    Background:
      Given I open the website page "https://fmi.chnu.edu.ua/diialnist/mizhnarodna/proiekty/"

    Scenario: Validate "iCare in Ukraine" link
      When I click the "iCareInUkraine" link
      Then I should be navigated to "https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/"

    Scenario: Validate "Supporting School" link
      When I click the "supportingSchool" link
      Then I should be navigated to "https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/"

    Scenario: Validate partner link #1
      When I click the first partner link
      Then I should land on a page with URL containing "http://quaere.fmi.org.ua/#" and it should be available

    Scenario: Validate partner link #2
      When I click the second partner link
      Then I should land on a page with URL containing "http://tempus.chnu.edu.ua/" and it should be available
  
  Rule: TESTING OF THE BMAN POINT
    Background:
      Given I open the website page "https://fmi.chnu.edu.ua/diialnist/spivpratsia/bman/"

    Scenario: Validate link to Svitlana Bodnaruk personal page
      When I click the link to Bodnaruk's profile
      Then I should be navigated to "https://algebra.chnu.edu.ua/pro-kafedru/spivrobitnyky/bodnaruk-svitlana-bohdanivna/"

    Scenario: Validate link to official BMAN website
      When I click the BMAN official site link
      Then I should be navigated to "https://chernivtsi.man.gov.ua/"

    Scenario: Validate schedule PDF file
      When I access the schedule PDF
      Then the file should be accessible and in PDF format

  Rule: TESTING PARTNERS SUBMENU ITEM
    Background:
      Given I open the website page "https://fmi.chnu.edu.ua/diialnist/spivpratsia/partnery/"
  
    Scenario: Validate partner links are reachable
      When I check each partner link
      
    Scenario: Validate presence of downloadable files
      When I check each file in the document list

    Scenario: Validate image viewer in partners section
      When I click each image in the partners gallery
      Then the image viewer should appear and be closable

    Scenario: Validate "Anketa ФМІ" file download
      When I download the file titled "Anketa ФМІ"
      Then the file named "anketa_fmi.doc" should be downloaded successfully







  Rule: Educational and Methodological Section
    Background:
      Given I open the page "https://fmi.chnu.edu.ua/diialnist/navchalno-metodychna/"

    Scenario: Validate composition of the methodical board
      Then the "composition" link should have href "/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf"
      When I click on the "composition" link
      Then the current URL should include "/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf"
      And the document should be accessible

    Scenario: Validate work plan
      Then the "workPlan" link should have href "/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf"
      When I click on the "workPlan" link
      Then the current URL should include "/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf"
      And the document should be accessible

    Scenario: Validate regulations
      Then the "regulations" link should have href "/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf"
      When I click on the "regulations" link
      Then the current URL should include "/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf"
      And the document should be accessible

    Scenario: Validate link to ChNU normative documents
      When I click on the "normDocsLink" link
      Then the current URL should include "chnu.edu.ua/universytet/normatyvni-dokumenty"

  Rule: Organizational and Educational Section
    Background:
      Given I open the page "https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/"

    Scenario: Validate educational activities document
      Then the "educational" element should be visible and contain "Виховні  заходи"
      When I click on the "educational" link
      Then the current URL should include "/media/spxogpw3/plan-zakhodiv-24-25.pdf"
      And the document should be accessible

    Scenario: Validate board of curators
      Then the "board" element should be visible and contain "Рада кураторів"
      When I click on the "board" link
      Then the current URL should include "/diialnist/orhanizatsiino-vykhovna/rada-kuratoriv/"
      And the document should be accessible

    Scenario: Validate photo reports
      Then the "photoReports" element should be visible and contain "Фотозвіти"
      When I click on the "photoReports" link
      Then the current URL should include "/diialnist/orhanizatsiino-vykhovna/fotozvity/"
      And the document should be accessible

  Rule: Photo Reports Modal
    Background:
      Given I open the page "https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/fotozvity/"

    Scenario: Open and close each photo in modal view
      When I click each photo element
      Then the image modal should open and be closable 
 
 Rule: TESTING CONTINUOUS EDUCATION MENU ITEM
    Background:
      Given I open the "Continuous Education" page

    Scenario: Open each course card and return back
      When I open each course card in turn
      Then I should see the course content and return to the main page each time