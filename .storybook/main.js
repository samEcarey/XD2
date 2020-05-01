module.exports = {
	stories: [
		"../src/appbase/**/*.stories.js",
		//'../src/**/*.stories.(js|mdx)'
	],
	addons: [
		"@storybook/addon-actions",
		"@storybook/addon-links",
		"@storybook/addon-docs",
		"@storybook/addon-storysource",
		"@storybook/addon-backgrounds/register",
		"@storybook/addon-a11y/register",
		// '@storybook/addon-viewport/register'
		// '@storybook/addon-docs'
	],
};
