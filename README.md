- dashboard page is only accessible to logged in users.

- to check wheater the user is logged in or not, we should give user a unique token/identifier, user without token should not be able to access dashboard, also some users may try to create token by themselves and try to log in. to avoid that token should be validated.

> token can be saved on client side, client will send token with every request (JWT)
> token can be saved on server side, only reference to token will be sent with evety request. (express -> https://www.npmjs.com/package/express-session )(nextjs -> https://www.npmjs.com/package/iron-session)


1. check wheather the user is logged in dashboard page. 





References: https://github.com/vercel/next.js/tree/canary/examples/with-iron-session