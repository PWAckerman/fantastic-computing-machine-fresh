describe("Main Page", function(){
  describe("When navigating to the main page ", function(){
    beforeEach(function(){
      browser.get("http://localhost:8080/#/")
      browser.waitForAngular()
    })
    it("should display a name", function(){
      expect(element(by.binding('name')).isPresent()).toBe(true);
    })
    it("should display a blurb", function(){
      expect(element(by.binding('blurb')).isPresent()).toBe(true);
    })
    it("should have an array of skills", function(){
      var skills = element.all(by.css('.skills-box')).get(0)
      expect(skills.isPresent()).toBe(true);
    })
    it("should display an info box when a skill is hovered over", function(){
      var skills = element.all(by.css('.skills-box')).get(0)
      var skill = skills.element(by.css('.tech-container'))
      browser.actions().mouseMove(skill).perform().then(
          function(event){
            expect(element(by.css(".info-box")).isPresent()).toBe(true);
          }
        )
    })
    it("should have an array of learnings", function(){
      var learnings = element.all(by.css('.skills-box')).get(1)
      expect(learnings.isPresent()).toBe(true);
    })
    it("should have a link to Projects", function(){
      var links = element.all(by.css('.writings'))
      expect(links.get(0).getText()).toBe("PROJECTS")
    })
    it("that link to Projects should work", function(){
      var links = element.all(by.css('.writings'))
      links.get(0).click().then(function(event){
        expect(browser.getLocationAbsUrl())
          .toBe('/projects');
      })
    })
    it("should have a link to Microblog", function(){
      var links = element.all(by.css('.writings'))
      expect(links.get(2).getText()).toBe("MICROBLOG")
    })
    it("that link to Microblog should work", function(){
      var links = element.all(by.css('.writings'))
      links.get(2).click().then(function(event){
        expect(browser.getLocationAbsUrl())
          .toBe('/microblog');
      })
    })
    it("should have a link to Contact", function(){
      var links = element.all(by.css('.writings'))
      expect(links.get(3).getText()).toBe("CONTACT")
    })
    it("that link to Contact should work", function(){
      var links = element.all(by.css('.writings'))
      links.get(3).click().then(function(event){
        expect(browser.getLocationAbsUrl())
          .toBe('/contact');
      })
    })
    it("should have a link to Education", function(){
      var links = element.all(by.css('.writings'))
      expect(links.get(1).getText()).toBe("EDUCATION")
    })
    it("that link to Education should work", function(){
      var links = element.all(by.css('.writings'))
      links.get(1).click().then(function(event){
        expect(browser.getLocationAbsUrl())
          .toBe('/education');
      })
    })
    // it("should display an array of projects", function(){
    //   browser.wait(function(){
    //     return element(by.exactRepeater('project in projects')).isPresent()
    //   },
    //   10000,
    //   "no projects");
    //   expect(element(by.exactRepeater('project in projects')).isPresent()).toBe(true);
    // })
  })
})
