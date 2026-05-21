import { expect, test } from "@playwright/test";

test.describe("portfolio home page", () => {
  test("renders core content and navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Eric Mao" })).toBeVisible();
    await expect(page.getByText(/years old/)).toBeVisible();
    await expect(page.getByRole("link", { name: "Freesolo" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Clado" })).toBeVisible();
    await expect(page.getByRole("link", { name: "writing" })).toBeVisible();
    await expect(page.getByRole("link", { name: "@ericmao" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "eric@freesolo.co" }),
    ).toBeVisible();
  });

  test("age counter updates over time", async ({ page }) => {
    await page.goto("/");

    const ageText = page.getByText(/\d+\.\d+ years old/);
    const initial = await ageText.textContent();
    await page.waitForTimeout(300);
    const updated = await ageText.textContent();

    expect(initial).toMatch(/\d+\.\d+ years old/);
    expect(updated).not.toBe(initial);
  });

  test("image gallery expands on click", async ({ page }) => {
    await page.goto("/");

    const galleryItems = page.locator(".layout-md .flex.gap-4.h-80 > div");
    await expect(galleryItems).toHaveCount(3);

    const firstItem = galleryItems.nth(0);
    const secondItem = galleryItems.nth(1);

    await expect(firstItem).toHaveClass(/flex-\[3\]/);
    await secondItem.click();
    await expect(secondItem).toHaveClass(/flex-\[3\]/);
    await expect(firstItem).toHaveClass(/flex-\[0\.5\]/);
  });

  test("email copy button works", async ({ page, context, browserName }) => {
    test.skip(browserName !== "chromium", "Clipboard API tested in Chromium");

    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/");

    await page.getByRole("button", { name: "eric@freesolo.co" }).click();
    await expect(page.getByRole("button", { name: "copied!" })).toBeVisible();

    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText).toBe("eric@freesolo.co");
  });

  test("investment links are present", async ({ page }) => {
    await page.goto("/");

    for (const name of ["shofo", "blueprint", "a37", "photon codes", "chert"]) {
      await expect(page.getByText(name, { exact: true })).toBeVisible();
    }
    await expect(page.getByText("stealth", { exact: true })).toBeVisible();
  });
});
