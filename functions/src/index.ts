import * as corsModule from "cors";
import * as functions from "firebase-functions";

const cors = corsModule({ origin: ["https://fir-test-21cc0.web.app", "https://fir-test-21cc0.firebaseapp.com"] });

const envConfig = functions.config();

export const getEnv = functions.https.onRequest((req, res) => {
  cors(req, res, () => res.status(200).send(JSON.stringify(envConfig.env.config)));
});
