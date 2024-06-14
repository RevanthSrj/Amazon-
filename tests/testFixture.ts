import { test as myTest} from '@playwright/test';
import { Amazon } from '../steps/amazonStep';
export const test = myTest.extend<{ amazon: Amazon }>({
    amazon: async ({ page }, use) => {
        const amazonSteps = new Amazon(page);
        await use(amazonSteps);
    },
});