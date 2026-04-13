module.exports = {
  default: {
    require: [
      'step-definitions/**/*.js',
      'support/**/*.js'
    ],
    format: ['html:cucumber-report.html'],
    publishQuiet: true
  }
};