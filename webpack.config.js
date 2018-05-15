var webpack=require('webpack');

module.exports = {
    entry: ["./runoob1.js","./index.js"],
    output: {
        filename: "bundle.js"
    },
    plugins:[
    new webpack.BannerPlugin('sangxiaokai demo of webpack')
    ]
};