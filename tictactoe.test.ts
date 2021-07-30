import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    // await driver.sleep(100000)
});

test('I can add an x to the upper left square', async() => {
    let upperLeft = await (await driver).findElement(By.id('cell-0'));
    await upperLeft.click();

    // await driver.sleep(100000)
})

test('I can add an x to the upper right square', async() => {
    let upperRight = await (await driver).findElement(By.id('cell-2'));
    await upperRight.click();

    // await driver.sleep(100000)
})

test('I can add an x to the lower right square', async() => {
    let lowerRight = await (await driver).findElement(By.id('cell-8'));
    await lowerRight.click();

    // await driver.sleep(100000)
})

test('I can add an x to the middle square', async() => {
    let middleCell = await (await driver).findElement(By.id('cell-4'));
    await middleCell.click();

    // await driver.sleep(100000)
})