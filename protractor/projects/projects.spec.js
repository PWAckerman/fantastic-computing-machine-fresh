describe("Projects Page", function(){
  describe("When navigating to the education page", function(){
    beforeEach(function(){
      browser.get("http://localhost:8080/#/projects")
      browser.waitForAngular()
    })
    it("should display at least one project", function(){
      expect(element(by.css(".project-box")).isPresent()).toBe(true)
    })
    it("should display a projects's name", function(){
      expect(element(by.css(".project-title")).isPresent()).toBe(true)
    })
    it("should display a projects's screenshot", function(){
      expect(element(by.css(".project-screenshot")).isPresent()).toBe(true)
    })
    it("should display a description of the project", function(){
      expect(element(by.css(".project-description")).isPresent()).toBe(true)
    })
    it("should display a list of technologies used in the project", function(){
      expect(element(by.css(".tech-icon-row")).isPresent()).toBe(true)
    })
    it("should show an info box when a skill is hovered over", function(){
      browser.actions().mouseMove((element.all(by.css(".tech-icon"))).get(0)).perform().then(
        function(event){
          expect(element(by.css(".info-box")).isPresent()).toBe(true)
      })
    })
  })
})
