module.exports = {
    plugins: {
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xs': '375px', // Phones (480px)
                'mantine-breakpoint-sm': '430px', // Larger phones and small tablets (640px)
                'mantine-breakpoint-md': '800px', // Tablets and small desktops (1024px)
                'mantine-breakpoint-lg': '1200px', // Large desktops (1200px)
                'mantine-breakpoint-xl': '1440px', // Extra-large screens (1440px)
            },
        },
    },
};
