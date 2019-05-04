import { closeThisInABit } from "@/src/utils";

const RxJS_URL = 'https://rxjs-dev.firebaseapp.com/api';
const LINKS_SELECTOR = ".api-item > a";

const scrapeLinks = links => {
return links.map(link => {
    const url = link.getAttribute("href")
    const paths = url.split("/");
    let type = paths[1];
    let name = paths[2];

    if(type === "index") {
      type = paths[2];
      name = paths[3];
    }

    return { name, type, url };
  });
}

const scrapeHomepageLinks = async browser => {
  const homepage = await browser.newPage();
  
  await homepage.goto(RxJS_URL);
  
  const homepageLinks = await homepage.$$eval(
    LINKS_SELECTOR,
    scrapeLinks
  );
  
  closeThisInABit(homepage);
  
  return homepageLinks;  
}

export default scrapeHomepageLinks;