import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import newsPage from "@pages/news.page";


Given("I visit the all news page", () => {
  cy.visit(newsPage.constants.all);
});

Then("all news links should be valid", () => {
  const totalPages = newsPage.constants.generalTotalPagesConst;
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



Given("I visit the general news page", () => {
  cy.visit(newsPage.constants.general);
});

Then("all general news links should be valid", () => {
  const totalPages = newsPage.constants.generalTotalPagesConst;
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


Given("I visit the advertisement news page", () => {
  cy.visit(newsPage.constants.advertisement);
});

Then("all advertisement news links should be valid", () => {
  const totalPages = newsPage.constants.advertisementTotalPagesConst;
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


Given("I visit the events news page", () => {
  cy.visit(newsPage.constants.events);
});

Then("all events news links should be valid", () => {
const totalPages = newsPage.constants.eventsTotalPagesConst;
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


Given("I visit the students news page", () => {
  cy.visit(newsPage.constants.students);
});

Then("all students news links should be valid", () => {
  const totalPages = newsPage.constants.studentsTotalPagesConst;
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


Given("I visit the teachers news page", () => {
  cy.visit(newsPage.constants.teachers);
});

Then("all teachers news links should be valid", () => {
  const totalPages = newsPage.constants.teachersTotalPagesConst || 1;
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


Given("I visit the greeting news page", () => {
  cy.visit(newsPage.constants.greeting);
});

Then("all greeting news links should be valid", () => {
  const totalPages = newsPage.constants.greetingTotalPagesConst;
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





