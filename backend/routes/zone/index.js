const express = require("express");

const AddressController = require("../../controllers/Address");

const Address = express.Router();

Address.get("/", AddressController.getAddresss);

Address.get("/:AddressId", AddressController.getAddressById);

Address.put("/edit-Address/:AddressId", AddressController.putEditAddress);

module.exports = Address;
