class ActivityPage {

    get counOfYouScientists()       { return cy.get('.flex-item a.category-item-flex:contains("Рада молодих вчених")'); }
    get bukovinsk()                 { return cy.get('.flex-item a.category-item-flex:contains("Буковинський математичний журнал")'); }
    get conferences()               { return cy.get('.flex-item a.category-item-flex:contains("Конференції")'); }
    get seminars()                  { return cy.get('.flex-item a.category-item-flex:contains("Семінари")'); }
    get card()                      { return cy.get('.card-link'); }
    get link()                      { return cy.get('.link'); }

    get naviElement()               { return cy.get('.breadcrumbs .text-element[href="/diialnist/"]'); }
    get composition()               { return cy.get('.flex-item a.category-item-flex:contains("Склад методичної ради")'); }
    get workPlan()                  { return cy.get('.flex-item a.category-item-flex:contains("План роботи")'); }
    get regulations()               { return cy.get('.flex-item a.category-item-flex:contains("Нормативні документи ")'); }
    get firstPDF()                  { return cy.get('.file a.link[href*="metodychni-rekomendatsii-2023-2024-nr.pdf"]'); }
    get secondPDF()                 { return cy.get('.file a.link[href*="metodychni_rekomendatsii_cherven_2023.pdf"]'); }
    get thirdPDF()                  { return cy.get('.file a.link[href*="metodychni-porady-na-2022-2023-nr_chnu.pdf"]'); }

    get navigationsfirst()          { return cy.get('.breadcrumbs .text-element[href="/diialnist/"]'); }
    get navigationsHome()           { return cy.get('.breadcrumbs .text-element[href="/"]'); }
    get projects()                  { return cy.get('.flex-item a.category-item-flex:contains("Проєкти")'); }
    get symposia()                  { return cy.get('.flex-item a.category-item-flex:contains("Симпозіуми")'); }
    get mobility()                  { return cy.get('.flex-item a.category-item-flex:contains("Мобільність")'); }
    get internship()                { return cy.get('.flex-item a.category-item-flex:contains("Стажування")'); }

    get educational()               { return cy.get('.flex-item a.category-item-flex').eq(0); }
    get board()                     { return cy.get('.flex-item a.category-item-flex:contains("Рада кураторів")'); }
    get photoReports()              { return cy.get('.flex-item a.category-item-flex:contains("Фотозвіти")'); }
    get pdfdoclink()                { return cy.get('.file a.link'); }
    
    get regulatoryDoc()             { return cy.get('.banner-button'); }
    get readMore()                  { return cy.get('.flex-readon-arrow'); }
    get mobilityBannerButton()      { return cy.get('.banner-button'); }

    get bannerButtonFirstCon()      { return cy.get('.banner-button').eq(0); }
    get bannerButtonSecondCon()     { return cy.get('.banner-button').eq(1); }
    get bannerButtonThirdCon()      { return cy.get('.banner-button').eq(2); }
    get bannerButtonFourthCon()     { return cy.get('.banner-button').eq(3); }

    get partnearsFirst()            { return cy.get('#splide01-slide01 > .partner-slide > .content-part'); }
    get partnearsSecond()           { return cy.get('.content-part').eq(1); }

    get photoElements()             { return cy.get('.flex-item').find('a.lightbox'); }
    get modalWindow()               { return cy.get('.parvus__content'); }
    get closeImageButton()          { return cy.get('[aria-label="Close dialog window"]'); }
    get fileAnketa()                { return cy.get('a[rel="noopener"][href="/media/cetj4vnj/anketa_fmi.doc"]'); }
    get theOfficialSiteBMANlink()   { return cy.get('.blue'); }
    get partnersLinks()             { return cy.get('[id^="splide01-slide"]').find('a'); }
    get moreNewsButton()            { return cy.get('.category-item-flex'); }

    clickCounOfYouScientists() {
        this.counOfYouScientists.click();
    }
    
    clickBukovinsk() {
        this.bukovinsk.click();
    }
    
    clickConferences() {
        this.conferences.click();
    }
    
    clickSeminars() {
        this.seminars.click();
    }

    clickLink() {
        this.link.click();
    }
    
    clicknaviElement() {
        this.naviElement.click();
    }

    clickComposition() {
        this.composition.click();
    }
    
    clickWorkPlan() {
        this.workPlan.click();
    }
    
    clickRegulations() {
        this.regulations.click();
    }
    
    clickFirstPDF() {
        this.firstPDF.click();
    }
    
    clickSecondPDF() {
        this.secondPDF.click();
    }
    
    clickThirdPDF() {
        this.thirdPDF.click();
    }

    clickNavigationsFirst() {
        this.navigationsfirst.click();
    }
    
    clickNavigationsHome() {
        this.navigationsHome.click();
    }
    
    clickProjects() {
        this.projects.click();
    }
    
    clickSymposia() {
        this.symposia.click();
    }
    
    clickMobility() {
        this.mobility.click();
    }
    
    clickInternship() {
        this.internship.click();
    }
    
    clickEducational() {
        this.educational.click();
    }
    
    clickBoard() {
        this.board.click();
    }
    
    clickPhotoReports() {
        this.photoReports.click();
    }
    
    clickPdfDocLink() {
        this.pdfdoclink.click();
    }

    clickBannerButtonFirstCon() {
        this.bannerButtonFirstCon.click();
    }
    
    clickBannerButtonSecondCon() {
        this.bannerButtonSecondCon.click();
    }
    
    clickBannerButtonThirdCon() {
        this.bannerButtonThirdCon.click();
    }
    
    clickBannerButtonFourthCon() {
        this.bannerButtonFourthCon.click();
    }

    clickMobilityBannerButton(){
        this.mobilityBannerButton.click();
    }

    clickOnPartnearsFirst() {
        this.partnearsFirst.click({force: true});
    }
    
    clickOnPartnearsSecond() {
        this.partnearsSecond.click({force: true});
    }

    clickCloseImageButton() {
        this.closeImageButton.click({ force: true });
    }

    clickFileAnketa(){
        this.fileAnketa.click();
    }

    clickTheOfficialSiteBMANlink(){
        this.theOfficialSiteBMANlink.click();
    }

    clickMoreNewsButton(){
        this.moreNewsButton.click();
    }

}
export default new ActivityPage();