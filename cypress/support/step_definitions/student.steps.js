import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import studentPage from "@pages/student.page";

Then('I should see the {string} element', (text) => {
  const { element } = studentPage.constants.elementsToValidate.find(e => e.text === text);
  studentPage[element]
    .should('be.visible')
    .should('contain', text)
    .invoke('removeAttr', 'target');
});

Then('the element {string} should link to a valid page containing {string}', (text, locationInclude) => {
  const { element } = studentPage.constants.elementsToValidate.find(e => e.text === text);

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

Then('all PDF and external links on the page should be valid', () => {
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

Then('the element {string} link should work', (description) => {
  const entry = studentPage.constants.linkTests.find(e => e.description === description);

  if (!entry) {
    throw new Error(`No selector found for description: ${description}`);
  }

  entry.selector().each(($el) => {
    const link = $el.attr('href')?.trim();
    if (link && link.startsWith('http')) {
      cy.request({ url: link, failOnStatusCode: false }).then((resp) => {
        expect(resp.status).to.eq(200, `Expected status 200 for link: ${link}`);
      });
    } else {
      cy.log(`Skipping non-http link: ${link}`);
    }
  });
});

Then('each image should open in a modal and close properly', () => {
  studentPage.photoElements.each(($el) => {
    cy.wrap($el).click();
    cy.wait(1000);
    studentPage.modalWindow.should('be.visible');
    studentPage.clickCloseImageButton();
    studentPage.modalWindow.should('not.exist');
  });
});

Then('the document link with text {string} should end with {string} and be valid', (linkText, expectedExtension) => {
    cy.contains('a.link', linkText)
      .should('have.attr', 'href')
      .then((href) => {
        const fullUrl = href.startsWith('http') ? href : `https://fmi.chnu.edu.ua${href}`;
        expect(fullUrl).to.include(expectedExtension);
        cy.request(fullUrl).its('status').should('eq', 200);
      });
  }
);

Then(
  'the button to elective disciplines should link to {string}',
  (expectedHref) => {
    studentPage.electiveDisciplinesBtn
      .should('have.attr', 'href')
      .and('include', expectedHref);
  }
);

Then(
  'I should see a link with text {string} that links to a Google Spreadsheet',
  (linkText) => {
    cy.contains(linkText)
      .parent()
      .find('a.link')
      .should('have.attr', 'href')
      .and('include', 'docs.google.com/spreadsheets');
  }
);

Then(
  'I should see a link near the text {string} that links to a .pdf file',
  (linkText) => {
    cy.contains(linkText)
      .parent()
      .find('a.link')
      .should('have.attr', 'href')
      .and('include', '.pdf');
  }
);

Then('all courses should have valid syllabus links', () => {
  const courses = studentPage.constants.courses;

  courses.forEach(course => {
    cy.contains(course.name)
      .should('have.attr', 'href')
      .and('include', course.href)
      .and('match', /\.pdf$/);
  });
});


Then("I should see the {string} button", (text) => {
  studentPage.WShopbutton.should("be.visible").and("contain", text);
});

When("I click on the workshop button", () => {
  studentPage.clickWorkShop();
});



Then("I should see all expected workshop links with correct title, department and href", () => {
  const expectedLinks = studentPage.constants.expectedLinks;
  studentPage.clickWorkShop();
  studentPage.main.within(() => {
    expectedLinks.forEach(({ title, hrefContains, dept }) => {
      cy.contains(dept).should("exist");
      cy.contains(title)
        .should("exist")
        .and("have.attr", "href")
        .and("include", hrefContains);
    });
  });
});

Given("I see the {string} section link", (sectionName) => {
  const section = studentPage.constants.sections.find((s) => s.name === sectionName);
  expect(section).to.exist;
  section.element().should("contain", section.name).invoke("removeAttr", "target");
});

When("I click on the {string} section", (sectionName) => {
  const section = studentPage.constants.sections.find((s) => s.name === sectionName);
  expect(section).to.exist;
  section.click();
});

Then("the URL should include {string} and the page should respond with status 200", (urlPart) => {
  cy.url().should("include", urlPart).then((url) => {
    cy.request(url).its("status").should("eq", 200);
  });
});

Then('I should see valid PDF links that open in a new tab', () => {
  studentPage.pdfFiles.each(($link) => {
            const url = $link.attr('href');
            cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
            cy.request(url).its('headers').its('content-type').should('include', 'application/pdf');
          });
});

Then('I should see olympic tour {string} and it should go to {string}', (tourName, expectedUrl) => {
  const match = studentPage.constants.olympicTurs.find(tur => tur.name === tourName && tur.urlIncludes === expectedUrl);

  expect(match).to.exist;

  match.element().should('exist').and('contain', tourName);
  match.click();

  cy.url().should('eq', expectedUrl);
  cy.request(expectedUrl).its('status').should('eq', 200);
});

When('I click on the competition banner link is correctly', () => {
  studentPage.bannerBtn.invoke('removeAttr', 'target');
          studentPage.clickBannerBtn();
      
          cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi.chnu.edu.ua/media/txxnwfbq/422.pdf').then((url) => {
            cy.request(url).its('status').should('eq', 200);
          });
});

Then('each file link should lead to a valid PDF or TXT file', () => {
  studentPage.pdfAndTxtFiles.each(($link) => {
    const url = $link.attr('href');
    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
    cy.request(url).then((response) => {
      const type = response.headers['content-type'].split(';')[0];
      expect(['application/pdf', 'text/plain', 'text/html']).to.include(type);
    });
  });
});

Then('each competition card should expand on click', () => {
  studentPage.cardLink.each(($card) => {
    cy.wrap($card).should('have.class', 'collapsed').click().should('not.have.class', 'collapsed');
  });
});

Then('the presentation block should be visible', () => {
  studentPage.presentationBlock.should('be.visible');
});

Then('the presentation text should be visible', () => {
  studentPage.presentationText.should('be.visible');
});

Then('the presentation banner PDF should be accessible', () => {
  studentPage.bannerBtn
    .should('have.attr', 'href')
    .and('match', /\.pdf$/)
    .then((href) => {
      cy.request(href).its('status').should('eq', 200);
    });
});

Then('each contest item should have a title, description, and a "Read more" link', () => {
  studentPage.newsItems.each(($el) => {
    studentPage.validateNewsItem($el);
  });
});

Then('the section {string} should be visible and clickable', (name) => {
  const section = studentPage.constants.sectionsSecond.find(s => s.name === name);
  section.element().should('contain', name).invoke('removeAttr', 'target');
});

When('I click on the section {string}', (name) => {
  const section = studentPage.constants.sectionsSecond.find(s => s.name === name);
  section.click();
});


Then('the section {string} should be visible and clickable func', (name) => {
  const section = studentPage.constants.sectionsRatingOfstudents.find(s => s.name === name);
  expect(section, `Section with name "${name}" not found`).to.not.be.undefined;
  section.element().should('contain', name).invoke('removeAttr', 'target');
});

When('I click on the section {string} element', (name) => {
     const section = studentPage.constants.sectionsRatingOfstudents.find(s => s.name === name);
     section.click();
     
});

Then('all PDF and TXT links should exist and return valid content', () => {
  studentPage.pdfAndTxtFiles.each(($link) => {
    const href = $link.attr('href');
    if (!href) return;
    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
    cy.request(href).then((response) => {
      const type = response.headers['content-type'];
      expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
    });
  });
});


Then('the academic integrity section {string} should be visible and clickable', (name) => {
  const section = studentPage.constants.sectionsAcademicIntegrity.find(s => s.name === name);
  expect(section, `Section "${name}" not found in sectionsAcademicIntegrity`).to.not.be.undefined;
  section.element().should('contain', name).invoke('removeAttr', 'target');
});

When('I click on the academic integrity section {string}', (name) => {
  const section = studentPage.constants.sectionsAcademicIntegrity.find(s => s.name === name);
  expect(section, `Section "${name}" not found in sectionsAcademicIntegrity`).to.not.be.undefined;
  section.click();
});


Then('the resource at that URL should return HTTP 200', () => {
  cy.url().then((url) => {
    cy.request(url).its('status').should('eq', 200);
  });
});

Then('each contest item should have a title, description, and a "Read more" link sec', () => {
  studentPage.newsItemsSec.each(($el) => {
    studentPage.validateNewsItemSec($el);
  });
});

Then('all cards should toggle correctly', () => {
  const totalCards = studentPage.constants.totalCards;

  Array.from({ length: totalCards }).forEach((_, index) => {
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

Then('I validate all dormitory items and their links', () => {
  const elementsToValidate = studentPage.constants.elementsToValidateSec
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
