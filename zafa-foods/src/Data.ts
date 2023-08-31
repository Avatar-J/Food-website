import React from "react";
import Derrick from "./Images/derrick.jpg";
import Afia from "./Images/afia.jpg";
import Hamza from "./Images/Hamza.jpg";
import Akosua from "./Images/Akosua.jpg";

import Madina from "./Images/branch1.jpg";
import Ridge from "./Images/branch2 (1).jpg";
import branch3 from "./Images/branch2 (2).jpg";
import branch4 from "./Images/branch2 (3).jpg";
import MD_exterior from "./Images/MD_exteriorView.jpg";
import RD_exterior from "./Images/RD_exteriorView.jpg";
import MD_employee from "./Images/MD_employee_of_the_year.jpg";
import RD_employee from "./Images/RD_employee_of_the_year.jpg";
import MD_customers from "./Images/customers.jpg";
import HappyPeople from "./Images/happy-waiter-serving-food-group-cheerful-friends-pub.jpg";
import Waiter from "./Images/young-african-american-waiter-man-hold-tray-with-burger-restaurant.jpg";

export const chefData = [
  {
    name: "Chef Derrick",
    img: Derrick,
    info: "Meet Chef Derrick Smith, a culinary virtuoso with a passion for French cuisine, creating dishes that leave a lasting impression with delightful fusion of classic techniques and contemporary twists",
  },
  {
    name: "Chef Amidu",
    img: Hamza,
    info: "Discover the culinary brilliance of Chef Amidu Alhassan, whose passion for farm-to-table cooking shines through in every dish, offering a delightful symphony of flavors that celebrate the freshest seasonal ingredients",
  },
  {
    name: "Chef Mary",
    img: Akosua,
    info: "Introducing Chef Akosua Agyapong, an award-winning culinary artist renowned for her exquisite pastry creations, infusing flavors from around the world into delightful desserts that captivate every diner's palate",
  },
  {
    name: "Chef Afia",
    img: Afia,
    info: "Introducing Chef Afia Danso, a rising star in the culinary world, known for her artistic presentations and a mastery of bold flavors that awaken the senses, offering a dining experience that is as visually stunning as it is delicious",
  },
];

export const branchDetails = [
  {
    name: "Madina Branch",
    paragraph:
      "Step into our exquisite restaurant branch and indulge in a culinary experience like no other, as our chef's special dishes offer mouthwatering and flavorful delights that are both savory and delectable",
    img: [Madina, HappyPeople, Waiter],
    position: false,
  },
  {
    name: "Ridge Branch",
    paragraph:
      "Experience the warm hospitality and vibrant atmosphere of our authentic restaurant branch, where you can savor the luscious and unforgettable flavors of our handcrafted gourmet dishes.",
    img: [Ridge, Waiter, HappyPeople],
    position: true,
  },
];
