import { expect, Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';

export class OverviewPage extends BasePage {
	readonly overviewItem: Locator;
	readonly overviewName: Locator;
	readonly overviewPrice: Locator;
	readonly overviewQty: Locator;
	readonly finishButton: Locator;

	constructor(page: Page) {
		super(page);
		this.overviewItem = page.getByTestId('inventory-item').first();
		this.overviewName = this.overviewItem.getByTestId('inventory-item-name');
		this.overviewPrice = this.overviewItem.getByTestId('inventory-item-price');
		this.overviewQty = this.overviewItem.getByTestId('item-quantity');
		this.finishButton = page.getByRole('button', { name: 'Finish' });
	}

	async finish() {
		await this.finishButton.click();
	}

	async expectOverviewItemDetails(expectedName: string, expectedPrice: string, expectedQty: string = '1') {
		await expect(this.overviewName).toHaveText(expectedName);
		await expect(this.overviewPrice).toHaveText(expectedPrice);
		await expect(this.overviewQty).toHaveText(expectedQty);
	}
}
