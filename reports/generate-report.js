
const reporter = require('multiple-cucumber-html-reporter');

// reports

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  openReportInBrowser: false,


  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'GitHub Actions',
    platform: {
      name: 'ubuntu',
      version: 'latest'
    }
  },

  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Project', value: 'Playwright BDD' },
      { label: 'Framework', value: 'Cucumber + Playwright' },
      { label: 'Environment', value: 'GitHub Actions' }
    ]
  }
});