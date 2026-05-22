import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BoardPage } from '../pages/BoardPage';
import tasksData from '../test-data/tasks.json'

test.describe ('Task board validation', () => {

    for (const task of tasksData) {

        test(`Verify task: ${task.taskName}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const boardPage = new BoardPage(page);

            await loginPage.goto();
            await loginPage.login('admin', 'password123');
            await loginPage.verifyLoginSuccessful();

            await boardPage.openApplication(task.application);

            await boardPage.verifyTaskInColumn(
                task.column,
                task.taskName,
                task.tags
            );
        });
    }
});