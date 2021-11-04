const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const {
  create,
  read,
  update,
  remove,
  list,
} = require("../controllers/animals");

// routes
router.post("/animals", authCheck, adminCheck, create);
router.get("/animals", list);
router.get("/animals/:slug", read);
router.put("/animals/:slug", authCheck, adminCheck, update);
router.delete("/animals/:slug", authCheck, adminCheck, remove);

module.exports = router;
