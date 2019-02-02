import { AppPage } from './app.po';
import { PageHelper } from '../helper.po';
import { browser} from 'protractor';

describe('angular-tour-of-heroes App', () => {
  let page: AppPage;
  let helper: PageHelper;

  beforeEach(() => {
    page = new AppPage();
    helper = new PageHelper();
  });

  it('should display Angular Router', () => {
    page.navigateTo();
    browser.pause();
    // expect(page.getParagraphText()).toEqual('Welcome to app!');
    expect(page.getTitleText()).toEqual("Angular Router");
    
    helper.getSelectorByTxt('nav a', 'Login').click();
    helper.getSelectorByTxt('button', 'Login').click();

    helper.wait();
  });
});
