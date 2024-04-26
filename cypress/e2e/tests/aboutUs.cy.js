import aboutUsPage from "../pages/aboutUs.page";

describe('TESTING ABOUT US PAGE', () => {
   context('TESTING ABOUT US', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/');

        });


        it('Validate element "about the faculty"', () => {
            aboutUsPage.aboutthefaculty
                .should('be.visible')
                .should('contain', 'Про факультет');
            aboutUsPage.clickAboutTheFaculty();

            cy.url().should('include', '/pro-nas/pro-fakultet/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "deanery"', () => {
            aboutUsPage.deanery.should('contain', 'Деканат');

            aboutUsPage.clickDeanery();

            cy.url().should('include', '/pro-nas/dekanat/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "academic council"', () => {
            aboutUsPage.academicCouncil.should('contain', 'Вчена рада');
            aboutUsPage.clickAcademicCouncil();

            cy.url().should('include', '/pro-nas/vchena-rada/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "council of stakeholders"', () => {
            aboutUsPage.councilOfStakeholders.should('contain', 'Рада стейкхолдерів');
            aboutUsPage.clickCouncilOfStakeholders();
            cy.url().should('include', '/pro-nas/rada-steikkholderiv/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "professional bureau"', () => {
            aboutUsPage.professionalBureau
                .should('be.visible')
                .should('contain', 'Профбюро');
            aboutUsPage.clickProfessionalBureau();
            cy.url().should('include', '/pro-nas/profbiuro/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "infrastructure"', () => {
            aboutUsPage.infrastructure
                .should('contain', 'Інфраструктура');
            aboutUsPage.clickInfrastructure();
            cy.url().should('include', '/pro-nas/infrastruktura/').then((url) => {

                cy.request(url).its('status').should('eq', 200);
            });

        });


        it('Validate element "gallery"', () => {
            aboutUsPage.gallery
                .should('be.visible')
                .should('contain', 'Галерея')
            aboutUsPage.clickGallery();
            cy.url().should('include', '/pro-nas/halereia/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "contacts"', () => {
            aboutUsPage.contacts.should('contain', 'Контакти');

            aboutUsPage.clickContacts();

            cy.url().should('include', '/pro-nas/kontakty/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "useful links"', () => {
            aboutUsPage.usefulLinks.should('contain', 'Корисні посилання');

            aboutUsPage.clickUsefulLinks();

            cy.url().should('include', '/pro-nas/korysni-posylannia/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element memorial page of fallen Heroes', () => {
            aboutUsPage.memorialPageOfFallenHeroes
                .should('contain', "Сторінка пам'яті загиблих Героїв");
            aboutUsPage.clickMemorialPageOfFallenHeroes();
            cy.url().should('include', 'https://fmi.chnu.edu.ua/pro-nas/storinka-pamiati-zahyblykh-heroiv/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });
        });


        context('TESTING DEANERY ELEMENT IN ABOUT US PAGE', () => {

            beforeEach(() => {

                aboutUsPage.clickDeanery();

            });


            it('Validate the dean office display', () => {
                aboutUsPage.constants.members.forEach((member, index) => {

                    aboutUsPage.teamMember.eq(index).should('be.visible');

                    aboutUsPage.teamMemberimg.eq(index).should('be.visible');

                    aboutUsPage.teamMemberEmail.eq(index)
                        .should('be.visible')
                        .invoke('attr', 'href')
                        .should('eq', `mailto:${member.email}`);

                    aboutUsPage.teamMemberPhone.eq(index)
                        .should('be.visible')
                        .invoke('attr', 'href')
                        .should('eq', `tel:${member.phone}`);

                });

            });
        });


        context('TESTING ACADEMIC COUNCIL ELEMENT IN ABOUT US PAGE', () => {

            beforeEach(() => {

                aboutUsPage.clickAcademicCouncil();

            });


            it('Validate the map of each card', () => {
                aboutUsPage.cardLink.each(($el) => {
                    cy.wrap($el)
                        .should('have.class', 'collapsed')
                        .click()
                        .should('not.have.class', 'collapsed');
                });
            });


            it('Validate links to pdf files', () => {
                aboutUsPage.textSpace.each(($link) => {

                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');

                    cy.request(url).then((response) => {
                        cy.wrap(response.headers['content-type']).should('include', 'application/pdf');
                    });
                });
            });
        });
    });


    context('TESTING ABOUT THE FACULTY', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/pro-fakultet/');

        });


        it('Validate element "deanery"', () => {
            aboutUsPage.deanery
                .should('contain', 'Деканат');

            aboutUsPage.clickDeanery();

            cy.url().should('include', '/pro-nas/dekanat/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "history"', () => {
            aboutUsPage.history
                .should('be.visible')
                .should('contain', 'Історія');

            aboutUsPage.clickHistory();

            cy.url().should('include', '/pro-nas/pro-fakultet/istoriia/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "deans"', () => {
            aboutUsPage.deans
                .should('contain', 'Декани');

            aboutUsPage.clickDeans();

            cy.url().should('include', '/pro-nas/pro-fakultet/dekany/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "funders"', () => {
            aboutUsPage.funders
                .should('contain', 'Фундатори');

            aboutUsPage.clickFunders();

            cy.url().should('include', '/pro-nas/pro-fakultet/fundatory/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "symbolics"', () => {
            aboutUsPage.symbolics
                .should('contain', 'Символіка');

            aboutUsPage.clickSymbolics();

            cy.url().should('include', '/pro-nas/pro-fakultet/symvolika/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });
        });


        it('Validate element "graduates"', () => {
            aboutUsPage.graduates
                .should('contain', 'Випускники');

            aboutUsPage.clickGraduates();

            cy.url().should('include', '/pro-nas/pro-fakultet/vypusknyky/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "alumni association"', () => {
            aboutUsPage.alumniAssociation
                .should('be.visible')
                .should('contain', 'Асоціація випускників');

            aboutUsPage.clickAlumniAssociation();

            cy.url().should('include', '/pro-nas/pro-fakultet/asotsiatsiia-vypusknykiv/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        context('TESTING ACADEMIC COUNCIL ELEMENT IN ABOUT THE FACULTY PAGE', () => {

            beforeEach(() => {
                aboutUsPage.clickAcademicCouncil();

            });


            it('Validate the map of each card', () => {
                aboutUsPage.cardLink.each(($el) => {
                    cy.wrap($el)
                        .should('have.class', 'collapsed')
                        .click()
                        .should('not.have.class', 'collapsed');

                });
            });


            it('Validate links to pdf files', () => {
                aboutUsPage.textSpace.each(($link) => {
                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');

                    cy.request(url).then((response) => {

                        cy.wrap(response.headers['content-type']).should('include', 'application/pdf');

                    });

                });

            });

        });


        context('TESTING SYMBOLICS ELEMENT IN ABOUT THE FACULTY PAGE', () => {

            beforeEach(() => {
                aboutUsPage.clickSymbolics();
            });


            it('Validate the open of logo', () => {
                aboutUsPage.pngLink.each(($link) => {

                    const url = $link.attr('href');
                    cy.wrap($link).should('exist').and('have.attr', 'target', '_blank');
                    cy.request(url).then((response) => {

                        cy.wrap(response.headers['content-type']).should('include', 'image/png');

                    });

                });
            });
        });

    });


    context('TESTING "GRADUATES ASOCIATION" SECTION', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/pro-fakultet/asotsiatsiia-vypusknykiv/');

        });


        it('Validate banner "button"', () => {
            aboutUsPage.bannerBtn
                .should("exist")
                .invoke('removeAttr', 'target');

            aboutUsPage.clickBannerBtn();

            cy.location('href', { timeout: 10000 }).should('eq', 'https://fb.me/g/p_kkQDFgAHy4PdXCva/UPudP6O9').wait(5000).then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate open the image in a larger format', () => {
            aboutUsPage.photoElements.each(($link) => {
                cy.wrap($link).click();
                cy.wait(2000);
                aboutUsPage.modalWindow.should('be.visible');
                aboutUsPage.clickCloseImageButton();
                aboutUsPage.modalWindow.should('not.exist');
            });
        });


    });

    context('TESTING ACADEMIC COUNCIL', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/vchena-rada/');

        });


        it('Validate the map of each card', () => {
            aboutUsPage.cardLink.each(($el) => {
                cy.wrap($el)
                    .should('have.class', 'collapsed')
                    .click()
                    .should('not.have.class', 'collapsed');

            });
        });


    });


    context('TESTING COUNCIL OF STAKEHOLDERS', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/rada-steikkholderiv/');

        });


        it('Validate the map of each card', () => {
            aboutUsPage.cardLink.each(($el) => {
                cy.wrap($el)
                    .should('have.class', 'collapsed')
                    .click()
                    .should('not.have.class', 'collapsed');

            });
        });


        it('Validate сlick on "Read more" link redirects to the correct page', () => {
            aboutUsPage.readMore.each(($container) => {
                const hrefAttribute = $container.attr('href');
                cy.wrap(hrefAttribute).should('exist').and('not.be.empty');
                cy.request(hrefAttribute).then((response) => {
                    cy.wrap(response.status).should('equal', 200);
                });
            });
        });


    });


    context('TESTING PROFESSIONAL BUREAU', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/profbiuro/');

        });


        it('Validate the map of each card', () => {
            aboutUsPage.cardLink.each(($el) => {
                cy.wrap($el)
                    .should('have.class', 'collapsed')
                    .click()
                    .should('not.have.class', 'collapsed');

            });
        });


        it('Validate element "current news of the trade union committee"', () => {
            aboutUsPage.currentNews
                .should('contain', 'Актуальні новини профспілкового комітету')
                .should('have.attr', 'href', 'https://profcom.chnu.edu.ua/novyny/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickcurrentNews();

            cy.location('href', { timeout: 10000 }).should('include', 'https://profcom.chnu.edu.ua/novyny/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "regulations"', () => {
            aboutUsPage.regulations
                .should('be.visible')
                .should('contain', 'Нормативні документи')
                .should('have.attr', 'href', 'https://profcom.chnu.edu.ua/normatyvni-dokumenty/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickRegulations();

            cy.location('href', { timeout: 10000 }).should('include', 'https://profcom.chnu.edu.ua/normatyvni-dokumenty/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "trade union payments"', () => {
            aboutUsPage.payments
                .should('contain', 'Профспілкові виплати')
                .should('have.attr', 'href', '/pro-nas/profbiuro/profspilkovi-vyplaty/');

            aboutUsPage.clickPayments();

            cy.url().should('include', '/pro-nas/profbiuro/profspilkovi-vyplaty/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate сlick on "Read more" link redirects to the correct page', () => {
            aboutUsPage.readMore.each(($container) => {
                const hrefAttribute = $container.attr('href');
                cy.wrap(hrefAttribute).should('exist').and('not.be.empty');
                cy.request(hrefAttribute).then((response) => {
                    cy.wrap(response.status).should('equal', 200);
                });
            });
        });


        it('Validate element "more news"', () => {
            aboutUsPage.moreNews
                .should('contain', 'Більше новин')
                .should('have.attr', 'href', '/novyny/profbiuro-fmi/');

            aboutUsPage.clickmoreNews();

            cy.url().should('include', '/novyny/profbiuro-fmi/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        context('TESTING TRADE UNION PAYMENTS ELEMENT IN PROFESSIONAL BUREA PAGE', () => {

            beforeEach(() => {
                aboutUsPage.clickPayments();
            });

            it('Validate the map of each card', () => {
                aboutUsPage.cardLink.each(($el) => {

                    cy.wrap($el)
                        .should('have.class', 'collapsed')
                        .click()
                        .should('not.have.class', 'collapsed');

                });
            });
        });

    });


    context('TESTING INFRASTRUCTURE', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/infrastruktura/');

        });


        it('Validate element "fmi laboratories"', () => {
            aboutUsPage.fmiLaboratories
                .should('be.visible')
                .should('contain', 'Лабораторії ФМІ');

            aboutUsPage.clickFmiLaboratories();

            cy.url().should('include', '/pro-nas/infrastruktura/laboratorii/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });
        });


        it('Validate element "hostel"', () => {
            aboutUsPage.hostel
                .should('be.visible')
                .should('contain', 'Гуртожиток');

            aboutUsPage.clickHostel();

            cy.url().should('include', '/pro-nas/infrastruktura/hurtozhytok/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });
        });


        it('Validate element "fields"', () => {
            aboutUsPage.fields
                .should('be.visible')
                .should('contain', 'Майданчики');

            aboutUsPage.clickFields();

            cy.url().should('include', '/pro-nas/infrastruktura/maidanchyky/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "gyms"', () => {
            aboutUsPage.gyms
                .should('be.visible')
                .should('contain', 'Спортзали')
                .should('have.attr', 'href', '/media/f21jxvzt/zaly-chnu.pdf')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickGyms();

            cy.location('href', { timeout: 10000 }).should('include', '/media/f21jxvzt/zaly-chnu.pdf').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "library"', () => {
            aboutUsPage.library
                .should('be.visible')
                .should('contain', 'Бібліотека')
                .should('have.attr', 'href', 'http://www.library.chnu.edu.ua/index.php?page=ua')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickLibrary();

            cy.location('href', { timeout: 10000 }).should('include', 'http://www.library.chnu.edu.ua/index.php?page=ua').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "faculty courtyard"', () => {
            aboutUsPage.facultyCourtyard
                .should('be.visible')
                .should('contain', 'Дворик факультету');

            aboutUsPage.clickFacultyCourtyard();

            cy.url().should('include', '/pro-nas/infrastruktura/dvoryk/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        context('TESTING FMI LABORATORIES ELEMENT IN INFRASTRUCTURE PAGE', () => {

            beforeEach(() => {

                aboutUsPage.clickFmiLaboratories()

            });


            it('Validate open the image in a larger format', () => {
                aboutUsPage.photoElements.each(($link) => {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                });
            });
        });


        context('TESTING HOSTEL ELEMENT IN INFRASTRUCTURE PAGE', () => {

            beforeEach(() => {
                aboutUsPage.clickHostel();
            });


            it('Validate banner "button"', () => {
                aboutUsPage.bannerBtn
                    .should("exist")
                    .invoke('removeAttr', 'target');

                aboutUsPage.clickBannerBtn();

                cy.location('href', { timeout: 10000 }).should('eq', 'https://fmi.chnu.edu.ua/media/5u4p3cpk/hurtozhytok_25_08_2023.pdf').wait(5000).then((url) => {

                    cy.request(url).its('status').should('eq', 200);

                });

            });


            it('Validate element "Campus"', () => {
                aboutUsPage.campus
                    .should('contain', 'Студмістечко')
                    .should('have.attr', 'href', 'https://www.chnu.edu.ua/universytet/zahalni-vidomosti/strukturni-pidrozdily/studmistechko/')
                    .should('have.attr', 'target', '_blank')
                    .invoke('removeAttr', 'target');

                aboutUsPage.clickCampus();

                cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/universytet/zahalni-vidomosti/strukturni-pidrozdily/studmistechko/').then((url) => {

                    cy.request(url).its('status').should('eq', 200);

                });

            });


            it('Validate element "dormitory4"', () => {
                aboutUsPage.dormitory4
                    .should('contain', 'Гуртожиток №4 (відео)')
                    .should('have.attr', 'href', 'https://algebra.chnu.edu.ua/media/qn5lwcwu/youcut_20210929_082821063.mp4')
                    .should('have.attr', 'target', '_blank')
                    .invoke('removeAttr', 'target');

                aboutUsPage.clickDormitory4();

                cy.location('href', { timeout: 10000 }).should('include', 'https://algebra.chnu.edu.ua/media/qn5lwcwu/youcut_20210929_082821063.mp4').then((url) => {

                    cy.request(url).its('status').should('eq', 200);

                });

            });


            it('Validate element "regulations on the use of dormitories"', () => {
                aboutUsPage.regulUseDormitories
                    .should('contain', 'Положення про користування гуртожитками')
                    .should('have.attr', 'href', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/polozhennia-pro-korystuvannia-hurtozhytkamy-studentskoho-mistechka/')
                    .should('have.attr', 'target', '_blank')
                    .invoke('removeAttr', 'target');

                aboutUsPage.clickRegulUseDormitories();

                cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/polozhennia-pro-korystuvannia-hurtozhytkamy-studentskoho-mistechka/').then((url) => {

                    cy.request(url).its('status').should('eq', 200);

                });

            });


            it('Validate element "rules of internal procedure"', () => {
                aboutUsPage.rulesProcedure
                    .should('contain', 'Правила внутрішнього розпорядку')
                    .should('have.attr', 'href', 'https://www.chnu.edu.ua/media/2iwfonnb/pravyla-vnutrishnoho-rozporiadku-v-studentskykh-hurtozhytkakh-chernivetskoho-natsionalnoho-universytetu-imeni-yuriia-fedkovycha.pdf')
                    .should('have.attr', 'target', '_blank')
                    .invoke('removeAttr', 'target');

                aboutUsPage.clickRulesProcedure();

                cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/media/2iwfonnb/pravyla-vnutrishnoho-rozporiadku-v-studentskykh-hurtozhytkakh-chernivetskoho-natsionalnoho-universytetu-imeni-yuriia-fedkovycha.pdf').then((url) => {

                    cy.request(url).its('status').should('eq', 200);

                });

            });


            it('Validate downloaded file', () => {
                aboutUsPage.clickDodatok();
                cy.readFile('cypress/downloads/dodatok-a.docx', { timeout: 20000 });
                cy.verifyDownload('dodatok-a.docx')
            });

        });

    });


    context('TESTING GALLERY', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/halereia/');

        });


        it('Validate opening the first five images in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index < 5) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });


        it('Validate opening images from the fifth to the tenth in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index >= 5 && index < 10) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });


        it('Validate opening images from the fifth to the tenth in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index >= 10 && index < 15) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });


        it('Validate opening images from the fifth to the tenth in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index >= 15 && index < 21) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });


        it('Validate opening images from the fifth to the tenth in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index >= 21 && index < 31) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });


        it('Validate opening images from the fifth to the tenth in a larger format', () => {
            aboutUsPage.photoElements.each(($link, index) => {
                if (index >= 31 && index < 45) {
                    cy.wrap($link).click();
                    cy.wait(2000);
                    aboutUsPage.modalWindow.should('be.visible');

                    aboutUsPage.clickCloseImageButton();

                    aboutUsPage.modalWindow.should('not.exist');
                }
            });
        });

    });


    context('TESTING CONTACTS', () => {

        beforeEach(() => {

            cy.visit('https://fmi.chnu.edu.ua/pro-nas/kontakty/');

        });


        it('Validate contacts phone number', () => {
            aboutUsPage.phoneNumber
                .should('exist')
                .should('have.attr', 'href', 'tel:(0372) 58-48-80');

        });


        it('Validate the mail', () => {
            aboutUsPage.theMail
                .should('be.visible')
                .invoke('attr', 'href')
                .then((emailLink) => {
                    cy.request(emailLink).then((response) => {
                        cy.wrap(response.status).should('eq', 200);
                    });
                });
        });


        it('Validate the facebook link', () => {
            aboutUsPage.toTheFacebook
                .should('exist')
                .should('have.attr', 'href', 'https://www.facebook.com/fmi.org.ua/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickToTheFacebook();

            cy.location('href', { timeout: 10000 }).should('include', 'https://www.facebook.com/fmi.org.ua/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });


        });


        it('Validate the transfer to the instagram', () => {
            aboutUsPage.toTheInstagram
                .should('exist')
                .should('have.attr', 'href', 'https://www.instagram.com/m._i_.f/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickToTheInstagram();

            cy.location('href', { timeout: 10000 }).should('include', 'https://www.instagram.com/m._i_.f/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate the transfer to the telegram', () => {
            aboutUsPage.toTheTelegram
                .should('exist')
                .should('have.attr', 'href', 'https://t.me/FMISiteNews')
                .invoke('removeAttr', 'target');

        });


    });


    context('TESTING USEFUL LINKS', () => {

        beforeEach(() => {
            cy.visit('https://fmi.chnu.edu.ua/pro-nas/korysni-posylannia/');
        });


        it('Validate element "site of yuri fedkovich chernivtsi national university"', () => {
            aboutUsPage.siteLink
                .should('be.visible')
                .should('contain', 'Сайт Чернівецького національного університету імені Юрія Федьковича')
                .should('have.attr', 'href', 'https://www.chnu.edu.ua/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickSiteLink();

            cy.location('href', { timeout: 10000 }).should('include', 'https://www.chnu.edu.ua/').then((url) => {
                cy.request(url).its('status').should('eq', 200);
            });

        });


        it('Validate element "website of the ministry of education and science of ukraine"', () => {
            aboutUsPage.websiteLink
                .should('be.visible')
                .should('contain', 'Сайт Міністерства освіти і науки України')
                .should('have.attr', 'href', 'https://mon.gov.ua/ua')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickWebsiteLink();

            cy.location('href', { timeout: 10000 }).should('include', 'https://mon.gov.ua/ua');

            cy.on('uncaught:exception', (e) => {

                if (e.message.includes('Cannot read properties of null (reading \'elements\')')) {

                    return false;

                }

            });

            cy.visit('https://mon.gov.ua/ua');

            cy.url().then((url) => {

                cy.request(url).then((response) => {

                    expect(response.status).to.eq(200);

                });

            });

        });


        it('Validate element "scientific bulletin of chernivtsi university"', () => {
            aboutUsPage.scientificBulletin
                .should('be.visible')
                .should('contain', 'Науковий вiсник Чернiвецького унiверситету')
                .should('have.attr', 'href', 'http://www.visnyk-chnu.ipsys.net/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickScientificBulletin();

            cy.location('href', { timeout: 10000 }).should('include', 'http://www.visnyk-chnu.ipsys.net/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "bukovinsk mathematical journal"', () => {
            aboutUsPage.mathematicalJournal
                .should('be.visible')
                .should('contain', 'Буковинський математичний журнал')
                .should('have.attr', 'href', 'http://bmj.fmi.org.ua/index.php/adm')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickMathematicalJournal();

            cy.location('href', { timeout: 10000 }).should('include', 'https://bmj.fmi.org.ua/index.php/adm').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "national agency for quality assurance of higher education"', () => {
            aboutUsPage.nationalAgency
                .should('be.visible')
                .should('contain', 'Національне агентство із забезпечення якості вищої освіти')
                .should('have.attr', 'href', 'https://naqa.gov.ua/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickNationalAgency();

            cy.location('href', { timeout: 10000 }).should('include', 'https://naqa.gov.ua/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "chernivtsi mathematical society"', () => {
            aboutUsPage.mathematicalSociety
                .should('be.visible')
                .should('contain', 'Чернівецьке Математичне Товариство')
                .should('have.attr', 'href', 'https://cmt.chnu.edu.ua/')
                .invoke('removeAttr', 'target');
                
            aboutUsPage.clickMathematicalSociety();

            cy.location('href', { timeout: 10000 }).should('include', 'https://cmt.chnu.edu.ua/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });


        it('Validate element "electronic learning of chnu"', () => {
            aboutUsPage.learningofChNU
                .should('be.visible')
                .should('contain', 'Електронне навчання ЧНУ')
                .should('have.attr', 'href', 'https://moodle.chnu.edu.ua/')
                .invoke('removeAttr', 'target');

            aboutUsPage.clickLearningofChNU();

            cy.location('href', { timeout: 10000 }).should('include', 'https://moodle.chnu.edu.ua/').then((url) => {

                cy.request(url).its('status').should('eq', 200);

            });

        });

    });

});