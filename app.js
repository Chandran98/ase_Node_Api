const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/error_handler");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "DEV") {
  app.use(morgan("dev"));
}



const nftsRouter = require("./routes/nft_routes");
const userRouter = require("./routes/user_routes");

app.use("/api/v1/nfts", nftsRouter);
app.use("/api/v1/users", userRouter);
// app.all("*", (res, req, next) => {
//   next(new AppError(`Error created on ${req.originalUrl} on this server`, 404));
// });

app.use(express.static(`${__dirname}/nft-data/img`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

module.exports = app;
