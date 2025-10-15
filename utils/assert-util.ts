import { expect, Locator } from '@playwright/test';

export async function expectElementsVisible(elements: Locator[]) {
	await Promise.all(
		elements.map(async (element) => {
			await expect(element).toBeVisible();
		}),
	);
}
