import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import applicantPage from "@pages/applicant.page";

Given('I visit the {string}', (url) => {
  cy.visit(url);
});

When('I check the visibility of the {string}', (element) => {
  applicantPage[element].should('be.visible');
});

When('I click on the {string}', (element) => {
  applicantPage[element].invoke('removeAttr', 'target').click();
});

Then('I should be redirected to {string}', (url) => {
  cy.url().should('include', url);
});

Then('the status code 200 for the page should be {string}', (url) => {
  cy.url().should('include', url).then((url) => {

    cy.request(url).its('status').should('eq', 200);

  });

});

When('I click the "view" button for motivational letters', () => {
  applicantPage.clickViewButton();
});

When('I click on each card link', () => {
  applicantPage.cardLink.each(($el) => {
    cy.wrap($el)
      .should('have.class', 'collapsed')
      .click()
      .should('not.have.class', 'collapsed');
  });
});

Then('the card should toggle between collapsed and expanded states', () => {
  
});

Then('each "view" link should respond with status 200', () => {
  applicantPage.linksToView
    .each(($el) => {
      const link = $el.attr('href');
      cy.request(link).its('status').should('eq', 200);
    });
});


////////////////////////////////////////////////////

When("I collect all PDF links on the page", () => {
  
});

Then('each PDF link should have target "_blank" if it has class "link"', () => {
  applicantPage.pdf.each(($link) => {
    if ($link.hasClass("link")) {
      cy.wrap($link).should("have.attr", "target", "_blank");
    }
  });
});

Then('each PDF link should return status 200 and content type pdf', () => {
  applicantPage.pdf.each(($link) => {
    const href = $link.attr("href");
    const fullUrl = href.startsWith("http") ? href : `https://fmi.chnu.edu.ua${href}`;
    cy.request(fullUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("application/pdf");
    });
  });
});
let pdfLinks = [];

When("I find all PDF links on the page", () => {
  pdfLinks = [];
  applicantPage.pdfFiles2.each(($link) => {
    const href = $link.attr("href");
    const fullUrl = href.startsWith("http") ? href : `https://fmi.chnu.edu.ua${href}`;
    pdfLinks.push({
      element: $link,
      url: fullUrl
    });
  });
});

Then('each PDF link should have target "_blank"', () => {
  pdfLinks.forEach(({ element }) => {
    cy.wrap(element).should("have.attr", "target", "_blank");
  });
});

Then('each PDF link should return content type pdf', () => {
  pdfLinks.forEach(({ url }) => {
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.include("application/pdf");
    });
  });
});



let dormitoryItems = [];
When('I collect all dormitory links and their titles', () => {
  dormitoryItems = [];
  const elementsToValidate = applicantPage.constants.elementsToValidate;

  applicantPage.dormitoryLinks.each(($el, index) => {
    const title = elementsToValidate[index].title;
    const hrefContains = elementsToValidate[index].hrefContains;

    dormitoryItems.push({
      element: $el,
      expectedTitle: title,
      expectedHrefPart: hrefContains
    });
  });
});

Then('each dormitory item should have the correct title and link', () => {
  dormitoryItems.forEach(({ element, expectedTitle, expectedHrefPart }) => {
    cy.wrap(element).find('h2.title').should('contain', expectedTitle);
    cy.wrap(element)
      .should('have.attr', 'href')
      .and('include', expectedHrefPart);
  });
});

Then('each link should open in a new tab', () => {
  dormitoryItems.forEach(({ element }) => {
    cy.wrap(element).should('have.attr', 'target', '_blank');
  });
});

Then('each non-video link should return status 200', () => {
  dormitoryItems.forEach(({ element, expectedHrefPart }) => {
    if (!expectedHrefPart.includes('.mp4')) {
      cy.wrap(element)
        .invoke('attr', 'href')
        .then((url) => {
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