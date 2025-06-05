Feature: TESTING THE STUDENTS PAGE

    Rule:TESTING THE SUB-ITEM SCHEDULE OF CLASSES AND SESSIONS
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/studentu/navchannia/rozklad-zaniat-ta-sesii/"
        Scenario Outline: Validate the existence and correctness of links for <formType>
          Then I should see the "<text>" element
          Then the element "<text>" should link to a valid page containing "<locationInclude>"

          Examples:
            | formType           | text             | locationInclude                                                                 |
            | dayForm            | Денна форма      | http://fmi-schedule.chnu.edu.ua/                                                |
            | correspondenceForm | Заочна форма     | https://fmi.chnu.edu.ua/studentu/navchannia/rozklad-zaniat-ta-sesii/zaochna-forma/ |
            | graduateStudents   | Для аспірантів   | https://www.chnu.edu.ua/                                                            |
        
        Scenario: Validate links to PDF files and external resources
          Then all PDF and external links on the page should be valid
    
    Rule:TESTING EDUCATIONAL PROGRAMS AND WORK PLANS
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/"
       
        Scenario Outline: Validate links to "<description>" works and returns status 200
          Then the element "<description>" link should work
          
          Examples:
            | description           |
            | bachelor              |
            | master                |
            | postgraduate studies  |
            | view                  |
        
        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly
    
    Rule:TESTING INDIVIDUAL SCHEDULES
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/studentu/navchannia/indyvidualnyi-hrafik/"
        
        Scenario Outline: Validate that the document "<text>" ends with "<extension>" and is accessible
          Then the document link with text "<text>" should end with "<extension>" and be valid
          Examples:
            | text                                                              | extension |
            | Заява ректору                                                     | .docx     |
            | Заява декану                                                      | .docx     |
            | Додаток до індивідуального плану студента                         | .docx     |
            | Розклад відпрацювань                                              | .docx     |
            | Розпорядження №6 по ФМІ від 21 серпня 2024 року                   | .pdf      |
            | Положенням про індивідуальний графік навчання                     | .pdf      |
            | Наказ №238 про внесення змін до положення від 30.08.2022 р.       | .jpg      |
    
    Rule:TESTING ELECTIVE SUBJECTS
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/navchannia/vybir-dystsyplin/"
        
        Scenario: Validate link to university-wide elective disciplines catalog
          Then the button to elective disciplines should link to "navchannia/uchasnykam-osvitnoho-protsesu/studentu/kataloh-zahalnouniversytetskykh-vybirkovykh-dystsyplin"
        
        Scenario: Validate link to FMI elective catalog for 2025-2026 academic year
          Then I should see a link with text "Каталог вибіркових дисциплін ФМІ на 2025-2026 н. р." that links to a Google Spreadsheet
        
        Scenario: Validate link to PDF file with student survey results
          Then I should see a link near the text "Результати опитування студентів ФМІ" that links to a .pdf file
        
         Scenario: Validate all course syllabuses using page object data
           Then all courses should have valid syllabus links
   
    Rule:TESTING SCIENTIFIC WORK PAGE
        Background:
         Given I visit the "https://fmi.chnu.edu.ua/studentu/naukova-robota/"

        Scenario: Workshop section is visible and links to the correct page
          Then I should see the "Гуртки" button
          When I click on the workshop button
          Then the URL should include "/studentu/mozhlyvosti/naukova-robota/hurtky/"

        Scenario: All scientific workshop links are displayed correctly
          Then I should see all expected workshop links with correct title, department and href

        Scenario Outline: Each scientific section is accessible and returns 200
          Given I see the "<section>" section link
          When I click on the "<section>" section
          Then the URL should include "<urlPart>" and the page should respond with status 200
        
        Examples:
          | section       | urlPart                                                              |
          | Конференції   | studentu/mozhlyvosti/naukova-robota                                  |
          | Олімпіади     | studentu/mozhlyvosti/naukova-robota                                  |
          | Конкурси      | studentu/mozhlyvosti/naukova-robota                                  |
    
    Rule: TESTING CONFERENCE SECTION
      Scenario: Validates PDF links
        Given I visit the "https://fmi.chnu.edu.ua/studentu/naukova-robota/studentski-konferentsii/"
        Then I should see valid PDF links that open in a new tab
    
    Rule:TESTING OLYMPICS SECTION
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/studentski-olimpiady/"

        Scenario Outline: Validate each olympics tour opens correct link
          Then I should see olympic tour "<name>" and it should go to "<url>"
          
          Examples:
            | name      | url                                                                                         |
            | І етап    | https://fmi.chnu.edu.ua/novyny/zahalni/novyi-sezon-studentskoi-pershosti-svitu-z-prohramuvannia-icpc/ |
            | IІ етап   | https://fmi.chnu.edu.ua/novyny/zahalni/ii-etap-vseukrainskoi-studentskoi-komandnoi-olimpiady-z-prohramuvannia-2024/ |
            | І етап    | https://fmi.chnu.edu.ua/novyny/zahalni/i-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/ |
            | IІ етап   | https://fmi.chnu.edu.ua/novyny/zahalni/ii-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/ |

        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly
    
    
    Rule:TESTING COMPETITIONS SECTION
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/konkursy/"
        
        Scenario: Validate banner PDF download
          When I click on the competition banner link is correctly
        
        Scenario: Validate all competition links are correct file types
          Then each file link should lead to a valid PDF or TXT file
        
        Scenario: Validate competition card expand/collapse functionality
           Then each competition card should expand on click
    
    Rule:TESTING MOBILITY
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/mozhlyvosti/mobilnist/"
        
        Scenario: Validate the "Presentation" block
          Then the presentation block should be visible
          And the presentation text should be visible
          And the presentation banner PDF should be accessible
        
        Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link
    
    Rule:TESTING STUDENT LIFE
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/studentskyi-aktyv/studentske-zhyttia/"
        
        Scenario Outline: Validate section "<name>"
          Then the section "<name>" should be visible and clickable
          When I click on the section "<name>"
          Then the URL should include "<urlIncludes>"
          
         Examples:
        | name                              | urlIncludes                                                                                              |
        | YouTube канал                    | https://www.youtube.com/channel/UCSwiddjIebpJ7RRYolaTxtw/featured                                        |

        Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link
        
        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly
   
    Rule:TESTING RATING OF STUDENTS
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/vazhlyve/reitynh-studentiv/"
        
        Scenario Outline: Validate section "<name>"
          Then the section "<name>" should be visible and clickable func
          When I click on the section "<name>" element
          Then the URL should include "<urlIncludes>"
          
         Examples:
         | name                                                   | urlIncludes                                                                |
         | Правила призначення та виплати стипендій               | pravyla-pryznachennia-stypendii-protokol-7-vid-31-serpnia-2020-r.pdf       |
         | Порядок призначення та виплати соціальних стипендій    | 1045-28122016.pdf                                                           |                               

        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content
    
    Rule:TESTING ACADEMIC INTEGRITY
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/vazhlyve/akademichna-dobrochesnist/"
        
        Scenario Outline: Validate academic integrity section "<name>"
          Then the academic integrity section "<name>" should be visible and clickable
          When I click on the academic integrity section "<name>"
          Then the URL should include "<urlIncludes>"
          And the resource at that URL should return HTTP 200
          
          Examples:
            | name                                                             | urlIncludes                                                                                                                 |
            | Скринька зауважень та пропозицій                                 | /pro-nas/korysne/skrynka-zauvazhen-ta-propozytsii/                                                                          |
            | Правила академічної доброчесності                                | www.chnu.edu.ua/universytet/normatyvni-dokumenty/pravyla-akademichnoi-dobrochesnosti                                        |
            | Етичний кодекс                                                   | www.chnu.edu.ua/universytet/normatyvni-dokumenty/etychnyi-kodeks-chernivetskoho-natsionalnoho-universytetu-imeni-yuriia-fedkovycha |
            | Положення про виявлення і запобігання плагіату                   | https://www.chnu.edu.ua/media/f5eleobm/polozhennya-pro-zapobihannia-plahiatu_2024.pdf                                                                            |
            | Академічна доброчесність (перезентація)                          | akademichna-dobrochesnist.pdf                                                                                               |
            | Комісія з питань етики та академічної доброчесності              | rozporiadzhennia-11.pdf                                                                                                     |
            | Заходи з популяризації академічної доброчесності на 2024 рік     | zakhody-z-populiaryzatsii-ad-u-2024.pdf                                                                                      |
            | 8 грудня 2020 року                                               | 16lLIWRVa25mKUlENSD18P76tIekILQaX                                                                                            |
            | 16 вересня 2021 року                                             | 1imCHas75rHLjdl87FJKOyHp9h1ZsDM3F                                                                                            |
            | 4 травня 2022 року                                               | pryntsypy-akademichnoi-dobrochesnosti.pdf                                                                                   |

        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content
        
        Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link sec
        
        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly
     
    Rule:TESTING TUITION
       Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/korysne/plata-za-navchannia/"

       Scenario: Validate all tuition cards toggle
         Then all cards should toggle correctly
    
    Rule:TESTING SAMPLE STATEMENTS
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/studentu/korysne/zrazky-zaiav/"

        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content
    
    Rule:TESTING DORMITORY PAGE
        Background:
          Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/hurtozhytok/"
        
        Scenario: Validate titles, links, targets, and accessibility of all dormitory items including video
          Then I validate all dormitory items and their links
