import { JsenAdminPage } from './app.po';

describe('jsen-admin App', () => {
  let page: JsenAdminPage;

  beforeEach(() => {
    page = new JsenAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
