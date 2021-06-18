import puppeteer from "puppeteer-core";

export async function takeScreenshotFromFile(
  htmlFilepath: string,
  destination: string
) {
  const url = `file:${htmlFilepath}`;
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium",
  });
  const page = await browser.newPage();
  await page.goto(url);

  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width: 800,
      height: 600,
    },
  });

  await browser.close();
}
