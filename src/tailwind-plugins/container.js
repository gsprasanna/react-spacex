const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(() => {
    return function ({ addComponents }) {
        addComponents({
            '.container': {
                maxWidth: '100%',
                'padding-left': '16px',
                'padding-right': '16px',
                'margin': '20px 0 20px 0',
                '@screen desktop': {
                    'padding-left': '24px',
                    'padding-right': '24px',
                    'margin': '320px 0 32px 0',
                },
                '@screen hd': {
                    'padding-left': '40px',
                    'padding-right': '40px',
                    'margin': '40px 0 40px 0',
                },
            }
        })
    }
})