const express = require("express");
const router = express.Router();
const userController = require("../../controllers/authenticationControllers/userController");

// create a product
router.post("/users", userController.createUser);

// get a user by email
router.get("/users/:email", userController.getUserByEmail);

// // get all products
// router.get("/products", productController.getAllProducts);

// // update a product by id
// router.put("/products/:id", productController.updateProduct);

// // delete a product by id
// router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
