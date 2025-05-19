class ActivityPage {
    get conferenceBannerButton()          { return cy.get('a.banner-button'); }
    get postgraduateItemFlex()            { return cy.get('.category-item-flex'); }
    get postgraduateH2Title()             { return cy.get('h2.title'); }
    get seminarCard()                     { return cy.get('.card'); }
    get seminarText()                     { return cy.get('[data-card-text]'); }
    get seminarCardHeader()               { return cy.get('.card-header'); }
    get scientificCard()                  { return cy.get('.card'); }
    get scientificText()                  { return cy.get('[data-card-text]'); }
    get scientificCardHeader()            { return cy.get('.card-header'); }
    get lightboxFlexItem()                { return cy.get('.lightbox.flex-event-item'); }
    get parvusSlide()                     { return cy.get('.parvus__slide[aria-hidden="false"] img', { timeout: 10000 }); }
    get parvusSlideT()                    { return cy.get('.parvus__slide[aria-hidden="false"]', { timeout: 10000 }); }
    get iCareInUkraineLink()              { return cy.contains('I care in Ukraine'); }
    get suportinSchoolLink()               { return cy.contains('Supporting school inclusion and parenthood in Ukraine'); }
    get partnearsFirst()                   { return cy.get('li.splide__slide.is-active.is-visible').find('a.content-part'); }
    get partnearsSecond()                  { return cy.get('li.splide__slide.is-visible.is-next').find('a.content-part');}
    get getBodnarukLink()                  { return cy.get('a[href*="bodnaruk-svitlana-bohdanivna"]'); }
  
    get getBmanOfficialSiteLink()          { return cy.get('a[href="http://chernivtsi.man.gov.ua/"]'); }
    get getSchedulePdfLink()               { return cy.get('a[href$=".pdf"]'); }
    get getPartnerLinks()                  { return cy.get('#splide01-track').find('a'); }

    get board()                     { return cy.get('.flex-item a.category-item-flex:contains("Рада кураторів")'); }
    get photoReports()              { return cy.get('.flex-item a.category-item-flex:contains("Фотозвіти")'); }
    get photoElements()             { return cy.get('.flex-item').find('a.lightbox'); }
    get modalWindow()               { return cy.get('.parvus__content'); }
    get closeImageButton()          { return cy.get('[aria-label="Close dialog window"]'); }

    get educational()               { return cy.get('.flex-item a.category-item-flex').eq(0); }
    get composition()               { return cy.get('.flex-item a.category-item-flex:contains("Склад методичної ради")'); }
    get workPlan()                  { return cy.get('.flex-item a.category-item-flex:contains("План роботи")'); }
    get regulations()               { return cy.get('.flex-item a.category-item-flex:contains("Збірник нормативних документів")'); }
    get getNormDocsLink() {
      return cy.contains('a.category-item-flex', 'Нормативні документи (сайт ЧНУ)');
    }

    get imegeText()                  { return cy.get('.image-and-text-card a.h3');}
  
    

    constants = {
        expectedLinks: [
            "https://hahn.chnu.edu.ua/",
            "https://fmi55.chnu.edu.ua/",
            "http://www.amit60.fmi.org.ua/",
            "https://difeq-chnu-ua.blogspot.com/",
            "http://sde100.fmi.org.ua/"
          ],

        items: [
            {
              title: '111 Математика',
              href: 'https://difeq.chnu.edu.ua/aspirantu/',
              target: '_blank',
            },
            {
              title: '113 Прикладна математика',
              href: 'https://amit.chnu.edu.ua/nauka/aspirantura/',
              target: '_self',
            },
            {
              title: 'Список аспірантів',
              href: '/media/j2sgxoh0/spysok-aspirantiv-2024.pdf',
              target: '_blank',
            }
          ],
        
    }


    clickICareInUkraineLink() {
      this.iCareInUkraineLink.click();
    }
    clickSuportingSchoolLink() {
      this.suportinSchoolLink.click();
    }
    clickPartnearsFirst(){
      this.partnearsFirst.click({ force: true });
    }
    clickPartnearsSecond(){
      this.partnearsSecond.click({ force: true });
    }
    clickBodnarukLink() {
      this.getBodnarukLink.invoke('removeAttr', 'target').click({ force: true });
    }
  
    clickBmanOfficialSiteLink() {
      this.getBmanOfficialSiteLink.invoke('removeAttr', 'target').click({ force: true });
    }
  
    clickSchedulePdfLink() {
      this.getSchedulePdfLink.invoke('removeAttr', 'target').click({ force: true });
    }

    clickBoard() {
      this.board.click();
  }

  clickPhotoReports() {
    this.photoReports.click();
}

clickCloseImageButton() {
  this.closeImageButton.click({ force: true });
}

clickEducational() {
  this.educational
  .invoke('removeAttr', 'target') 
  .click();
}

clickComposition() {
  this.composition.invoke('removeAttr', 'target').click();
}

clickWorkPlan() {
  this.workPlan.invoke('removeAttr', 'target').click();
}

clickRegulations() {
  this.regulations.invoke('removeAttr', 'target').click();
}

clickNormDocsLink() {
  this.getNormDocsLink
    .invoke('removeAttr', 'target')
    .click();
}
}
export default new ActivityPage();