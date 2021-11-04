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
} = require("../controllers/providers");

// routes
router.post("/providers", authCheck, adminCheck, create);
router.get("/providers", list);
router.get("/providers/:slug", read);
router.put("/providers/:slug", authCheck, adminCheck, update);
router.delete("/prodivers/:slug", authCheck, adminCheck, remove);

module.exports = router;
