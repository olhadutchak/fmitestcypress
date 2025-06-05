Feature: TESTING THE ABOUT US PAGE

    Rule:TESTING THE SUBSECTION ITEM DEAN OFFICE
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/administratsiia/dekanat/"
       
       Scenario Outline: Display of dean's office member information
         Given I visit the "https://fmi.chnu.edu.ua/pro-nas/administratsiia/dekanat/"
         Then I should see "<name>" in the list at position <index>
         Then If email is provided, it should link to mailto"<email>" at position <index>
         Then If phone number is provided, it should link to tel"<phone>" at position <index>
         Then If a profile URL is provided, it should link to "<profile>" at position <index>
         Then If social media links are provided, each should be a valid link at position <index>
         
         Examples:
         | index | name                           | email                     | phone          | profile                                                                | social                                                                                                 |
         | 0     | Мартинюк Ольга Василівна      | o.martynyuk@chnu.edu.ua   | +380372584880  | https://algebra.chnu.edu.ua/pro-kafedru/spivrobitnyky/martyniuk-olha-vasylivna/ | https://www.facebook.com/profile.php?id=100006827856522                                               |
         | 1     | Кушнірчук Василь Йосипович    | v.kushnirchuk@chnu.edu.ua | 0372584880     | https://mathmod.chnu.edu.ua/pro-nas/spivrobitnyky/kushnirchuk-vasyl-yosypovych/ |                                                                                                        |
         | 2     | Карлова Олена Олексіївна       | o.karlova@chnu.edu.ua     | (0372) 58-48-88| https://math-analysis.chnu.edu.ua/pro-kafedru/spivrobitnyky/karlova-olena-oleksiivna/ | http://schoolsite.org.ua/4/,https://www.facebook.com/olena.karlova,https://www.facebook.com/MiniMudryk    |
         | 3     | Сікора Віра Степанівна        | v.sikora@chnu.edu.ua      | (0372) 58-48-70| https://algebra.chnu.edu.ua/pro-kafedru/spivrobitnyky/sikora-vira-stepanivna/ |                                                                                                        |
         | 4     | Нестеренко Василь Володимирович | v.nesterenko@chnu.edu.ua  | (0372)584888   | https://math-analysis.chnu.edu.ua/pro-kafedru/spivrobitnyky/nesterenko-vasyl-volodymyrovych/ |                                                                                                        |
         | 5     | Юрійчук Анастасія Олександрівна | a.yuriychuk@chnu.edu.ua   | +38 (0372) 58-48-57 | https://amit.chnu.edu.ua/pro-kafedru/personalii/yuriichuk-anastasiia-oleksandrivna/ |                                                                                                        |
         | 6     | Довжицька Ірина Михайлівна    | i.dovzhytska@chnu.edu.ua  | (0372) 58-48-80|                                                                        |                                                                                                        |
         | 7     | Скоролітня Аліна Іванівна     | a.skorolitnia@chnu.edu.ua |                |                                                                        |                                                                                                        |

    Rule:TESTING THE SUBSECTION ACADEMIC COUNCIL
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/administratsiia/vchena-rada/"
        
        Scenario: Validate link to the development program of the faculty
          Then I should see a link to the faculty development program PDF

        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content in about us
    
    Rule:TESTING THE SUBSECTION PROFESSIONAL BUREAU
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/administratsiia/profbiuro/"
          
        Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link in about us
        
        Scenario Outline: Validate card toggle visibility
          When I click on the header of card <index>
          Then the text of card <index> should become visible
          Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |
            | 3     |
        
        Scenario Outline: Validate academic integrity section "<name>"
          Then the about us section "<name>" in "sectionsProfessionalBureau" should be visible and clickable
          When I click on the about us section "<name>" in "sectionsProfessionalBureau"
          Then the URL should include "<urlIncludes>"
          And the resource at that URL should return HTTP 200
           
           Examples:
             | name                           | urlIncludes                                                        |
             | Актуальні новини профспілкового комітету    | profcom.chnu.edu.ua/novyny                                     |
             | Нормативні документи                | profcom.chnu.edu.ua/normatyvni-dokumenty                       |
             | Профспілкові виплати                 | /pro-nas/administratsiia/profbiuro/profspilkovi-vyplaty       |
             | Більше новин                          | /novyny/novyny-profbiuro                                       |
    
    Rule:TESTING THE SUBSECTION CONTACT INFO
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/administratsiia/kontakty/"
        
        Scenario Outline: Verify the contact item is visible and correct
          Then I should see a contact item "<label>" with text "<text>" and href "<href>"
          
          Examples:
            | label     | text                                                | href                                      |
            | Адреса    | 58012, Україна, м. Чернівці, вул. Університетська, 28. |                                          |
            | Телефон   | (0372) 58-48-80                                     | tel:(0372) 58-48-80                        |
            | Email     | clg-math@chnu.edu.ua                                | mailto:clg-math@chnu.edu.ua               |
            | Facebook  | Facebook                                            | https://www.facebook.com/fmi.org.ua/      |
            | Instagram | Instagram                                           | https://www.instagram.com/m._i_.f/        |
    
    Rule:TESTING THE SUBSECTION STAKEHOLDER COUNCIL
      Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/rada-steikkholderiv/"
       
      Scenario Outline: Validate card toggle visibility
          When I click on the header of card <index>
          Then the text of card <index> should become visible
          Examples:
            | index |
            | 0     |
            | 1     |
            | 2     |
      
      Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link in about us   
    
    Rule:TESTING THE SUBSECTION COUNCIL OF YOUNG SCIENTISTS
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/rada-molodykh-vchenykh/"
        
        Scenario Outline: Validate card toggle visibility
          When I click on the header of card <index>
          Then the text of card <index> should become visible
          Examples:
            | index |
            | 0     |

        Scenario: Validate all contests have titles, descriptions, and read more links
          Then each contest item should have a title, description, and a "Read more" link in about us   
    
    Rule:TESTING THE SUBSECTION ALUMNI ASSOCIATION
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/asotsiatsiia-vypusknykiv/"

        Scenario: Validate banner button links to the catalog of university-wide elective subjects
          Then the banner button should link to the university-wide elective subjects catalog

        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly in about us page
    
    Rule:TESTING THE SUBSECTION HISTORY
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/istoriia-ta-sohodennia/istoriia/" 

        Scenario Outline: Validate the subsection history integrity section "<name>"
          Then the about us section "<name>" in "sectionsHistory" should be visible and clickable
          When I click on the about us section "<name>" in "sectionsHistory"
          Then the URL should include "<urlIncludes>"
          And the resource at that URL should return HTTP 200
           
           Examples:
             | name                           | urlIncludes                                                        |
             | Декани                          | /pro-nas/istoriia-ta-sohodennia/istoriia/dekany/                                     |
             | Фундатори                       | /pro-nas/istoriia-ta-sohodennia/istoriia/fundatory/                       |
             | Почесні доктори                 | /pro-nas/istoriia-ta-sohodennia/istoriia/pochesni-doktory/       |  
        
        Scenario: Validate that the conference banner contains a link to the official conference website
          Then the conference banner link should include "https://fmi55.chnu.edu.ua/"
          And the resource at that URL should return code 200

        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly in about us page
    
    Rule:TESTING THE SUBSECTION GRADUATES
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/istoriia-ta-sohodennia/vypusknyky/"

       Scenario Outline: Validate card toggle visibility
          When I click on the header of card <index>
          Then the text of card <index> should become visible
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
              | 16    |
              | 17    |
              | 18    |
              | 19    |
              | 20    |
              | 21    |
              | 22    |
              | 23    |
              | 24    |
              | 25    |
              | 26    |
              | 27    |
    
    Rule:TESTING THE SUBSECTION REPORT
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/zvity/zvit-2024/" 
        
        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content in about us
    
    Rule:TESTING THE SUBSECTION REGULATORY DOCUMENTS
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/normatyvni-dokumenty/"
        
        Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content in about us

        Scenario Outline: Validate banner contains link to the expected resource
          Then the banner button have link to "<expectedLink>"
          
          Examples:
            | expectedLink                                                                      |
            | https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/                        |
    
    Rule:TESTING THE SUBSECTION MONITORING RESULTS
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/rezultaty-monitorynhu/"

       Scenario: Validate all .pdf and .txt links are valid
          Then all PDF and TXT links should exist and return valid content in about us
    
    Rule:TESTING THE SUBSECTION LABORATORIES
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/laboratorii/"
          
        Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly in about us page

    Rule:TESTING THE SUBSECTION STUDENT SPACE
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/studentskyi-prostir/"

       Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly in about us page
    
    Rule:TESTING THE SUBSECTION MOTHER AND CHILD ROOM
       Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/kimnata-materi-ta-dytyny/"
       
       Scenario: Validate opening of enlarged image in a modal window
          Then each image should open in a modal and close properly in about us page
    
    Rule:TESTING THE SUBSECTION OTHER
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/infrastruktura/"
        
        Scenario Outline: Validate the subsection history integrity section "<name>"
          Then the about us section "<name>" in "sectionsInfrastructure" should be visible and clickable
          When I click on the about us section "<name>" in "sectionsInfrastructure"
          Then the URL should include "<urlIncludes>"
          And the resource at that URL should return HTTP 200
           
           Examples:
             | name                           | urlIncludes                                                        |
             | Лабораторії ФМІ                | /pro-nas/infrastruktura/laboratorii/                                    |
             | Гуртожиток                     | /pro-nas/infrastruktura/hurtozhytok/                       |
             | Майданчики                     | /pro-nas/infrastruktura/maidanchyky/       |  
             |Спортзали                       |/media/f21jxvzt/zaly-chnu.pdf|
             |Бібліотека                      |library.chnu.edu.ua|
             |Дворик факультету               |/pro-nas/infrastruktura/dvoryk/|
             |Кімната матері та дитини        |/pro-nas/infrastruktura/kimnata-materi-ta-dytyny/|
             |Студентський простір            |/pro-nas/infrastruktura/studentskyi-prostir/|
    
    Rule:TESTING THE SUBSECTION COMMENTS AND SUGGESTIONS BOX
        Background:
           Given I visit the "https://fmi.chnu.edu.ua/pro-nas/korysne/skrynka-zauvazhen-ta-propozytsii/"

        Scenario Outline: Validate banner contains link to the expected resource
          Then the banner button have link to "<expectedLink>"
          
          Examples:
            | expectedLink                                                                      |
            | https://docs.google.com/forms/                        |
    