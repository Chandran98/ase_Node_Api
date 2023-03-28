const app = require("./app");
const dotenv = require("dotenv");

const mongoose = require("mongoose");
// console.log(app.get("env"));

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    userFIndModify: false,
  })
  .then((con) => {
    console.log(con.connection);
    console.log("DB is success");                                                                                                                                                                                           
  });

console.log(process.env);



// const NFt = mongoose.model("NFT", nftSchema);

// const testNft = new NFt({
//   name: "Crazy Monkey",
//   rating: "3.2",
//   price: "342",
// });

// testNft.save().then((e)=>{
//   console.log(e)
// }).catch((err)=>{
//   console.log(err)
// })

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`app on ${port}...`);
});
