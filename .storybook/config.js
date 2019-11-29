import { configure } from '@storybook/react';
import '@storybook/addon-console';
import { configureActions } from '@storybook/addon-actions';
import { setConsoleOptions } from '@storybook/addon-console';

configureActions({
    clearOnStoryChange: true
});

// Needed so clear on story change takes effect
setConsoleOptions({});

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
