const puppeteer = require('puppeteer');

(async () => {
  console.log("Hello World");
  
  const browser = await puppeteer.launch();
  const homePage = await browser.newPage();
  await homePage.goto('https://rxjs-dev.firebaseapp.com/api');
  await homePage.screenshot({path: 'example.png'});
  
  const homePageLinks = await homePage.$$eval('.api-item a', apiItemLinks => {
    
    return apiItemLinks.map(apiItemLink => {
      const url = apiItemLink.getAttribute("href")
      const paths = url.split("/");
      
      if(path[1] === "index") {
        paths.shift();
      }
      
      return {
        type: paths[1],
        name: paths[2],
        url: url
      }
    });
  });
  
  console.log("All the API links", JSON.stringify(homePageLinks, null, "  "));
  
  setTimeout(() => {
    console.log("Goodbye, World");
    
    browser.close();
  }, Math.random() * 10000);
  
  // Fin
})();