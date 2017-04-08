import { Sgi.Ctm.Finances.Ng.FrontendPage } from './app.po';

describe('sgi.ctm.finances.ng.frontend App', () => {
  let page: Sgi.Ctm.Finances.Ng.FrontendPage;

  beforeEach(() => {
    page = new Sgi.Ctm.Finances.Ng.FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
