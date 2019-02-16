const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"https://y.qq.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}