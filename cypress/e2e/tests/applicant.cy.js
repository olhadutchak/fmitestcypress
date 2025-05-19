import applicantPage from "../pages/applicant.page";

describe('TESTING APPLICANT TEST', () => {


  context('TESTING CONDITIONS OF ENTRY', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/');

    });


    it('Validate the functionality of the "view" button for motivational letters', () => {
      applicantPage.clickViewButton()
      cy.url().should('include', 'https://fmi.chnu.edu.ua/abituriientu/motyvatsiini-lysty/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "road map"', () => {

      applicantPage.roadMap.should('contain', 'Дорожня карта');

      applicantPage.clickRoadMap(); 

      cy.url().should('include', 'https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate element "electronic cabinet"', () => {

      applicantPage.electronicCabinet.should('contain', 'Електронний кабінет');
      applicantPage.clickElectronicCabinet();
      cy.url().should('include', '/abituriientu/umovy-vstupu/reiestratsiia-elektronnoho-kabinetu-vstupnyka/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

    });


    it('Validate element "chat for applicants"', () => {

      applicantPage.chatForApplicants
        .should('be.visible')
        .should('contain', 'Чат для абітурієнтів')
        .should('have.attr', 'href', 'https://t.me/+ROuhsu1DSFI1YmMy')

    });
    

    it('Validate the map of each card', () => {

      applicantPage.cardLink.each(($el) => {

        cy.wrap($el)
          .should('have.class', 'collapsed')
          .click()
          .should('not.have.class', 'collapsed');

      });

    });


  });

  
  context('TESTING BACHELOR', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/bakalavrat/');

    });


    it('Validate links to "view"', () => {
      applicantPage.linksToView
        .each(($el) => {
          const link = $el.attr('href');
          cy.request(link).its('status').should('eq', 200);
        });
    });


    it('Validate specialty: 014.04 "secondary education (mathematics)"', () => {

      applicantPage.educationMathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Математика та інформатика»')
        .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/')
        .invoke('removeAttr', 'target');

      applicantPage.clickEducationMathematics();
       

      cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate specialty: 014.09 "secondary education (informatics)"', () => {

      applicantPage.educationInformatics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Інформатика та математика»')
        .should('have.attr', 'href', 'https://difeq.chnu.edu.ua/abituriientu/osvitno-profesiini-prohramy/')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickEducationInformatics();
      cy.location('href', { timeout: 10000 }).should('include', 'difeq.chnu.edu.ua/abituriientu/osvitni-prohramy').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate major: 111 "mathematics"', () => {

      applicantPage.mathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Математика»')
        .should('have.attr', 'href', 'http://math.chnu.edu.ua/wp-content/uploads/2021/11/BAKALAVR_OP_111_2021.pdf')
        .invoke('removeAttr', 'target');
       
      applicantPage.clickMathematics();
      cy.location('href', { timeout: 10000 }).should('include', 'https://math-analysis.chnu.edu.ua/').wait(500).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate specialty: 113 "applied mathematics"', () => {

      applicantPage.appliedMathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Технології програмування та комп’ютерне моделювання»')
        .should('have.attr', 'href', 'https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/')
        .invoke('removeAttr', 'target');
      
      applicantPage.clickAppliedMathematics();
      cy.location('href', { timeout: 10000 }).should('include', 'https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

   
    it('Validate specialty: 122 "computer science"', () => {

      applicantPage.computerScience
        .should('be.visible')
        .should('contain', 'Освітня програма: «Інформаційні технології та управління проектами»')
        .should('have.attr', 'href', 'https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickComputerScience();
      cy.location('href', { timeout: 10000 }).should('include', 'https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

    
    it('Validate specialty: 124 "system analysis"', () => {

      applicantPage.systemAnalysis
        .should('be.visible')
        .should('contain', 'Освітня програма: «Системний аналіз»')
        .should('have.attr', 'href', 'https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickSystemAnalysis();
      cy.location('href', { timeout: 10000 }).should('include', 'https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf').wait(5000).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


  });


  context('TESTING MAGISTRACY', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/mahistratura/');

    });


    it('Validate links to "view"', () => {
      applicantPage.linksToView
        .each(($el) => {
          const link = $el.attr('href');
          cy.request(link).its('status').should('eq', 200);
        });
    });


    it('Validate specialty: 014.04 "secondary education (mathematics)"', () => {

      applicantPage.educationMathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Математика та інформатика»')
        .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/')
        .invoke('removeAttr', 'target');
      applicantPage.clickEducationMathematics();

      cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate specialty: 014.09 "secondary education (informatics)"', () => {

      applicantPage.educationInformatics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Інформатика та математика»')
        .should('have.attr', 'href', 'https://difeq.chnu.edu.ua/abituriientu/osvitno-profesiini-prohramy/');
       
      applicantPage.clickEducationInformatics();

      cy.location('href').should('eq', 'https://difeq.chnu.edu.ua/abituriientu/osvitni-prohramy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

   
    it('Validate major: 111 "mathematics"', () => {

      applicantPage.mathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Математика»')
        .should('have.attr', 'href', 'http://math.chnu.edu.ua/wp-content/uploads/2021/11/BAKALAVR_OP_111_2021.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickMathematics();

      cy.location('href', { timeout: 10000 }).should('include', 'https://math-analysis.chnu.edu.ua/').wait(500).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate specialty: 113 "applied mathematics"', () => {

      applicantPage.appliedMathematics
        .should('be.visible')
        .should('contain', 'Освітня програма: «Технології програмування та комп’ютерне моделювання»')
        .should('have.attr', 'href', 'https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickAppliedMathematics();

      cy.location('href', { timeout: 10000 }).should('include', 'https://amit.chnu.edu.ua/navchannia/osvitni-prohramy/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

    
    it('Validate specialty: 122 "computer science"', () => {

      applicantPage.computerScience
        .should('be.visible')
        .should('contain', 'Освітня програма: «Інформаційні технології та управління проектами»')
        .should('have.attr', 'href', 'https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf')
        .invoke('removeAttr', 'target');

      applicantPage.clickComputerScience();
        
      cy.location('href', { timeout: 10000 }).should('include', 'https://mathmod.chnu.edu.ua/media/1721/op_knbak_2021.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

  
    it('Validate specialty: 124 "system analysis"', () => {

      applicantPage.systemAnalysis
        .should('be.visible')
        .should('contain', 'Освітня програма: «Системний аналіз»')
        .should('have.attr', 'href', 'https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickSystemAnalysis();

      cy.location('href', { timeout: 10000 }).should('include', 'https://mathmod.chnu.edu.ua/media/1723/op_sabak_2021.pdf').wait(5000).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


  });


  context('TESTING POSTGRADUATE STUDIES', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/aspirantura/');

    });


    it('Validate that all PDF links are accessible and correctly configured', () => {
      applicantPage.pdf.each(($link) => {
        const href = $link.attr('href');
        const fullUrl = href.startsWith('http') ? href : `https://fmi.chnu.edu.ua${href}`;
        if ($link.hasClass('link')) {
          cy.wrap($link).should('have.attr', 'target', '_blank');
        }
        cy.request(fullUrl).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.headers['content-type']).to.include('application/pdf');
        });
      });
    });
  });


  context('TESTING OPEN DAY', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/den-vidkrytykh-dverei/');

    });


    it('Validate the functionality of the banner "regulatory documents"', () => {

      applicantPage.regulatoryDocButton
        .should("exist")
        .should('have.attr', 'href', '/media/ratobv1d/fmi_29_042023.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickRegulatoryDocButton();
      cy.location('href', { timeout: 10000 }).should('include', '/media/ratobv1d/fmi_29_042023.pdf').wait(5000).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate the map of each card', () => {

      applicantPage.cardLink.each(($el) => {

        cy.wrap($el)
          .should('have.class', 'collapsed')
          .click()
          .should('not.have.class', 'collapsed');

      });

    });


    it('Validate all-Ukrainian mathematics olympiad 2022 for chnu applicants', () => {

      applicantPage.olympiadLink
        .should('be.visible')
        .should('contain', 'Всеукраїнська олімпіада 2022 з математики для абітурієнтів ЧНУ')
        .should('have.attr', 'href', '/media/nesjasxz/math_olympiad_2022_task_round_1.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickOlympiadLink();

      cy.location('href', { timeout: 10000 }).should('include', '/media/nesjasxz/math_olympiad_2022_task_round_1.pdf').wait(500).then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate all-Ukrainian mathematics olympiad 2021 for chnu applicants', () => {

      applicantPage.mathematicsOlympiad
        .should('be.visible')
        .should('contain', 'Всеукраїнська олімпіада 2021 з математики для абітурієнтів ЧНУ')
        .should('have.attr', 'href', '/media/zyzbmijo/olimpiada_2021.pdf')
        .invoke('removeAttr', 'target');
        
      applicantPage.clickMathematicsOlympiad();

      cy.location('href', { timeout: 10000 }).should('include', '/media/zyzbmijo/olimpiada_2021.pdf').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

  });


  context('TESTING ENTRY COMPANY', () => {

    beforeEach(() => {

      cy.visit('https://fmi.chnu.edu.ua/abituriientu/analiz-vstupnoi-kampanii/vstup-2023/');

    });
    

    it('Validate links to pdf files', () => {

      applicantPage.pdfFiles2.each(($link) => {

        const url = $link.attr('href');
        cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');

        cy.request(url).then((response) => {

          cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

        });

      });

    });


  });


  context('TESTING DORMITORY PAGE', () => {
    const elementsToValidate = applicantPage.constants.elementsToValidate
  
    beforeEach(() => {
      cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/hurtozhytok/');
    });
  
    it('Validate titles, links, targets, and accessibility of all dormitory items including video', () => {
      elementsToValidate.forEach((element, index) => {
        applicantPage.dormitoryLinks.eq(index).as('link');
        cy.get('@link').find('h2.title').should('contain', element.title);
        cy.get('@link').should('have.attr', 'href').and('include', element.hrefContains);
        cy.get('@link').should('have.attr', 'target', '_blank');
        if (!element.hrefContains.includes('.mp4')) {
          cy.get('@link').invoke('attr', 'href').then((url) => {
            cy.request({
              url,
              method: 'GET',
              failOnStatusCode: false,
            }).then((response) => {
              expect(response.status).to.eq(200);
            });
          });
        }
      });
    });
  });
  
});