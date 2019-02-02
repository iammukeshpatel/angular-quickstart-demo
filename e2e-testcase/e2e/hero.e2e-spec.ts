
import { PageHelper } from './helper.po';
import { browser, element, by } from 'protractor';

describe('Heroes app tours', () => {
    let helper: PageHelper;

    beforeEach(()=> {
        helper = new PageHelper
    });

    it('It Should navigate to heroes page', () => {
        helper.navigateTo('superheroes');
        browser.waitForAngular();
        helper.getSelectorByTxt('ul.items li a', '12Narco').click();
        
        const nameFields = element(by.model('hero.name'));
        // nameFields.getAttribute('model');
        element(by.css('input')).clear();
        element(by.css('input')).sendKeys('Mukesh');
        helper.wait(2);
        element(by.buttonText('Back')).click();

        helper.wait();
    });
});