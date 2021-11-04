const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true , trim: true},
    password: { type: String, required: true, trim: true, minLength:[8, 'Password is too short!'], maxLength:100, },
    role: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre('save', function(next) {
  if(!this.isModified('password')) {
    return next();
  }

  const hash = bcryptjs.hashSync(this.password, 8);
  this.password = hash;
  return next();
})

userSchema.methods.checkPassword = function(password) {
  const match = bcryptjs.compareSync(password, this.password);

  return match;
}

const User = new mongoose.model("user", userSchema);
module.exports = User;
