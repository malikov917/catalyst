import { newE2EPage } from '@stencil/core/testing';

describe('cat-rangepicker', () => {
  beforeAll(() => (console.error = jest.fn()));

  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cat-rangepicker label="Label"></cat-rangepicker>');

    const element = await page.find('cat-rangepicker');
    expect(element).toHaveClass('hydrated');
  });
});
