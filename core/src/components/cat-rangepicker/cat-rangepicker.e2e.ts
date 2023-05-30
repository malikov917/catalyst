import { newE2EPage } from '@stencil/core/testing';

describe('cat-rangepicker', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cat-rangepicker></cat-rangepicker>');

    const element = await page.find('cat-rangepicker');
    expect(element).toHaveClass('hydrated');
  });
});
