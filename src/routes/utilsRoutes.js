const express = require("express");
const router = express.Router();
const utilsController = require("../controllers/utilsController");

router.post("/clone", utilsController.cloneObject);
router.post("/flatten", utilsController.flattenArray);
router.post("/rotate", utilsController.rotateMatrix);
router.post ("/thorttle", utilsController.throttle);

module.exports = router;
