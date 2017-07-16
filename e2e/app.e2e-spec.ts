import { AndritzAppPage } from './app.po';

describe('andritz-app App', () => {
  let page: AndritzAppPage;

  beforeEach(() => {
    page = new AndritzAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
