class HomePage {

      get linkFacebook()                     { return cy.get('.header-social-links ul li a[href="https://www.facebook.com/fmi.org.ua/"]');}
      get linkTelegram()                     { return cy.get('.header-social-links ul li a[href="https://t.me/FMISiteNews"]'); }
      get linkInstagram()                    { return cy.get('.header-social-links ul li a[href="https://www.instagram.com/m._i_.f/"]'); }
      get linkYoutube()                      { return cy.get('.header-social-links ul li a[href="https://youtube.com/@MathTube_"]'); }
      get mail()                             { return cy.get('a[href="mailto:clg-math@chnu.edu.ua"]'); }

      get searchwrp()                        { return cy.get('.search-wrapper'); }
      get logolink()                         { return cy.get('.navbar-left a[href="/"]'); }
      get newsMenu()                         { return cy.get('.menu-item.menu-dropdown:contains("Новини")'); }
      get activityMenu()                     { return cy.get('.menu-item.menu-dropdown:contains("Діяльність")'); }
      get studentMenu()                      { return cy.get('.menu-item.menu-dropdown:contains("Студенту")').eq(1); }
      get applicantMenu()                    { return cy.get('.menu-item.menu-dropdown:contains("Абітурієнту")'); }
      get departmentMenu()                   { return cy.get('.menu-item.menu-dropdown:contains("Кафедри")'); }
      get aboutUsMenu()                      { return cy.get('.menu-item.menu-dropdown:contains("Про нас")'); }

      get subNewsMenu()                      { return cy.get('.submenu').eq(0); }
      get subActivityMenu()                  { return cy.get('.submenu').eq(1); }
      get subStudentMenu()                   { return cy.get('.submenu').eq(2); }
      get subApplicantMenu()                 { return cy.get('.submenu').eq(3); }
      get subDepartmentMenu()                { return cy.get('.submenu').eq(4); }
      get subAboutUsMenu()                   { return cy.get('.submenu').eq(5); }


      get linksInEvents()                    { return cy.get('.flex-home-latest-news-or-events-right ul li a'); }
      get flex2Columnsfirs()                 { return cy.get('.flex-item .promotion-item-text a').eq(0); }
      get flex2ColumnsSec()                  { return cy.get('.flex-item .promotion-item-text a').eq(1); }

      get linksCHNU()                        { return cy.get('.footer-normal .links li:contains("Чернівецький національний університет імені Юрія Федьковича") a'); }
      get linksMoodle()                      { return cy.get('.footer-normal .links li:contains("Електронне навчання - Moodle") a'); }
      get linksAdmission()                   { return cy.get('.footer-normal .links li:contains("Вступ 2023") a'); }
      get contactsPhoneNumber()              { return cy.get('.footer-normal li:contains("(0372) 58-48-80") a'); }
      get privacySettings()                  { return cy.get('.footer-normal li:contains("Налаштування конфіденційності") a'); }
      get marginbottom()                     { return cy.get('.margin-bottom a'); }
      get footerEmail()                      { return cy.get('.footer-normal [href="mailto:clg-math@chnu.edu.ua"]'); }

      get mail1()                            { return cy.get('a[href="mailto:alfaolga1@gmail.com"]'); }
      get mail2()                            { return cy.get('a[href="mailto:a.yuriychuk@chnu.edu.ua"]'); }
      get mail3()                            { return cy.get('a[href="mailto:mykola.gorbatenko@gmail.com"]'); }

      get searchbtn()                        { return cy.get('.search-button'); }
      get bannerBtn()                        { return cy.get('.banner-button'); }
      get prevButton()                       { return cy.get('#splide02 .splide__arrows  .splide__arrow--prev'); }
      get nextButton()                       { return cy.get('#splide02  .splide__arrows  .splide__arrow--next'); }
      get scrollBtn()                        { return cy.get('#scrollUp'); }
      get privacybutton()                    { return cy.get('#privacyPolicyBanner'); }
      get acceptAllPrivacyPolicy()           { return cy.get('[data-accept-all-privacy-policy]'); }
      get policyFingerprintButton()          { return cy.get('#privacyPolicyFingerprintButton'); }
      get searchinput()                      { return cy.get('[data-global-search-input]'); }
      get partnersLinks()                    { return cy.get('[id^="splide03-slide"]').find('a'); }
      get splidPaginatioPagePartners()       { return cy.get('.splide__pagination__page').eq(2); }
      get splideArrowNextBtnPartners()       { return cy.get('.splide__arrow--next').eq(1); }
      get spliPdeaginationPageSecond()       { return cy.get('.splide__pagination__page').eq(3);}
      get splideArrowPrevBtnPartners()       { return cy.get('.splide__arrow--prev').eq(1); }
      get partnearsFirst()                   { return cy.get('.partner-slide.text-align-center').contains('Quality Assurance System in Ukraine'); }
      get partnearsSecond()                  { return cy.get('.partner-slide.text-align-center').contains('Towards Trust in Quality Assurance');}

      get preresultSection()                 { return  cy.get('.flex-container .pagination-part li.page-index a'); }
      get resultSection()                    { return  cy.get('.search-results-list-item'); }
      get numberOfResultPage()               { return  cy.get('.pagination-part .page-index').last();}
    
      constants = {
      
      homeLink: "https://fmi.chnu.edu.ua",

      searchTerm: "Новини",

      newsMenuItems: ['Всі', 'Загальні', 'Оголошення', 'Події', 'Студенту', 'Викладачу', 'Вітання'],

      activityMenuItems: ['Наукова', 'Навчально-методична', 'Міжнародна', 'Організаційно-виховна діяльність', 'Нормативні документи', 'Співпраця', 
      'Підвищення кваліфікації для вчителів', 'БМАН'],

      studentMenuItems: ['Розклад занять та сесій', 'Освітні програми та робочі плани', 'Наукова робота', 'Академічна доброчесність', 'Мобільність', 'Студентське життя',
      'Вибір дисциплін','Рейтинг студентів', 'Плата за навчання'],

      applicantMenuItems: ['Бакалаврат', 'Магістратура', 'Аспірантура', 'Умови вступу', 'День відкритих дверей', 'Олімпіади', 'Курси підготовки до ЗНО', 'Аналіз вступної кампанії'],

      departmentMenuItems: ['Кафедра алгебри та інформатики', 'Кафедра диференціальних рівнянь', 'Кафедра математичного аналізу', 'Кафедра математичного моделювання', 
      'Кафедра прикладної математики та інформаційних технологій'],

      aboutUsMenuItems: ['Про факультет','Профбюро', 'Рада стейкхолдерів', 'Інфраструктура',  "Сторінка пам'яті загиблих Героїв",  'Галерея', 'Контакти', 'Корисні посилання' ],

      newsExpectedLinks:['/novyny/','/novyny/zahalni/','/novyny/oholoshennia/', '/novyny/podii/', '/novyny/studentam/','/novyny/vykladacham/','/novyny/vitannia/'],

      activityExpectedLinks:[

      'https://fmi.chnu.edu.ua/diialnist/naukova/',
      'https://fmi.chnu.edu.ua/diialnist/navchalno-metodychna/',
      'https://fmi.chnu.edu.ua/diialnist/mizhnarodna/',
      'https://fmi.chnu.edu.ua/diialnist/orhanizatsiino-vykhovna/',
      'https://fmi.chnu.edu.ua/diialnist/normatyvni-dokumenty/',
      'https://fmi.chnu.edu.ua/diialnist/spivpratsia/',
      'https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/',
      'https://fmi.chnu.edu.ua/diialnist/bman/'],

      studenExpectedLinks:[

      'https://fmi.chnu.edu.ua/studentu/rozklad-zaniat-ta-sesii/',
      'https://fmi.chnu.edu.ua/studentu/osvitni-prohramy-ta-robochi-plany/',
      'https://fmi.chnu.edu.ua/studentu/naukova-robota/',
      'https://fmi.chnu.edu.ua/studentu/akademichna-dobrochesnist/',
      'https://www.chnu.edu.ua/novyny/mizhnarodna-diialnist/',
      'https://fmi.chnu.edu.ua/studentu/studentske-zhyttia/',
      'https://fmi.chnu.edu.ua/studentu/vybir-dystsyplin/',
      'https://fmi.chnu.edu.ua/studentu/reitynh-studentiv/',
      'https://fmi.chnu.edu.ua/studentu/plata-za-navchannia/',

      ],

      applicantExpectedLinks:[

      'https://fmi.chnu.edu.ua/abituriientu/bakalavrat/',
      'https://fmi.chnu.edu.ua/abituriientu/mahistratura/',
      'https://fmi.chnu.edu.ua/abituriientu/aspirantura/',
      'https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/',
      'https://fmi.chnu.edu.ua/abituriientu/den-vidkrytykh-dverei/',
      'https://fmi.chnu.edu.ua/abituriientu/olimpiady/',
      'https://algebra.chnu.edu.ua/abituriientu/kursy-pidhotovky-do-zno-ta-nmt-z-matematyky/',
      'https://fmi.chnu.edu.ua/abituriientu/analiz-vstupnoi-kampanii/vstup-2023/'

      ],

      aboutUsExpectedLinks: [
        'https://fmi.chnu.edu.ua/pro-nas/pro-fakultet/',
        'https://fmi.chnu.edu.ua/pro-nas/profbiuro/',
        'https://fmi.chnu.edu.ua/pro-nas/rada-steikkholderiv/',
        'https://fmi.chnu.edu.ua/pro-nas/infrastruktura/',
        'https://fmi.chnu.edu.ua/pro-nas/storinka-pamiati-zahyblykh-heroiv/',
        'https://fmi.chnu.edu.ua/pro-nas/halereia/',
        'https://fmi.chnu.edu.ua/pro-nas/kontakty/',
        'https://fmi.chnu.edu.ua/pro-nas/korysni-posylannia/'

      ],

      departmentExpectedLinks: [

        'https://algebra.chnu.edu.ua/',
        'https://difeq.chnu.edu.ua/',
        'https://math-analysis.chnu.edu.ua/',
        'https://mathmod.chnu.edu.ua/',
        'https://amit.chnu.edu.ua/'

      ],
      
      phoneNumber: '(0372) 58-48-80',

    }

    clickFacebookLink() {
        this.linkFacebook.click();
    }

    clickInstagramLink() {
        this.linkInstagram.click();
    }

    clickYoutubeLink() {
        this.linkYoutube.click();
    }


    clickSearchButton() {
        this.searchbtn.click();
    }

    typeSearchTermForSearch(text) {
      this.searchinput
        .should('be.visible')
        .type(text)
        .should('have.value', text)
        .type('{enter}');
    }

    clicklogolink() {
      this.logolink.click();
    }

    mouseoverNewsMenu(){
      this.newsMenu.trigger('mouseover');
    }

    mouseoverActivityMenu(){
      this.activityMenu.trigger('mouseover');
    }

    mouseoverStudentMenu(){
      this.studentMenu.trigger('mouseover');
    }

    mouseoverApplicantMenu(){
      this.applicantMenu.trigger('mouseover');
    }

    mouseoverDepartmentMenu(){
      this.departmentMenu.trigger('mouseover');
    }

    mouseoverAboutUsMenu(){
      this.aboutUsMenu.trigger('mouseover');
    }

    clickMenuItem(itemText) {
      cy.contains(itemText)
        .invoke('removeAttr', 'target')
        .click({ force: true });
    }

    verifyUrlContains(expectedUrl) {
      cy.location('href').should('include', expectedUrl);
    }

    clickAboutUsMenuItem(itemText) {
      this.subAboutUsMenu.contains(itemText).click({ force: true });
    }

    clickBannerButton() {
      this.bannerBtn.click();
    }

    clickLinksInEventsAtIndex(index) {
     this.linksInEvents.eq(index).click();
      
    }

    clickFlex2Columnsfirs() {
      this.flex2Columnsfirs.click();
    }
    
    clickflex2ColumnsSec() {
      this.flex2ColumnsSec.click();
    }

    clickPrevButton() {
      this.prevButton.click();
    }

    clickAcceptAllPrivacyPolicy(){
      this.acceptAllPrivacyPolicy.click();
    }

    clickNextButton() {
      this.nextButton.click();
    }

    clickMarginbottom() {
      this.marginbottom.click();
    }

    clickLinksCHNU() {
      this.linksCHNU.click();
    }

    clicklinksMoodle() {
      this.linksMoodle.click();
    }

    clicklinksAdmission() {
      this.linksAdmission.click();
    }

    clickPrivacySettings() {
      this.privacySettings.click();
    }

    clickSplidPaginatioPagePartners() {
      this.splidPaginatioPagePartners.click();
    }

    clickSplideArrowNextBtnPartners() {
      this.splideArrowNextBtnPartners.click();
    }

    clickSpliPdeaginationPageSecond() {
      this.spliPdeaginationPageSecond.click();
    }

    clickSplideArrowPrevBtnPartners() {
      this.splideArrowPrevBtnPartners.click();
    }

    clickOnPartnearsFirst() {
     this.partnearsFirst.click({force: true});
    }

    clickOnPartnearsSecond() {
      this.partnearsSecond.click({force: true});
    }

  }
export default new HomePage();