/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one resto', async ({ I }) => {
  // Halaman Home Page
  I.amOnPage('/');

  I.waitForElement('.resto-item');
  I.click('.title-detail a');

  // Halaman Detail
  const titleDetail = locate('.resto__title').first();
  const titleDetailText = await I.grabTextFrom(titleDetail);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.title-detail a');
  const titleFavoriteText = await I.grabTextFrom('.title-detail a');

  assert.strictEqual(titleDetailText, titleFavoriteText);
});
