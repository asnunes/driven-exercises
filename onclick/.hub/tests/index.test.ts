import path from "path";
import puppeteer, { Browser, Dialog, Page } from "puppeteer-core";

const htmlFilepath = path.resolve(__dirname, "..", "..", "index.html");

let browser: Browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium",
  });
});

afterAll(async () => {
  await browser.close();
});

type DialogData = {
  type: string;
  message: string;
};

describe("index.html", () => {
  function getDialogDataForSelector(
    page: Page,
    selector: string
  ): Promise<DialogData> {
    return new Promise<DialogData>(async (resolve) => {
      let message = "";
      let type = "";
      page.on("dialog", async (dialog: Dialog) => {
        message = dialog.message();
        type = dialog.type();
        await dialog.accept();
      });

      await page.click(selector);
      if (!message || !type) {
        await page.waitForTimeout(4000);
      }

      return resolve({ type, message });
    });
  }

  it("deveria exibir alerta com mensagem correta ao clicar num botão de editar produto", async () => {
    const url = `file:${htmlFilepath}`;
    const page = await browser.newPage();
    await page.goto(url);

    const { type, message } = await getDialogDataForSelector(page, ".editar");

    await page.close();
    expect(message).toContain("editar");
    expect(type).toBe("alert");
  });

  it("deveria exibir alerta com mensagem correta ao clicar num botão de excluir produto", async () => {
    const url = `file:${htmlFilepath}`;
    const page = await browser.newPage();
    await page.goto(url);

    const { type, message } = await getDialogDataForSelector(page, ".excluir");

    await page.close();
    expect(message).toContain("excluir");
    expect(type).toBe("alert");
  });
});
