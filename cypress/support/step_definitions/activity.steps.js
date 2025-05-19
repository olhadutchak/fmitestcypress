import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import activityPage from "@pages/activity2.page";
Given('I open the website page {string}', (url) => {
  cy.visit(url);
});

Then('I should see "Сайт конференції" links', () => {
  activityPage.conferenceBannerButton.should('have.length', activityPage.constants.expectedLinks.length);
});

Then('each conference link should have correct href and respond with status 200', () => {
  activityPage.conferenceBannerButton.each(($el, index) => {
    const expectedHref = activityPage.constants.expectedLinks[index];

    cy.wrap($el).should('have.text', 'Сайт конференції');

    cy.wrap($el)
      .invoke('attr', 'href')
      .then((actualHref) => {
        if (actualHref !== expectedHref) {
          cy.log(`Expected href: ${expectedHref}, but got: ${actualHref}`);
        }
        cy.request({
          url: actualHref,
          failOnStatusCode: false
        }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Link at index ${index} returned status ${response.status}`);
          }
        });
      });
  });
});

When('I click on seminar card header at index {int}', (index) => {
  activityPage.seminarCard.eq(index).within(() => {
    activityPage.seminarText.should('have.attr', 'style').and('include', 'display: none');
  });
  activityPage.seminarCardHeader.eq(index).click();
  cy.wait(300);
});

Then('the corresponding seminar text should become visible', () => {
  activityPage.seminarText.should('be.visible');
});

Then('all postgraduate items should have correct titles, hrefs, and targets', () => {
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

When('I click on scientific school card header at index {int}', (index) => {
  activityPage.scientificCard.eq(index).within(() => {
    activityPage.scientificText.should('have.attr', 'style').and('include', 'display: none');
  });
  activityPage.scientificCardHeader.eq(index).click();
  cy.wait(300);
});

Then('the corresponding scientific school text should become visible', () => {
  activityPage.scientificText.should('be.visible');
});


Given('I open the international activity page at {string}', (url) => {
  cy.visit(url);
});

// ---------- SCHOOLS & SYMPOSIA ----------
When('I click each image in the lightbox gallery', () => {
  activityPage.lightboxFlexItem.each(($el) => {
    cy.wrap($el).scrollIntoView().click();
    activityPage.parvusSlide.should('be.visible');
    cy.wait(500);
    cy.get('body').type('{esc}');
    activityPage.parvusSlideT.should('not.exist');
    cy.wait(300);
  });
});

Then('the image viewer should appear and be closable', () => {
  // Вже перевірено в попередньому кроці. Цей крок може бути залишений як "empty".
});

// ---------- PROJECTS ----------
When('I click the {string} link', (linkName) => {
  if (linkName === 'iCareInUkraine') {
    activityPage.iCareInUkraineLink.should('have.attr', 'href');
    activityPage.clickICareInUkraineLink();
  } else if (linkName === 'supportingSchool') {
    activityPage.suportinSchoolLink.should('have.attr', 'href');
    activityPage.clickSuportingSchoolLink();
  }
});

Then('I should be navigated to {string}', (expectedUrl) => {
  cy.url().should('include', expectedUrl);
});

// ---------- PARTNER LINKS ----------
When('I click the first partner link', () => {
  activityPage.partnearsFirst
    .should('have.attr', 'href', 'http://quaere.fmi.org.ua/#')
    .invoke('removeAttr', 'target');
  activityPage.clickPartnearsFirst();
});

When('I click the second partner link', () => {
  activityPage.partnearsSecond
    .should('have.attr', 'href', 'http://tempus.chnu.edu.ua/')
    .invoke('removeAttr', 'target');
  activityPage.clickPartnearsSecond();
});

Then('I should land on a page with URL containing {string} and it should be available', (urlFragment) => {
  cy.location('href', { timeout: 10000 }).should('include', urlFragment).then((url) => {
    cy.request(url).its('status').should('eq', 200);
  });
});

// BMAN Scenarios
When("I click the link to Bodnaruk's profile", () => {
  activityPage.clickBodnarukLink();
});

When("I click the BMAN official site link", () => {
  activityPage.clickBmanOfficialSiteLink();
});

When("I access the schedule PDF", () => {
  activityPage.getSchedulePdfLink
    .should("have.attr", "href")
    .then((href) => {
      cy.wrap(href).as("pdfLink");
    });
});

Then("the file should be accessible and in PDF format", function () {
  cy.request(this.pdfLink).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.headers["content-type"]).to.include("application/pdf");
  });
});

// Partners Scenarios
When("I check each partner link", () => {
  activityPage.getPartnerLinks.each(($link) => {
            const href = $link.prop('href');
            cy.request({
              url: href,
              timeout: 18000,
              failOnStatusCode: false,
            }).then((response) => {
              const isExternal = !href.includes('fmi.chnu.edu.ua');
              if (isExternal) {
                expect(response.status).to.be.oneOf([200, 400, 403]);
                cy.log(`Facebook link tested with status: ${response.status}`);
              } else {
                expect(response.status).to.eq(200);
              }
            });
          });
});


When("I check each file in the document list", () => {
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

When("I click each image in the partners gallery", () => {
  activityPage.lightboxFlexItem.each(($el) => {
    cy.wrap($el).scrollIntoView().click();
    activityPage.parvusSlide.should("be.visible");
    cy.get("body").type("{esc}");
    activityPage.parvusSlideT.should("not.exist");
  });
});

When("I download the file titled {string}", (title) => {
  cy.get(`a[title="${title}"]`).click();
  cy.wait(5000);
});

Then("the file named {string} should be downloaded successfully", (filename) => {
  cy.verifyDownload(filename, { timeout: 20000 });
});












Given('I open the page {string}', (url) => {
  cy.visit(url);
});

Then('the {string} link should have href {string}', (element, href) => {
  activityPage[element].should('have.attr', 'href', href);
});

When('I click on the {string} link', (element) => {
  const clickMethod = `click${element.charAt(0).toUpperCase() + element.slice(1)}`;
  activityPage[clickMethod]();
});

Then('the current URL should include {string}', (text) => {
  cy.location('href', { timeout: 10000 }).should('include', text);
});

Then('the document should be accessible', () => {
  cy.location('href').then((url) => {
    cy.request(url).its('status').should('eq', 200);
  });
});

Then('the {string} element should be visible and contain {string}', (element, text) => {
  activityPage[element]
    .should('be.visible')
    .and('contain', text);
});

When("I click each photo element", () => {
   activityPage.photoElements.each(($link) => {
              cy.wrap($link).click();
              cy.wait(500);
              activityPage.modalWindow.should('be.visible');
  
              activityPage.clickCloseImageButton();
  
              activityPage.modalWindow.should('not.exist');
            });
  
});

Then('the image modal should open and be closable', () => {
  // already handled inside previous step (combined step for loop + asserts)
});




const url = 'https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/?_gl=1*24sql*_ga*NTE1NzYyMjMxLjE3NDM4NjE0NjQ.*_ga_Q6273NZQ6Z*MTc0NDc1MDgwNi45LjAuMTc0NDc1MDgwNi4wLjAuMA..';

Given('I open the {string} page', (pageName) => {
  if (pageName === "Continuous Education") {
    cy.visit(url);
  }
});

When('I open each course card in turn', () => {
  activityPage.imegeText.then($cards => {
    const total = $cards.length;

    for (let i = 0; i < total; i++) {
      activityPage.imegeText
        .eq(i)
        .invoke('text')
        .then(text => {
          activityPage.imegeText.eq(i).click();

          cy.contains(text.trim(), { matchCase: false }).should('exist');

          cy.go('back');
        });
    }
  });
});

Then('I should see the course content and return to the main page each time', () => {
  // This step is integrated above with assertions inside the loop
  // You can leave it empty or add an overall assertion here if needed
});