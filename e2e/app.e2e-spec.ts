import { CLIPROJECTONEPage } from './app.po';

describe('cli-project-one App', () => {
  let page: CLIPROJECTONEPage;

  beforeEach(() => {
    page = new CLIPROJECTONEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
