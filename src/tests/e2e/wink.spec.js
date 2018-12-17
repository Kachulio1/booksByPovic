import puppeteer from "puppeteer";

const baseURL = "http://localhost:8080";
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  page = await browser.newPage();
});

describe("Wink", () => {
  test("find a wink emoji on / route", async () => {
    await page.goto(`${baseURL}`);
    const result = await page.evaluate(() => {
      return document.querySelector("span").innerText;
    });

    expect(result).toEqual("😉");
  });
});

afterAll(() => {
  browser.close();
});
