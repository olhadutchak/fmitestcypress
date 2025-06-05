class AboutUsPage {
get developmentProgramBtn()        { return cy.get('.banner-button'); }
get bannerBtn()                    { return cy.get('.banner-button');}
get pdfAndTxtFiles()               { return cy.get('.file a.link'); }

get scientificCard()               { return cy.get('.card'); }
get scientificText()               { return cy.get('[data-card-text]'); }
get scientificCardHeader()         { return cy.get('.card-header'); }

get profcomNewsButton()            { return cy.get('.category-item-flex:contains("Актуальні новини профспілкового комітету")'); }
get regulatoryDocumentsButton()    { return cy.get('.category-item-flex:contains("Нормативні документи")'); }
get unionPaymentsButton()          { return cy.get('.category-item-flex:contains("Профспілкові виплати")'); }
get moreNewsButton()               { return cy.get('.category-item-flex:contains("Більше новин")'); }
get newsItemsSec()                 { return cy.get('.flex-readon-arrow'); }

get photoElements()                { return cy.get('.flex-item').find('a.lightbox'); }
get modalWindow()                  { return cy.get('.parvus__content'); }
get closeImageButton()             { return cy.get('[aria-label="Close dialog window"]'); }

get deansCard()                    { return cy.get('.category-item-flex:contains("Декани")'); }
get foundersCard()                 { return cy.get('.category-item-flex:contains("Фундатори")'); }
get honorableDoctorsCard()         { return cy.get('.category-item-flex:contains("Почесні доктори")'); }

get laboratoriesCard()             { return cy.get('.category-item-flex:contains("Лабораторії ФМІ")'); }
get hostelCard()                   { return cy.get('.category-item-flex:contains("Гуртожиток")'); }
get playgroundsCard()              { return cy.get('.category-item-flex:contains("Майданчики")'); }
get gymsCard()                     { return cy.get('.category-item-flex:contains("Спортзали")'); }
get libraryCard()                  { return cy.get('.category-item-flex:contains("Бібліотека")'); }
get courtyardCard()                { return cy.get('.category-item-flex:contains("Дворик факультету")'); }
get motherChildRoomCard()          { return cy.get('.category-item-flex:contains("Кімната матері та дитини")'); }
get studentSpaceCard()             { return cy.get('.category-item-flex:contains("Студентський простір")'); }



    constants = {
        totalCards: 4,
        totalCardsS: 3,
        totalCardsYoungS: 1,
        totalCardsG: 28,
        sectionsProfessionalBureau: [
            {
                name: 'Актуальні новини профспілкового комітету',
                element: () => this.profcomNewsButton,
                click: () => this.clickProfcomNewsButton(),
                urlIncludes: 'profcom.chnu.edu.ua/novyny'
            },
            {
                name: 'Нормативні документи',
                element: () => this.regulatoryDocumentsButton,
                click: () => this.clickRegulatoryDocumentsButton(),
                urlIncludes: 'profcom.chnu.edu.ua/normatyvni-dokumenty'
            },
            {
                name: 'Профспілкові виплати',
                element: () => this.unionPaymentsButton,
                click: () => this.clickUnionPaymentsButton(),
                urlIncludes: '/pro-nas/administratsiia/profbiuro/profspilkovi-vyplaty'
            },
            {
                name: 'Більше новин',
                element: () => this.moreNewsButton,
                click: () => this.clickMoreNewsSection(),
                urlIncludes: '/novyny/novyny-profbiuro'
            }
        ],
        sectionsHistory: [
            {
                name: 'Декани',
                element: () => this.deansCard,
                click: () => this.clickDeansCard(),
                urlIncludes: '/pro-nas/istoriia-ta-sohodennia/istoriia/dekany/'
            },
            {
                name: 'Фундатори',
                element: () => this.foundersCard,
                click: () => this.clickFoundersCard(),
                urlIncludes: '/pro-nas/istoriia-ta-sohodennia/istoriia/fundatory/'
            },
            {
                name: 'Почесні доктори',
                element: () => this.honorableDoctorsCard,
                click: () => this.clickHonorableDoctorsCard(),
                urlIncludes: '/pro-nas/istoriia-ta-sohodennia/istoriia/pochesni-doktory/'
            }
        ],
        sectionsInfrastructure: [
            {
                name: 'Лабораторії ФМІ',
                element: () => this.laboratoriesCard,
                click: () => this.clickLaboratoriesCard(),
                urlIncludes: '/pro-nas/infrastruktura/laboratorii/'
            },
            {
                name: 'Гуртожиток',
                element: () => this.hostelCard,
                click: () => this.clickHostelCard(),
                urlIncludes: '/pro-nas/infrastruktura/hurtozhytok/'
            },
            {
                name: 'Майданчики',
                element: () => this.playgroundsCard,
                click: () => this.clickPlaygroundsCard(),
                urlIncludes: '/pro-nas/infrastruktura/maidanchyky/'
            },
            {
                name: 'Спортзали',
                element: () => this.gymsCard,
                click: () => this.clickGymsCard(),
                urlIncludes: '/media/f21jxvzt/zaly-chnu.pdf'
            },
            {
                name: 'Бібліотека',
                element: () => this.libraryCard,
                click: () => this.clickLibraryCard(),
                urlIncludes: 'library.chnu.edu.ua'
            },
            {
                name: 'Дворик факультету',
                element: () => this.courtyardCard,
                click: () => this.clickCourtyardCard(),
                urlIncludes: '/pro-nas/infrastruktura/dvoryk/'
            },
            {
                name: 'Кімната матері та дитини',
                element: () => this.motherChildRoomCard,
                click: () => this.clickMotherChildRoomCard(),
                urlIncludes: '/pro-nas/infrastruktura/kimnata-materi-ta-dytyny/'
            },
            {
                name: 'Студентський простір',
                element: () => this.studentSpaceCard,
                click: () => this.clickStudentSpaceCard(),
                urlIncludes: '/pro-nas/infrastruktura/studentskyi-prostir/'
            }
        ],
        contactData: [
            {
                label: 'Адреса',
                selector: '.contact-item span:contains("58012, Україна, м. Чернівці, вул. Університетська, 28.")',
                shouldHaveText: true,
            },
            {
                label: 'Телефон',
                selector: 'a.contact-item[href^="tel:"]',
                href: 'tel:(0372) 58-48-80',
                text: '(0372) 58-48-80',
            },
            {
                label: 'Email',
                selector: 'a.contact-item[href^="mailto:"]',
                href: 'mailto:clg-math@chnu.edu.ua',
                text: 'clg-math@chnu.edu.ua',
            },
            {
                label: 'Facebook',
                selector: 'a.contact-item[href*="facebook.com"]',
                href: 'https://www.facebook.com/fmi.org.ua/',
                text: 'Facebook',
            },
            {
                label: 'Instagram',
                selector: 'a.contact-item[href*="instagram.com"]',
                href: 'https://www.instagram.com/m._i_.f/',
                text: 'Instagram',
            }
        ]
    }

clickProfcomNewsButton() {
    this.profcomNewsButton.invoke('removeAttr', 'target').click();
}

clickRegulatoryDocumentsButton() {
    this.regulatoryDocumentsButton.invoke('removeAttr', 'target').click();
}

clickUnionPaymentsButton() {
    this.unionPaymentsButton.invoke('removeAttr', 'target').click();
}
clickMoreNewsSection() {
    this.moreNewsButton.invoke('removeAttr', 'target').click();
}

clickCloseImageButton() {
    this.closeImageButton.invoke('removeAttr', 'target').click({ force: true });
}

clickDeansCard() {
    this.deansCard.invoke('removeAttr', 'target').click({ force: true });
}

clickFoundersCard() {
    this.foundersCard.invoke('removeAttr', 'target').click({ force: true });
}

clickHonorableDoctorsCard() {
    this.honorableDoctorsCard.invoke('removeAttr', 'target').click({ force: true });
}

clickLaboratoriesCard() {
    this.laboratoriesCard.invoke('removeAttr', 'target').click({ force: true });
}

clickHostelCard() {
    this.hostelCard.invoke('removeAttr', 'target').click({ force: true });
}

clickPlaygroundsCard() {
    this.playgroundsCard.invoke('removeAttr', 'target').click({ force: true });
}

clickGymsCard() {
    this.gymsCard.invoke('removeAttr', 'target').click({ force: true });
}

clickLibraryCard() {
    this.libraryCard.invoke('removeAttr', 'target').click({ force: true });
}

clickCourtyardCard() {
    this.courtyardCard.invoke('removeAttr', 'target').click({ force: true });
}

clickMotherChildRoomCard() {
    this.motherChildRoomCard.invoke('removeAttr', 'target').click({ force: true });
}

clickStudentSpaceCard() {
    this.studentSpaceCard.invoke('removeAttr', 'target').click({ force: true });
}


validateNewsItemSec($el) {
    cy.wrap($el).within(() => {
      cy.contains('Читати далі').should('have.attr', 'href').and('not.be.empty');
    });
}
}

export default new AboutUsPage();