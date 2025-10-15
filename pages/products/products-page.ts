import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';
import { Item } from '../../shared/types';

export class ProductsPage extends BasePage {
	readonly productsTitle: Locator;
	readonly firstItem: Locator;
	readonly firstItemName: Locator;
	readonly firstItemPrice: Locator;
	readonly firstItemAddToCart: Locator;
	readonly cartLink: Locator;

	constructor(page: Page) {
		super(page);
		this.productsTitle = page.locator('.title');
		this.firstItem = page.getByTestId('inventory-item').first();
		this.firstItemName = this.firstItem.getByTestId('inventory-item-name');
		this.firstItemPrice = this.firstItem.getByTestId('inventory-item-price');
		this.firstItemAddToCart = this.firstItem.getByRole('button', { name: 'Add to cart' });
		this.cartLink = page.getByTestId('shopping-cart-link');
	}

	async addFirstItemToCart() {
		await this.firstItemAddToCart.click();
	}

	async goToCart() {
		await this.cartLink.click();
	}

	async getFirstItemDetails(): Promise<Item> {
		const name = await this.firstItemName.innerText();
		const price = await this.firstItemPrice.innerText();
		return { name, price };
	}
}
