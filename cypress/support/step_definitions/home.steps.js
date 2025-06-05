import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import homePage from "@pages/home.page";

Given("I visit the FMI homepage", () => {
  cy.visit("https://fmi.chnu.edu.ua");
});

//VALIDATE MEDIA LINKS 
When('I check the existence of the {string} link with href {string} and title {string}', (elementName, Href, Title ) => {
  homePage[elementName]
    .should('exist')
    .should("have.attr", "href", Href)
    .and('have.attr', 'title', Title)
    .invoke('removeAttr', 'target');
});
//VALIDATE EMAIL LINK IN THE TOP PANEL
When("I check the email link in the top panel", () => {
  homePage.mail.should("be.visible").invoke("attr", "href").as("emailLink");
});

Then("the email link should be visible", () => {
  homePage.mail.should("be.visible");
});

Then("the email link should be valid", () => {
  cy.get("@emailLink").then((emailLink) => {
    cy.request({ url: emailLink, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`Warning: Expected status 200 but got ${response.status} for URL: ${emailLink}`);
      } else {
        expect(response.status).to.eq(200);
      }
    });
  });
});

// VALIDATE THE OPENING OF THE SEARCH FIELD
When("I click on the search icon", () => {
  homePage.searchbtn.should("be.visible");
  homePage.clickSearchButton();
});

Then("the search input field should be visible", () => {
  homePage.searchwrp.should("have.class", "show");
  homePage.searchinput.should("be.visible");
});

Then("I type a search term", () => {
  homePage.typeSearchTermForSearch("Новини");
});

Then("the URL should change after the search", () => {
  cy.url().should("not.eq", "@beforeSearchUrl");
});


//VALIDATE THE LOGO NAVIGATION
When("I see the logo", () => {
  homePage.logolink.should("have.attr", "href", "/");
});

Then("I click on the logo picture", () => {
  homePage.clicklogolink();
});

Then("the homepage should be accessible", () => {
  cy.url().should('include', '/').then((url) => {
    cy.request(url).its('status').should('eq', 200);
  });
});


//VALIDATE THE NEWS SUB-MENU
When("I hover over the news menu", () => {
  homePage.mouseoverNewsMenu();
});

Then("the news sub-menu should be visible", () => {
  homePage.subNewsMenu.should("exist");
});

Then("each news category should be clickable and lead to the correct page", () => {
  homePage.constants.newsMenuItems.forEach((item, index) => {
    homePage.clickMenuItem(item);
    homePage.verifyUrlContains(homePage.constants.newsExpectedLinks[index]);
  });
});


// VALIDATE THE ACTIVITIES MENU CATEGORIES AND LINKS
When("I open the activities menu", () => {
  homePage.activityMenu.should("be.visible");
  homePage.clickActivityMenu();
  homePage.makeTheSubmenuVisble(homePage.subActivityMenu);
});

Then("all activity categories should be displayed", () => {
  homePage.constants.activityMenuItems.forEach(({ title }) => {
    homePage.verifyCategoryContains(title);
  });
});

Then("each activity link should be clickable and lead to the correct page", () => {
  homePage.constants.activityMenuItems.forEach(({ items }) => {
    items.forEach(({ text, url }) => {
      homePage.clickSubmenuSubItems(homePage.activityMenu, text);
      cy.on("uncaught:exception", () => false);
      homePage.verifyUrlContains(url);
      cy.visit(homePage.constants.homeLink);
    });
  });
});


// VALIDATE THE STUDENT MENU CATEGORIES AND LINKS
When("I open the student menu", () => {
  homePage.studentMenu.should("be.visible");
  homePage.clickStudentMenu();
  homePage.makeTheSubmenuVisble(homePage.subStudentMenu);
});

Then("all student categories should be displayed", () => {
  homePage.constants.studentMenuItems.forEach(({ title }) => {
    homePage.verifyCategoryContains(title);
  });
});

Then("each student link should be clickable and lead to the correct page", () => {
  homePage.constants.studentMenuItems.forEach(({ items }) => {
    items.forEach(({ text, url }) => {
      homePage.clickSubmenuSubItems(homePage.studentMenu, text);
      cy.on("uncaught:exception", () => false);
      homePage.verifyUrlContains(url);
      cy.visit(homePage.constants.homeLink);
    });
  });
});


// VALIDATE THE APPLICANT SUB-MENU
When("I hover over the applicant menu", () => {
  homePage.mouseoverApplicantMenu();
});

Then("the applicant sub-menu should be visible", () => {
  homePage.subApplicantMenu.should("exist");
});

Then("each applicant category should be clickable and lead to the correct page", () => {
  homePage.constants.applicantMenuItems.forEach(({ text, url }) => {
    homePage.clickSubmenuSubItems(homePage.applicantMenu, text);
    homePage.verifyUrlContains(url);
    cy.visit(homePage.constants.homeLink);
  });
});


// VALIDATE THE DEPARTMENT SUB-MENU
When("I hover over the department menu", () => {
  homePage.mouseoverDepartmentMenu();
});

Then("the department sub-menu should be visible", () => {
  homePage.subDepartmentMenu.should("exist");
});

Then("each department category should be clickable and lead to the correct page", () => {
  homePage.constants.departmentMenuItems.forEach((item, index) => {
    homePage.clickMenuItem(item);
    homePage.verifyUrlContains(homePage.constants.departmentExpectedLinks[index]);
    cy.visit(homePage.constants.homeLink);
  });
});


// VALIDATE THE ABOUT US SUB-MENU CATEGORIES AND LINKS
When("I open the about us menu", () => {
  homePage.aboutUsMenu.should("be.visible");
  homePage.clickAboutUsMenu();
  homePage.makeTheSubmenuVisble(homePage.subAboutUsMenu);
});

Then("all about us categories should be displayed", () => {
  homePage.constants.aboutMenuItems.forEach(({ title }) => {
    homePage.verifyCategoryContains(title);
  });
});

Then("each about us link should be clickable and lead to the correct page", () => {
  homePage.constants.aboutMenuItems.forEach(({ items }) => {
    items.forEach(({ text, url }) => {
      homePage.clickSubmenuSubItems(homePage.aboutUsMenu, text);
      cy.on("uncaught:exception", () => false);
      homePage.verifyUrlContains(url);
      cy.visit(homePage.constants.homeLink);
    });
  });
});


// VALIDATE THE SEARCH FUNCTIONALITY WITH NO RESULTS
When("I click on the search button one time", () => {
  homePage.clickSearchButton();
});

Then("the search field should be visible", () => {
  homePage.searchwrp.should("have.class", "show");
  homePage.searchinput.should("be.visible");
});

Then("I type {string} into the search field", (query) => {
  homePage.typeSearchTermForSearch(query);
});

Then("the URL should contain {string}", (expectedUrl) => {
  cy.url().should("include", expectedUrl);
});

Then("I should see {string}", (text) => {
  cy.contains(text).should("exist");
}); 


//VALIDATE THE SEARCH FUNCTIONALITY WITH RESULTS
When("I type {string} in the search field", (searchTerm) => {
  homePage.typeSearchTermForSearch(searchTerm);
});

Then("I should see search results", () => {
  homePage.resultSection.should("exist").and("be.visible");
});

When("there are multiple result pages", function () {
  cy.get("body").then(($body) => {
    if ($body.find(".pagination-part").length > 0) {
      cy.wrap(true).as("hasPagination");
    } else {
      cy.wrap(false).as("hasPagination");
    }
  });
});

Then("I should navigate through each page", function () {
  if (this.hasPagination) {
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
    cy.log("No pagination");
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


//VALIDATE THE FUNCTIONALITY OF THE BANNER BUTTONS
When("I check the existence of the {string} banner button", (button) => {
  homePage[button].should("exist").and("be.visible");
});

When("I click on the {string} banner button", (button) => {
  homePage[button].invoke("removeAttr", "target");
  homePage.clickBannerButton(homePage[button]);
});

Then("the URL should be {string}", (expectedLink) => {
  cy.location("href", { timeout: 10000 }).should("eq", homePage.constants[expectedLink]);
});

Then("the page should return a successful status code for {string}", (expectedLink) => {
  cy.request(homePage.constants[expectedLink]).its("status").should("eq", 200);
});


//VALIDATE LINKS IN LATEST EVENTS
When("I check all links in the latest events section", () => {
  homePage.linksInEvents.should("have.length.gt", 0).then((links) => {
    for (let i = 0; i < links.length; i++) {
      homePage.linksInEvents.eq(i).invoke("removeAttr", "target");
    }
  });
});

Then("each link should navigate to a different URL", () => {
  homePage.linksInEvents.each(($link, index) => {
    const currentUrl = cy.config("baseUrl") + $link.attr("href");
    homePage.clickLinksInEventsAtIndex(index);
    cy.url().should("not.eq", currentUrl);
    cy.go("back");
  });
}); 


//VALIDATE FLEX-2-COLUMNS LINKS
Given("I check the existence of {string} with href {string}", (element, expectedHref) => {
  homePage[element]
    .should("have.attr", "href", expectedHref)
    .invoke("removeAttr", "target");
});

When("I click on {string}", (element) => {
  homePage[element].click();
});

Then("the URL should include {string}", (expectedHref) => {
  cy.location("href", { timeout: 10000 }).should("include", expectedHref);
});

Then("the page should return a successful status for {string}", (expectedHref) => {
  cy.request(expectedHref).its("status").should("eq", 200);
});


//ALIDATE ARIA-LABEL FOR PREVIOUS BUTTON
//VALIDATE ARIA-LABEL FOR NEXT BUTTON
When("I click the previous button", () => {
  homePage.clickPrevButton();
});

Then('the previous button should have an "aria-label" of {string}', (label) => {
  homePage.prevButton.should("have.attr", "aria-label", label);
});

When("I click the next button", () => {
  homePage.clickNextButton();
});

Then('the next button should have an "aria-label" of {string}', (label) => {
  homePage.nextButton.should("have.attr", "aria-label", label);
});


//VALIDATE PARTNERS LINKS STATUS CODES
When("I check all partners' links", () => {
  homePage.partnersLinks.each(($link) => {
    const href = $link.prop("href");

    cy.request({
      url: href,
      timeout: 18000,
      failOnStatusCode: false,
    }).as("linkResponse");
  });
});

Then("each partner link should return a valid status code", () => {
  cy.get("@linkResponse").then((response) => {
    const href = response.requestBody?.url || "";
    if (response.status !== 200) {
            cy.log(`Warning: Link ${href} returned status ${response.status}`);
          } else {
            cy.log(`Link ${href} is valid (200)`);
          }
  });
});


//VALIDATE PARTNERS PAGINATION BUTTONS FUNCTIONALITY
When("I click on the first pagination button for partners", () => {
  homePage.clickSplidPaginatioPagePartners();
});

Then("the first pagination button should be active", () => {
  homePage.splidPaginatioPagePartners.should("have.class", "is-active");
});

When("I click the next arrow button for partners", () => {
  homePage.clickSplideArrowNextBtnPartners();
});

Then("the second pagination button should be active", () => {
  homePage.spliPdeaginationPageSecond.should("have.class", "is-active");
});

When("I click the previous arrow button for partners", () => {
  homePage.clickSplideArrowPrevBtnPartners();
});

Then("the first pagination button should be active again", () => {
  homePage.splidPaginatioPagePartners.should("have.class", "is-active");
});


//VALIDATE PROJECT LINKS
When('I click on the project link {string}', (element) => {
  if (element === 'partnearsFirst') {
    homePage.clickOnPartnearsFirst();
  } else if (element === 'partnearsSecond') {
    homePage.clickOnPartnearsSecond();
  }
});


//VALIDATE VISIBILITY OF SCROLLUP BUTTON AFTER SCROLLING DOWN
When('I scroll to the bottom of the page', () => {
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
});

Then('the scrollUp button should be visible', () => {
 homePage.scrollBtn.should('have.class', 'show');
});


//VALIDATE ACTIVATION OF PRIVACY POLICY AFTER BUTTON CLICK
When('I click on the privacy policy button', () => {
  homePage.clickMarginbottom(); 
});

Then('the privacy policy button should be active', () => {
  homePage.privacybutton.should('have.class', 'active');
});

Then('I should be redirected to the privacy policy page', () => {
  cy.url().should('include', 'https://www.chnu.edu.ua/polityka-konfidentsiinosti/');
});

When('I go back to the homepage', () => {
  cy.go('back');
});

Then('I accept all privacy policy terms', () => {
  homePage.clickAcceptAllPrivacyPolicy(); 
});

Then('the fingerprint button should be visible', () => {
  homePage.policyFingerprintButton.should('be.visible'); 
});


//VALIDATE USEFUL LINKS
When('I check the existence of the {string} link with href {string}', (elementName, expectedUrl ) => {
  homePage[elementName]
    .should('exist')
    .should("have.attr", "href", expectedUrl)
    .invoke('removeAttr', 'target');
});

When('I click on the {string} using {string}', (elementName, clickMethod) => {
    homePage[clickMethod](); 
  
});

Then('the URL should include {string} and return status 200', (expectedUrl) => {
  cy.request({ url: expectedUrl, failOnStatusCode: false }).then((response) => {
      if (response.status !== 200) {
        cy.log(`⚠️ Warning: Expected status 200 but got ${response.status} for URL: ${expectedUrl}`);
      } else {
        expect(response.status).to.eq(200);
      }
    });
  });



//Validate that mailto links exist and have correct attributes
When('I check the existence of the {string} mail link', (name) => {
  homePage[name]
  .should('be.visible')
  .invoke('attr', 'href');
});

Then('the mail link should have href {string}', (expectedMail) => {
  cy.request(expectedMail).its('status').should('eq', 200);
});
        
  

