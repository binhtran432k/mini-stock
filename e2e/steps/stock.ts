import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { MyPath } from "../constants/path";
import { resetStock } from "../api/stock";

const { Given, When, Then } = createBdd();

Given("I do not have stock {string}", async ({}, id) => {
  await resetStock(id);
});

Given("I have stock {string} with amount {string}", async ({}, id, amount) => {
  await resetStock(id, Number(amount));
});

Given("I am in stock page", async ({ page }) => {
  await page.goto(MyPath.page.stock);
});

When("I fill {string} in {string} field", async ({ page }, input, label) => {
  await page.getByLabel(label).fill(input);
});

When("I click button {string}", async ({ page }, name) => {
  await page.getByRole("button", { name }).click();
});

Then(
  "I see a alert of stock with id {string} and amount {string}",
  async ({ page }, id, amount) => {
    page.on("dialog", async (alert) => {
      await alert.accept();
      expect(alert.message()).toBe(`id: ${id}\namount: ${amount}`);
    });
    await page.waitForLoadState("networkidle");
  },
);

Then(
  "I see a alert of stock with id {string} is not found",
  async ({ page }, id) => {
    page.on("dialog", async (alert) => {
      await alert.accept();
      expect(alert.message()).toBe(`'${id}' is not found`);
    });
    await page.waitForLoadState("networkidle");
  },
);

Then(
  "I see a alert of stock with id {string} is out of stock",
  async ({ page }, id) => {
    page.on("dialog", async (alert) => {
      await alert.accept();
      expect(alert.message()).toBe(`'${id}' is out of stock`);
    });
    await page.waitForLoadState("networkidle");
  },
);

Then(
  "I see stock with id {string} and amount {string} in list",
  async ({ page }, id, amount) => {
    const tableData = await page
      .locator("tbody tr")
      .all()
      .then((rows) =>
        Promise.all(
          rows.map((row) =>
            row
              .locator("td")
              .all()
              .then((cols) =>
                Promise.all(cols.map((col) => col.textContent())),
              ),
          ),
        ),
      );
    expect(tableData).toContainEqual([id, amount]);
  },
);

Then("I do not see stock with id {string} in list", async ({ page }, id) => {
  const tableData = await page
    .locator("tbody tr")
    .all()
    .then((rows) =>
      Promise.all(rows.map((row) => row.locator("td").nth(0).textContent())),
    );
  expect(tableData).not.toContain(id);
});
