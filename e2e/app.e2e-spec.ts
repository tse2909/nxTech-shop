import { NxTechShopPage } from './app.po';

describe('nx-tech-shop App', () => {
  let page: NxTechShopPage;

  beforeEach(() => {
    page = new NxTechShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
