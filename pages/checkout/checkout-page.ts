import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base-page';
import { CheckoutInfo } from '../../test-data/checkout-info-builder';

export class CheckoutPage extends BasePage {
	readonly firstNameInput: Locator;
	readonly lastNameInput: Locator;
	readonly postalCodeInput: Locator;
	readonly continueButton: Locator;

	constructor(page: Page) {
		super(page);
		this.firstNameInput = page.getByPlaceholder('First Name');
		this.lastNameInput = page.getByPlaceholder('Last Name');
		this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
		this.continueButton = page.getByRole('button', { name: 'Continue' });
	}

	async fillCheckoutInfo(info: CheckoutInfo) {
		await this.firstNameInput.fill(info.firstName);
		await this.lastNameInput.fill(info.lastName);
		await this.postalCodeInput.fill(info.postalCode);
		await this.continueButton.click();
	}
}
