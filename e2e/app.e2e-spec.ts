import { GithubsearchPage } from './app.po';

describe('githubsearch App', () => {
  let page: GithubsearchPage;

  beforeEach(() => {
    page = new GithubsearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
