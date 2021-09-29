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
    
});

test('Clicking the upper left square adds an X to the square', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();

    const myText = await button.getText()

    expect(myText).toBe('X')
});

test('Clicking the upper right square adds an X to the square', async () => {

    let button = await (await driver).findElement(By.id('cell-2'));
    await button.click();

    const myText = await button.getText()

    expect(myText).toBe('X')
    
});

test('Clicking the lower right square adds an X to the square', async () => {

    let button = await (await driver).findElement(By.id('cell-8'));
    await button.click();

    const myText = await button.getText()

    expect(myText).toBe('X')
    
});