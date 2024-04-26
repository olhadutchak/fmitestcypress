class Applicant {

    get linksToView()          { return cy.get('.readon-arrow:contains("Переглянути")'); }

    get educationMathematics() { return cy.get('h4  a').contains('Освітня програма: «Математика та інформатика»'); }
    get educationInformatics() { return cy.get('h4  a').contains('Освітня програма: «Інформатика та математика»'); }
    get mathematics()          { return cy.get('h4 a').contains('Освітня програма: «Математика»'); }
    get appliedMathematics()   { return cy.get('h4 a').contains('Освітня програма: «Технології програмування та комп’ютерне моделювання»'); }
    get computerScience()      { return cy.get('h4 a').contains('Освітня програма: «Інформаційні технології та управління проектами»'); }
    get systemAnalysis()       { return cy.get('h4 a').contains('Освітня програма: «Системний аналіз»'); }
    get pdfFiles()             { return cy.get('.file a.link:not(:last)'); }

    get roadMap()              { return cy.get('.category-item-flex').eq(0); }
    get electronicCabinet()    { return cy.get('.category-item-flex').eq(1); }
    get chatForApplicants()    { return cy.get('.category-item-flex').eq(2); }

    get cardLink()             { return cy.get('.card-link'); }

    get olympiadLink()         { return cy.get('.category-item-flex').eq(0); }
    get mathematicsOlympiad()  { return cy.get('.category-item-flex').eq(1); }
    
    get pdfFiles2()            { return cy.get('.file a.link'); }

    get viewButton()           { return cy.get('.banner-button'); }
    get regulatoryDocButton()  { return cy.get('.banner-button'); }

    get internalSpace()        { return cy.get('.internal-space.text-block-area a'); }

    clickEducationMathematics() {
        this.educationMathematics.click();
    }
    
    clickEducationInformatics() {
        this.educationInformatics.click();
    }
    
    clickMathematics() {
        this.mathematics.click();
    }

    clickAppliedMathematics() {
        this.appliedMathematics.click();
    }
    
    clickComputerScience() {
        this.computerScience.click();
    }
    
    clickSystemAnalysis() {
        this.systemAnalysis.click();
    }

    clickViewButton() {
        this.viewButton.click();
    }

    clickRoadMap() {
        this.roadMap.click();
    }
    
    clickElectronicCabinet() {
        this.electronicCabinet.click();
    }

    clickRegulatoryDocButton() {
        this.regulatoryDocButton.click();
    }

    clickOlympiadLink() {
        this.olympiadLink.click();
    }
    
    clickMathematicsOlympiad() {
        this.mathematicsOlympiad.click();
    }

    clickChatForApplicants() {
        this.chatForApplicants.click();
    }
}

export default new Applicant();