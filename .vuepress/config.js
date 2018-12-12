module.exports = {
	title: 'NativeScript-Vue.org',
	description: 'Description here',
	postcss: {
		plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
	},
	themeConfig: {
		nav: [{ text: 'Home', link: '/' }, { text: 'Docs', link: '/docs/en/' }],
		sidebar: [
			{ title: 'introduction',
				collapsable: false,
				children: [
					{ text: 'introduction', link: '/docs/en/' }
			]},
			{ title: 'getting started',
				collapsable: false,
				children: [
					{ text: 'Quick Start', link: '/docs/en/1-quick-start.md' },
					{ text: 'Playground Tutorial', link: '/docs/en/1-quick-start' },
					{ text: 'Installation', link: '/docs/en/1-quick-start' },
					{ text: 'Upgrade Guide', link: '/docs/en/1-quick-start' },
					{ text: 'Using Vue DevTools', link: '/docs/en/1-quick-start' },
					{ text: 'Using NativeScript Plugins', link: '/docs/en/1-quick-start' },
					{ text: 'Using Vue Plugins', link: '/docs/en/1-quick-start' },
			]}	
		]
	},
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'en-US', // this will be set as the lang attribute on <html>
			title: 'NativeScript-Vue',
			description: 'Awesome Mobile Apps',
		},
	},
};
