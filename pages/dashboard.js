/* 
 I installed iron-session using npm i iron-session
 because I want to use sessions to store a unique id when user logs in.

 https://stackoverflow.com/questions/3804209/what-are-sessions-how-do-they-work


*/

import { withIronSessionSsr } from "iron-session/next";

export default function Dashboard({ message }) {
  return (
    <>
      <h1>Dashboard page - private</h1>
      <h3>{message}</h3>
    </>
  );
}

const sessionOptions = {
  password: "passwordddddddddddddddddddddddddddddddddddddddddddddd",
  cookieName: "iron-session/examples/next.js",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export const getServerSideProps = withIronSessionSsr(async function ({ req }) {
  /*

If user request dashboard page, this function runs first in
the server, So this is the perfect place to check whether the user has 
id with them or not

token/id is stored(in sign in process) in session object, normally called 'user'
but you can use any name, but I will store user token in 'user' session
in sign in step.
*/

  // I can access req.session helps to iron-session
  // It is like an object
  const user = req.session.user;

  // check wheather the user is logged in

  if (user === undefined) {
    return {
      props: {
        message: "❗ you are not logged in",
      },
    };
  } else {
    return {
      props: { message: "you are logged in" },
    };
  }
}, sessionOptions);
