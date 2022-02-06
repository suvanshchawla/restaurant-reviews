import express from "express"
import RestaurantsController from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsController.apiGetRestaurants)
router.route("/id/:id").get(RestaurantsController.apiGetRestaurantbyId)
router.route("/cuisines").get(RestaurantsController.apiGetRestaurantCuisine)

router
.route("/review")
.post(ReviewsCtrl.apiPostReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

export default router