/**
 * Custom Playwright fixtures for the project.
 * Add more page objects or utilities to the fixtures as needed.
 * Usage: import { test, expect } from './fixtures';
 */
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login/login-page';
import { ProductsPage } from '../pages/products/products-page';
import { CartPage } from '../pages/cart/cart-page';
import { CheckoutPage } from '../pages/checkout/checkout-page';
import { OverviewPage } from '../pages/overview/overview-page';
import { ConfirmationPage } from '../pages/confirmation/confirmation-page';

type Fixtures = {
	loginPage: LoginPage;
	productsPage: ProductsPage;
	cartPage: CartPage;
	checkoutPage: CheckoutPage;
	overviewPage: OverviewPage;
	confirmationPage: ConfirmationPage;
};

const test = base.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
	productsPage: async ({ page }, use) => {
		const productsPage = new ProductsPage(page);
		await use(productsPage);
	},
	cartPage: async ({ page }, use) => {
		const cartPage = new CartPage(page);
		await use(cartPage);
	},
	checkoutPage: async ({ page }, use) => {
		const checkoutPage = new CheckoutPage(page);
		await use(checkoutPage);
	},
	overviewPage: async ({ page }, use) => {
		const overviewPage = new OverviewPage(page);
		await use(overviewPage);
	},
	confirmationPage: async ({ page }, use) => {
		const confirmationPage = new ConfirmationPage(page);
		await use(confirmationPage);
	},
});

export { test, expect };
