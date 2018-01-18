import { CloudAccountPage } from './app.po';

describe('cloud-account App', () => {
  let page: CloudAccountPage;

  beforeEach(() => {
    page = new CloudAccountPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
