import { browser, element, by } from 'protractor';

export class Sgi.Ctm.Finances.Ng.FrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
