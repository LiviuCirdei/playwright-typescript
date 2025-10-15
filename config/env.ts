export class Env {
	// UI variables
	public static readonly BASE_URL = Env.getEnvVar('BASE_URL');
	public static readonly USERNAME = Env.getEnvVar('USERNAME');
	public static readonly PASSWORD = Env.getEnvVar('PASSWORD');

	private static getEnvVar(key: string): string {
		const value = process.env[key];
		if (!value) {
			throw new Error(`Environment variable ${key} is not defined`);
		}
		return value;
	}
}
