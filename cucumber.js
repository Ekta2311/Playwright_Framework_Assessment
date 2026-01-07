module.exports = {
  default: {
    require: ["./features/stepdefinitions/*.js", "./features/Support/*.js"],

    format: ["json:./reports/cucumber-report.json"], 
    paths: ["./features/*.feature"],
    tags: "@smoke"
  }
};



