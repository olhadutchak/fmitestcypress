class HomePage {
      
      get linkFacebook()                     { return cy.get('.header-social-links ul li a').eq(0); }
      get linkInstagram()                    { return cy.get('.header-social-links ul li a').eq(1); }
      get linkYoutube()                      { return cy.get('.header-social-links ul li a').eq(2); }
      get mail()                             { return cy.get('a[href="mailto:clg-math@chnu.edu.ua"]'); }

      get searchwrp()                        { return cy.get('.search-wrapper'); }
      get logolink()                         { return cy.get('.navbar-left a[href="/"]'); }
      get newsMenu()                         { return cy.get('.menu-item.menu-dropdown:contains("Новини")'); }
      get activityMenu()                     { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Діяльність"))'); }
      get studentMenu()                      { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Студенту"))'); }
      get applicantMenu()                    { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Абітурієнту"))'); }
      get departmentMenu()                   { return cy.get('.menu-item.menu-dropdown:contains("Кафедри")'); }
      get aboutUsMenu()                      { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Про нас"))'); }

      get subNewsMenu()                      { return cy.get('.submenu').eq(0); }
      get subActivityMenu()                  { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Діяльність"))').find('div.submenu.megamenu'); }
      get subStudentMenu()                   { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Студенту"))').find('div.submenu.megamenu'); }
      get subApplicantMenu()                 { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Абітурієнту"))').find('div.submenu.megamenu'); }
      get subDepartmentMenu()                { return cy.get('.submenu').eq(4); }
      get subAboutUsMenu()                   { return cy.get('li.menu-item.menu-dropdown:has(span:contains("Про нас"))').find('div.submenu.megamenu'); }


      get category()                         { return cy.get('.submenu-title'); }
      get linksInEvents()                    { return cy.get('.flex-home-latest-news-or-events-right ul li a'); }
      get flex2Columnsfirs()                 { return cy.get('.flex-item .promotion-item-text a').eq(0); }
      get flex2ColumnsSec()                  { return cy.get('.flex-item .promotion-item-text a').eq(1); }

      get linksCHNU()                        { return cy.get('.footer-normal .links li:contains("Чернівецький національний університет імені Юрія Федьковича") a'); }
      get linksMoodle()                      { return cy.get('.footer-normal .links li:contains("Електронне навчання - Moodle") a'); }
      get linksAdmission()                   { return cy.get('.footer-normal .links li:contains("Вступ 2025") a'); }
      get contactsPhoneNumber()              { return cy.get('.footer-normal li:contains("(0372) 58-48-80") a'); }
      get privacySettings()                  { return cy.get('.footer-normal li:contains("Налаштування конфіденційності") a'); }
      get marginbottom()                     { return cy.get('.margin-bottom a'); }
      get footerEmail()                      { return cy.get('.footer-normal [href="mailto:clg-math@chnu.edu.ua"]'); }

      get mail1()                            { return cy.get('a[href="mailto:alfaolga1@gmail.com"]'); }
      get mail2()                            { return cy.get('a[href="mailto:a.yuriychuk@chnu.edu.ua"]'); }
      get mail3()                            { return cy.get('a[href="mailto:mykola.gorbatenko@gmail.com"]'); }

      get searchbtn()                        { return cy.get('.search-button'); }
      get bannerBtnFirst()                   { return cy.get('.banner-button').eq(0); }
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


      newsMenuItems: [
        'Всі', 
        'Загальні', 
        'Оголошення', 
        'Події', 
        'Студенту', 
        'Викладачу', 
        'Вітання'
      ],

      newsExpectedLinks:[
        
        '/novyny/',
        '/novyny/zahalni/',
        '/novyny/oholoshennia/',
        '/novyny/podii/', 
        '/novyny/studentam/',
        '/novyny/vykladacham/',
        '/novyny/vitannia/'
      ],

      
      departmentMenuItems: ['Кафедра алгебри та інформатики', 'Кафедра диференціальних рівнянь', 'Кафедра математичного аналізу', 'Кафедра математичного моделювання', 
      'Кафедра прикладної математики та інформаційних технологій'],

      departmentExpectedLinks: [

        'https://algebra.chnu.edu.ua/',
        'https://difeq.chnu.edu.ua/',
        'https://math-analysis.chnu.edu.ua/',
        'https://mathmod.chnu.edu.ua/',
        'https://amit.chnu.edu.ua/'

      ],


      activityMenuItems:[
        {
          title: 'Наукова',
          items: [
            { text: 'Конференції',                       url: '/diialnist/naukova/konferentsii/' },
            { text: 'Семінари',                          url: 'https://cmt.chnu.edu.ua/seminar-chernivetskoho-matematychnoho-tovarystva/' },
            { text: 'Аспірантура',                       url: '/diialnist/naukova/aspirantura/' },
            { text: 'БМЖ',                               url: 'https://bmj.fmi.org.ua/index.php/adm' },
            { text: 'Наукові школи',                     url: '/diialnist/naukova/naukovi-shkoly/' },
          ],
        },
        {
          title: 'Міжнародна',
          items: [
            { text: 'Стажування',                         url: '/diialnist/mizhnarodna/stazhuvannia/' },
            { text: 'Школи та симпозіуми',                url: '/diialnist/mizhnarodna/shkoly-ta-sympoziumy/' },
            { text: 'Проєкти',                            url: '/diialnist/mizhnarodna/proiekty/' },
            { text: 'Мобільність',                        url: '/diialnist/mizhnarodna/mobilnist/' },
          ],
        },
        {
          title: 'Співпраця',
          items: [
            { text: 'Математична майстерня',               url: 'https://olimp.free-lib.com/' },
            { text: 'БМАН',                                url: '/diialnist/spivpratsia/bman/' },
            { text: 'Партнери',                            url: '/diialnist/spivpratsia/partnery/' },
          ],
        },
        {
          title: 'Освітньо-виховний напрямок',
          items: [
            { text: 'Навчально-методична',                 url: '/diialnist/navchalno-metodychna/' },
            { text: 'Організаційно-виховна',               url: '/diialnist/orhanizatsiino-vykhovna/' },
          ],
        },
        {
          title: 'Безперервна освіта',
          items: [
            { text: 'Підвищення кваліфікації для вчителів', url: 'https://algebra.chnu.edu.ua/diialnist/kursy-pidvyshchennia-kvalifikatsii-dlia-vchyteliv/' },
          ],
        },
      ],


      studentMenuItems: [
        {
          title: 'Навчання',
          items: [
            { text: 'Розклад занять та сесій',          url: '/studentu/navchannia/rozklad-zaniat-ta-sesii/' },
            { text: 'Освітні програми та робочі плани', url: '/studentu/navchannia/osvitni-prohramy-ta-robochi-plany/' },
            { text: 'Індивідуальний графік',            url: '/studentu/navchannia/indyvidualnyi-hrafik/' },
            { text: 'Вибір дисциплін',                  url: '/studentu/navchannia/vybir-dystsyplin/' },
          ],
        },
        {
          title: 'Студентський актив',
          items: [
            { text: 'Студентське життя',     url: '/studentu/studentskyi-aktyv/studentske-zhyttia/' },
          ],
        },
        {
          title: 'Корисне',
          items: [
            { text: 'Плата за навчання',      url: '/studentu/korysne/plata-za-navchannia/' },
            { text: 'Зразки заяв',            url: '/studentu/korysne/zrazky-zaiav/' },
            { text: 'Старости та куратори',   url: '/studentu/korysne/starosty-ta-kuratory/' },
            { text: 'Гуртожиток',             url: '/pro-nas/infrastruktura/hurtozhytok/' },
          ],
        },
        {
          title: 'Можливості',
          items: [
            { text: 'Наукова робота',          url: '/studentu/mozhlyvosti/naukova-robota/' },
            { text: 'Мобільність',             url: '/studentu/mozhlyvosti/mobilnist/' },
          ],
        },
        {
          title: 'Важливе',
          items: [
            { text: 'Рейтинг студентів',        url: '/studentu/vazhlyve/reitynh-studentiv/' },
            { text: 'Академічна доброчесність', url: '/studentu/vazhlyve/akademichna-dobrochesnist/' },
          ],
        },
      ],


      applicantMenuItems:[
        { text: 'Умови вступу', url: 'https://fmi.chnu.edu.ua/abituriientu/umovy-vstupu/' },
        { text: 'Бакалаврат', url: 'https://fmi.chnu.edu.ua/abituriientu/bakalavrat/' },
        { text: 'Магістратура', url: 'https://fmi.chnu.edu.ua/abituriientu/mahistratura/' },
        { text: 'Аспірантура', url: 'https://fmi.chnu.edu.ua/abituriientu/vstup-do-aspirantury/' },
        { text: 'День відкритих дверей', url: 'https://fmi.chnu.edu.ua/abituriientu/den-vidkrytykh-dverei/' },
        { text: 'Курси підготовки до ЗНО', url: 'https://algebra.chnu.edu.ua/abituriientu/kursy-pidhotovky-do-zno-ta-nmt-z-matematyky/' },
        { text: 'Аналіз вступної кампанії', url: 'https://fmi.chnu.edu.ua/abituriientu/analiz-vstupnoi-kampanii/vstup-2024/' },
        { text: 'Гуртожиток', url: 'https://fmi.chnu.edu.ua/pro-nas/infrastruktura/hurtozhytok/' },
      ],


      aboutMenuItems: [
        {
          title: 'Адміністрація',
          items: [
            { text: 'Деканат', url: '/pro-nas/administratsiia/dekanat/' },
            { text: 'Вчена рада', url: '/pro-nas/administratsiia/vchena-rada/' },
            { text: 'Профбюро', url: '/pro-nas/administratsiia/profbiuro/' },
            { text: 'Контакти', url: '/pro-nas/administratsiia/kontakty/' },
          ],
        },
        {
          title: 'Історія та сьогодення',
          items: [
            { text: 'Історія', url: 'https://fmi.chnu.edu.ua/' },
            { text: 'Символіка', url: '/pro-nas/istoriia-ta-sohodennia/symvolika/' },
            { text: 'Випускники', url: '/pro-nas/istoriia-ta-sohodennia/vypusknyky/' },
            { text: 'Сторінка пам\'яті загиблих Героїв', url: '/pro-nas/istoriia-ta-sohodennia/storinka-pamiati-zahyblykh-heroiv/' },
          ],
        },
        {
          title: 'Інфраструктура',
          items: [
            { text: 'Лабораторії', url: '/pro-nas/infrastruktura/laboratorii/' },
            { text: 'Студентський простір', url: '/pro-nas/infrastruktura/studentskyi-prostir/' },
            { text: 'Кімната матері та дитини', url: '/pro-nas/infrastruktura/kimnata-materi-ta-dytyny/' },
            { text: 'Інше', url: '/pro-nas/infrastruktura/' },
          ],
        },
        {
          title: 'При факультеті',
          items: [
            { text: 'Рада стейкхолдерів', url: '/pro-nas/pry-fakulteti/rada-steikkholderiv/' },
            { text: 'Рада молодих вчених', url: '/pro-nas/pry-fakulteti/rada-molodykh-vchenykh/' },
            { text: 'Асоціація випускників', url: '/pro-nas/pry-fakulteti/asotsiatsiia-vypusknykiv/' },
          ],
        },
        {
          title: 'Публічна інформація',
          items: [
            { text: 'Звіти', url: '/pro-nas/publichna-informatsiia/zvity/zvit-2024/' },
            { text: 'Нормативна база', url: '/pro-nas/publichna-informatsiia/normatyvni-dokumenty/' },
            { text: 'Результати моніторингу', url: '/pro-nas/publichna-informatsiia/rezultaty-monitorynhu/' },
          ],
        },
        {
          title: 'Корисне',
          items: [
            { text: 'Соціально-психологічний центр', url: 'https://www.chnu.edu.ua/universytet/pry-universyteti/sotsialno-psykholohichnyi-tsentr/' },
            { text: 'Медіаційна служба', url: 'https://www.chnu.edu.ua/universytet/pry-universyteti/mediatsiina-sluzhba/' },
            { text: 'Скринька зауважень та пропозицій', url: '/pro-nas/korysne/skrynka-zauvazhen-ta-propozytsii/' },
          ],
        },
      ],
    
      phoneNumber: '(0372) 58-48-80',

      linkBannerBtnFirst: 'https://docs.google.com/forms/d/e/1FAIpQLScDrS07bnoVtAPClx85qfDFuwRUSpD7VXBNyc9QzajTQdVs-g/viewform',
    

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

    clickActivityMenu(){
      this.activityMenu.click();
    }

    clickStudentMenu(){
      this.studentMenu.click();
    }

    mouseoverApplicantMenu(){
      this.applicantMenu.trigger('mouseover');
    }

    mouseoverDepartmentMenu(){
      this.departmentMenu.trigger('mouseover');
    }

    clickAboutUsMenu(){
      this.aboutUsMenu.click();
    }

    clickMenuItem(itemText) {
      cy.contains(itemText)
        .invoke('removeAttr', 'target')
        .click({ force: true });
    }

    makeTheSubmenuVisble(query){
      query
      .invoke('css', 'visibility', 'visible')
      .invoke('css', 'opacity', '1') 
      .invoke('css', 'transition', 'none');
    }

    clickSubmenuSubItems(elementQuery, itemText) {
      elementQuery 
        .contains(itemText) 
        .invoke('removeAttr', 'target') 
        .click({ force: true }); 
    }
    
    verifyCategoryContains(title) {
      this.category
        .contains(title)
        .then(($el) => {
          const parentMenu = $el.closest('.submenu.megamenu.megamenu-columns');
          if (parentMenu.css('visibility') === 'hidden') {
            cy.wrap(parentMenu)
              .invoke('css', 'visibility', 'visible')
              .invoke('css', 'opacity', '1')
              .invoke('css', 'transition', 'none'); 
          }
          cy.wrap($el).should('be.visible');
        });
    }

    verifyUrlContains(expectedUrl) {
      cy.location('href').should('include', expectedUrl);
    }

    clickAboutUsMenuItem(itemText) {
      this.subAboutUsMenu.contains(itemText).click({ force: true });
    }

    clickBannerButton(element) {
      element.click();
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
      this.marginbottom
      .invoke('removeAttr', 'target') 
      .click();
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
      this.privacySettings
      .invoke('removeAttr', 'target') 
      .click();
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