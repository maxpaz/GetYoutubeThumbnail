import { GetThumbnailPage } from './app.po';

describe('get-thumbnail App', function() {
  let page: GetThumbnailPage;

  beforeEach(() => {
    page = new GetThumbnailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
