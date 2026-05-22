import { Page, Locator, expect } from '@playwright/test';

export class BoardPage {
    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async openApplication(applicationName: string) {
        await this.page.getByRole('button', { name: new RegExp(applicationName) }).click();
    }

    async verifyTaskInColumn(
        columnName: string,
        taskName: string,
        tags: string[]
    ) {
        const column = this.page.locator('div').filter({hasText: columnName}).first();
        const taskCard = column.locator('div').filter({hasText: taskName}).first();

        await expect(taskCard).toBeVisible();

        for (const tag of tags) {
            await expect(taskCard.getByText(tag).first()).toBeVisible();
        }
    }
}