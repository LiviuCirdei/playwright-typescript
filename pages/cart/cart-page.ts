import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';

export class CartPage extends BasePage {
	readonly cartItem: Locator;
	readonly cartItemName: Locator;
	readonly cartItemPrice: Locator;
	readonly cartItemQty: Locator;
	readonly checkoutButton: Locator;

	constructor(page: Page) {
		super(page);
		this.cartItem = page.getByTestId('inventory-item').first();
		this.cartItemName = this.cartItem.getByTestId('inventory-item-name');
		this.cartItemPrice = this.cartItem.getByTestId('inventory-item-price');
		this.cartItemQty = this.cartItem.getByTestId('item-quantity');
		this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
	}

	async checkout() {
		await this.checkoutButton.click();
	}
}
