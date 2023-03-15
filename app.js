const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

if(process.env.NODE_ENV=== "DEV"){
  
app.use(morgan("dev"));
}
const nftsRouter = require("./routes/nft_routes");
const userRouter = require("./routes/user_routes");

app.use("/api/v1/nfts", nftsRouter);
app.use("/api/v1/users", userRouter); 

app.use(express.static(`${__dirname}/nft-data/img`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

module.exports = app;
