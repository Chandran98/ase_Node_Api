const express = require("express");

const router = express.Router();
const nftController = require("../controllers/nft_controller");

router
  .route("/")
  .get(nftController.getallNft)
  .post( nftController.createNft);

router
  .route("/:id")
  .patch(nftController.updateNft)
  .delete(nftController.deleteNft)
  .get(nftController.checkID, nftController.singleNft);

module.exports = router;
