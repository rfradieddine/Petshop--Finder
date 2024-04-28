const express = require("express");
const routes = express.Router();

const PetShopController = require("./controller/PetShop");


routes.get("/petshops", PetShopController.getAll);


routes.post("/petshops", PetShopController.melhorPetshop);

module.exports = routes;