class Applicant {

    get linksToView()          { return cy.get('.readon-arrow:contains("Переглянути")'); }

    get educationMathematics() { return cy.get('h4  a').contains('Освітня програма: «Середня освіта( Математика та інформатика)»'); }
    get educationInformatics() { return cy.get('h4  a').contains('Освітня програма: «Середня освіта (Інформатика та цифрові технології в освіті)»'); }
    get mathematics()          { return cy.get('h4 a').contains('Освітня програма: «Математика»'); }
    get appliedMathematics()   { return cy.get('h4 a').contains('Освітня програма: «Технології програмування та комп’ютерне моделювання»'); }
    get computerScience()      { return cy.get('h4 a').contains('Освітня програма: «Комп’ютерні науки та проєктування програмних систем»'); }
    get systemAnalysis()       { return cy.get('h4 a').contains('Освітня програма: «Системний аналіз»'); }
    get educationInformaticsS(){ return cy.get('h4 a').contains('Освітня програма: «Середня освіта (Інформатика та математика)»');}
    get educationMathematicsS(){ return cy.get('h4  a').contains('Освітня програма: «Середня освіта (Математика та інформатика)»'); }
    get pdfFiles()             { return cy.get('.file a.link:not(:last)'); }
    get pdf()                  { return cy.get('a[href$=".pdf"]');}
    
    get allResourceLinks()     { return cy.get('a[href^="https://"][target="_blank"]');}
    get dormitoryLinks()       { return cy.get('.flex-container .category-item-flex');}
    

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

    constants = {
        elementsToValidate: [
            {
              title: 'Студмістечко',
              hrefContains: 'studmistechko',
            },
            {
              title: 'Гуртожиток №4 (відео)',
              hrefContains: '.mp4',
            },
            {
              title: 'Положення про користування гуртожитками',
              hrefContains: 'polozhennia-pro-korystuvannia',
            },
            {
              title: 'Правила внутрішнього розпорядку',
              hrefContains: 'pravyla-vnutrishnoho-rozporiadku',
            },
            {
              title: 'Зразок заяви на поселення в гуртожиток',
              hrefContains: 'https://www.chnu.edu.ua/universytet/zahalni-vidomosti/strukturni-pidrozdily/studmistechko/normatyvni-dokumenty/',
            },
            {
              title: 'Алгоритм поселення здобувачів освіти у гуртожитки студмістечка',
              hrefContains: 'alhorytm-poselennia',
            }
        ],
    }

    clickEducationMathematics() {
        this.educationMathematics.click();
    }
    
    clickEducationInformatics() {
        this.educationInformatics.invoke('removeAttr', 'target').click();
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