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

    get studentParliamentLink()         { return cy.get('.category-item-flex:contains("Студентський парламент ФМІ")'); }
    get profUnionLink()                 { return cy.get('.category-item-flex:contains("Профспілкова організація студентів ФМІ")'); }
    get youtubeLink()                   { return cy.get('.category-item-flex:contains("YouTube канал")'); }

    


    constants = {
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

   
}
export default new StudentPage();