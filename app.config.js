module.exports = {
    name: "auth-ui-native",
    slug:"auth-ui-native",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: 'light',
    splash: {
        image: "./assets/splash.png",
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    updates: {
        fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
        '**/*'
    ],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor:"#FFFFFF",
            softwareKeyboardLayoutMode:"pan",
        }
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
      loadStorybook: process.env.LOAD_STORYBOOK
    }
}


