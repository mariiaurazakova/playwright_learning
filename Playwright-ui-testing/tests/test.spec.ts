import { test } from '@playwright/test'


test.beforeEach(async ({page}) => {
    await page.goto('https://playwright.dev/')
})

test.describe('suite 1', () => {
test.beforeEach(async ({page}) => {
    await page.getByText('Get started').click()
})

test('this is the test', async ({page}) => {
    await page.getByText('Generating tests').click()
})

test('this is the test 2', async ({page}) => {
    await page.getByText('Setting up CI').click()
})   
})

test.describe('suite 2', () => {
test.beforeEach(async ({page}) => {
    await page.getByText('Testing documentation').click()
})

test('this is the test', async ({page}) => {
    await page.getByText('Generating tests').click()
})

test('this is the test 2', async ({page}) => {
    await page.getByText('Setting up CI').click()
})
})


/* test('this is the test 2', () => {

})

test('this is the test 3', () => {

}) */

/* test.describe('test suite 1', () => {
    test('this is the test', () => {

    })

    test('this is the test 2', () => {

    })

    test('this is the test 3', () => {

    })

})

test.describe('test suite 2', () => {
    test('this is the test', () => {

    })

    test('this is the test 2', () => {

    })

    test('this is the test 3', () => {

    })

}) */