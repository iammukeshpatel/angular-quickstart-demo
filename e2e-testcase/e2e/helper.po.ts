import { browser, by, element, $$ } from 'protractor';

export class PageHelper {

    navigateTo(link) {
        return browser.get(`/${link}`);
    }

    getSelectorByTxt(selector, havingText = ''){
        return $$(selector).filter(function (elem, index) {
            return elem.getText().then(function (text) {
                console.log(`${text} ------ ${havingText}`);
                return text == havingText;
            });
        }).first();
    }

    wait(second = 5) {
        browser.sleep(second * 1000);
    }

}