module.exports = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: 'https://dovah03.github.io/',  
    },
    basePath: "/React-Next-portfolio",
    assetPrefix: "/React-Next-portfolio",
    // remove /React-Next-portfolio from all assets paths in all files that use /images folder for local dev and put it back when deploying 
}
