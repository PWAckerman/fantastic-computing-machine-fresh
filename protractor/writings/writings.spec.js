describe("Microblog Page", function(){
  describe("When navigating to the Microblog page ", function(){
    beforeEach(function(){
      browser.get("http://localhost:8080/#/microblog")
    })
    it("should have only three entries (plus one more)", function(){
      expect(element.all(by.css(".entry-container")).count()).toBe(4)
    })
    it("should show more entries when the more button is clicked", function(){
      element.all(by.css(".entry-container")).last().click().then(
        function(event){
          expect(element.all(by.css(".entry-container")).count()).toBe(7)
        }
      )
    })
  })
})
