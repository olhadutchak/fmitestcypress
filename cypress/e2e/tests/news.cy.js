import newsPage from '../pages/news.page';

describe('TESTING NEWS PAGE', () => {

  context('TESTING NEWS ALL PAGE', () => {

    beforeEach(() => {
      cy.visit(newsPage.constants.all);
    });

    const totalPages = newsPage.constants.totalPagesConst;

    it('Validates all read next links on multiple pages on news all page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = encodeURI(`https://fmi.chnu.edu.ua${relativeUrl}`);
          cy.visit(fullUrl); 
          newsPage.mainSection.contains(/Загальні|Оголошення|Події|Студенту|Викладачу|Вітання|Рада стейкхолдерів ФМІ/).should('exist');
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });

    
  });


  context('TESTING GENERAL NEWS PAGE', () => {

    beforeEach(() => {
      cy.visit(newsPage.constants.general);
    });

    const totalPages = newsPage.constants.generalTotalPagesConst;

    it('Validates all read next links on multiple pages on general news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          newsPage.mainSection.contains('Загальні').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });


  });


  context('TESTING ADVERTISEMENT NEWS PAGE', () => {

    beforeEach(() => {
      cy.visit(newsPage.constants.advertisement);
    });

    const totalPages = newsPage.constants.advertisementTotalPagesConst;

    it('Validates all read next links on multiple pages on advertisement news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = encodeURI(`https://fmi.chnu.edu.ua${relativeUrl}`); 
          cy.visit(fullUrl); 
          newsPage.mainSection.contains('Оголошення').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });


  });


  context('TESTING EVENTS NEWS PAGE', () => {

    beforeEach(() => {
      cy.visit(newsPage.constants.events);
    });

    const totalPages = newsPage.constants.eventsTotalPagesConst;

    it('Validates all read next links on multiple pages on events news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          newsPage.mainSection.contains('Події').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });


  });


  context('TESTING TO STUDENTS NEWS PAGE', () => {

    beforeEach(() => {
      cy.visit(newsPage.constants.students);
    });
  
    const totalPages = newsPage.constants.studentsTotalPagesConst;
  
    it('Validates all read next links on multiple pages on students news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          newsPage.mainSection.contains('Студенту').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    }); 
  });
  

  context('TESTING TO THE TEACHERS SECTION', () => {
    
    beforeEach(() => {
      cy.visit(newsPage.constants.teachers);
    });

    const totalPages = newsPage.constants.teachersTotalPagesConst || 1; 

    it('Validates all read next links on multiple pages on teachers news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        if (totalPages > 1) {
          newsPage.preNewsSection.contains(String(pageNumber)).click();
        }
        newsPage.newsSection.each(($link) => {
          const fullUrl = `https://fmi.chnu.edu.ua${$link.attr('href')}`;
          cy.visit(fullUrl);
          newsPage.mainSection.contains('Викладачу').should('exist');
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).its('status').should('eq', 200);
        });
      });
    });
   
  });


  context('TESTING TO GREETING NEWS PAGE', () => {
    
    beforeEach(() => {
      cy.visit(newsPage.constants.greeting);
    });

    const totalPages = newsPage.constants.greetingTotalPagesConst;

    it('Validates all read next links on multiple pages on greeting news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          newsPage.mainSection.contains('Вітання').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });


  });


});
