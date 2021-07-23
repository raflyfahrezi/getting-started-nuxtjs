module.exports = {
    purge: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './nuxt.config.{js,ts}',
        './plugins/**/*.{js,ts}',
        './components/**/*.{vue,js}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: {
                unique: '#00c58f',
            },
            gridTemplateRows: {
                auto: '1fr auto;',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
