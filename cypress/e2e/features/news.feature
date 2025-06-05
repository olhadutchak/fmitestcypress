Feature: TESTING NEWS PAGE

  Scenario Outline: TESTING <type> NEWS PAGE
  Given I visit the "<type>" news page
  Then all "<type>" news links should be valid

  Examples:
    | type          |
    | all           |
    | general       |
    | advertisement |
    | events        |
    | students      |
    | teachers      |
    | greeting      |
