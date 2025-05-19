import studentPage from "../pages/student.page";

describe("TESTING THE STUDENTS PAGE", () => {

  context('TESTING CLASS SCHEDULE PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/rozklad-zaniat-ta-sesii/');

    });


    it('Validate the navigations element', () => {

      studentPage.clickNavigationsElement();

      cy.url().should('include', 'https://fmi.chnu.edu.ua/studentu/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate the navigations element "home"', () => {

      studentPage.clickNavigationsElementHome();
      cy.url().should('include', 'https://fmi.chnu.edu.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

    
    it('Validate element "day form"', () => {

      studentPage.dayForm
        .should('be.visible')
        .should('contain', 'Денна форма')
        .invoke('removeAttr', 'target');
      studentPage.clickDayForm();

      cy.location('href', { timeout: 10000 }).should('include', 'http://fmi-schedule.chnu.edu.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "correspondence form"', () => {

      studentPage.correspondenceForm
        .should('contain', 'Заочна форма');
      studentPage.clickCorrespondenceForm();
        
      cy.url().should('include', 'https://fmi.chnu.edu.ua/studentu/navchannia/rozklad-zaniat-ta-sesii/zaochna-forma/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "for graduate students"', () => {

      studentPage.graduateStudents
        .should('be.visible')
        .should('contain', 'Для аспірантів')
        .invoke('removeAttr', 'target');
       
      studentPage.clickGraduateStudents();
      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate links to pdf files and external resources', () => {
      studentPage.pdfFiles.each(($link) => {

        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
        if (url.endsWith('.pdf')) {
          cy.request(url).then((response) => {
            cy.wrap(response.headers['content-type']).should('include', 'application/pdf');
          });
        } else {
          cy.request({
            url: url,
            followRedirect: true, 
          }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        }
      });

    });


    context('TESTING ELEMENT CORRESPONDENCE FORM IN CLASS SCHEDULE PAGE', () => {

      beforeEach(() => {
        studentPage.clickCorrespondenceForm();
      });


      it('Validate links to pdf files', () => {

        studentPage.pdfFiles.each(($link) => {

          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {

            cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

          });

        });

      });

    });


  });


  context('TESTING EDUCATIONAL PROGRAMS AND WORK PLANS', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/');

    });


    it('Validate links to "bachelor"', () => {
      studentPage.linksToBachelor
        .each(($el) => {
          const link = $el.attr('href');
          cy.request(link).its('status').should('eq', 200);
        });
    });


    it('Validate links to "master"', () => {
      studentPage.linksToMaster
        .each(($el) => {
          const link = $el.attr('href').trim();
          cy.request(link).its('status').should('eq', 200);
        });
    });

    
    it('Validate links to "postgraduate studies"', () => {
      studentPage.linksToPostgraduateStudies
        .each(($el) => {
          const link = $el.attr('href').trim();
          cy.request(link).its('status').should('eq', 200);
        });
    });


    it('Validate links to "view"', () => {
      studentPage.linksToView
        .each(($el) => {
          const link = $el.attr('href').trim();
          cy.request(link).its('status').should('eq', 200);
        });
    });


    it('Validate open the image in a larger format', () => {
      studentPage.photoElements.each(($link) => {
               cy.wrap($link).click();
               cy.wait(5000);
               studentPage.modalWindow.should('be.visible');
               studentPage.clickCloseImageButton();
               studentPage.modalWindow.should('not.exist');
           });
     });

  });


  context('TESTING SCIENTIFIC WORK', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/naukova-robota/');

    });


    it('Validate element "workshop"', () => {

      studentPage.WShopbutton
        .should('be.visible')
        .should('contain', 'Гуртки');
      studentPage.clickWorkShop();
      cy.url().should('include', 'https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/hurtky/');

      studentPage.main.within(() => {
        cy.contains("Кафедра математичного моделювання").should("exist");

        cy.contains("РОЗВ’ЯЗУВАННЯ ОЛІМПІАДНИХ ЗАДАЧ З ІНФОРМАТИКИ")
          .should("exist")
          .should("have.attr", "href")
          .and("include", "mathmod.chnu.edu.ua/studentu/hurtky/hurtok-rozv-iazuvannia-olimpiadnykh-zadach-z-informatyky");

        cy.contains("Кафедра прикладної математики та інформаційних технологій").should("exist");

        cy.contains("РОЗВ'ЯЗУВАННЯ ОЛІМПІАДНИХ ЗАДАЧ З ПРОГРАМУВАННЯ ТА ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ")
          .should("exist")
          .should("have.attr", "href")
          .and("include", "amit.chnu.edu.ua/studentu/hurtok/");

        cy.contains("Кафедра алгебри та інформатики").should("exist");

        cy.contains("Світ геометрії")
          .should("exist")
          .should("have.attr", "href")
          .and("include", "algebra.chnu.edu.ua/studentu/naukova-robota/studentskyi-naukovyi-hurtok-svit-heometrii/");

      });

    });


    it('Validate element "conferences"', () => {

      studentPage.testingConferences
        .should('contain', 'Конференції');
      studentPage.clickTestingConferences();
      
      cy.url().should('include', 'https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/studentski-konferentsii/');

    });


    it('Validate element "olympics"', () => {

      studentPage.testingOlympics
        .should('contain', 'Олімпіади');

      studentPage.clickTestingOlympics(); 

      cy.url().should('include', '/media/f0oasyzm/contest.png?width=35&height=40&format=webp&quality=80').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "competitions"', () => {

      studentPage.testingCompetitions
        .should('contain', 'Конкурси');
      studentPage.clickTestingCompetitions();
      cy.url().should('include', '/studentu/mozhlyvosti/naukova-robota/konkursy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    context('TESTING CONFERENCE ELEMENT IN SCIENTIFIC WORK PAGE', () =>{

      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/studentu/naukova-robota/studentski-konferentsii/');
  
      });


      it('Validate downloaded file', () =>{
        studentPage.clickBannerBtn();
        cy.readFile('cypress/downloads/zrazok-oformlennia-2024.doc', {timeout: 20000});
        cy.verifyDownload('zrazok-oformlennia-2024.doc')
      });


      it('Validate links to pdf files', () => {
        studentPage.pdfFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {

            cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

          });
        });

      });

    });


    context('TESTING OLIMPICS ELEMENT IN SCIENTIFIC WORK PAGE', () =>{

      beforeEach(()=>{
        studentPage.clickTestingOlympics();
      });


      it('Validate element first olympic tur', () => {

        studentPage.firstOlyTur
          .should('contain', 'І етап');
        studentPage.clickFirstOlyTur();
          
        cy.url().should('include', '/novyny/zahalni/i-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/').then((url) => {
  
          cy.request(url).its('status').should('eq', 200);
  
        });
  
      });


      it('Validate element second olympic tur', () => {

        studentPage.secondOlyTur
          .should('contain', 'IІ етап');
        studentPage.clickSecondOlyTur();
          
        cy.url().should('include', '/novyny/zahalni/ii-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/').then((url) => {
  
          cy.request(url).its('status').should('eq', 200);
  
        });
  
      });


      it('Validate open the image in a larger format', () => {
        studentPage.photoElements.each(($link) => {
                 cy.wrap($link).click();
                 cy.wait(5000);
                 studentPage.modalWindow.should('be.visible');
                 studentPage.clickCloseImageButton();
                 studentPage.modalWindow.should('not.exist');
             });
       });
  
    });


    context('TESTING COMPETITIONS ELEMENT IN SCIENTIFIC WORK PAGE', () =>{

      beforeEach(() =>{
        studentPage.clickTestingCompetitions();
      });


      it('Validate banner "button"', () => {
      
        studentPage.bannerBtn
          .should("exist")
          .invoke('removeAttr', 'target');
        studentPage.clickBannerBtn();
  
        cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi.chnu.edu.ua/media/txxnwfbq/422.pdf').wait(5000).then((url) => {
  
          cy.request(url).its('status').should('eq', 200);
  
        });
  
      });


      it('Validate links to pdf files and txt', () => {
        studentPage. pdfAndTxtFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {
            if (response.headers['content-type'].includes('application/pdf')) {
            } else if (response.headers['content-type'].includes('text/plain')) {
            } 
          });
        });
      });
  

      it('Validate the map of each card', () => {

        studentPage.cardLink.each(($el) => {
  
          cy.wrap($el)
            .should('have.class', 'collapsed')
            .click()
            .should('not.have.class', 'collapsed');
  
        });
      });

    });


  });


  context('TESTING ACADEMIC INTEGRITY', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/akademichna-dobrochesnist/');

    });


    it('Validate element "comments and suggestions box"', () => {

      studentPage.testingComSuggestBox
        .should('contain', 'Скринька зауважень та пропозицій');
      studentPage.clickTestingComSuggestBox(); 
      cy.url().should('include', '/studentu/akademichna-dobrochesnist/skrynka-zauvazhen-ta-propozytsii/');

      cy.get('.flex-container > :nth-child(2) > a')
        .should('have.attr', 'href', 'https://docs.google.com/forms/d/e/1FAIpQLScDrS07bnoVtAPClx85qfDFuwRUSpD7VXBNyc9QzajTQdVs-g/viewform');

    });


    it('Validate element "rules of academic integrity of chnu"', () => {

      studentPage.testingRulOfChNU
        .should('be.visible')
        .should('contain', 'Правила академічної доброчесності ЧНУ')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/pravyla-akademichnoi-dobrochesnosti/')
        .invoke('removeAttr', 'target');
       
      studentPage.clickTestingRulOfChNU();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/pravyla-akademichnoi-dobrochesnosti/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "code of ethics of chnu"', () => {

      studentPage.testingCodeEthicsChNU
        .should('be.visible')
        .should('contain', 'Етичний кодекс ЧНУ')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/etychnyi-kodeks/')
        .invoke('removeAttr', 'target');
      studentPage.clickTestingCodeEthicsChNU();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/etychnyi-kodeks-chernivetskoho-natsionalnoho-universytetu-imeni-yuriia-fedkovycha/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "provisions on the detection and prevention of plagiarism at chnu"', () => {

      studentPage.testingPlagiarismAtChNU
        .should('be.visible')
        .should('contain', 'Положення про виявлення і запобігання плагіату в ЧНУ')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/polozhennia-pro-vyiavlennia-ta-zapobihannia-akademichnomu-plahiatu/')
        .invoke('removeAttr', 'target');
        
      studentPage.clickTestingPlagiarismAtChNU();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/polozhennia-pro-vyiavlennia-ta-zapobihannia-akademichnomu-plahiatu/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "academic integrity (presentation)"', () => {

      studentPage.academicIntegritPresent
        .should('be.visible')
        .should('contain', 'Академічна доброчесність (перезентація)')
        .should('have.attr', 'href', '/media/5rnmehs1/akademichna-dobrochesnist.pdf')
        .invoke('removeAttr', 'target');
        
      studentPage.clickAcademicIntegritPresent();
      cy.location('href', { timeout: 10000 }).should('include', '/media/5rnmehs1/akademichna-dobrochesnist.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "committee on ethics and academic integrity"', () => {

      studentPage.committeeOnEthics
        .should('be.visible')
        .should('contain', 'Комісія з питань етики та академічної доброчесності')
        .should('have.attr', 'href', '/media/b4jlmg3i/7_komisiia-z-pytan-etyky_2023-2024.pdf')
        .invoke('removeAttr', 'target');

      studentPage.clickCommitteeOnEthics(); 

      cy.location('href', { timeout: 10000 }).should('include', '/media/b4jlmg3i/7_komisiia-z-pytan-etyky_2023-2024.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "measures to popularize academic integrity at chnu for 2023"', () => {

      studentPage.testingMeasoPularize
        .should('be.visible')
        .should('contain', 'Заходи з популяризації академічної доброчесності У ЧНУ на 2023 рік')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/media/3qpn35dk/zakhody-z-populiaryzatsii-akademichnoi-dobrochesnosti-u-chnu-na-2023-rik.pdf')
        .invoke('removeAttr', 'target');
      studentPage.clickTestingMeasoPularize();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/media/3qpn35dk/zakhody-z-populiaryzatsii-akademichnoi-dobrochesnosti-u-chnu-na-2023-rik.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "december 8, 2020"', () => {

      studentPage.testingDataFirst
        .should('be.visible')
        .should('contain', '8 грудня 2020 року')
        .should('have.attr', 'href', 'https://drive.google.com/drive/folders/16lLIWRVa25mKUlENSD18P76tIekILQaX')
        .invoke('removeAttr', 'target');
        
      studentPage.clickTestingDataFirst();

      cy.location('href', { timeout: 10000 }).should('include', 'https://drive.google.com/drive/folders/16lLIWRVa25mKUlENSD18P76tIekILQaX').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "september 16, 2021"', () => {

      studentPage.testingSecondDate
        .should('be.visible')
        .should('contain', '16 вересня 2021 року')
        .should('have.attr', 'href', 'https://drive.google.com/drive/folders/1imCHas75rHLjdl87FJKOyHp9h1ZsDM3F')
        .invoke('removeAttr', 'target');
        
      studentPage.clickTestingSecondDate();

      cy.location('href', { timeout: 10000 }).should('include', 'https://drive.google.com/drive/folders/1imCHas75rHLjdl87FJKOyHp9h1ZsDM3F').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "may 4, 2022"', () => {

      studentPage.testingThirdDate
        .should('be.visible')
        .should('contain', '4 травня 2022 року')
        .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/media/ef4oi3c3/pryntsypy-akademichnoi-dobrochesnosti.pdf')
        .invoke('removeAttr', 'target');
        
      studentPage.clickTestingThirdDate();

      cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/media/ef4oi3c3/pryntsypy-akademichnoi-dobrochesnosti.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate links to pdf files', () => {

      studentPage.pdfFiles.each(($link) => {

        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
        cy.request(url).then((response) => {

          cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

        });

      });

    });


  });


  context('TESTING STUDENT LIFE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/studentske-zhyttia/');

    });


    it('Validate element "fmi student parliament"', () => {

      studentPage.testingFMIParliament
        .should('be.visible')
        .should('contain', 'Студентський парламент ФМІ')
        .should('have.attr', 'href', 'https://www.facebook.com/people/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%9F%D0%B0%D1%80%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82/100022101372744/')
        .invoke('removeAttr', 'target');
      studentPage.clickTestingFMIParliament();
        

      cy.location('href', { timeout: 10000 })
        .should('include', 'https://www.facebook.com/people/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%9F%D0%B0%D1%80%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82/100022101372744/')
        .then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

    });


    it('Validate element "trade union organization of fmi students"', () => {

      studentPage.testingFmiStudents
        .should('be.visible')
        .should('contain', 'Профспілкова організація студентів ФМІ')
        .should('have.attr', 'href', 'https://www.facebook.com/fmi.org.ua')
        .invoke('removeAttr', 'target');
      studentPage.clickTestingFmiStudents();  

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.facebook.com/fmi.org.ua').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "youtube channel"', () => {

      studentPage.testingYTubeChannel
        .should('be.visible')
        .should('contain', 'YouTube канал')
        .should('have.attr', 'href', 'https://www.youtube.com/channel/UCSwiddjIebpJ7RRYolaTxtw/featured')
        .invoke('removeAttr', 'target');
       
      studentPage.clickTestingYTubeChannel();
      cy.location('href', { timeout: 10000 }).should('include', 'https://www.youtube.com/channel/UCSwiddjIebpJ7RRYolaTxtw/featured').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });
    
    });


    it('Validate open the image in a larger format', () => {
      studentPage.photoElements.each(($link) => {
               cy.wrap($link).click();
               cy.wait(5000);
               studentPage.modalWindow.should('be.visible');
               studentPage.clickCloseImageButton();
               studentPage.modalWindow.should('not.exist');
           });
     });


    it('Validate "read more" button', () => {
      studentPage.readMoreBtn.each(($container) => {
        const hrefAttribute = $container.attr('href');
        cy.wrap(hrefAttribute).should('exist').and('not.be.empty');
        cy.request(hrefAttribute).then((response) => {
          cy.wrap(response.status).should('equal', 200);
        });
      });


    });


  });


  context('TESTING CHOICE OF DISCIPLINES', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/vybir-dystsyplin/');

    });


    it('Validate the functionality of the banner "elective disciplines"', () => {

      studentPage.electiveDisciplinesBtn
        .should("exist")
        .should("have.attr", "href")
        .then((href) => {

          cy.visit(href);

        });

      cy.url().should("eq", 'https://www.chnu.edu.ua/navchannia/dlia-studentiv/kataloh-zahalnouniversytetskykh-vybirkovykh-dystsyplin/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate links to pdf files and txt', () => {
      studentPage. pdfAndTxtFiles.each(($link) => {
        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
        cy.request(url).then((response) => {
          if (response.headers['content-type'].includes('application/pdf')) {
          } else if (response.headers['content-type'].includes('text/plain')) {
          } 
        });
      });
    });



  });


  context('TESTING RATING OF STUDENTS', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/reitynh-studentiv/');

    });


    it('Validate element "rules for awarding and paying scholarships"', () => {

      studentPage.payingScholarships
        .should('be.visible')
        .should('contain', 'Правила призначення та виплати стипендій')
        .should('have.attr', 'href', '/media/vxmaagva/pravyla-pryznachennia-stypendii-protokol-7-vid-31-serpnia-2020-r.pdf')
        .invoke('removeAttr', 'target');
      studentPage.clickPayingScholarships();

      cy.location('href', { timeout: 10000 }).should('include', '/media/vxmaagva/pravyla-pryznachennia-stypendii-protokol-7-vid-31-serpnia-2020-r.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "scholarships of the president of Ukraine"', () => {

      studentPage.scholarshipsOfUkraine
        .should('be.visible')
        .should('contain', 'Стипендії Президента України')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/novyny/aktualni-novyny/studentam-chnu-pryznacheno-stypendii-prezydenta-ukrainy/')
        .invoke('removeAttr', 'target');
      studentPage.clickScholarshipsOfUkraine(); 
      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/novyny/aktualni-novyny/studentam-chnu-pryznacheno-stypendii-prezydenta-ukrainy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "Procedure for appointment and payment of social scholarships"', () => {

      studentPage.socialScholarships
        .should('be.visible')
        .should('contain', 'Порядок призначення та виплати соціальних стипендій')
        .should('have.attr', 'href', '/media/jojoqeio/1045-28122016.pdf')
        .invoke('removeAttr', 'target');
      studentPage.clickSocialScholarships();

      cy.location('href', { timeout: 10000 }).should('include', '/media/jojoqeio/1045-28122016.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate links to pdf files', () => {

      studentPage.pdfFiles.each(($link) => {

        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
        cy.request(url).then((response) => {

          cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

        });

      });

    });


  });


  context('TESTING TUITION FEEC', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/studentu/plata-za-navchannia/');

    });


    it('Validate the map of each card', () => {

      studentPage.cardLink.each(($el) => {

        cy.wrap($el)
          .should('have.class', 'collapsed')
          .click()
          .should('not.have.class', 'collapsed');

      });

    });


  });
  

});

