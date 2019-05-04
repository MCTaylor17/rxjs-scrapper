// BUG importing puppeteer as ES6 module seems finicky
const puppeteer = require('puppeteer');

import { closeThisInABit } from "@/src/utils";
import { scrapeHomepageLinks } from "./scrapers";

(async () => {
  console.log("Hello World");
  
  const browser = await puppeteer.launch();
  const homepageLinks = await scrapeHomepageLinks(browser)
  closeThisInABit(browser);
  
  console.log(homepageLinks);
  console.log("Goodbye, World");
})();