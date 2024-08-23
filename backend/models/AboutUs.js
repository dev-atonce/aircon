const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    aboutUsTH: { type: String },
    aboutUsEN: { type: String },
    aboutUsJP: { type: String },
    type: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    aboutUsTH: this.aboutUsTH,
    aboutUsEN: this.aboutUsEN,
    aboutUsJP: this.aboutUsJP,
    type: this.type,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("AboutUs", schema);
