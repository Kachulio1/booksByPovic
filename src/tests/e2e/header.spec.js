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

describe("Header", () => {
  test("find  header on / route", async () => {
    await page.goto(`${baseURL}`);
    const result = await page.evaluate(() => {
      return document.querySelector("header").innerText;
    });

    expect(result).toEqual("Books By Povic");
  });
});

afterAll(() => {
  browser.close();
});
