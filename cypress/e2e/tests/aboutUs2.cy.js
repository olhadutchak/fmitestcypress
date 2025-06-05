import aboutUsPage from "../pages/aboutUs2.page";

describe('TESTING THE ABOUT US PAGE', () => {

    context('TESTING SUBMENU ADMINISTRATION', () => {

        context('TESTING THE SUBSECTION ITEM DEAN OFFICE', () => {
            const dekanats = Cypress.env('fixture');
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/administratsiia/dekanat/');
            });
            dekanats.forEach((member, index) => {
                it(`Validate dean members info: ${member.name}`, () => {

                    cy.get('.team-member').eq(index).as('memberCard');

                    cy.get('@memberCard').should('contain', member.name);

                    if (member.email) {
                        cy.get('@memberCard')
                            .find(`a[href="mailto:${member.email}"]`)
                            .should('exist');
                    }

                    if (member.phone) {
                        const sanitizedPhone = member.phone.replace(/[\s\(\)-]/g, '');
                        cy.get('@memberCard')
                            .find('a[href^="tel:"]')
                            .invoke('attr', 'href')
                            .then((href) => {
                                expect(href.replace(/[^\d+]/g, '')).to.include(sanitizedPhone);
                            });
                    }

                    if (member.profile) {
                        cy.get('@memberCard')
                            .find('a')
                            .contains('Профайл')
                            .should('have.attr', 'href', member.profile);
                    }
                });
            });
        });

        context('TESTING THE SUBSECTION ACADEMIC COUNCIL', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/administratsiia/vchena-rada/');
            });

            it('Validate has a link to the development program of the faculty of mathematics and informatics', () => {
                aboutUsPage.developmentProgramBtn
                    .should('have.attr', 'href')
                    .and('include', '/media/14xpxbow/prohrama-martyniuk-ov-dekan.pdf');
            });

            it('Validates PDF and TXT links', () => {
                aboutUsPage.pdfAndTxtFiles.each(($link) => {
                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
                    cy.request(url).then((response) => {
                        const type = response.headers['content-type'];
                        expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
                    });
                });
            });

        });


        context('TESTING THE SUBSECTION PROFESSIONAL BUREAU', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/administratsiia/profbiuro/');
            });

            const totalCards = aboutUsPage.constants.totalCards;
            Array.from({ length: totalCards }).forEach((_, index) => {
                it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('have.attr', 'style')
                            .and('include', 'display: none');
                    });


                    aboutUsPage.scientificCardHeader.eq(index).click();
                    cy.wait(300);


                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('not.have.attr', 'style', 'display: none;')
                            .should('be.visible');
                    });
                });
            });

            const sectionsProfessionalBureau = aboutUsPage.constants.sectionsProfessionalBureau;
            sectionsProfessionalBureau.forEach(({ name, element, click, urlIncludes }) => {
                it(`Validates "${name}"`, () => {
                    element().should('contain', name);
                    click();
                    cy.url().should('include', urlIncludes).then((url) => {
                        cy.request(url).its('status').should('eq', 200);
                    });
                });
            });

            it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
                aboutUsPage.newsItemsSec.each(($el) => {
                    aboutUsPage.validateNewsItemSec($el);
                });
            });
        });

        
        context('TESTING THE SUBSECTION CONTACT INFO', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/administratsiia/kontakty/'); 
            });
            const contactData = aboutUsPage.constants.contactData;
            contactData.forEach(({ label, selector, href, text, type }) => {
                it(`Validates ${label} contact item`, () => {
                    cy.get(selector)
                        .should('exist')
                        .and('be.visible');

                    if (text) {
                        cy.get(selector).should('contain', text);
                    }

                    if (href) {
                        cy.get(selector).should('have.attr', 'href', href);
                    }
                });
            });
        });
    });

    context('TESTING SUBMENU AT THE FACULTY', () => {

        context('TESTING THE SUBSECTION STAKEHOLDER COUNCIL', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/rada-steikkholderiv/');
            });
            const totalCards = aboutUsPage.constants.totalCardsS;
            Array.from({ length: totalCards }).forEach((_, index) => {
                it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('have.attr', 'style')
                            .and('include', 'display: none');
                    });


                    aboutUsPage.scientificCardHeader.eq(index).click();
                    cy.wait(300);


                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('not.have.attr', 'style', 'display: none;')
                            .should('be.visible');
                    });
                });
            });

            it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
                aboutUsPage.newsItemsSec.each(($el) => {
                    aboutUsPage.validateNewsItemSec($el);
                });
            });

        });

        
        context('TESTING THE SUBSECTION COUNCIL OF YOUNG SCIENTISTS', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/rada-molodykh-vchenykh/');
            });
            const totalCards = aboutUsPage.constants.totalCardsYoungS;
            Array.from({ length: totalCards }).forEach((_, index) => {
                it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('have.attr', 'style')
                            .and('include', 'display: none');
                    });


                    aboutUsPage.scientificCardHeader.eq(index).click();
                    cy.wait(300);


                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('not.have.attr', 'style', 'display: none;')
                            .should('be.visible');
                    });
                });
            });

            it('Validate that all contests have titles, descriptions, and "Read more" links', () => {
                aboutUsPage.newsItemsSec.each(($el) => {
                    aboutUsPage.validateNewsItemSec($el);
                });
            });
        });


        context('TESTING THE SUBSECTION ALUMNI ASSOCIATION', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/pry-fakulteti/asotsiatsiia-vypusknykiv/');
            });

            it('Validate has a link to the catalog of university-wide elective subjects', () => {
                aboutUsPage.bannerBtn
                    .should('have.attr', 'href')
                    .and('include', '/groups/834529403844819/?ref=share');
            });

            it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(5000);
                    aboutUsPage.modalWindow.should('be.visible');
                    aboutUsPage.clickCloseImageButton();
                    aboutUsPage.modalWindow.should('not.exist');
                });
            });

        });
    });

    context('TESTING HISTORY AND PRESENT', () => {

        context('TESTING THE SUBSECTION HISTORY', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/istoriia-ta-sohodennia/istoriia/');
            });

            const sectionsHistory = aboutUsPage.constants.sectionsHistory;
            sectionsHistory.forEach(({ name, element, click, urlIncludes }) => {
                it(`Validates "${name}"`, () => {
                    element().should('contain', name);
                    click();
                    cy.url().should('include', urlIncludes).then((url) => {
                        cy.request(url).its('status').should('eq', 200);
                    });
                });
            });

            it('Validate has a link to the conference', () => {
                aboutUsPage.bannerBtn
                    .should('have.attr', 'href')
                    .and('include', 'https://fmi55.chnu.edu.ua/');
            });

            it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(5000);
                    aboutUsPage.modalWindow.should('be.visible');
                    aboutUsPage.clickCloseImageButton();
                    aboutUsPage.modalWindow.should('not.exist');
                });
            });

        });

        context('TESTING THE SUBSECTION GRADUATES', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/istoriia-ta-sohodennia/vypusknyky/');
            });

            const totalCards = aboutUsPage.constants.totalCardsG;
            Array.from({ length: totalCards }).forEach((_, index) => {
                it(`Validate should open text field when card header #${index + 1} is clicked`, () => {
                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('have.attr', 'style')
                            .and('include', 'display: none');
                    });


                    aboutUsPage.scientificCardHeader.eq(index).click();
                    cy.wait(300);


                    aboutUsPage.scientificCard.eq(index).within(() => {
                        aboutUsPage.scientificText
                            .should('not.have.attr', 'style', 'display: none;')
                            .should('be.visible');
                    });
                });
            });
            
        });
    });

    context('TESTING PUBLIC INFORMATION', () => {
        
        context('TESTING THE SUBSECTION REPORT', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/zvity/zvit-2024/');
            });

            it('Validates PDF and TXT links', () => {
                aboutUsPage.pdfAndTxtFiles.each(($link) => {
                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
                    cy.request(url).then((response) => {
                        const type = response.headers['content-type'];
                        expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
                    });
                });
            });

        });

        context('TESTING THE SUBSECTION REGULATORY DOCUMENTS', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/normatyvni-dokumenty/');
            });

            it('Validate has a link to the conference', () => {
                aboutUsPage.bannerBtn
                    .should('have.attr', 'href')
                    .and('include', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/');
            });

            it('Validates PDF and TXT links', () => {
                aboutUsPage.pdfAndTxtFiles.each(($link) => {
                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
                    cy.request(url).then((response) => {
                        const type = response.headers['content-type'];
                        expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
                    });
                });
            });
        });

        context('TESTING THE SUBSECTION MONITORING RESULTS', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/publichna-informatsiia/rezultaty-monitorynhu/');
            });

            it('Validates PDF and TXT links', () => {
                aboutUsPage.pdfAndTxtFiles.each(($link) => {
                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
                    cy.request(url).then((response) => {
                        const type = response.headers['content-type'];
                        expect(['application/pdf', 'text/plain', 'text/html']).to.include(type.split(';')[0]);
                    });
                });
            });
        });
    });

    context('TESTING INFRASTRUCTURE', () => {

        context('TESTING THE SUBSECTION LABORATORIES', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/laboratorii/');
            });
            
             it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(5000);
                    aboutUsPage.modalWindow.should('be.visible');
                    aboutUsPage.clickCloseImageButton();
                    aboutUsPage.modalWindow.should('not.exist');
                });
            });
        })

        context('TESTING THE SUBSECTION STUDENT SPACE', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/studentskyi-prostir/');
            });

            it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(5000);
                    aboutUsPage.modalWindow.should('be.visible');
                    aboutUsPage.clickCloseImageButton();
                    aboutUsPage.modalWindow.should('not.exist');
                });
            });
        });

        context('TESTING THE SUBSECTION MOTHER AND CHILD ROOM', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/kimnata-materi-ta-dytyny/');
            });

            it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(5000);
                    aboutUsPage.modalWindow.should('be.visible');
                    aboutUsPage.clickCloseImageButton();
                    aboutUsPage.modalWindow.should('not.exist');
                });
            });
        });

        context('TESTING THE SUBSECTION OTHER', () => {
             beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/');
            });

            const sectionsInfrastructure = aboutUsPage.constants.sectionsInfrastructure;
            sectionsInfrastructure.forEach(({ name, element, click, urlIncludes }) => {
                it(`Validates "${name}"`, () => {
                    element().should('contain', name);
                    click();
                    cy.url().should('include', urlIncludes).then((url) => {
                        cy.request(url).its('status').should('eq', 200);
                    });
                });
            });
        });

    });

    context('TESTING USEFUL', () => {
        context('TESTING THE SUBSECTION COMMENTS AND SUGGESTIONS BOX', () => {
            beforeEach(() => {
                cy.visit('https://fmi.chnu.edu.ua/pro-nas/korysne/skrynka-zauvazhen-ta-propozytsii/');
            });

            it('Validate has a link to the catalog of university-wide elective subjects', () => {
                aboutUsPage.bannerBtn
                    .should('have.attr', 'href')
                    .and('include', 'https://docs.google.com/forms/');
            });

        })
    });
});

