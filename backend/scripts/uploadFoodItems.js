import mongoose from 'mongoose';
import dotenv from 'dotenv';
import FoodItemModel from '../models/FoodItem.js';

dotenv.config();

const mongo_url = process.env.MONGODB;

// Define your food list with options and img (image URL)
const food_list = [
  {name: "Greek salad", img: "assets/food_1.png", description: "Food provides essential nutrients for overall health and well-being", category: "Salad", options: { small: "12", medium: "14", large: "16" } },
  {name: "Veg salad", img: "assets/food_2.png", description: "Food provides essential nutrients for overall health and well-being", category: "Salad", options: { small: "18", medium: "20", large: "22" } },
  {name: "Clover Salad", img: "assets/food_3.png", description: "Food provides essential nutrients for overall health and well-being", category: "Salad", options: { small: "16", medium: "18", large: "20" } },
  {name: "Chicken Salad", img: "assets/food_4.png", description: "Food provides essential nutrients for overall health and well-being", category: "Salad", options: { small: "24", medium: "26", large: "28" } },
  {name: "Lasagna Rolls", img: "assets/food_5.png", description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", options: { small: "14", medium: "16", large: "18" } },
  {name: "Peri Peri Rolls", img: "assets/food_6.png", description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", options: { small: "12", medium: "14", large: "16" } },
  {name: "Chicken Rolls", img: "assets/food_7.png", description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", options: { small: "20", medium: "22", large: "24" } },
  {name: "Veg Rolls", img: "assets/food_8.png", description: "Food provides essential nutrients for overall health and well-being", category: "Rolls", options: { small: "15", medium: "17", large: "19" } },
  {name: "Ripple Ice Cream", img: "assets/food_9.png", description: "Food provides essential nutrients for overall health and well-being", category: "Desserts", options: { small: "14", medium: "16", large: "18" } },
  { name: "Fruit Ice Cream", img: "assets/food_10.png", description: "Food provides essential nutrients for overall health and well-being", category: "Desserts", options: { small: "22", medium: "24", large: "26" } },
  { name: "Jar Ice Cream", img: "assets/food_11.png", description: "Food provides essential nutrients for overall health and well-being", category: "Desserts", options: { small: "10", medium: "12", large: "14" } },
  { name: "Vanilla Ice Cream", img: "assets/food_12.png", description: "Food provides essential nutrients for overall health and well-being", category: "Desserts", options: { small: "12", medium: "14", large: "16" } },
  { name: "Chicken Sandwich", img: "assets/food_13.png", description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", options: { small: "12", medium: "14", large: "16" } },
  { name: "Vegan Sandwich", img: "assets/food_14.png", description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", options: { small: "18", medium: "20", large: "22" } },
  { name: "Grilled Sandwich", img: "assets/food_15.png", description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", options: { small: "16", medium: "18", large: "20" } },
  { name: "Bread Sandwich", img: "assets/food_16.png", description: "Food provides essential nutrients for overall health and well-being", category: "Sandwich", options: { small: "24", medium: "26", large: "28" } },
  { name: "Cup Cake", img: "assets/food_17.png", description: "Food provides essential nutrients for overall health and well-being", category: "Cake", options: { small: "14", medium: "16", large: "18" } },
  { name: "Vegan Cake", img: "assets/food_18.png", description: "Food provides essential nutrients for overall health and well-being", category: "Cake", options: { small: "12", medium: "14", large: "16" } },
  { name: "Butterscotch Cake", img: "assets/food_19.png", description: "Food provides essential nutrients for overall health and well-being", category: "Cake", options: { small: "20", medium: "22", large: "24" } },
  { name: "Sliced Cake", img: "assets/food_20.png", description: "Food provides essential nutrients for overall health and well-being", category: "Cake", options: { small: "15", medium: "17", large: "19" } },
  { name: "Garlic Mushroom", img: "assets/food_21.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", options: { small: "14", medium: "16", large: "18" } },
  { name: "Fried Cauliflower", img: "assets/food_22.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", options: { small: "22", medium: "24", large: "26" } },
  { name: "Mix Veg Pulao", img: "assets/food_23.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", options: { small: "10", medium: "12", large: "14" } },
  { name: "Rice Zucchini", img: "assets/food_24.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pure Veg", options: { small: "12", medium: "14", large: "16" } },
  { name: "Cheese Pasta", img: "assets/food_25.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", options: { small: "12", medium: "14", large: "16" } },
  { name: "Tomato Pasta", img: "assets/food_26.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", options: { small: "18", medium: "20", large: "22" } },
  { name: "Creamy Pasta", img: "assets/food_27.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", options: { small: "16", medium: "18", large: "20" } },
  { name: "Chicken Pasta", img: "assets/food_28.png", description: "Food provides essential nutrients for overall health and well-being", category: "Pasta", options: { small: "24", medium: "26", large: "28" } },
  { name: "Buttter Noodles", img: "assets/food_29.png", description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", options: { small: "14", medium: "16", large: "18" } },
  { name: "Veg Noodles", img: "assets/food_30.png", description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", options: { small: "12", medium: "14", large: "16" } },
  { name: "Somen Noodles", img: "assets/food_31.png", description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", options: { small: "20", medium: "22", large: "24" } },
  { name: "Lo Mein Noodles", img: "assets/food_32.png", description: "Food provides essential nutrients for overall health and well-being", category: "Noodles", options: { small: "15", medium: "17", large: "19" } }
];

mongoose.connect(mongo_url)
  .then(async () => {
    console.log('MongoDB Connected...');
    await FoodItemModel.insertMany(food_list);
  })
  .then(() => {
    console.log('Food items added successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.log('Error: ', err);
    mongoose.disconnect();
  });
