import { test } from '@playwright/test'
import { ai } from '@zerostep/playwright'

  test('Search on Google with Playwright AI', async ({ page }) => {

    await ai('Navigate to this URL https://www.google.com', { page, test})

    await page.waitForLoadState('networkidle');
    
    await ai('In the search field type Playwright', { page, test })
    await ai('Wait for the results to appear in the dropdown', { page, test})
    await ai('Click on the First Option from the dropdown', { page, test })
    await ai('Click on the first link from the Search Results', { page,test})
    await ai('The Playwright hyperlink should be visible on the header of the page', { page, test })
  })
