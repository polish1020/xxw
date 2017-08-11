/**
 * Created by changsheng on 11/08/2017.
 */

module.exports = {
    apps: [{
        name: "xxw",
        script: "./bin/www",
        env: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
    }]
};
