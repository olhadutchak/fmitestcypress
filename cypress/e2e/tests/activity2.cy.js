import activityPage from "../pages/activity2.page";

describe('TESTING ACTIVITY PAGE', () => {


  context('TESTING SCIENTIFIC ACTIVITY MENU ITEM', () => {

    context('TESTING CONFERENCE MENU ITEM', () =>{
      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/diialnist/naukova/konferentsii/');
  
      });
      
      it('Validate conference links', () => {
        activityPage.conferenceBannerButton
          .should('have.length', activityPage.constants.expectedLinks.length)
          .each(($el, index) => {
            const expectedHref = activityPage.constants.expectedLinks[index];
            cy.wrap($el).should('have.text', 'Сайт конференції');
            cy.wrap($el).should('have.attr', 'href', expectedHref);
            cy.request({
              url: expectedHref,
              failOnStatusCode: false, 
            }).then((response) => {
              expect(response.status).to.eq(200);
            });
          });
      });

    });

    context('TESTING SEMINAR OF THE CHERNIVTSI MATHEMATICAL SOCIETY', () => {
      beforeEach(() => {

        cy.visit('https://cmt.chnu.edu.ua/seminar-chernivetskoho-matematychnoho-tovarystva/?_gl=1*gdqat5*_ga*MTIxNjIzMTA5Mi4xNzI4ODQ4NzU4*_ga_Q6273NZQ6Z*MTczNjI3NzA0MC4xMjMuMS4xNzM2Mjc3MDQ1LjAuMC4w');
  
      });
      
      const testCardOpening = (index) => {
        it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
          activityPage.seminarCard.eq(index).within(() => {
            activityPage.seminarText
              .should('have.attr', 'style')
              .and('include', 'display: none');
          });
      
          activityPage.seminarCardHeader.eq(index).click();
          cy.wait(300);
      
          activityPage.seminarCard.eq(index).within(() => {
            activityPage.seminarText
              .should('not.have.attr', 'style', 'display: none;')
              .should('be.visible');
          });
        });
      };
      
      [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15].forEach(testCardOpening); 
      
    });

    context('TESTING THE POSTGRADUATE MENU ITEM', ()=>{
      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/diialnist/naukova/aspirantura/');
  
      });
      
    
      it('Validate links, targets, and texts of all items', () => {
        activityPage.postgraduateItemFlex.should('have.length', activityPage.constants.items.length);
    
        activityPage.constants.items.forEach((item, index) => {
          activityPage.postgraduateItemFlex.eq(index).within(() => {
            activityPage.postgraduateH2Title.should('contain', item.title);
          });
    
          activityPage.postgraduateItemFlex.eq(index)
            .should('have.attr', 'href', item.href)
            .and('have.attr', 'target', item.target);
        });
      });
    });

    context('TESTING THE SCIENTIFIC SCHOOLS MENU ITEM', () => {
      beforeEach(() => {

        cy.visit('https://fmi.chnu.edu.ua/diialnist/naukova/naukovi-shkoly/');
  
      });
      
      const testCardOpening = (index) => {
        it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
          activityPage.scientificCard.eq(index).within(() => {
            activityPage.scientificText
              .should('have.attr', 'style')
              .and('include', 'display: none');
          });
      
          activityPage.scientificCardHeader.eq(index).click();
          cy.wait(300);
      
          activityPage.scientificCard.eq(index).within(() => {
            activityPage.scientificText
              .should('not.have.attr', 'style', 'display: none;')
              .should('be.visible');
          });
        });
      };
      
      [0, 1, 2,3,4].forEach(testCardOpening); 
      
    });



  });


  context('TESTING INTERNATIONAL ACTIVITY MENU ITEM', () => {


    context('TESTING SHKOLY TA SYMPOZIUMY', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/mizhnarodna/shkoly-ta-sympoziumy/'); 
      });

      it('Validate image opening', () => {
        activityPage.lightboxFlexItem.each(($el) => {
          cy.wrap($el).scrollIntoView().click();
          activityPage.parvusSlide.should('be.visible');
          cy.wait(500);
          cy.get('body').type('{esc}');
          activityPage.parvusSlideT.should('not.exist');
          cy.wait(300); 
        });
      }); 
    });


    context('TESTING THE PROJECTS MENU ITEM', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/mizhnarodna/proiekty/');
      });

      it('Validate link mizhnarodna diialnist kafedry', () => {
        activityPage.iCareInUkraineLink.should('have.attr', 'href').and('include', 'https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/');
        activityPage.clickICareInUkraineLink();
        cy.url().should('include', 'https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/');
      });

      it('Validate link suporting school', () => {
        activityPage.suportinSchoolLink
          .should('have.attr', 'href')
          .and('include', 'https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/');
        activityPage.clickSuportingSchoolLink();
        cy.url().should('include', 'https://algebra.chnu.edu.ua/diialnist/mizhnarodna-diialnist-kafedry/');
      });

      it('Validate first partner link', () => {
        activityPage.partnearsFirst
          .should('have.attr', 'href', 'http://quaere.fmi.org.ua/#')
          .invoke('removeAttr', 'target');
        activityPage.clickPartnearsFirst();
        cy.location('href', { timeout: 10000 }).should('include', 'http://quaere.fmi.org.ua/#').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });
      });

      it('Validate second partner link', () => {
        activityPage.partnearsSecond
          .should('have.attr', 'href', 'http://tempus.chnu.edu.ua/')
          .invoke('removeAttr', 'target');
        activityPage.clickPartnearsSecond();
        cy.location('href', { timeout: 10000 }).should('include', 'http://tempus.chnu.edu.ua/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });
      });

    });


  });


  context('TESTING THE COLLABORATION MENU ITEM', () => {


    context('TESTING OF THE BMAN POINT', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/spivpratsia/bman/');
      });

      it('Validate link to Svitlana Bodnaruk personal page', () => {
        activityPage.getBodnarukLink
          .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/pro-kafedru/spivrobitnyky/bodnaruk-svitlana-bohdanivna/');

        activityPage.clickBodnarukLink();

        cy.url().should('include', 'algebra.chnu.edu.ua');
      });

      it('Validate link to official BMANYM website', () => {
        activityPage.getBmanOfficialSiteLink
          .should('have.attr', 'href', 'http://chernivtsi.man.gov.ua/');

        activityPage.clickBmanOfficialSiteLink();

        cy.url().should('include', 'chernivtsi.man.gov.ua');
      });

      it('Validate schedule PDF file is accessible and has correct format', () => {
        activityPage.getSchedulePdfLink
          .should('have.attr', 'href')
          .then((href) => {
            cy.request(href).then((response) => {
              expect(response.status).to.eq(200);
              expect(response.headers['content-type']).to.include('application/pdf');
            });
          });
      });
    });


    context('TESTING PARTNERS SUBMENU ITEM', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/spivpratsia/partnery/');
      });

      it('Validate links for partners', () => {
        activityPage.getPartnerLinks.each(($link) => {
          const href = $link.prop('href');
          cy.request({
            url: href,
            timeout: 18000,
            failOnStatusCode: false,
          }).then((response) => {
            if (href.includes('facebook.com')) {
              expect(response.status).to.be.oneOf([200, 400]);
              cy.log(`Facebook link tested with status: ${response.status}`);
            } else {
              expect(response.status).to.eq(200);
            }
          });
        });
      });

      it('Validate for file presence and responses', () => {
        cy.get('.file a.link').each(($el) => {
          const fileUrl = $el.attr('href');
          const fileName = $el.text();
          cy.log('Перевіряємо файл: ' + fileName);
          expect(fileUrl).to.include('.pdf');
          cy.request(fileUrl).then((response) => {
            expect(response.status).to.eq(200);
          });
        });
      });

      it('Validate image opening', () => {
        activityPage.lightboxFlexItem.each(($el) => {
          cy.wrap($el).scrollIntoView().click();
          activityPage.parvusSlide.should('be.visible');
          cy.wait(500);
          cy.get('body').type('{esc}');
          activityPage.parvusSlideT.should('not.exist');
          cy.wait(300);
        });
      });

      it('Validate download file and verify it', () => {
        cy.get('a[title="Anketa ФМІ"]').click();
        cy.wait(5000);
        cy.verifyDownload('anketa_fmi.doc', { timeout: 20000 });
      });

    });
  });


  context('TESTING EDUCATIONAL DIRECTION MENU ITEM', () => {


    context('TESTING EDUCATIONAL AND METHODOLOGICAL', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/navchalno-metodychna/');
      });

      it('Validate "composition of the methodical board " element', () => {
        activityPage.composition
          .should('have.attr', 'href', '/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf')
        activityPage.clickComposition();

        cy.location('href', { timeout: 10000 }).should('include', '/media/cwznspzq/spysok-chleniv-metodrady__22-23.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });

      it('Validate "work plan" element', () => {
        activityPage.workPlan.should('have.attr', 'href', '/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf')
        activityPage.clickWorkPlan();

        cy.location('href', { timeout: 10000 }).should('include', '/media/rbpf0ulf/plan_metod-rada-fmi_24_25.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

      });

      it('Validate "regulations" element', () => {
        activityPage.regulations.should('have.attr', 'href', '/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf')

        activityPage.clickRegulations();

        cy.location('href', { timeout: 10000 }).should('include', 'https://fmi.chnu.edu.ua/media/agqpgvmc/zbirnyk-normatyvnykh-dokumentiv-chnu_2021.pdf').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });
      });

      it('Validate regulatory documents (ChNU website)', () => {
        activityPage.clickNormDocsLink();
        cy.url().should('include', 'chnu.edu.ua/universytet/normatyvni-dokumenty');
      });
      

    });


    context('TESTING ORGANIZATIONAL AND EDUCATIONAL SUBMENUITEAM', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/');
      });

      it('Validate element "educational activities"', () => {
        activityPage.educational
          .should('be.visible')
          .should('contain', 'Виховні  заходи');

        activityPage.clickEducational();

        cy.url().should('include', '/media/spxogpw3/plan-zakhodiv-24-25.pdf').then((url) => {

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

      context('TESTING PHOTO REPORTS IN RGANIZATIONAL AND EDUCATIONAL PAGE', () => {
        beforeEach(() => {
          cy.visit('https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/fotozvity/');
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


  context('TESTING CONTINUOUS EDUCATION MENU ITEM', () => {

    beforeEach(() => {
      cy.visit('https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/?_gl=1*24sql*_ga*NTE1NzYyMjMxLjE3NDM4NjE0NjQ.*_ga_Q6273NZQ6Z*MTc0NDc1MDgwNi45LjAuMTc0NDc1MDgwNi4wLjAuMA..');
    });

    it('Validate opens each card in turn and goes back', () => {
      activityPage.imegeText.then($cards => {
        const total = $cards.length;
  
        for (let i = 0; i < total; i++) {
          activityPage.imegeText 
            .eq(i)
            .invoke('text')
            .then(text => {
              activityPage.imegeText.eq(i).click();
  
              cy.contains(text.trim(), { matchCase: false })
                .should('exist');
  
              cy.go('back');
            });
        }
      });
    });
  });


});

