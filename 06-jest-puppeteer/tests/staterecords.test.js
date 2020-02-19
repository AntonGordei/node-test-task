const timeout = 15000
jest.setTimeout(55000)
describe('State Records', () => {
    beforeAll(async () => {
        await page.goto('https://california.staterecords.org/');
    });

    it('should be titled "California State Records | StateRecords.org"', async () => {
        await expect(page.title()).resolves.toMatch('California State Records | StateRecords.org');
    });
});


describe('Input first name and last name ', () => {
    beforeAll(async () => {
        await page.goto('https://california.staterecords.org/');
    });

    it('click search', async () => {
        expect.assertions(2);
        await page.type('input[name=firstname]', 'Peter');
        await page.type('input[name=lastname]', 'Parker');
        await page.$eval('input[name=search]', el => el.click());
        const buttonGoBack = await page.$eval('[class="disagree btn"]', el => el.textContent);
        expect(buttonGoBack).toEqual("GO BACK");
        const buttonAgree = await page.$eval('[class="agree btn"]', el => el.textContent);
        expect(buttonAgree).toEqual("I AGREE");
        await page.$eval('button[class="agree btn"]', el => el.click());
        await page.screenshot({path: 'search--screenshot.png'});
    });
});




    describe('Click button "I AGREE" ', () => {
        beforeAll(async () => {
            await page.goto('https://california.staterecords.org/search.php?firstname=Peter&lastname=Parker&city=&search=Search');
        });

        it('await alert with button "NEXT" and ckick them', async () => {
            await page.waitFor('input[id="modal_next"]')
            await page.screenshot({path: 'search--screenshot.png'});
            await page.$eval('input[id="modal_next"]', el => el.click());
        });
    });

describe('After click button "NEXT"', () => {
    beforeAll(async () => {
        await page.goto('https://california.staterecords.org/records.php?firstname=Peter&lastname=Parker&city=&state=&from=');
    });

    it('check matches for Peter Parker ', async () => {

        const text = await page.evaluate(() => Array.from(document.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list > ul:nth-child(1) > li:nth-child(1) > i'), element => element.textContent));
        const text1 = await page.evaluate(() => Array.from(document.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list > ul:nth-child(1) > li:nth-child(2) > i'), element => element.textContent));
        const text2 = await page.evaluate(() => Array.from(document.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list > ul:nth-child(1) > li:nth-child(3) > i'), element => element.textContent));
        const text3 = await page.evaluate(() => Array.from(document.querySelectorAll('#content > div.sd-center.cf > div.top-block.teaser-top.cf > div.teaser-list > ul:nth-child(2) > li:nth-child(1) > a'), element => element.textContent));
        const content= text[0]+" "+text1[0]+" "+text2[0]+" "+text3[0]
        //await expect(content).toEqual("1 Match 56  Matches 16  Matches View 173 Records");
        await expect(content).toMatch('1 Match 56  Matches 16  Matches View 173 Records');

    });
});

describe('Check first person ', () => {
    beforeAll(async () => {
        await page.goto('https://california.staterecords.org/records.php?firstname=Peter&lastname=Parker&city=&state=&from=');
    });

    it('click Person', async () => {

        const text = await page.evaluate(() => Array.from(document.querySelectorAll('#content > div:nth-child(1) > div.result-lft > h2 > a'), element => element.textContent));

        //await page.$eval('button[class="agree btn"]', el => el.click());
        console.log(text)
        //await page.$eval('a#', el => el.click())
        await page.screenshot({path: 'search--screenshot.png'});

        // expect.assertions(2);
        // await page.type('input[name=firstname]', 'Peter');
        // await page.type('input[name=lastname]', 'Parker');
        // await page.$eval('input[name=search]', el => el.click());
        // const buttonGoBack = await page.$eval('[class="disagree btn"]', el => el.textContent);
        // expect(buttonGoBack).toEqual("GO BACK");
        // const buttonAgree = await page.$eval('[class="agree btn"]', el => el.textContent);
        // expect(buttonAgree).toEqual("I AGREE");
        // await page.screenshot({path: 'search--screenshot.png'});
    });
});
