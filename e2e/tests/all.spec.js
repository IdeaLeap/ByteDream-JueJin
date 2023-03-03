// @ts-check
const { test, expect } = require('@playwright/test');

test('e2e test', async ({ page }) => {
  await page.goto('https://bytedream.marlene.top/');
  await page.locator('.to_top_btn').first().click(); // 点击置顶组件
  await page.getByText('完整榜单').click();
  await page.getByRole('button', { name: '去签到' }).click();
  await page.locator('.alter-items > div:nth-child(2)').first().click();
  await page.locator('.hover\\:\\!text-jj-blue-normal').click();
  await page.locator('.type-manage > .alter-prev').click();
  await page.locator('#__nuxt > main > div.root > div > div > div.view-types.left-0 > div > div:nth-child(2) > a').click(); // 切换标签
  await page.getByRole('link', { name: '热榜' }).click();
  await page.locator('\/\/*[@id="__nuxt"]/main/div[3]/div/div/div[2]/div[1]/div[1]/div[2]/div').click(); // 切换选项
  await page.getByRole('link', { name: '30天内' }).click();
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await page.locator('.ad_close').first().click();
  await page.locator('.ad_close').first().click();
  await page.getByRole('link', { name: 'Back to home' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('\/\/*[@id="__nuxt"]/main/div[3]/div/div/div[2]/div[1]/ul/li[5]/a').click(); // 选择某篇文章
  await page.waitForLoadState('networkidle');
  const page1 = await page1Promise;
  await page1.locator('.panel-btn').first().click();
  await page.waitForLoadState('networkidle');
  const page2Promise = page1.waitForEvent('popup');
  await page.waitForLoadState('networkidle');
  await page1.locator('\/\/*[@id="__nuxt"]/main/div[3]/main/div/div[3]/div[3]/nav/div[2]/a').click(); // 专栏文章切换
  const page2 = await page2Promise;
  const page3Promise = page2.waitForEvent('popup');
  await page2.locator('\/\/*[@id="__nuxt"]/main/div[3]/main/div/div[3]/div[2]/div/div[2]/div/a[1]').click(); // 选择相关文章
  const page3 = await page3Promise;
  await page3.getByPlaceholder('搜索').click();
  await page3.getByPlaceholder('搜索').press('CapsLock');
  await page3.getByPlaceholder('搜索').fill('MonoRepo');
  await page3.locator('.search-icon').click();
  await page3.locator('\/\/*[@id="__nuxt"]/main/div[1]/header/div/div/div/div[2]/div[2]/a[1]').click(); // 选择搜索结果
  await page3.getByRole('button', { name: 'Toggle theme' }).click();
  await page3.getByRole('link', { name: '首页' }).click();
});