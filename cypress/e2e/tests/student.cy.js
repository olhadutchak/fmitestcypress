import studentPage from "../pages/student.page";

describe('TESTING THE STUDENTS PAGE', () => {


  context('TESTING THE LEARNING SUB-ITEM', () => {


    context('TESTING THE SUB-ITEM SCHEDULE OF CLASSES AND SESSIONS', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/navchannia/rozklad-zaniat-ta-sesii/');
      });
      const elementsToValidate = studentPage.constants.elementsToValidate

      elementsToValidate.forEach(({ element, text, visible, locationInclude }) => {
        context(`Validates element: ${text}`, () => {
          it(`Validate of the existence of an element "${text}"`, () => {
            studentPage[element]
              .should(visible ? 'be.visible' : 'not.be.visible')
              .should('contain', text)
              .invoke('removeAttr', 'target');
          });
          it(`Validation link for an element "${text}"`, () => {
            studentPage[element]
              .should('exist')
              .invoke('removeAttr', 'target')
              .click();

            cy.location('href', { timeout: 10000 })
              .should('include', locationInclude)
              .then((url) => {
                cy.request(url).its('status').should('eq', 200);
              });
          });
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
    });


    context('TESTING EDUCATIONAL PROGRAMS AND WORK PLANS', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/');
      });

      const linkTests = studentPage.constants.linkTests;

      linkTests.forEach(({ selector, description }) => {
        it(`Validate links to "${description}"`, () => {
          selector().each(($el) => {
            const link = $el.attr('href').trim();
            cy.request(link).its('status').should('eq', 200);
          });
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


    context('TESTING INDIVIDUAL SCHEDULES', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/navchannia/indyvidualnyi-hrafik/');
      });

      const fileLinks = studentPage.constants.fileLinks;
      fileLinks.forEach(({ text, expectedExtension }) => {
        it(`Validate that "${text}" document links for individual schedules end type "${expectedExtension}"`, () => {
          cy.contains('a.link', text)
            .should('have.attr', 'href')
            .then((href) => {
              const fullUrl = href.startsWith('http') ? href : `https://fmi.chnu.edu.ua${href}`;
              expect(fullUrl).to.include(expectedExtension);
              cy.request(fullUrl).its('status').should('eq', 200);
            });
        });
      });
    });


    context('TESTING ELECTIVE SUBJECTS', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/navchannia/vybir-dystsyplin/');
      });

      it('Validate has a link to the catalog of university-wide elective subjects', () => {
         studentPage.electiveDisciplinesBtn
          .should('have.attr', 'href')
          .and('include', 'navchannia/uchasnykam-osvitnoho-protsesu/studentu/kataloh-zahalnouniversytetskykh-vybirkovykh-dystsyplin');
      });

      it('Validate has a link to the FMI catalog 2025-2026 academic year.', () => {
        cy.contains('Каталог вибіркових дисциплін ФМІ на 2025-2026 н. р.')
          .parent()
          .find('a.link')
          .should('have.attr', 'href')
          .and('include', 'docs.google.com/spreadsheets');
      });

      it('Validate has links to student survey results', () => {
        cy.contains('Результати опитування студентів ФМІ')
          .parent()
          .find('a.link')
          .should('have.attr', 'href')
          .and('include', '.pdf');
      });

      const courses = studentPage.constants.courses;
      courses.forEach(course => {
        it(`Validate has a syllabus: ${course.code} – ${course.name}`, () => {
          cy.contains(course.name)
            .should('have.attr', 'href')
            .and('include', course.href)
            .and('include', '.pdf');
        });
      });
    });
  });


  context('TESTING THE OF THE OPPORTUNITY SUB-ITEM', () => {


    context('TESTING SCIENTIFIC WORK PAGE', () => {
      
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/naukova-robota/');
      });
    
      it('Validates section and links', () => {
        studentPage.WShopbutton
          .should('be.visible')
          .and('contain', 'Гуртки');
        studentPage.clickWorkShop();
        cy.url().should('include', '/studentu/mozhlyvosti/naukova-robota/hurtky/');
    
        const expectedLinks = studentPage.constants.expectedLinks
    
        studentPage.main.within(() => {
          expectedLinks.forEach(({ title, hrefContains, dept }) => {
            cy.contains(dept).should('exist');
            cy.contains(title)
              .should('exist')
              .and('have.attr', 'href')
              .and('include', hrefContains);
          });
        });
      });
    
      const sections = studentPage.constants.sections;
    
      sections.forEach(({ name, element, click, urlIncludes }) => {
        it(`Validates section "${name}"`, () => {
          element().should('contain', name).invoke('removeAttr', 'target') ;
          click();
          cy.url().should('include', urlIncludes).then((url) => {
            cy.request(url).its('status').should('eq', 200);
          });
        });
      });
    });
    
    context('TESTING CONFERENCE SECTION', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/naukova-robota/studentski-konferentsii/');
      });
    
      it('Validates PDF links', () => {
        studentPage.pdfFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).its('headers').its('content-type').should('include', 'application/pdf');
        });
      });
    });
    
    context('TESTING OLYMPICS SECTION', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/studentski-olimpiady/');
      });
    
      const olympicTurs = studentPage.constants.olympicTurs;
    
      olympicTurs.forEach(({ name, element, click, urlIncludes }) => {
        it(`Validates "${name}" olympic tour`, () => {
          element().should('contain', name);
          click();
          cy.url().should('include', urlIncludes).then((url) => {
            cy.request(url).its('status').should('eq', 200);
          });
        });
      });
    
      it('Validates image open/close modal', () => {
        studentPage.photoElements.each(($el) => {
          cy.wrap($el).click();
          cy.wait(500);
          studentPage.modalWindow.should('be.visible');
          studentPage.clickCloseImageButton();
          studentPage.modalWindow.should('not.exist');
        });
      });
    });
    
    context('TESTING COMPETITIONS SECTION', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/konkursy/');
      });
    
      it('Validates banner PDF download', () => {
        studentPage.bannerBtn.invoke('removeAttr', 'target');
        studentPage.clickBannerBtn();
    
        cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi.chnu.edu.ua/media/txxnwfbq/422.pdf').then((url) => {
          cy.request(url).its('status').should('eq', 200);
        });
      });
    
      it('Validates PDF and TXT links', () => {
        studentPage.pdfAndTxtFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {
            const type = response.headers['content-type'];
            expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
          });
        });
      });
    
      it('Validates card expand/collapse behavior', () => {
        studentPage.cardLink.each(($card) => {
          cy.wrap($card).should('have.class', 'collapsed').click().should('not.have.class', 'collapsed');
        });
      });
    });

    context('TESTING MOBILITY', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/mozhlyvosti/mobilnist/');
      });

      it('Validate the "Presentation" block', () => {
        studentPage.presentationBlock.should('be.visible');
        studentPage.presentationText.should('be.visible');
        studentPage.bannerBtn
          .should('have.attr', 'href')
          .and('match', /\.pdf$/)
          .then(href => {
            cy.request(href).its('status').should('eq', 200);
          });
      });

      it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
        studentPage.newsItems.each(($el) => {
          studentPage.validateNewsItem($el);
        });
      });

    });
 
  });


  context('TESTING STUDENT ASSET SUB-ITEM', () => {


    context('TESTING STUDENT LIFE', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/studentskyi-aktyv/studentske-zhyttia/');
      });
      const sections = studentPage.constants.sectionsSecond;

      sections.forEach(({ name, element, click, urlIncludes }) => {
        it(`Validates section "${name}"`, () => {
          element().should('contain', name).invoke('removeAttr', 'target');
          click();
          cy.url().should('include', urlIncludes);
        });
      });

      it('Validates image open/close modal', () => {
        studentPage.photoElements.each(($el) => {
          cy.wrap($el).click();
          cy.wait(500);
          studentPage.modalWindow.should('be.visible');
          studentPage.clickCloseImageButton();
          studentPage.modalWindow.should('not.exist');
        });
      });

      it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
        studentPage.newsItems.each(($el) => {
          studentPage.validateNewsItem($el);
        });
      });

    });


  });


  context('TESTING IMPORTANT SUB-ITEM', () => {


    context('TESTING RATING OF STUDENTS', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/vazhlyve/reitynh-studentiv/');
      });

      const sectionsRatingOfstudents = studentPage.constants.sectionsRatingOfstudents;

      sectionsRatingOfstudents.forEach(({ name, element, click, urlIncludes }) => {
        it(`Validates "${name}"`, () => {
          element().should('contain', name);
          click();
          cy.url().should('include', urlIncludes).then((url) => {
            cy.request(url).its('status').should('eq', 200);
          });
        });
      });

      it('Validates PDF and TXT links', () => {
        studentPage.pdfAndTxtFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {
            const type = response.headers['content-type'];
            expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
          });
        });
      });
    });


    context('TESTING ACADEMIC INTEGRITY', () => {
      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/vazhlyve/akademichna-dobrochesnist/');
      });

      const sectionsAcademicIntegrity = studentPage.constants.sectionsAcademicIntegrity;

      sectionsAcademicIntegrity.forEach(({ name, element, click, urlIncludes }) => {
        it(`Validates "${name}"`, () => {
          element().should('contain', name);
          click();
          cy.url().should('include', urlIncludes).then((url) => {
            cy.request(url).its('status').should('eq', 200);
          });
        });
      });

      it('Validates PDF and TXT links', () => {
        studentPage.pdfAndTxtFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {
            const type = response.headers['content-type'];
            expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
          });
        });
      });

      it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
        studentPage.newsItemsSec.each(($el) => {
          studentPage.validateNewsItemSec($el);
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


  });

  
  context('TESTING USEFUL SUB-ITEM', () => {


    context('TESTING TUITION', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/korysne/plata-za-navchannia/');
      });

      const totalCards = studentPage.constants.totalCards;
        Array.from({ length: totalCards }).forEach((_, index) => {
          it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
            studentPage.scientificCard.eq(index).within(() => {
              studentPage.scientificText
                .should('have.attr', 'style')
                .and('include', 'display: none');
            });

            studentPage.scientificCardHeader.eq(index).click();
            cy.wait(300);

            studentPage.scientificCard.eq(index).within(() => {
              studentPage.scientificText
                .should('not.have.attr', 'style', 'display: none;')
                .should('be.visible');
            });
          });
        });
    });


    context('TESTING SAMPLE STATEMENTS', () => {

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/studentu/korysne/zrazky-zaiav/');
      });

      it('Validates PDF and TXT links', () => {
        studentPage.pdfAndTxtFiles.each(($link) => {
          const url = $link.attr('href');
          cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
          cy.request(url).then((response) => {
            const type = response.headers['content-type'];
            expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
          });
        });
      });

    });


    context('TESTING DORMITORY PAGE', () => {
      const elementsToValidate = studentPage.constants.elementsToValidateSec

      beforeEach(() => {
        cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/hurtozhytok/');
      });

      it('Validate titles, links, targets, and accessibility of all dormitory items including video', () => {
        elementsToValidate.forEach((element, index) => {
          studentPage.dormitoryLinks.eq(index).as('link');
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


}); 

