class AboutUsPage {

    get aboutthefaculty()             { return cy.get('.flex-item a.category-item-flex:contains("Про факультет")'); }
    get deanery()                     { return cy.get('.flex-item a.category-item-flex:contains("Деканат")'); }
    get academicCouncil()             { return cy.get('.flex-item a.category-item-flex:contains("Вчена рада")'); }
    get councilOfStakeholders()       { return cy.get('.flex-item a.category-item-flex:contains("Рада стейкхолдерів")'); }
    get professionalBureau()          { return cy.get('.flex-item a.category-item-flex:contains("Профбюро")'); }
    get infrastructure()              { return cy.get('.flex-item a.category-item-flex:contains("Інфраструктура")'); }
    get gallery()                     { return cy.get('.category-item-flex').eq(6); }
    get contacts()                    { return cy.get('.flex-item a.category-item-flex:contains("Контакти")'); }
    get usefulLinks()                 { return cy.get('.flex-item a.category-item-flex:contains("Корисні посилання")'); }
    get memorialPageOfFallenHeroes()  { return cy.get(".category-item-flex").eq(9); }

    get history()               { return cy.get('a:contains("Історія")'); }
    get deans()                 { return cy.get('.flex-item a.category-item-flex:contains("Декани")'); }
    get funders()               { return cy.get('.flex-item a.category-item-flex:contains("Фундатори")'); }
    get graduates()             { return cy.get('.flex-item a.category-item-flex:contains("Випускники")'); }
    get alumniAssociation()     { return cy.get('.flex-item a.category-item-flex:contains("Асоціація випускників")'); }
    get symbolics()             { return cy.get('.flex-item a.category-item-flex:contains("Символіка")'); }

    get teamMember()            { return cy.get('.team-member'); }
    get teamMemberimg()         { return cy.get('.team-member').find('img'); }
    get teamMemberEmail()       { return cy.get('.team-member').find('.flex-personal-info li:contains("@") a.black-link'); }
    get teamMemberPhone()       { return cy.get('.team-member').find('.flex-personal-info li:contains("0") a.black-link'); }

    get cardLink()              { return cy.get('.card-link'); }
    get readMore()              { return cy.get('.flex-readon-arrow'); }
    get card()                  { return cy.get('.card'); }
    get textSpace()             { return cy.get('.internal-space ul a'); }
    get linkToPdffile()         { return cy.get('.internal-space p a'); }

    get moreNews()              { return cy.get('.flex-3-columns .flex-item .category-item-flex:contains("Більше новин")'); }
    get currentNews()           { return cy.get('.flex-3-columns .category-item-flex:contains("Актуальні новини профспілкового комітету")'); }
    get regulations()           { return cy.get('.category-item-flex:contains("Нормативні документи")'); }
    get payments()              { return cy.get('.category-item-flex:contains("Профспілкові виплати")'); }

    get fmiLaboratories()       { return cy.get('.flex-item a.category-item-flex:contains("Лабораторії ФМІ")'); }
    get hostel()                { return cy.get('.flex-item a.category-item-flex:contains("Гуртожиток")'); }
    get fields()                { return cy.get('.flex-item a.category-item-flex:contains("Майданчики")'); }
    get gyms()                  { return cy.get('.flex-item a.category-item-flex:contains("Спортзали")'); }
    get library()               { return cy.get('.flex-item a.category-item-flex:contains("Бібліотека")'); }
    get facultyCourtyard()      { return cy.get('.flex-item a.category-item-flex:contains("Дворик факультету")'); }

    get phoneNumber()           { return cy.get('.flex-container .flex-item a[href="tel:(0372) 58-48-80"]'); }
    get theMail()               { return cy.get('.flex-container .flex-item a[href*="mailto"]'); }
    get toTheFacebook()         { return cy.get('.flex-container .flex-item a[href*="facebook"]'); }
    get toTheInstagram()        { return cy.get('.flex-container .flex-item a[href*="instagram"]'); }
    get toTheTelegram()         { return cy.get('.flex-container .flex-item a[href="https://t.me/FMISiteNews"]'); }

    get siteLink()              { return cy.get('.flex-item a.category-item-flex:contains("Сайт Чернівецького національного університету імені Юрія Федьковича")'); }
    get websiteLink()           { return cy.get('.flex-item a.category-item-flex:contains("Сайт Міністерства освіти і науки України")'); }
    get scientificBulletin()    { return cy.get('.flex-item a.category-item-flex:contains("Науковий вiсник Чернiвецького унiверситету")'); }
    get mathematicalJournal()   { return cy.get('.flex-item a.category-item-flex:contains("Буковинський математичний журнал")'); }
    get nationalAgency()        { return cy.get('.flex-item a.category-item-flex:contains("Національне агентство із забезпечення якості вищої освіти")'); }
    get mathematicalSociety()   { return cy.get('.flex-item a.category-item-flex:contains("Чернівецьке Математичне Товариство")'); }
    get learningofChNU()        { return cy.get('.flex-item a.category-item-flex:contains("Електронне навчання ЧНУ")'); }

    get bannerBtn()             { return cy.get('.banner-button'); }
    get readMore()              { return cy.get('.flex-readon-arrow'); }
    get pngLink()               { return cy.get('.readon-arrow'); }
    get photoElements()         { return cy.get('.flex-item').find('a.lightbox'); }
    get modalWindow()           { return cy.get('.parvus__content'); }
    get closeImageButton()      { return cy.get('[aria-label="Close dialog window"]'); }

    get campus()                { return cy.get('.flex-item a.category-item-flex:contains("Студмістечко")'); }
    get dormitory4()            { return cy.get('.flex-item a.category-item-flex:contains("Гуртожиток №4 (відео)")'); }
    get regulUseDormitories()   { return cy.get('.flex-item a.category-item-flex:contains("Положення про користування гуртожитками")'); }
    get rulesProcedure()        { return cy.get('.flex-item a.category-item-flex:contains("Правила внутрішнього розпорядку")'); }
    get dodatok()               { return cy.get('.flex-item a.category-item-flex:contains("Зразок заяви на поселення в гуртожиток")'); }

    constants = {

        members: [
            {
                name: 'Мартинюк Ольга Василівна',
                email: 'o.martynyuk@chnu.edu.ua',
                phone: '+380372584880'
            },
            {
                name: 'Кушнірчук Василь Йосипович',
                email: 'v.kushnirchuk@chnu.edu.ua',
                phone: '0372584880'
            },
            {
                name: 'Карлова Олена Олексіївна',
                email: 'o.karlova@chnu.edu.ua',
                phone: '(0372) 58-48-88'
            },
            {
                name: 'Сікора Віра Степанівна',
                email: 'v.sikora@chnu.edu.ua',
                phone: '(0372) 58-48-70'
            },
            {
                name: 'Юрійчук Анастасія Олександрівна',
                email: 'a.yuriychuk@chnu.edu.ua',
                phone: '+38 (0372) 58-48-57'
            },
            {
                name: 'Довжицька Ірина Михайлівна',
                email: 'i.dovzhytska@chnu.edu.ua',
                phone: '(0372) 58-48-80'
            },
            {
                name: 'Скоролітня Аліна Іванівна',
                email: 'a.skorolitnia@chnu.edu.ua',
                phone: '(0372) 58-48-80'
            }
        ],

    }

    clickCampus(){
        this.campus.click();
    }

    clickDormitory4(){
        this.dormitory4.click();
    }

    clickRegulUseDormitories(){
        this.regulUseDormitories.click();
    }

    clickRulesProcedure(){
        this.rulesProcedure.click();
    }

    clickDodatok(){
        this.dodatok.click();
    }


    clickAboutTheFaculty() {
        this.aboutthefaculty.click();
    }

    clickDeanery() {
        this.deanery.click();
    }

    clickAcademicCouncil() {
        this.academicCouncil.click();
    }

    clickCouncilOfStakeholders() {
        this.councilOfStakeholders.click();
    }

    clickProfessionalBureau() {
        this.professionalBureau.click();
    }

    clickInfrastructure() {
        this.infrastructure.click();
    }

    clickGallery() {
        this.gallery.click();
    }

    clickContacts() {
        this.contacts.click();
    }

    clickUsefulLinks() {
        this.usefulLinks.click();
    }

    clickHistory() {
        this.history.click();
    }
    
    clickDeans() {
        this.deans.click();
    }
    
    clickFunders() {
        this.funders.click();
    }
    
    clickGraduates() {
        this.graduates.click();
    }
    
    clickAlumniAssociation() {
        this.alumniAssociation.click();
    }
    
    clickSymbolics() {
        this.symbolics.click();
    }

    clickcurrentNews() {
        this.currentNews.click();
    }

    clickRegulations() {
        this.regulations.click();
    }

    clickPayments() {
        this.payments.click();
    }

    clickmoreNews() {
        this.moreNews.click();
    }

    clickFmiLaboratories() {
        this.fmiLaboratories.click();
    }
    
    clickHostel() {
        this.hostel.click();
    }
    
    clickFields() {
        this.fields.click();
    }
    
    clickGyms() {
        this.gyms.click();
    }
    
    clickLibrary() {
        this.library.click();
    }
    
    clickFacultyCourtyard() {
        this.facultyCourtyard.click();
    }

    clickToTheFacebook() {
        this.toTheFacebook.click();
    }
    
    clickToTheInstagram() {
        this.toTheInstagram.click();
    }

    clickSiteLink() {
        this.siteLink.click();
    }
    
    clickWebsiteLink() {
        this.websiteLink.click();
    }
    
    clickScientificBulletin() {
        this.scientificBulletin.click();
    }
    
    clickMathematicalJournal() {
        this.mathematicalJournal.click();
    }
    
    clickNationalAgency() {
        this.nationalAgency.click();
    }
    
    clickMathematicalSociety() {
        this.mathematicalSociety.click();
    }
    
    clickLearningofChNU() {
        this.learningofChNU.click();
    }
    
    clickBannerBtn(){
        this.bannerBtn.click();
    }

    clickMemorialPageOfFallenHeroes(){
        this.memorialPageOfFallenHeroes.click();
    }

    clickCloseImageButton() {
        this.closeImageButton.click({ force: true });
    }
    
}

export default new AboutUsPage();