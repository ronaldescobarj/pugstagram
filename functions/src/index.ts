import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  const data = {
    user: {
      nickname: "ronaldescobarj",
      name: "Ronald Escobar",
    },
    posts: [
      {
        username: "ronaldescobarj",
        location: "Cochabamba, Bolivia",
        avatar: "https://arepa.s3.amazonaws.com/elmo.jpg",
        photo: "https://arepa.s3.amazonaws.com/elmo002.jpg",
        like: false,
        bookmark: false,
        postComment: "Disfrutando de mi piscina asies",
        comments: [
          {
            id: 1,
            text: "Hola elmo",
            username: "crispeta",
          },
          {
            id: 2,
            text: "Perro miserable",
            username: "gatito",
          },
        ],
      },
      {
        username: "ronaldescobarj",
        location: "Cochabamba, Bolivia",
        avatar: "https://arepa.s3.amazonaws.com/elmo.jpg",
        photo: "https://arepa.s3.amazonaws.com/elmo002.jpg",
        like: false,
        bookmark: false,
        postComment: "Disfrutando de mi piscina asies",
        comments: [
          {
            id: 1,
            text: "Hola elmo",
            username: "crispeta",
          },
          {
            id: 2,
            text: "Hola soy nacho",
            username: "nacho",
          },
        ],
      },
    ],
  };
  response.send(data);
});
