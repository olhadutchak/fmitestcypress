import homePage from "../pages/home.page";

describe('TESTING HOME PAGE', () => {

  beforeEach(() => {
    cy.visit('https://fmi.chnu.edu.ua');

  });


  context('TESTING TOP PANEL', () => {
    
    
    it('Validate facebook link', () => {
      homePage.linkFacebook
        .should('have.attr', 'href', 'https://www.facebook.com/fmi.org.ua/')
        .and('have.attr', 'title', 'Факультет математики та інформатики ЧНУ ім. Ю. Федьковича')
        .invoke('removeAttr', 'target');
      homePage.clickFacebookLink();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.facebook.com/fmi.org.ua/').then((url) => {
        cy.request(url).its('status').should('eq', 200); 

      });

    });


    it('Validate instagram link ', () => {
      homePage.linkInstagram
        .should('have.attr', 'href', 'https://www.instagram.com/m._i_.f/')
        .and('have.attr', 'title', 'Профбюро студентів ФМІ')
        .invoke('removeAttr', 'target');

      homePage.clickInstagramLink();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.instagram.com/m._i_.f/').then((url) => {
        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate youtube link ', () => {

      homePage.linkYoutube
        .should('have.attr', 'href', 'https://youtube.com/@MathTube_')
        .and('have.attr', 'title', 'Youtube')
        .invoke('removeAttr', 'target');

      homePage.clickYoutubeLink();

      cy.location('href', { timeout: 10000 }).should('include', 'https://www.youtube.com/@MathTube_').then((url) => {
        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate the mail', () => {
      homePage.mail
        .should('be.visible')
        .invoke('attr', 'href')
        .then((emailLink) => {
          cy.request(emailLink).its('status').should('eq', 200);

        });

    });

  });
  
  
  context('TESTING NAVBAR', () => {


    it('Validate the opening of the search field', () => {
      homePage.searchbtn.should('be.visible');
      homePage.clickSearchButton();
      homePage.searchwrp.should('have.class', 'show');
      homePage.searchinput.should('be.visible');
      homePage.typeSearchTermForSearch('Новини');
      cy.url().should('not.eq', '@beforeSearchUrl');

    });


    it('Validate logo', () => {
      homePage.logolink
        .should('have.attr', 'href', '/')
        .and('have.attr', 'title', 'Факультет математики та інформатики');
    
      homePage.clicklogolink();
    
      cy.url().should('include', '/').then((url) => {
        cy.request(url).its('status').should('eq', 200);

      });

    });
    

    it('Validate the news sub-menu', () => {
      homePage.mouseoverNewsMenu();
      homePage.subNewsMenu.should('exist');

      homePage.constants.newsMenuItems.forEach((item, index) => {
        homePage.subNewsMenu.should('contain', item);
        homePage.clickMenuItem(item);
        homePage.verifyUrlContains(homePage.constants.newsExpectedLinks[index]);

      });
      
    });
    

    it('Validate the activities menu item: categories and links', () => {
      homePage.activityMenu.should('be.visible');
      homePage.clickActivityMenu();
      homePage.makeTheSubmenuVisble(homePage.subActivityMenu);

      homePage.constants.activityMenuItems.forEach(({ title }) => {
        homePage.verifyCategoryContains(title)
      });

      homePage.constants.activityMenuItems.forEach(({ items }) => {
        items.forEach(({ text, url }) => {
          homePage.clickSubmenuSubItems(homePage.activityMenu, text);
          cy.on('uncaught:exception', () => false); 
          homePage.verifyUrlContains(url); 
          cy.visit(homePage.constants.homeLink);

        });

      });

    });

    
    it('Validate the student menu item: categories and links', () => {
      homePage.studentMenu.should('be.visible');
      homePage.clickStudentMenu();
      homePage.makeTheSubmenuVisble(homePage.subStudentMenu);

      homePage.constants.studentMenuItems.forEach(({ title }) => {
        homePage.verifyCategoryContains(title)
      });

      homePage.constants.studentMenuItems.forEach(({ items }) => {
        items.forEach(({ text, url }) => {
          homePage.clickSubmenuSubItems(homePage.studentMenu, text);
          cy.on('uncaught:exception', () => false); 
          homePage.verifyUrlContains(url); 
          cy.visit(homePage.constants.homeLink);

        });

      });

    });
    
    
    it('Validate the applicant sub-menu', () => {
      homePage.mouseoverApplicantMenu();
      homePage.subApplicantMenu.should('exist');

      homePage.constants.applicantMenuItems.forEach(({ text, url }) => {
        homePage.clickSubmenuSubItems(homePage.applicantMenu, text);
        homePage.verifyUrlContains(url);
        cy.visit(homePage.constants.homeLink);

      });

    });


    it('Validate the department  sub-menu', () => {
      homePage.mouseoverDepartmentMenu();
      homePage.subDepartmentMenu.should('exist');

      homePage.constants.departmentMenuItems.forEach((item, index) => {
        homePage.subDepartmentMenu.should('contain', item);
        homePage.clickMenuItem(item);
        homePage.verifyUrlContains(homePage.constants.departmentExpectedLinks[index]);
        cy.visit(homePage.constants.homeLink);

      });

    });


    it('Validate the about us sub-menu: categories and links', () => {
      homePage.aboutUsMenu.should('be.visible');
      homePage.clickAboutUsMenu();
      homePage.makeTheSubmenuVisble(homePage.subAboutUsMenu);

      homePage.constants.aboutMenuItems.forEach(({ title }) => {
        homePage.verifyCategoryContains(title)
      });

      homePage.constants.aboutMenuItems.forEach(({ items }) => {
        items.forEach(({ text, url }) => {
          homePage.clickSubmenuSubItems(homePage.aboutUsMenu, text);
          cy.on('uncaught:exception', () => false); 
          homePage.verifyUrlContains(url); 
          cy.visit(homePage.constants.homeLink);
        });

      });

    });


    context('TESTING THE SEARCH FUNCTION', () => {


      it('Validate the opening of the search field', () => {
        homePage.clickSearchButton();
        homePage.typeSearchTermForSearch('ррптпатк');
        cy.url().should('contains', 'https://fmi.chnu.edu.ua/poshuk/?query=');
        cy.contains('Нічого не знайдено.').should('exist');
      });


      it('Validate the of the search result', () => {
        homePage.clickSearchButton();
        homePage.typeSearchTermForSearch('Скутар');
        cy.get('body').then($body => {
          if ($body.find('.pagination-part').length > 0) {
            homePage.numberOfResultPage.then(($lastPage) => {
              const lastPageText = $lastPage.text().trim();
              const totalPages = parseInt(lastPageText, 10);
              cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
                homePage.preresultSection.contains(String(pageNumber)).click();
                homePage.resultSection.each(($link) => {
                  const relativeUrl = $link.attr('href');
                  const fullUrl = `${homePage.constants.homeLink}${relativeUrl}`;
                  cy.visit(fullUrl);
                  cy.contains('Скутар').should('exist');
                  cy.go("back");
                  cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
                    cy.wrap(response.status).should('eq', 200);
                  });
                });
              });
            });
          } else {
            homePage.resultSection.each(($link) => {
              const relativeUrl = $link.attr('href');
              const fullUrl = `${homePage.constants.homeLink}${relativeUrl}`;
              cy.visit(fullUrl);
              cy.contains('Краснокутська').should('exist');
              cy.go("back");
              cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
                cy.wrap(response.status).should('eq', 200);
              });
            });
          }
        });
      });

    });

  });


  context('TESTING FLEX CONTEINERS', () => {


    it('Validate banner "buttonFirst"', () => {
      homePage.bannerBtnFirst
        .should("exist")
        .invoke('removeAttr', 'target');

      homePage.clickBannerButton(homePage.bannerBtnFirst);

      cy.location('href', { timeout: 10000 }).should('eq', homePage.constants.linkBannerBtnFirst);
      cy.request(homePage.constants.linkBannerBtnFirst).its('status').should('eq', 200);
    });


    it('Validate banner "buttonSecond"', () => {
      homePage.bannerBtnSecond
        .should("exist")
        .invoke('removeAttr', 'target');

      homePage.clickBannerButton(homePage.bannerBtnSecond);

      cy.location('href', { timeout: 10000 }).should('eq', homePage.constants.linkBannerBtnSecond);
      cy.request(homePage.constants.linkBannerBtnSecond).its('status').should('eq', 200);
    });


    it('Validate links in latest events', () => {
      homePage.linksInEvents.should('have.length.gt', 0).then((links) => {
        for (let i = 0; i < links.length; i++) {
          homePage.linksInEvents.eq(i).invoke('removeAttr', 'target');
          const currentUrl = cy.config('baseUrl') + links[i].getAttribute('href');
          homePage.clickLinksInEventsAtIndex(i);
          cy.url().should('not.eq', currentUrl);
          cy.go('back');
        }
      });
    });


    it('Validate flex-2-columns element 1', () => {
      homePage.flex2Columnsfirs
        .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/abituriientu/kursy-pidhotovky-do-zno-ta-nmt-z-matematyky/kursy-pidhotovky-do-zno-nmt-2024-layfkhaky-vid-matfaku/')
        .invoke('removeAttr', 'target');
      homePage.clickFlex2Columnsfirs();

      cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/abituriientu/kursy-pidhotovky-do-zno-ta-nmt-z-matematyky/kursy-pidhotovky-do-zno-nmt-2024-layfkhaky-vid-matfaku/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate flex-2-columns element 2', () => {
      homePage.flex2ColumnsSec
        .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/')
        .invoke('removeAttr', 'target');

      homePage.clickflex2ColumnsSec();

      cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/').then((url) => {
        cy.request(url).its('status').should('eq', 200);
      });

    });

  
    it('Validate aria-label change on button click 1', () => {
      homePage.clickPrevButton();
      homePage.prevButton.should('have.attr', 'aria-label', 'Previous slide');

    });


    it('Validate aria-label change on button click 2', () => {
      homePage.clickNextButton();
      homePage.nextButton.should('have.attr', 'aria-label', 'Go to first slide');

    });


    it('Validate links for partners', () => {
      homePage.partnersLinks.each(($link) => {
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


    it('Validate pagination buttons', () => {
      homePage.clickSplidPaginatioPagePartners();
      homePage.splidPaginatioPagePartners.should('have.class', 'is-active');
      homePage.clickSplideArrowNextBtnPartners();
      homePage.spliPdeaginationPageSecond.should('have.class', 'is-active');
      homePage.clickSplideArrowPrevBtnPartners();
      homePage.splidPaginatioPagePartners.should('have.class', 'is-active');
    });

    
    it('Validate project first', () => {
      homePage.partnearsFirst
        .should('have.attr', 'href', 'http://quaere.fmi.org.ua/#')
        .invoke('removeAttr', 'target');

      homePage.clickOnPartnearsFirst();

      cy.location('href', { timeout: 10000 }).should('include', 'http://quaere.fmi.org.ua/#').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

    
    it('Validate project second', () => {
      homePage.partnearsSecond
        .should('have.attr', 'href', 'http://tempus.chnu.edu.ua/')
        .invoke('removeAttr', 'target');

      homePage.clickOnPartnearsSecond();
      
      cy.location('href', { timeout: 10000 }).should('include', 'http://tempus.chnu.edu.ua/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate visibility of scrollUp button after scrolling down', () => {
      let buttonVisible = false;
      cy.get('body').then(($body) => {
        const bodyHeight = $body.height();
        while (!buttonVisible) {
          cy.wait(200);
          cy.scrollTo('bottom', { duration: 2000 });
          homePage.scrollBtn.then(($button) => {
            buttonVisible = $button.is(':visible');
          });
          if (cy.window().then((win) => win.scrollY + win.innerHeight >= bodyHeight)) {
            break;
          }
        }
      });
      homePage.scrollBtn.should('have.class', 'show');
    });


    it('Validate activation of privacy policy after button click', () => {
      homePage.privacybutton.should('have.class', 'active');
      homePage.clickMarginbottom();
      cy.url().should('include', 'https://www.chnu.edu.ua/polityka-konfidentsiinosti/');
      cy.go('back');
      homePage.clickAcceptAllPrivacyPolicy();
      homePage.policyFingerprintButton.should('be.visible');

    });

  });


  context("TESTING FOOTER ELEMENTS", () => {

  
    it('Validate useful links "chnu"', () => {
      homePage.linksCHNU
        .should('exist')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/')
        .and('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target');

      homePage.clickLinksCHNU();
        
      cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/').then((url) => {
        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate useful links "moodle"', () => {
      homePage.linksMoodle
        .should('exist')
        .should('have.attr', 'href', 'https://moodle.chnu.edu.ua/login/index.php')
        .and('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target');

      homePage.clicklinksMoodle();
        
      cy.location('href', { timeout: 10000 }).should('include', 'https://moodle.chnu.edu.ua/login/index.php').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });


    it('Validate useful links "admission"', () => {
      homePage.linksAdmission
        .should('exist')
        .should('have.attr', 'href', '/abituriientu/');

      homePage.clicklinksAdmission();

      cy.url().should('include', '/abituriientu/').then((url) => {

          cy.request(url).its('status').should('eq', 200);

        });

    });


    it('Validate contacts "phoneNumber"', () => {
      homePage.contactsPhoneNumber
        .should('exist')
        .should('have.text', homePage.constants.phoneNumber)
        .should('have.attr', 'href', 'tel:(0372) 58-48-80');

    });


    it('Validate the transfer to the mail', () => {
      homePage.footerEmail
        .should('be.visible')
        .invoke('attr', 'href')
        .then((emailLink) => {
          cy.request(emailLink).its('status').should('eq', 200);
        });
    });


    it('Validate the transfer to the privacy settings', () => {
      homePage.privacySettings
        .should('exist')
        .should('have.attr', 'href', 'https://www.chnu.edu.ua/polityka-konfidentsiinosti/');

      homePage.clickPrivacySettings(); 

      cy.url().should('include', 'https://www.chnu.edu.ua/polityka-konfidentsiinosti/').then((url) => {

        cy.request(url).its('status').should('eq', 200);

      });

    });

  });


  context('TESTING SUPPORT TEAM', () => {


    it('Validate the transfer to the mail1', () => {
      homePage.mail1
        .should('be.visible')
        .invoke('attr', 'href')
        .should('eq', 'mailto:alfaolga1@gmail.com');
    });


    it('Validate the transfer to the mail2', () => {
      homePage.mail2
        .should('be.visible')
        .invoke('attr', 'href')
        .then((emailLink) => {
          cy.request(emailLink).its('status').should('eq', 200);
        });
    });
    

    it('Validate the transfer to the mail3', () => {
      homePage.mail3
        .should('be.visible')
        .invoke('attr', 'href')
        .then((emailLink) => {
          cy.request(emailLink).its('status').should('eq', 200);
        });
    });

  });

});