module.exports = {
    purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#140927",
                blue: "#00ABFF",
                "light-blue": "#DDFFFF",
                contrast: "#FFD427",
                "light-contrast": "#FFFF33",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
