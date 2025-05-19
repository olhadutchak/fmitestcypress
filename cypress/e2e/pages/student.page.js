class StudentPage {
   
    get navigationsElement()            { return cy.get('.text-element').eq(1); }
    get navigationsElementHome()        { return cy.get('.text-element > .iconify-icon'); }
    get dayForm()                       { return cy.get('.category-item-flex:contains("Денна форма")'); }
    get correspondenceForm()            { return cy.get('.category-item-flex:contains("Заочна форма")'); }
    get graduateStudents()              { return cy.get('.category-item-flex:contains("Для аспірантів")'); }
    get pdfFiles()                      { return cy.get('.file a.link'); }
    get pdfAndTxtFiles()                { return cy.get('.file a.link'); }

    get linksToBachelor()               { return cy.get('.readon-arrow:contains("Бакалавр")'); }
    get linksToMaster()                 { return cy.get('.readon-arrow:contains("Магістр")'); }
    get linksToPostgraduateStudies()    { return cy.get('.readon-arrow:contains("Аспірантура")'); }
    get linksToView()                   { return cy.get('.readon-arrow:contains("Переглянути")'); }

    get testingConferences()            { return cy.get('.category-item-flex:contains("Конференції")'); }
    get testingOlympics()               { return cy.get('.category-item-flex:contains("Олімпіади")'); }
    get testingCompetitions()           { return cy.get('.category-item-flex:contains("Конкурси")'); }

    get testingComSuggestBox()          { return cy.get('.category-item-flex:contains("Скринька зауважень та пропозицій")'); }
    get testingRulOfChNU()              { return cy.get('.category-item-flex:contains("Правила академічної доброчесності ЧНУ")'); }
    get testingCodeEthicsChNU()         { return cy.get('.category-item-flex:contains("Етичний кодекс ЧНУ")'); }
    get testingPlagiarismAtChNU()       { return cy.get('.category-item-flex:contains("Положення про виявлення і запобігання плагіату в ЧНУ")'); }
    get academicIntegritPresent()       { return cy.get('.category-item-flex:contains("Академічна доброчесність (перезентація)")'); }
    get committeeOnEthics()             { return cy.get('.category-item-flex:contains("Комісія з питань етики та академічної доброчесності")'); }
    get testingMeasoPularize()          { return cy.get('.category-item-flex:contains("Заходи з популяризації академічної доброчесності У ЧНУ на 2023 рік")'); }
    get testingDataFirst()              { return cy.get('.category-item-flex:contains("8 грудня 2020 року")'); }
    get testingSecondDate()             { return cy.get('.category-item-flex:contains("16 вересня 2021 року")'); }
    get testingThirdDate()              { return cy.get('.category-item-flex:contains("4 травня 2022 року")'); }

    get testingFMIParliament()          { return cy.get('.category-item-flex:contains("Студентський парламент ФМІ")'); }
    get testingFmiStudents()            { return cy.get('.category-item-flex:contains("Профспілкова організація студентів ФМІ")'); }
    get testingYTubeChannel()           { return cy.get('.category-item-flex:contains("YouTube канал")'); }

    get payingScholarships()            { return cy.get('.category-item-flex:contains("Правила призначення та виплати стипендій")'); }
    get scholarshipsOfUkraine()         { return cy.get('.category-item-flex:contains("Стипендії Президента України")'); }
    get socialScholarships()            { return cy.get('.category-item-flex:contains("Порядок призначення та виплати соціальних стипендій")'); }
    get cardLink()                      { return cy.get('.card-link'); }

    get WShopbutton()                   { return cy.get('.category-item-flex').eq(0); }
    get main()                          { return cy.get("#main"); }

    get readMoreBtn()                   { return cy.get('.flex-readon-arrow'); }
    get electiveDisciplinesBtn()        { return cy.get('.banner-button'); }
    get bannerBtn()                     { return cy.get('.banner-button'); }

    get photoElements()                 { return cy.get('.flex-item').find('a.lightbox'); }
    get modalWindow()                   { return cy.get('.parvus__content'); }
    get closeImageButton()              { return cy.get('[aria-label="Close dialog window"]'); }
    get firstOlyTur()                   { return cy.get('.category-item-flex:contains("І етап")').eq(0); }
    get secondOlyTur()                  { return cy.get('.category-item-flex:contains("IІ етап")'); }

    clickNavigationsElement() {
        this.navigationsElement.click();
    }
    
    clickNavigationsElementHome() {
        this.navigationsElementHome.click();
    }

    clickDayForm() {
        this.dayForm.click();
    }

    clickCorrespondenceForm() {
        this.correspondenceForm.click();
    }
    
    clickGraduateStudents() {
        this.graduateStudents.click();
    }

    clickWorkShop() {
        this.WShopbutton.click();
    }

    clickTestingConferences() {
        this.testingConferences.click();
    }
    
    clickTestingOlympics() {
        this.testingOlympics.click();
    }
    
    clickTestingCompetitions() {
        this.testingCompetitions.click();
    }

    clickTestingComSuggestBox() {
        this.testingComSuggestBox.click();
    }
    
    clickTestingRulOfChNU() {
        this.testingRulOfChNU.click();
    }
    
    clickTestingCodeEthicsChNU() {
        this.testingCodeEthicsChNU.click();
    }
    
    clickTestingPlagiarismAtChNU() {
        this.testingPlagiarismAtChNU.click();
    }
    
    clickAcademicIntegritPresent() {
        this.academicIntegritPresent.click();
    }
    
    clickCommitteeOnEthics() {
        this.committeeOnEthics.click();
    }
    
    clickTestingMeasoPularize() {
        this.testingMeasoPularize.click();
    }
    
    clickTestingDataFirst() {
        this.testingDataFirst.click();
    }
    
    clickTestingSecondDate() {
        this.testingSecondDate.click();
    }
    
    clickTestingThirdDate() {
        this.testingThirdDate.click();
    }
    
    clickTestingFMIParliament() {
        this.testingFMIParliament.click();
    }
    
    clickTestingFmiStudents() {
        this.testingFmiStudents.click();
    }
    
    clickTestingYTubeChannel() {
        this.testingYTubeChannel.click();
    }

    clickPayingScholarships() {
        this.payingScholarships.click();
    }
    
    clickScholarshipsOfUkraine() {
        this.scholarshipsOfUkraine.click();
    }
    
    clickSocialScholarships() {
        this.socialScholarships.click();
    }

    clickCloseImageButton() {
        this.closeImageButton.click({ force: true });
    }

    clickBannerBtn() {
        this.bannerBtn.click();
    }

    clickFirstOlyTur(){
        this.firstOlyTur.click();
    }

    clickSecondOlyTur(){
        this.secondOlyTur.click();
    }

}
export default new StudentPage();