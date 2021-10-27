module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {},
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/src/assets/pexels-pixabay-531880.jpg')",
                'footer-texture': "url('/src/assets/nao-takabayashi-bMaOP_13hoA-unsplash.jpg')",
                'random': "url('/src/assets/WgL5Pl.webp')",
                'random2': "url('/src/assets/HXu3fL.jpg')",
                'random3': "url('/src/assets/664-6644509_icon-react-js-logo-hd-png-download.png')",
                'wave': "url('/src/assets/wave-haikei.png')",
                backgroundImage: ['hover'],


            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],

}
