import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';

export class ConfirmationPage extends BasePage {
	readonly confirmationHeader: Locator;

	constructor(page: Page) {
		super(page);
		this.confirmationHeader = page.getByTestId('complete-header');
	}
}
