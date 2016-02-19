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
