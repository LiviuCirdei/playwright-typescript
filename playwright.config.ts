import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// Load environment variables from .env file only in local development
// In CI env they will be loaded from pipeline env variables
if (!process.env.CI) {
	if (process.env.test_env) {
		console.log('Testing Environment: ', process.env.test_env);
		config({
			path: `.env.${process.env.test_env}`,
			override: true,
		});
	} else {
		config();
	}
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './tests',
	/* Run tests in files in parallel */
	fullyParallel: false,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* No retires */
	retries: 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 5 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: 'html',
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		// baseURL: 'http://127.0.0.1:3000',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
			grepInvert: [/@api-tests/, /@metrics/],
		},
		{
			name: 'api-tests',
			use: {},
			grep: [/@api-tests/],
		},
		{
			name: 'metrics',
			use: {},
			grep: [/@metrics/],
		},
	],
});

// import { defineConfig, devices } from '@playwright/test';
// import path from 'path';
// import { config } from 'dotenv';
// export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

// // Load environment variables from .env file only in local development
// // In CI env they will be loaded from pipeline env variables
// if (!process.env.CI) {
// 	if (process.env.test_env) {
// 		console.log('Testing Environment: ', process.env.test_env);
// 		config({
// 			path: `.env.${process.env.test_env}`,
// 			override: true,
// 		});
// 	} else {
// 		config();
// 	}
// }

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// export default defineConfig({
// 	testDir: './tests',
// 	fullyParallel: false,
// 	/* Fail the build on CI if you accidentally left test.only in the source code. */
// 	forbidOnly: !!process.env.CI,
// 	/* Retry on CI only */
// 	retries: process.env.CI ? 1 : 0,
// 	/* Numner of workers - paralel execution */
// 	workers: process.env.CI ? 5 : undefined,
// 	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
// 	reporter: [['list'], ['html', { open: 'never' }]],
// 	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
// 	use: {
// 		screenshot: 'only-on-failure',
// 		trace: 'on-first-retry',
// 		headless: true,
// 		actionTimeout: 60 * 1000,
// 		video: 'on-first-retry',
// 	},
// 	timeout: 3 * 60 * 1000,
// 	expect: {
// 		timeout: 60 * 1000,
// 	},

// 	/* Configure projects for major browsers */
// 	projects: [
// 		{
// 			name: 'setup',
// 			testMatch: '**/*.setup.ts',
// 		},
// 		{
// 			name: 'Desktop Chrome',
// 			use: {
// 				...devices['Desktop Chrome'],
// 				channel: 'chrome',
// 				viewport: { width: 1280, height: 720 },
// 				storageState: STORAGE_STATE,
// 			},
// 			dependencies: ['setup'],
// 		},

// 		/* Test against mobile viewports. */
// 		{
// 			name: 'Mobile Safari',
// 			use: { ...devices['iPhone 15'], storageState: STORAGE_STATE },
// 			dependencies: ['setup'],
// 		},
// 	],
// });
