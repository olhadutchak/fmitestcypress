class NewsPage {

  get newsSection()             { return cy.get('.flex-2-columns a.readon-arrow'); }
  get preNewsSection()          { return cy.get('.flex-container .pagination-part li.page-index a'); }
  get mainSection()             { return cy.get('main'); }
 

constants = {

  all: "https://fmi.chnu.edu.ua/novyny/",
  general: "https://fmi.chnu.edu.ua/novyny/zahalni/",
  advertisement: "https://fmi.chnu.edu.ua/novyny/oholoshennia/",
  events: "https://fmi.chnu.edu.ua/novyny/podii/",
  students: "https://fmi.chnu.edu.ua/novyny/studentam/",
  teachers: "https://fmi.chnu.edu.ua/novyny/vykladacham/",
  greeting: "https://fmi.chnu.edu.ua/novyny/vitannia/",

  totalPagesConst: 29,
  generalTotalPagesConst: 13,
  advertisementTotalPagesConst: 10,
  eventsTotalPagesConst: 2,
  studentsTotalPagesConst: 2,
  teachersTotalPagesConst: 0,
  greetingTotalPagesConst: 3,
  
}
}
  
export default new NewsPage();