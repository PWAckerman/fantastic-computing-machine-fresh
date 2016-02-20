exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  specs: ["./main/main.spec.js","./contact/contact.spec.js","./writings/writings.spec.js","./education/education.spec.js","./projects/projects.spec.js"],
  // capabilities: {
  //   'browserName': 'phantomjs',
  //   'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  // },
  onPrepare: function(){
    browser.driver.manage().window().setPosition(0,0)
    browser.driver.manage().window().setSize(1280,720)
  }
}
