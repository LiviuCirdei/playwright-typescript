import { Env } from '../../config/env';
import { expect, test } from '../../fixtures/fixtures';
import { THANK_YOU_MESSAGE } from '../../shared/constants';
import { Item } from '../../shared/types';
import { buildCheckoutInfo } from '../../test-data/checkout-info-builder';

test.describe('E2E - Complete checkout for first item', { tag: '@checkout' }, () => {
	test.beforeEach(async ({ loginPage, productsPage }) => {
		await loginPage.goto();
		await loginPage.login(Env.USERNAME, Env.PASSWORD);
		await expect(productsPage.productsTitle).toBeVisible();
	});

	test(
		'should complete checkout for first item',
		{ tag: '@smoke' },
		async ({ productsPage, cartPage, checkoutPage, overviewPage, confirmationPage }) => {
			let item: Item;
			await test.step('Add first item to cart', async () => {
				item = await productsPage.getFirstItemDetails();
				await productsPage.addFirstItemToCart();
				await productsPage.goToCart();
			});

			await test.step('Check cart details and proceed to checkout', async () => {
				await expect(cartPage.cartItemName).toHaveText(item.name);
				await expect(cartPage.cartItemPrice).toHaveText(item.price);
				await expect(cartPage.cartItemQty).toHaveText('1');
				await cartPage.checkout();
			});

			await test.step('Fill checkout info', async () => {
				await checkoutPage.fillCheckoutInfo(buildCheckoutInfo());
			});

			await test.step('Check overview page details and finish the purchase', async () => {
				await expect(overviewPage.overviewName).toHaveText(item.name);
				await expect(overviewPage.overviewPrice).toHaveText(item.price);
				await expect(overviewPage.overviewQty).toHaveText('1');
				await overviewPage.finish();
			});

			await test.step('Check order has been successful', async () => {
				await expect(confirmationPage.confirmationHeader).toHaveText(THANK_YOU_MESSAGE);
			});
		},
	);
});
