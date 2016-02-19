describe("Contacts Page:", function(){
  describe("When navigating to the contact page ", function(){
    beforeEach(function(){
      browser.get("http://localhost:8080/#/contact")
      browser.waitForAngular()
    })
    it("should have a submit button", function(){
      expect(element(by.css('.submit')).isPresent()).toBe(true);
    })
    it("the submit button should be disabled", function(){
      expect(element(by.css('.submit')).isEnabled()).toBe(false);
    })
    it("the submit button should be enabled after validated info is passed", function(){
      element(by.model('newMail.from')).sendKeys("patrick@patrick.com")
      element(by.model('newMail.subject')).sendKeys("I want to hire you.")
      element(by.model('newMail.text')).sendKeys("Please email me back.")
      expect(element(by.css('.submit')).isEnabled()).toBe(true);
    })
    it("should send an email when the submit button is pressed and the inputs are valid", function(){
      element(by.model('newMail.from')).sendKeys("patrick@patrick.com")
      element(by.model('newMail.subject')).sendKeys("I want to hire you.")
      element(by.model('newMail.text')).sendKeys("Please email me back.")
      var button = element(by.css('.submit'))
      button.click().then(function(event){
        expect(element(by.model('newMail.from')).getText()).toMatch("");
      })
    })
    it("should not send an email when the submit button is pressed and the inputs are not valid", function(){
      element(by.model('newMail.from')).sendKeys("patr")
      element(by.model('newMail.subject')).sendKeys("sdfds")
      element(by.model('newMail.text')).sendKeys("Please email me back.")
      var button = element(by.css('.submit'))
      expect(button.isEnabled()).toBe(false);
    })
    it("should have a texting button", function(){
      expect(element(by.css('.icon-basic-smartphone.contact-selection')).isPresent()).toBe(true);
    })
    it("should show texting inputs when texting button is clicked", function(){
      var button = element(by.css('.icon-basic-smartphone.contact-selection'))
      button.click().then(function(event){
        expect(element(by.model('newText.sender')).isPresent()).toBe(true);
      })
    })
    it("text submit should be disabled when fields are blank", function(){
      var button1 = element(by.css('.icon-basic-smartphone.contact-selection'))
      button1.click().then(function(event){
        var button2 = element(by.css('.submit'))
        expect(button2.isEnabled()).toBe(false);
      })
    })
    it("text should be sent when text data is valid", function(){
      var button1 = element(by.css('.icon-basic-smartphone.contact-selection'))
      button1.click().then(function(event){
        element(by.model('newText.sender')).sendKeys("Julio")
        element(by.model('newText.number')).sendKeys("5555555555")
        element(by.model('newText.company')).sendKeys("")
        element(by.model('newText.email')).sendKeys("julio@julia.co")
        var button2 = element(by.css('.submit'))
        button2.click().then(function(event){
          expect(element(by.model('newText.sender'))).toMatch("")
        })
      })
    })
    it("should return to email page when email form button is clicked", function(){
      var button1 = element(by.css('.icon-basic-smartphone.contact-selection'))
      var button2 = element(by.css('.icon-basic-mail.contact-selection'))
      button1.click().then(function(event){
        button2.click().then(function(event){
          expect(element(by.model('newMail.from')).isPresent()).toBe(true);
        })
      })
    })
  })
})
