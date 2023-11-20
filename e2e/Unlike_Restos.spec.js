/* eslint-disable no-undef */
Feature('Unliking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one favorite resto', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.resto-item');
  I.click('.title-detail a');

  locate('.resto__title').first();

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.title-detail a');
  I.grabTextFrom('.title-detail a');

  I.click('.title-detail a');

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.resto__title');
});
