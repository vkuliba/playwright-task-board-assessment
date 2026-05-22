import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.emailInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Sign in' });
    }

    async goto() {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyLoginSuccessful() {
        await expect(this.page.getByText('Projects')).toBeVisible();
    }
}