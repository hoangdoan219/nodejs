import express from "express";
import newUser from "../controllers/userController.js"
import homePage from "../controllers/homeController.js"

const router = express.Router();

const initWebRoute = (app) => {
  router.get("/home",homePage);
//   router.get("/about", aboutController.aboutPage)
//   router.get("*", (req, res) => {
//     return res.render("404");
//   });
//   return app.use("/", router);
  router.get("/create-new-user", newUser);

  app.get('/', (req, res) => {
    res.send("Test123123");
  })
  router.get("*", (req, res) => {
    return res.render("404page");
  });
  return app.use("/", router);


};
// module.exports = initWebRoute;
export default initWebRoute

