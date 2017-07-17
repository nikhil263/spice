import { SpicePage } from './app.po';

describe('spice App', function() {
  let page: SpicePage;

  beforeEach(() => {
    page = new SpicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
