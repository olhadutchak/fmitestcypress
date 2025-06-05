import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import newsPage from "@pages/news.page";

const newsMap = {
  all: {
    url: newsPage.constants.all,
    labelRegex: /Загальні|Оголошення|Події|Студенту|Викладачу|Вітання|Рада стейкхолдерів ФМІ/,
    pages: newsPage.constants.generalTotalPagesConst,
  },
  general: {
    url: newsPage.constants.general,
    label: 'Загальні',
    pages: newsPage.constants.generalTotalPagesConst,
  },
  advertisement: {
    url: newsPage.constants.advertisement,
    label: 'Оголошення',
    pages: newsPage.constants.advertisementTotalPagesConst,
  },
  events: {
    url: newsPage.constants.events,
    label: 'Події',
    pages: newsPage.constants.eventsTotalPagesConst,
  },
  students: {
    url: newsPage.constants.students,
    label: 'Студенту',
    pages: newsPage.constants.studentsTotalPagesConst,
  },
  teachers: {
    url: newsPage.constants.teachers,
    label: 'Викладачу',
    pages: newsPage.constants.teachersTotalPagesConst || 1,
  },
  greeting: {
    url: newsPage.constants.greeting,
    label: 'Вітання',
    pages: newsPage.constants.greetingTotalPagesConst,
  },
};

Given("I visit the {string} news page", (type) => {
  cy.visit(newsMap[type].url);
});

Then("all {string} news links should be valid", (type) => {
  const { label, labelRegex, pages } = newsMap[type];
  const checkLabel = label || labelRegex;

  cy.wrap(Array.from({ length: pages }, (_, i) => i + 1)).each((pageNumber) => {
    if (pages > 1) {
      newsPage.preNewsSection.contains(String(pageNumber)).click();
    }

    newsPage.newsSection.each(($link) => {
      const href = $link.attr('href');
      const fullUrl = encodeURI(`https://fmi.chnu.edu.ua${href}`);

      cy.visit(fullUrl);
      newsPage.mainSection.contains(checkLabel).should('exist');
      cy.go("back");

      cy.request({ url: fullUrl, timeout: 15000 }).its('status').should('eq', 200);
    });
  });
});
