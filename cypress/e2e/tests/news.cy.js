import newsPage from '../pages/news.page';

describe('TESTING NEWS PAGE', () => {

  context('TESTING NEWS ALL PAGE', () => {

    beforeEach(() => {
      cy.visit('https://fmi.chnu.edu.ua/novyny/');
    });

    const totalPages = 29;

    it('Validates all read next links on multiple pages on news all page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = encodeURI(`https://fmi.chnu.edu.ua${relativeUrl}`);
          cy.visit(fullUrl); 
          cy.contains(/Загальні|Оголошення|Події|Студенту|Викладачу|Вітання/).should('exist');
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
      cy.visit('https://fmi.chnu.edu.ua/novyny/zahalni/');
    });

    const totalPages = 13;

    it('Validates all read next links on multiple pages on general news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          cy.contains('Загальні').should('exist'); 
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
      cy.visit('https://fmi.chnu.edu.ua/novyny/oholoshennia/');
    });

    const totalPages = 10;

    it('Validates all read next links on multiple pages on advertisement news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = encodeURI(`https://fmi.chnu.edu.ua${relativeUrl}`); 
          cy.visit(fullUrl); 
          cy.contains('Оголошення').should('exist'); 
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
      cy.visit('https://fmi.chnu.edu.ua/novyny/podii/');
    });

    const totalPages = 2;

    it('Validates all read next links on multiple pages on events news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          cy.contains('Події').should('exist'); 
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
      cy.visit('https://fmi.chnu.edu.ua/novyny/studentam/');
    });
  
    const totalPages = 2;
  
    it('Validates all read next links on multiple pages on students news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          cy.contains('Студенту').should('exist'); 
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
      cy.visit('https://fmi.chnu.edu.ua/novyny/vykladacham/');
    });


    it('Validates all read next links', () => {
      newsPage.newsSection.each(($link) => {
        const relativeUrl = $link.attr('href'); 
        const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
        cy.visit(fullUrl); 
        cy.contains('Викладачу').should('exist'); 
        cy.go("back");
        cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
          cy.wrap(response.status).should('eq', 200); 
        });
      });
    });


  });


  context('TESTING TO GREETING NEWS PAGE', () => {
    
    beforeEach(() => {
      cy.visit('https://fmi.chnu.edu.ua/novyny/vitannia/');
    });

    const totalPages = 3;

    it('Validates all read next links on multiple pages on greeting news page', () => {
      cy.wrap(Array.from({ length: totalPages }, (_, i) => i + 1)).each((pageNumber) => {
        newsPage.preNewsSection.contains(String(pageNumber)).click();
        newsPage.newsSection.each(($link) => {
          const relativeUrl = $link.attr('href'); 
          const fullUrl = `https://fmi.chnu.edu.ua${relativeUrl}`; 
          cy.visit(fullUrl); 
          cy.contains('Вітання').should('exist'); 
          cy.go("back");
          cy.request({ url: fullUrl, timeout: 15000 }).then((response) => {
            cy.wrap(response.status).should('eq', 200); 
          });
        });
      });
    });


  });


});
