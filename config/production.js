/**
 * Created by changsheng on 11/08/2017.
 */


module.exports = {
    session: {
        secret: 'xxw',
        key: 'xxw',
        maxAge: 2592000000,
        saveUninitialized: true,
        resave: false,
        cookie: { secure: true }
    }
};