const mongoose = require("mongoose");
const byCrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name required"], unique: true },
  email: { type: String, required: [true, "Email required"] },
  phone: { type: Number, required: [true, "phone no. required"], unique: [true, "Already registered"] },
  password: { type: String, required: [true, "password required"] },
  confirmPassword: {
    type: String,
    required: [true, "Confirm password required"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message: "Password is same, please check it",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))     return next();


this.password = await byCrypt.hash(this.password, 2);
this.confirmPassword = undefined;

});


userSchema.methods.correctPassowrd = async function(candidatePassword, userPassword){
  return await byCrypt.compare(candidatePassword,userPassword);
}

const user = mongoose.model("User", userSchema);

module.exports = user;
