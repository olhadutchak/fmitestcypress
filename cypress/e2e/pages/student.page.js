class StudentPage {
    get dayForm()                       { return cy.get('.category-item-flex:contains("Денна форма")'); }
    get correspondenceForm()            { return cy.get('.category-item-flex:contains("Заочна форма")'); }
    get graduateStudents()              { return cy.get('.category-item-flex:contains("Для аспірантів")'); }
    get pdfFiles()                      { return cy.get('.file a.link'); }

    get linksToBachelor()               { return cy.get('.readon-arrow:contains("Бакалавр")'); }
    get linksToMaster()                 { return cy.get('.readon-arrow:contains("Магістр")'); }
    get linksToPostgraduateStudies()    { return cy.get('.readon-arrow:contains("Аспірантура")'); }
    get linksToView()                   { return cy.get('.readon-arrow:contains("Переглянути")'); }

    get photoElements()                 { return cy.get('.flex-item').find('a.lightbox'); }
    get modalWindow()                   { return cy.get('.parvus__content'); }
    get closeImageButton()              { return cy.get('[aria-label="Close dialog window"]'); }

    get electiveDisciplinesBtn()        { return cy.get('.banner-button'); }
    get pdfAndTxtFiles()                { return cy.get('.file a.link'); }

    get WShopbutton()                   { return cy.get('.category-item-flex').eq(0); }
    get main()                          { return cy.get("#main"); }
    
    get testingConferences()            { return cy.get('.category-item-flex:contains("Конференції")'); }
    get testingOlympics()               { return cy.get('.category-item-flex:contains("Олімпіади")'); }
    get testingCompetitions()           { return cy.get('.category-item-flex:contains("Конкурси")'); }

    get cardLink()                      { return cy.get('.card-link'); }

    get firstOlyTur()                   { return cy.get('.category-item-flex:contains("І етап")').eq(0); }
    get secondOlyTur()                  { return cy.get('.category-item-flex:contains("IІ етап")').eq(0); }
    get firstOlyTurSecond()             { return cy.get('.category-item-flex:contains("І етап")').eq(2); }
    get secondOlyTurSecond()            { return cy.get('.category-item-flex:contains("IІ етап")').eq(1); }

    get bannerBtn()                     { return cy.get('.banner-button'); }

    get presentationBlock()             { return cy.contains('div.h3', 'Презентація'); }
    get presentationText()              { return cy.contains('Інформація про можливості навчання за кордоном'); }
    get newsItems()                     { return cy.get('.flex-news-list-item'); }
    get newsItemsSec()                  { return cy.get('.promotion-item'); }

    get studentParliamentLink()         { return cy.get('.category-item-flex:contains("Студентський парламент ФМІ")'); }
    get profUnionLink()                 { return cy.get('.category-item-flex:contains("Профспілкова організація студентів ФМІ")'); }
    get youtubeLink()                   { return cy.get('.category-item-flex:contains("YouTube канал")'); }

    get studentRatingButtonFirst()      { return cy.get('.category-item-flex:contains("Правила призначення та виплати стипендій")'); }
    get studentRatingButtonSecond()     { return cy.get('.category-item-flex:contains("Порядок призначення та виплати соціальних стипендій")'); }
   
    get suggestionBoxButton()           { return cy.get('.category-item-flex:contains("Скринька зауважень та пропозицій")'); }
    get integrityRulesButton()          { return cy.get('.category-item-flex:contains("Правила академічної доброчесності")'); }
    get ethicsCodeButton()              { return cy.get('.category-item-flex:contains("Етичний кодекс")'); }
    get plagiarismPolicyButton()        { return cy.get('.category-item-flex:contains("Положення про виявлення і запобігання плагіату")'); }
    get integrityPresentationButton()   { return cy.get('.category-item-flex:contains("Академічна доброчесність (перезентація)")'); }
    get ethicsCommissionButton()        { return cy.get('.category-item-flex:contains("Комісія з питань етики та академічної доброчесності")'); }
    get integrityPromotionButton()      { return cy.get('.category-item-flex:contains("Заходи з популяризації академічної доброчесності на 2024 рік")'); }
    get december2020Button()            { return cy.get('.category-item-flex:contains("8 грудня 2020 року")'); }
    get september2021Button()           { return cy.get('.category-item-flex:contains("16 вересня 2021 року")'); }
    get may2022Button()                 { return cy.get('.category-item-flex:contains("4 травня 2022 року")'); }

    get scientificCard()                { return cy.get('.card'); }
    get scientificText()                { return cy.get('[data-card-text]'); }
    get scientificCardHeader()          { return cy.get('.card-header'); }

    get dormitoryLinks()                { return cy.get('.flex-container .category-item-flex');}


  constants = {
    totalCards: 4,
    elementsToValidate: [
      {
        element: 'dayForm',
        text: 'Денна форма',
        visible: true,
        locationInclude: 'http://fmi-schedule.chnu.edu.ua/'
      },
      {
        element: 'correspondenceForm',
        text: 'Заочна форма',
        visible: true,
        locationInclude: 'https://fmi.chnu.edu.ua/studentu/navchannia/rozklad-zaniat-ta-sesii/zaochna-forma/'
      },
      {
        element: 'graduateStudents',
        text: 'Для аспірантів',
        visible: true,
        locationInclude: 'https://www.chnu.edu.ua/'
      }
    ],

    linkTests: [
      { selector: () => this.linksToBachelor, description: 'bachelor' },
      { selector: () => this.linksToMaster, description: 'master' },
      { selector: () => this.linksToPostgraduateStudies, description: 'postgraduate studies' },
      { selector: () => this.linksToView, description: 'view' }
    ],

    fileLinks: [
      { text: 'Заява ректору', expectedExtension: '.docx' },
      { text: 'Заява декану', expectedExtension: '.docx' },
      { text: 'Додаток до індивідуального плану студента', expectedExtension: '.docx' },
      { text: 'Розклад відпрацювань', expectedExtension: '.docx' },
      { text: 'Розпорядження №6 по ФМІ від 21 серпня 2024 року', expectedExtension: '.pdf' },
      { text: 'Положенням про індивідуальний графік навчання', expectedExtension: '.pdf' },
      { text: 'Наказ №238 про внесення змін до положення від 30.08.2022 р.', expectedExtension: '.jpg' }
    ],

    courses: [
      { code: 'ВВ1', name: 'Диференціально-функціональні рівняння', href: '/media/popedygz/sylabus_-dfr_2024_cherevko.pdf' },
      { code: 'ВВ2', name: 'Статистичні методи оцінки експериментальних даних', href: '/media/eavfeftr/sylabus_statmetodyoed_martyniuk_2024.pdf' },
      { code: 'ВВ3', name: 'Асимптотичні методи нелінійної механіки', href: '/media/1yehgd0u/sylabus_asymptotychnimetodynm_2024bihun.pdf' },
      { code: 'ВВ4', name: 'Моделі еколого-економічних систем', href: '/media/t4rlp1xp/sylabus_mees_2024_-hryhorkiv.pdf' },
      { code: 'ВВ5', name: 'Стійкість динамічних систем', href: '/media/u5epwxam/sylabus_stiikist_dyesystem_2024_klevchuk.pdf' },
      { code: 'ВВ6', name: 'Теорія розподілів та їх застосування', href: '/media/r3bdb2c4/sylabus_teoriia_rozpodilizast_2024_litovchenko.pdf' },
      { code: 'ВВ7', name: 'Теоретичні та комп’ютерні методи дослідження еволюційних процесів', href: '/media/oswdt0yg/sylabus_tkmdep_litovchenko.pdf' },
      { code: 'ВВ8', name: 'Цифрова трансформація економіки', href: '/media/fn5dfufe/sylabustste_2024_pochenchuk.pdf' },
      { code: 'ВВ9', name: 'Моделі машинного навчання', href: '/media/drujn0cj/sylabus_modeli_mashnavchannia_2024_malyk.pdf' }
    ],

    expectedLinks: [
      {
        title: 'РОЗВ’ЯЗУВАННЯ ОЛІМПІАДНИХ ЗАДАЧ З ІНФОРМАТИКИ',
        hrefContains: 'mathmod.chnu.edu.ua/studentu/hurtky/',
        dept: 'Кафедра математичного моделювання'
      },
      {
        title: 'РОЗВ\'ЯЗУВАННЯ ОЛІМПІАДНИХ ЗАДАЧ З ПРОГРАМУВАННЯ ТА ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ',
        hrefContains: 'amit.chnu.edu.ua/studentu/hurtok/',
        dept: 'Кафедра прикладної математики та інформаційних технологій'
      },
      {
        title: 'Світ геометрії',
        hrefContains: 'algebra.chnu.edu.ua/studentu/naukova-robota/',
        dept: 'Кафедра алгебри та інформатики'
      }
    ],

    sections: [
      {
        name: 'Конференції',
        element: () => this.testingConferences,
        click: () => this.clickTestingConferences(),
        urlIncludes: 'https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/'
      },
      {
        name: 'Олімпіади',
        element: () => this.testingOlympics,
        click: () => this.clickTestingOlympics(),
        urlIncludes: 'https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/'
      },
      {
        name: 'Конкурси',
        element: () => this.testingCompetitions,
        click: () => this.clickTestingCompetitions(),
        urlIncludes: 'https://fmi.chnu.edu.ua/studentu/mozhlyvosti/naukova-robota/'
      }
    ],

    olympicTurs: [
      {
        name: 'І етап',
        element: () => this.firstOlyTur,
        click: () => this.clickFirstOlyTur(),
        urlIncludes: 'https://fmi.chnu.edu.ua/novyny/zahalni/novyi-sezon-studentskoi-pershosti-svitu-z-prohramuvannia-icpc/'
      },
      {
        name: 'IІ етап',
        element: () => this.secondOlyTur,
        click: () => this.clickSecondOlyTur(),
        urlIncludes: 'https://fmi.chnu.edu.ua/novyny/zahalni/ii-etap-vseukrainskoi-studentskoi-komandnoi-olimpiady-z-prohramuvannia-2024/'
      },
      {
        name: 'І етап',
        element: () => this.firstOlyTurSecond,
        click: () => this.clickFirstOlyTurSecond(),
        urlIncludes: 'https://fmi.chnu.edu.ua/novyny/zahalni/i-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/'
      },
      {
        name: 'IІ етап',
        element: () => this.secondOlyTurSecond,
        click: () => this.clickSecondOlyTurSecond(),
        urlIncludes: 'https://fmi.chnu.edu.ua/novyny/zahalni/ii-etap-vseukrainskoi-olimpiady-z-prohramuvannia-acmicpc-2023/'
      }
    ],

    sectionsSecond: [
      {
        name: 'Студентський парламент ФМІ',
        element: () => this.studentParliamentLink,
        click: () => this.clickStudentParliament(),
        urlIncludes: 'https://www.facebook.com/people/%D0%A1%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%9F%D0%B0%D1%80%D0%BB%D0%B0%D0%BC%D0%B5%D0%BD%D1%82/100022101372744/'
      },
      {
        name: 'Профспілкова організація студентів ФМІ',
        element: () => this.profUnionLink,
        click: () => this.clickProfUnion(),
        urlIncludes: 'https://www.facebook.com/fmi.org.ua'
      },
      {
        name: 'YouTube канал',
        element: () => this.youtubeLink,
        click: () => this.clickYoutube(),
        urlIncludes: 'https://www.youtube.com/channel/UCSwiddjIebpJ7RRYolaTxtw/featured'
      }
    ],

    sectionsRatingOfstudents: [
      {
        name: 'Правила призначення та виплати стипендій',
        element: () => this.studentRatingButtonFirst,
        click: () => this.clickStudentRatingButtonFirst(),
        urlIncludes: 'https://fmi.chnu.edu.ua/media/vxmaagva/pravyla-pryznachennia-stypendii-protokol-7-vid-31-serpnia-2020-r.pdf'
      },
      {
        name: 'Порядок призначення та виплати соціальних стипендій',
        element: () => this.studentRatingButtonSecond,
        click: () => this.clickStudentRatingButtonSecond(),
        urlIncludes: 'https://fmi.chnu.edu.ua/media/jojoqeio/1045-28122016.pdf'
      }
    ],

    sectionsAcademicIntegrity: [
      {
        name: 'Скринька зауважень та пропозицій',
        element: () => this.suggestionBoxButton,
        click: () => this.clickSuggestionBoxButton(),
        urlIncludes: '/pro-nas/korysne/skrynka-zauvazhen-ta-propozytsii/'
      },
      {
        name: 'Правила академічної доброчесності',
        element: () => this.integrityRulesButton,
        click: () => this.clickIntegrityRulesButton(),
        urlIncludes: 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/pravyla-akademichnoi-dobrochesnosti/'
      },
      {
        name: 'Етичний кодекс',
        element: () => this.ethicsCodeButton,
        click: () => this.clickEthicsCodeButton(),
        urlIncludes: 'https://www.chnu.edu.ua/universytet/normatyvni-dokumenty/etychnyi-kodeks-chernivetskoho-natsionalnoho-universytetu-imeni-yuriia-fedkovycha/'
      },
      {
        name: 'Положення про виявлення і запобігання плагіату',
        element: () => this.plagiarismPolicyButton,
        click: () => this.clickPlagiarismPolicyButton(),
        urlIncludes: 'https://www.chnu.edu.ua/media/f5eleobm/polozhennya-pro-zapobihannia-plahiatu_2024.pdf'
      },
      {
        name: 'Академічна доброчесність (перезентація)',
        element: () => this.integrityPresentationButton,
        click: () => this.clickIntegrityPresentationButton(),
        urlIncludes: '/media/5rnmehs1/akademichna-dobrochesnist.pdf'
      },
      {
        name: 'Комісія з питань етики та академічної доброчесності',
        element: () => this.ethicsCommissionButton,
        click: () => this.clickEthicsCommissionButton(),
        urlIncludes: '/media/tsdlg53t/rozporiadzhennia-11.pdf'
      },
      {
        name: 'Заходи з популяризації академічної доброчесності на 2024 рік',
        element: () => this.integrityPromotionButton,
        click: () => this.clickIntegrityPromotionButton(),
        urlIncludes: 'https://www.chnu.edu.ua/media/zrdpdgeg/zakhody-z-populiaryzatsii-ad-u-2024.pdf'
      },
      {
        name: '8 грудня 2020 року',
        element: () => this.december2020Button,
        click: () => this.clickDecember2020Button(),
        urlIncludes: 'https://drive.google.com/drive/folders/16lLIWRVa25mKUlENSD18P76tIekILQaX'
      },
      {
        name: '16 вересня 2021 року',
        element: () => this.september2021Button,
        click: () => this.clickSeptember2021Button(),
        urlIncludes: 'https://drive.google.com/drive/folders/1imCHas75rHLjdl87FJKOyHp9h1ZsDM3F'
      },
      {
        name: '4 травня 2022 року',
        element: () => this.may2022Button,
        click: () => this.clickMay2022Button(),
        urlIncludes: 'https://algebra.chnu.edu.ua/media/ef4oi3c3/pryntsypy-akademichnoi-dobrochesnosti.pdf'
      }
    ],

     elementsToValidateSec: [
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
        ]
          
    }


    clickCloseImageButton() {
        this.closeImageButton.click({ force: true });
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

    clickFirstOlyTur(){
        this.firstOlyTur.click();
    }

    clickSecondOlyTur(){
        this.secondOlyTur.click();
    }

    clickFirstOlyTurSecond(){
      this.firstOlyTurSecond.click();
    }

    clickSecondOlyTurSecond(){
      this.secondOlyTurSecond.click();
    }

    clickBannerBtn() {
      this.bannerBtn.click();
    }
    
    validateNewsItem($el) {
      cy.wrap($el).within(() => {
      cy.get('div.h3 > a')
        .should('have.attr', 'href')
        .and('include', '/novyny/');
      cy.get('p').should('not.be.empty');
      cy.contains('Читати далі').should('have.attr', 'href');
    });
   }

  validateNewsItemSec($el) {
    cy.wrap($el).within(() => {
      cy.get('a').contains('Переглянути').should('have.attr', 'href').and('not.be.empty');
    });
  }

   clickStudentParliament() {
    this.studentParliamentLink
      .invoke('removeAttr', 'target')
      .click({ force: true });
  }

  clickProfUnion() {
    this.profUnionLink
      .invoke('removeAttr', 'target')
      .click({ force: true });
  }

  clickYoutube() {
    this.youtubeLink
      .invoke('removeAttr', 'target')
      .click({ force: true });
  }

  clickStudentRatingButtonFirst(){
    this.studentRatingButtonFirst
    .invoke('removeAttr', 'target')
    .click({ force: true });
  }

  clickStudentRatingButtonSecond(){
    this.studentRatingButtonSecond
    .invoke('removeAttr', 'target')
    .click({ force: true });
  }

  clickSuggestionBoxButton() {
    this.suggestionBoxButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickIntegrityRulesButton() {
    this.integrityRulesButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickEthicsCodeButton() {
    this.ethicsCodeButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickPlagiarismPolicyButton() {
    this.plagiarismPolicyButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickIntegrityPresentationButton() {
    this.integrityPresentationButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickEthicsCommissionButton() {
    this.ethicsCommissionButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickIntegrityPromotionButton() {
    this.integrityPromotionButton.invoke('removeAttr', 'target').click({ force: true });
  }

  clickDecember2020Button() {
    this.december2020Button.invoke('removeAttr', 'target').click({ force: true });
  }

  clickSeptember2021Button() {
    this.september2021Button.invoke('removeAttr', 'target').click({ force: true });
  }

  clickMay2022Button() {
    this.may2022Button.invoke('removeAttr', 'target').click({ force: true });
  }
   
}
export default new StudentPage();