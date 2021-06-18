/** you must install chromium first:
 * - sudo apt install chromium (UBUNTU)
 * - brew install chromium (MAC)
 * - then you can run this file by typing "npx ts-node path/to/this/file.ts"
 * This file is not using during test run, it only uses to generate screenshots from solution to be compared on users tests
 * */

import path from "path";
import { takeScreenshotFromFile } from "../helpers";

(async () => {
  console.log("generating screenshot...");

  const htmlFilepath = path.resolve(__dirname, "..", "..", "index.html");
  const destination = path.resolve(__dirname, "solutions", "solution.png");
  await takeScreenshotFromFile(htmlFilepath, destination);

  console.log(`Screenshot was saved on ${destination}`);
})();
