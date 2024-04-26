class NewsPage {

  get newsSection()             { return cy.get('.flex-2-columns a.readon-arrow'); }
  get preNewsSection()          { return  cy.get('.flex-container .pagination-part li.page-index a'); }
 
}
  
export default new NewsPage();