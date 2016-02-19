describe("Education Page", function(){
  describe("When navigating to the education page", function(){
    beforeEach(function(){
      browser.get("http://localhost:8080/#/education")
      browser.waitForAngular()
    })
    it("should display an array of schools", function(){
      expect(element(by.css(".school-box")).isPresent()).toBe(true)
    })
    it("should display a school's name", function(){
      expect(element(by.css(".school-name")).isPresent()).toBe(true)
    })
    it("should display a school's logo", function(){
      expect(element(by.css(".school-logo")).isPresent()).toBe(true)
    })
    it("should display a description of the curriculum", function(){
      expect(element(by.css(".school-curriculum")).isPresent()).toBe(true)
    })
  })
})
