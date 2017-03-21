import { ClarityDemoPage } from './app.po';

describe('clarity-demo App', () => {
  let page: ClarityDemoPage;

  beforeEach(() => {
    page = new ClarityDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
