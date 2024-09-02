const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    nameTH: { type: String },
    name2TH: { type: String },
    nameEN: { type: String },
    name2EN: { type: String },
    nameJP: { type: String },
    name2JP: { type: String },
    addressTH: { type: String },
    address2TH: { type: String },
    addressEN: { type: String },
    address2EN: { type: String },
    addressJP: { type: String },
    address2JP: { type: String },
    gMap: { type: String },
    gMap2: { type: String },
    telephone: { type: String },
    telephone2: { type: String },
    fax: { type: String },
    fax2: { type: String },
    email: { type: String },
    email2: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    line: { type: String },
    line2: { type: String },
    whatsapp: { type: String },
  },
  { timestamps: true }
);

// Custom JSON Response
schema.methods.toJSON = function () {
  return {
    id: this._id,
    nameTH: this.nameTH,
    name2TH: this.name2TH,
    nameEN: this.nameEN,
    name2EN: this.name2EN,
    nameJP: this.nameJP,
    name2JP: this.name2JP,
    addressTH: this.addressTH,
    address2TH: this.address2TH,
    addressEN: this.addressEN,
    address2EN: this.address2EN,
    addressJP: this.addressJP,
    address2JP: this.address2JP,
    gMap: this.gMap,
    gMap2: this.gMap2,
    telephone: this.telephone,
    telephone2: this.telephone2,
    fax: this.fax,
    fax2: this.fax2,
    email: this.email,
    email2: this.email2,
    facebook: this.facebook,
    instagram: this.instagram,
    line: this.line,
    line2: this.line2,
    whatsapp: this.whatsapp,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model("Contact_lists", schema);
