const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create, read, update, remove, list } = require("../controllers/shop");

// routes
router.post("/shop", authCheck, adminCheck, create);
router.get("/shop", list);
router.get("/shop/:slug", read);
router.put("/shop/:slug", authCheck, adminCheck, update);
router.delete("/shop/:slug", authCheck, adminCheck, remove);

module.exports = router;
