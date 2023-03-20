// const fs = require("fs");

// const nfts = JSON.parse(
//   fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`)
// );

const { query } = require("express");
const NFT = require("../models/nft_models");
// const feature = require("../utils/app_features");
// const nft = require("../models/nft_models");

exports.checkID = (req, res, next, value) => {
  next();
};

// exports.checkBody = (req, res, next) => {
//   if (!req.body.price || !req.body.name) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Missing Data",
//     });
//   }
//   next();
// };

exports.singleNft = async (req, res) => {
  try {
    const nft = await NFT.findById(req.params.id);
    res.status(200).json({ status: "success", data: { nft } });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error });
  }
};

exports.getallNft = async (req, res) => {
  try {
    //     const nftMeg= new feature(NFT.find(),req.query).pagination();
    // const nft=await nftMeg.query;
    const nft = await NFT.find(req.query);
    console.log(req.query);

    res.status(200).json({
      status: "success",
      results: nft.length,
      data: {
        nft,
      },
    });
  } 
  catch (error) {
    res.status(400).json({ status: "failed", message: error });
  }
};

exports.createNft = async (req, res) => {
  try {
    const nfts = await NFT.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        nft: nfts,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: error,
    });
  }

  // const newId = nfts[nfts.length - 1].id + 1;
  // console.log(newId);
  // const newNfts = Object.assign({ id: newId }, req.body);
  // nfts.push(newNfts);
  // fs.writeFile(
  //   `${__dirname}/nft-data/data/nft-simple.json`,
  //   JSON.stringify(nfts),
  //   (err) => {
  //     res.status(201).json({ status: "success", data: newNfts });
  //   }
  // );
};

exports.updateNft = async (req, res) => {
  try {
    const nft = await NFT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ status: "success", data: { nft: nft } });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
};

exports.deleteNft = async (req, res) => {
  try {
    await NFT.findByIdDelete(req.params.id);
    res.status(204).json({ status: "success", data: { nft: "Deleted" } });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error,
    });
  }
};
