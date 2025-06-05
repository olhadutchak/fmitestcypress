import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import aboutUsPage from "@pages/aboutUs2.page";

Then('I should see {string} in the list at position {int}', (name, index) => {
  cy.get('.team-member').eq(index).as('memberCard');
  cy.get('@memberCard').should('contain', name);
});

Then('If email is provided, it should link to mailto{string} at position {int}', (email, index) => {
  if (email && email.trim() !== '') {
    cy.get('.team-member').eq(index)
      .find(`a[href="mailto:${email}"]`)
      .should('exist');
  }
});

Then('If phone number is provided, it should link to tel{string} at position {int}', (phone, index) => {
  if (phone && phone.trim() !== '') {
    const sanitizedPhone = phone.replace(/[\s\(\)-]/g, '');
    cy.get('.team-member').eq(index)
      .find('a[href^="tel:"]')
      .invoke('attr', 'href')
      .then((href) => {
        expect(href.replace(/[^\d+]/g, '')).to.include(sanitizedPhone);
      });
  }
});

Then('If a profile URL is provided, it should link to {string} at position {int}', (profileUrl, index) => {
  if (profileUrl && profileUrl.trim() !== '') {
    cy.get('.team-member').eq(index)
      .find('a')
      .contains('Профайл')
      .should('have.attr', 'href', profileUrl);
  }
});

Then('If social media links are provided, each should be a valid link at position {int}', (index, socialString) => {
  if (socialString && typeof socialString === 'string' && socialString.trim() !== '') {
    const socials = socialString.split(',').map(url => url.trim());
    socials.forEach(link => {
      cy.get('.team-member').eq(index)
        .find(`a[href="${link}"]`)
        .should('exist');
    });
  }
});

Then('all PDF and TXT links should exist and return valid content in about us', () => {
  aboutUsPage.pdfAndTxtFiles.each(($link) => {
    const href = $link.attr('href');
    if (!href) return;
    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
    cy.request(href).then((response) => {
      const type = response.headers['content-type'];
      expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
    });
  });
});

Then('I should see a link to the faculty development program PDF', () => {
  aboutUsPage.developmentProgramBtn
    .should('have.attr', 'href')
    .and('include', '/media/14xpxbow/prohrama-martyniuk-ov-dekan.pdf');
});

Then('each contest item should have a title, description, and a "Read more" link in about us', () => {
  aboutUsPage.newsItemsSec.each(($el) => {
    aboutUsPage.validateNewsItemSec($el);
  });
});

When('I click on the header of card {int}', (index) => {
  
  aboutUsPage.scientificCard.eq(index).within(() => {
    aboutUsPage.scientificText
      .should('have.attr', 'style')
      .and('include', 'display: none');
  });
  aboutUsPage.scientificCardHeader.eq(index).click();
  cy.wait(300); 
});

Then('the text of card {int} should become visible', (index) => {
  aboutUsPage.scientificCard.eq(index).within(() => {
    aboutUsPage.scientificText
      .should('be.visible')
      .and('not.have.attr', 'style', 'display: none;');
  });
});

Then('the about us section {string} in {string} should be visible and clickable', (name, sectionGroupName) => {
  const sectionGroup = aboutUsPage.constants[sectionGroupName];
  expect(sectionGroup, `Section group "${sectionGroupName}" not found`).to.not.be.undefined;

  const section = sectionGroup.find(s => s.name === name);
  expect(section, `Section "${name}" not found in group "${sectionGroupName}"`).to.not.be.undefined;

  section.element().should('contain', name).invoke('removeAttr', 'target');
});

When('I click on the about us section {string} in {string}', (name, sectionGroupName) => {
  const sectionGroup = aboutUsPage.constants[sectionGroupName];
  const section = sectionGroup.find(s => s.name === name);
  expect(section, `Section "${name}" not found in group "${sectionGroupName}"`).to.not.be.undefined;
  section.click();
});

Then('I should see a contact item {string} with text {string} and href {string}', (label, expectedText, expectedHref) => {
  const contactItem = aboutUsPage.constants.contactData.find(item => item.label === label);
  expect(contactItem, `Contact item with label "${label}" not found`).to.exist;

  cy.get(contactItem.selector)
    .should('exist')
    .and('be.visible');

  if (expectedText) {
    cy.get(contactItem.selector).should('contain', expectedText);
  }

  if (expectedHref) {
    cy.get(contactItem.selector).should('have.attr', 'href', expectedHref);
  }
});

Then('each image should open in a modal and close properly in about us page', () => {
  aboutUsPage.photoElements.each(($el) => {
    cy.wrap($el).click();
    cy.wait(1000);
    aboutUsPage.modalWindow.should('be.visible');
    aboutUsPage.clickCloseImageButton();
    aboutUsPage.modalWindow.should('not.exist');
  });
});

Then('the banner button should link to the university-wide elective subjects catalog', () => {
  const expectedHrefPart = '/groups/834529403844819/?ref=share';
  
  aboutUsPage.bannerBtn
    .should('have.attr', 'href')
    .and('include', expectedHrefPart);
});

Then('the conference banner link should include {string}', (expectedUrl) => {
  aboutUsPage.bannerBtn
    .should('have.attr', 'href')
    .and('include', expectedUrl);
});

Then('the resource at that URL should return code 200', () => {
  aboutUsPage.bannerBtn.invoke('attr', 'href').then((url) => {
    cy.request({
      url,
      failOnStatusCode: false
    }).its('status').should('eq', 200);
  });
});

Then('the banner button have link to {string}', (expectedLink) => {
  aboutUsPage.bannerBtn
    .should('have.attr', 'href')
    .and('include', expectedLink);
});



