//code to generate html report in cucumber playwright this will store the report into
// reports folder with name cucumber-html-report.html
// and the json file will be created in the same folder with name cucumber-report.json

const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',      // input file (from cucumber.js output)
  output: './reports/cucumber-html-report.html',   // output HTML file
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "Chrome 120",
    "Platform": "Windows 10",
    "Executed": "Local"
  }
};

reporter.generate(options);
