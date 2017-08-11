module.exports = {
    apps: [{
        name: "xxw",
        script: "./bin/www",
        watch: true,
        env: {
            "PORT": 3000,
            "NODE_ENV": "development",
            "DEBUG": '*'
        }
    }]
};
