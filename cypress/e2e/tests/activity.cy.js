import activityPage from "../pages/activity.page";

describe('TESTING ACTIVITY PAGE', () => {

  context('TESTING RESEARCH ACTIVITIES', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/naukova/');

    });


    it('Validate element "council of young scientists"', () => {
      activityPage.counOfYouScientists
        .should('contain', 'Рада молодих вчених');
      activityPage.clickCounOfYouScientists();

      cy.url().should('include', 'https://fmi.chnu.edu.ua/diialnist/naukova/rada-molodykh-vchenykh/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "bukovinsk mathematical journal"', () => {
      activityPage.bukovinsk
        .should('be.visible')
        .should('contain', 'Буковинський математичний журнал')
        .should('have.attr', 'href', 'http://bmj.fmi.org.ua/index.php/adm')
        .invoke('removeAttr', 'target');
      activityPage.clickBukovinsk();

      cy.location('href', { timeout: 10000 }).should('include', 'https://bmj.fmi.org.ua/index.php/adm').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "conferences"', () => {
      activityPage.conferences
        .should('contain', 'Конференції')
        .should('have.attr', 'href', '/diialnist/naukova/konferentsii/');

      activityPage.clickConferences();

      cy.url().should('include', '/diialnist/naukova/konferentsii/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "seminars"', () => {
      activityPage.seminars
        .should('contain', 'Семінари')
        .should('have.attr', 'href', 'https://cmt.chnu.edu.ua/seminar-chernivetskoho-matematychnoho-tovarystva/')
        .should('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target');

      activityPage.clickSeminars();

      cy.location('href', { timeout: 10000 }).should('include', 'https://cmt.chnu.edu.ua/seminar-chernivetskoho-matematychnoho-tovarystva/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate the map of each card', () => {
      activityPage.card.each(($el) => {

        cy.wrap($el)
          .should('have.class', 'collapsed')
          .click()
          .should('not.have.class', 'collapsed');

      });

    });


    it('Validate open the correct pdf', () => {
      activityPage.link
        .should('have.attr', 'href', '/media/mtgfmcmn/spysok-aspirantiv-2024.pdf')
        .should('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target');

      activityPage.clickLink();

      cy.location('href', { timeout: 10000 }).should('include', '/media/mtgfmcmn/spysok-aspirantiv-2024.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    context('TESTING COUNCIL OF YOUNG SCIENTISTS IN RESEARCH ACTIVITY PAGE', () => {

      beforeEach(() => {

        activityPage.clickCounOfYouScientists();

      });


      it('Validate the map of each card', () => {
        activityPage.card.each(($el) => {

          cy.wrap($el)
            .should('have.class', 'collapsed')
            .click()
            .should('not.have.class', 'collapsed');

        });

      });


      it('Validate сlick on "Read more" link redirects to the correct page', () => {
        activityPage.readMore.each(($container) => {
          const hrefAttribute = $container.attr('href');
          cy.wrap(hrefAttribute).should('exist').and('not.be.empty');
          cy.request(hrefAttribute).then((response) => {
            cy.wrap(response.status).should('equal', 200);
          });
        });
      });


      it('Validate click more news button', () => {
        activityPage.moreNewsButton
          .should('contain', 'Більше новин')
          .should('have.attr', 'href', '/novyny/rada-molodykh-vchenykh-fmi/')
        activityPage.clickMoreNewsButton();

        cy.url().should('include', '/novyny/rada-molodykh-vchenykh-fmi/').then((url) => {

          cy.request(url).its('status').should('eq', 200);


        });

      });

    });


    context('TESTING CONFERENCE SECTION IN RESEARCH ACTIVITY PAGE', () => {

      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/diialnist/naukova/konferentsii/');

      });


      it('Validate banner button first conference', () => {
        activityPage.bannerButtonFirstCon
          .should("exist")
          .invoke('removeAttr', 'target');
        activityPage.clickBannerButtonFirstCon();

        cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi55.chnu.edu.ua/?_gl=1*exi4jn*_ga*MjA3MTUzOTY0Mi4xNzA4MjYxOTMw*_ga_Q6273NZQ6Z*MTcxMjI1MDI3My4yNi4xLjE3MTIyNTAyODQuMC4wLjA.').wait(5000).then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate banner button second conference', () => {
        activityPage.bannerButtonSecondCon
          .should("exist")
          .invoke('removeAttr', 'target');
        activityPage.clickBannerButtonSecondCon();

        cy.location('href', { timeout: 10000 }).should('eq', 'http://www.amit60.fmi.org.ua/').wait(5000).then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate banner button third conference', () => {
        activityPage.bannerButtonThirdCon
          .should("exist")
          .invoke('removeAttr', 'target');
        activityPage.clickBannerButtonThirdCon();

        cy.location('href', { timeout: 10000 }).should('eq', 'https://difeq-chnu-ua.blogspot.com/').wait(5000).then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate banner button fourth conference', () => {
        activityPage.bannerButtonFourthCon
          .should("exist")
          .invoke('removeAttr', 'target');
        activityPage.clickBannerButtonFourthCon();

        cy.location('href', { timeout: 10000 }).should('eq', 'http://sde100.fmi.org.ua/').wait(5000).then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


    });


  });


  context('TESTING INTERNATIONAL PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/mizhnarodna/');

    });


    it('Validate the navigations element', () => {
      activityPage.clickNavigationsFirst();

      cy.url().should('include', 'https://fmi.chnu.edu.ua/diialnist/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

    });


    it('Validate the navigations element "home"', () => {
      activityPage.clickNavigationsHome();
        
      cy.url().should('include', 'https://fmi.chnu.edu.ua/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

    });


    it('Validate banner button mobility', () => {
      activityPage.mobilityBannerButton
        .should("exist")
        .invoke('removeAttr', 'target');
        
      activityPage.clickMobilityBannerButton();

      cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi.chnu.edu.ua/media/5tngh45i/prezentatsiya_vmz_1903.pdf').wait(5000).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "projects"', () => {
      activityPage.projects
        .should('contain', 'Проєкти');

      activityPage.clickProjects()

      cy.url().should('include', '/diialnist/mizhnarodna/proiekty/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "symposia"', () => {
      activityPage.symposia
        .should('be.visible')
        .should('contain', 'Симпозіуми');

      activityPage.clickSymposia()

      cy.url().should('include', '/diialnist/mizhnarodna/sympoziumy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "mobility"', () => {
      activityPage.mobility
        .should('contain', 'Мобільність');

      activityPage.clickMobility()

      cy.url().should('include', '/diialnist/mizhnarodna/mobilnist/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "internship"', () => {
      activityPage.internship
        .should('contain', 'Стажування');

      activityPage.clickInternship()

      cy.url().should('include', '/diialnist/mizhnarodna/stazhuvannia/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    context('TESTING PROJECTS IN INTERNATIONAL PAGE', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/mizhnarodna/proiekty/');
      });


      it('Validate partner first', () => {
        activityPage.partnearsFirst
          .should('have.attr', 'href', 'http://quaere.fmi.org.ua/#')
          .invoke('removeAttr', 'target');

        activityPage.clickOnPartnearsFirst();

        cy.location('href', { timeout: 10000 }).should('include', 'http://quaere.fmi.org.ua/#').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate partner second', () => {
        activityPage.partnearsSecond
          .should('have.attr', 'href', 'http://tempus.chnu.edu.ua/')
          .invoke('removeAttr', 'target');

        activityPage.clickOnPartnearsSecond();

        cy.location('href', { timeout: 10000 }).should('include', 'http://tempus.chnu.edu.ua/?_gl=1*11bv2qb*_ga*NjUwMzg3NjI3LjE2NTQ4OTIyNTQ.*_ga_Q6273NZQ6Z*MTcxMjMxMDUyMC40Ny4xLjE3MTIzMTA1MzYuMC4wLjA.').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });

    });


    context('TESTING SYMPOSIA ELEMENT IN INTERNATIONAL PAGE', () => {

      beforeEach(() => {

        activityPage.clickSymposia();

      });


      it('Validate open the image in a larger format', () => {
        activityPage.photoElements.each(($link) => {
          cy.wrap($link).click();
          cy.wait(5000);
          activityPage.modalWindow.should('be.visible');

          activityPage.clickCloseImageButton();

          activityPage.modalWindow.should('not.exist');
        });

      });


    });



  });
  
  context.only('EDUCATIONAL DIRECTION', () => {

    context('TESTING EDUCATIONAL AND METHODICAL ACTIVITIES', () => {

      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/diialnist/navchalno-metodychna/')

      });


      it('Validate the navigations element', () => {
        activityPage.clicknaviElement();
        cy.url().should('include', 'https://fmi.chnu.edu.ua/diialnist/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate "composition of the methodical board " element', () => {
        activityPage.composition
          .should('contain', 'Склад методичної ради')
          .should('have.attr', 'href', '/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf')
          .should('have.attr', 'target', '_blank')
          .invoke('removeAttr', 'target');

        activityPage.clickComposition();

        cy.location('href', { timeout: 10000 }).should('include', '/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate "work plan" element', () => {
        activityPage.workPlan
          .should('contain', 'План роботи')
          .should('have.attr', 'href', '/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf')
          .invoke('removeAttr', 'target');
        activityPage.clickWorkPlan();

        cy.location('href', { timeout: 10000 }).should('include', '/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate "regulations" element', () => {
        activityPage.regulations
          .should('contain', 'Нормативні документи')
          .should('have.attr', 'href', '/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf')
          .invoke('removeAttr', 'target');
        activityPage.clickRegulations();

        cy.location('href', { timeout: 10000 }).should('include', 'https://fmi.chnu.edu.ua/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate link to first pdf file', () => {
        activityPage.firstPDF
          .should('exist')
          .should('have.attr', 'href', '/media/hmqlqxkc/metodychni-rekomendatsii-2023-2024-nr.pdf')
          .invoke('removeAttr', 'target');
        activityPage.clickFirstPDF();

        cy.location('href', { timeout: 10000 }).should('include', '/media/hmqlqxkc/metodychni-rekomendatsii-2023-2024-nr.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);
  
        });

      });

 
      it('Validate link to second pdf file', () => {
        activityPage.secondPDF
          .should('exist')
          .should('have.attr', 'href', '/media/sg3a2x5q/metodychni_rekomendatsii_cherven_2023.pdf')
          .invoke('removeAttr', 'target');

        activityPage.clickSecondPDF();


        cy.location('href', { timeout: 10000 }).should('include', '/media/sg3a2x5q/metodychni_rekomendatsii_cherven_2023.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


      it('Validate link to third pdf file', () => {
        activityPage.thirdPDF
          .should('exist')
          .should('have.attr', 'href', '/media/dmffkvvn/metodychni-porady-na-2022-2023-nr_chnu.pdf')
          .invoke('removeAttr', 'target');

        activityPage.clickThirdPDF();


        cy.location('href', { timeout: 10000 }).should('include', '/media/dmffkvvn/metodychni-porady-na-2022-2023-nr_chnu.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });


    });


  context('TESTING ORGANIZATIONAL AND EDUCATIONAL PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/');

    });


    it('Validate the navigations element', () => {
      activityPage.clickNavigationsFirst();

      cy.url().should('include', 'https://fmi.chnu.edu.ua/diialnist/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate the navigations element "Home"', () => {
      activityPage.clickNavigationsHome();

      cy.url().should('include', 'https://fmi.chnu.edu.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    


    it('Validate element "board of curators"', () => {
      activityPage.board
        .should('be.visible')
        .should('contain', 'Рада кураторів');

      activityPage.clickBoard();

      cy.url().should('include', '/diialnist/orhanizatsiino-vykhovna/rada-kuratoriv/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "photo reports"', () => {
      activityPage.photoReports
        .should('be.visible')
        .should('contain', 'Фотозвіти');

      activityPage.clickPhotoReports();

      cy.url().should('include', '/diialnist/orhanizatsiino-vykhovna/fotozvity/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    context('TESTING EDUCATIONAL ACTIVITIES ELEMENT IN RGANIZATIONAL AND EDUCATIONAL PAGE', () => {

      it('Validate element "educational activities"', () => {
        activityPage.educational
          .should('be.visible')
          .should('contain', 'Виховні  заходи');
  
        activityPage.clickEducational();
  
        cy.url().should('include', '/media/spxogpw3/plan-zakhodiv-24-25.pdf').then((url) => {
  
          cy.request(url).its('status').should('eq', 200);
  
        });
  
      });

    });


    context('TESTING PHOTO REPORTS IN RGANIZATIONAL AND EDUCATIONAL PAGE', () => {

      beforeEach(() => {
        activityPage.clickPhotoReports();
      });


      it('Validate open the image in a larger format', () => {
        activityPage.photoElements.each(($link) => {
          cy.wrap($link).click();
          cy.wait(500);
          activityPage.modalWindow.should('be.visible');

          activityPage.clickCloseImageButton();

          activityPage.modalWindow.should('not.exist');
        });

      });

    });


  });
});


  context('TESTING REGULATIONS PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/normatyvni-dokumenty/');

    });


    it('Validate the functionality of the banner "regulatory documents"', () => {
      activityPage.regulatoryDoc
        .should("exist")
        .should("have.attr", "href")
        .then((href) => {

          cy.visit(href);

        });

      cy.url().should("eq", 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


  });


  context('TESTING COOPERATION PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/spivpratsia/');

    });


    it('Validate links to pdf files', () => {
      activityPage.pdfdoclink.each(($link) => {
        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');

        cy.request({ url, timeout: 120000 }).then((response) => {

          cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

        });

      });



    });


    it('Validate links for partners', () => {
      activityPage.partnersLinks.each(($link) => {
        const href = $link.prop('href');
        cy.request({ url: href, timeout: 180000 }).its('status').should('eq', 200);

      });

    });


    it('Validate open the image in a larger format', () => {
      activityPage.photoElements.each(($link) => {
        cy.wrap($link).click();
        cy.wait(5000);
        activityPage.modalWindow.should('be.visible');

        activityPage.clickCloseImageButton();

        activityPage.modalWindow.should('not.exist');
      });

    });


    it('Validate downloaded file', () => {
      activityPage.clickFileAnketa();

      cy.readFile('cypress/downloads/anketa_fmi.doc', { timeout: 20000 });
      cy.verifyDownload('anketa_fmi.doc')

    });

  });


  context('TESTING BMAN PAGE', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/diialnist/bman/');

    });


    it('Validate links the official site of BMAN', () => {
      activityPage.clickTheOfficialSiteBMANlink();

      cy.url().should('include', 'https://chernivtsi.man.gov.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate links to pdf files', () => {

      activityPage.pdfdoclink.each(($link) => {

        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');

        cy.request(url).then((response) => {
          cy.wrap(response.headers['content-type']).should('include', 'application/pdf');
        });

      });

    });

  });

});