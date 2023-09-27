import React from "react";
import friedRice from "../../Images/Fried-Rice.jpg";
import jollof from "../../Images/Jollof.jpg";
import ampesi from "../../Images/ampesi.jpeg";
import Fufu_and_light_soup from "../../Images/Fufu.jpg";
import fufu_and_groundnut from "../../Images/fufu_and_groundnut.jpeg";
import yam_and_palava from "../../Images/palava.jpg";
import TZ from "../../Images/tuozaafi.jpg";
import waakye from "../../Images/waakye.jpeg";
import Banku_and_okro from "../../Images/banku_and_okro.jpg";
import Banku_and_tilapia from "../../Images/Banku_and_tilipia.jpeg";
import Noodles from "../../Images/noodles.jpg";
import friedrice_and_chicken from "../../Images/friedrice_and_chicken.jpeg";
import fufu_and_palm from "../../Images/fufu_and_palm.jpg";
import riceballs_and_groundnut from "../../Images/rice_balls_and_groundnut.jpg";
import Omelette from "../../Images/JustOmelette.jpg";
import VeggiesOmlette from "../../Images/Veggie Fiesta Omelette.jpg";
import BananaSmoothie from "../../Images/Banana Bonanza.jpg";
import Pancakes from "../../Images/Fluffy Cloud Pancakes.jpg";
import StrawberrySmoothie from "../../Images/Mixed Berry Smoothie.jpg";
import ChocolateBanana from "../../Images/ChocolateBananaSmoothie.jpg";
import StrawberryDessert from "../../Images/strawberry-dream-dessert.jpg";
import LemonJuice from "../../Images/LemonJuice.jpeg";
import oreoDessert from "../../Images/Oreo dessert.jpg";
import caramelIceCream from "../../Images/caramelToppedIceCream.jpg";
import orangeJuice from "../../Images/orangeJuice.jpg";
import orangeSlushPunch from "../../Images/orangeSlushPunch.jpg";
import pineappleJuice from "../../Images/pineapplejuice.jpeg";
import rasberryMacorons from "../../Images/rasberry macorons.jpg";
import strawBerryDessert from "../../Images/strawberry-dream-dessert.jpg";
import strawberryJuice from "../../Images/strawberry.jpg";

interface Dish {
  name: string;
  price: number;
  ingredients: string;
  img: string;
  item: number;
}

interface MenuCategory {
  Category: string;
  menu: Dish[];
}

export const menulist: MenuCategory[] = [
  {
    Category: "Full meals",

    menu: [
      {
        name: "Banku and okro soup",
        price: 30.0,
        ingredients: "crab, smoked fish, chicken, cow meat",
        img: Banku_and_okro,
        item: 1,
      },
      {
        name: "Banku and tilapia",
        price: 30.0,
        ingredients: "shito, green pepper ",
        img: Banku_and_tilapia,
        item: 1,
      },
      {
        name: "Assorted Noodles",
        price: 20.0,
        ingredients: "carrot, spring onion, cheese",
        img: Noodles,
        item: 1,
      },
      {
        name: "Fried rice with assorted meat",
        price: 30.0,
        ingredients: "sausage, chicken, cow meat",
        img: friedRice,
        item: 1,
      },
      {
        name: "Fried rice and chicken",
        price: 20.0,
        ingredients: "full tigh chicken",
        img: friedrice_and_chicken,
        item: 1,
      },
      {
        name: "Fufu and light soup",
        price: 30.0,
        ingredients: "smoked fish, chicken",
        img: Fufu_and_light_soup,
        item: 1,
      },
      {
        name: "Fufu and palm nut soup",
        price: 40.0,
        ingredients: "salmon, goat meat, cow meat",
        img: fufu_and_palm,
        item: 1,
      },
      {
        name: "Jollof rice",
        price: 30.0,
        ingredients: "goat meat, vetable salad",
        img: jollof,
        item: 1,
      },
      {
        name: "Waakye",
        price: 40.0,
        ingredients: "cooked egg, wele, fried cow meat, fried fish",
        img: waakye,
        item: 1,
      },
      {
        name: "Rice balls with groudnut soup",
        price: 30.0,
        ingredients: "chicken, smoked fish",
        img: riceballs_and_groundnut,
        item: 1,
      },
      {
        name: "Ampesi",
        price: 30.0,
        ingredients: "2 boiled eggs, fried fish",
        img: ampesi,
        item: 1,
      },

      {
        name: "yam with palava sauce",
        price: 40.0,
        ingredients: "2 boiled eggs, fried fish, fried chicken",
        img: yam_and_palava,
        item: 1,
      },
      {
        name: "Tuo-zaafi",
        price: 30.0,
        ingredients: "cow intestine, cow meat, fried fish",
        img: TZ,
        item: 1,
      },
      {
        name: "Fufu and groundnut soup",
        price: 30.0,
        ingredients: "steamed chicken ,cow meat, fried fish",
        img: fufu_and_groundnut,
        item: 1,
      },
    ],
  },

  {
    Category: "Breakfast",

    menu: [
      {
        name: "Omelette",
        price: 10.0,
        ingredients: "eggs, salt, cinnamon",
        img: Omelette,
        item: 1,
      },
      {
        name: "Veggie Fiesta Omelette",
        price: 15.0,
        ingredients: "eggs, salt, cinnamon, carrot, onion, tomato",
        img: VeggiesOmlette,
        item: 1,
      },
      {
        name: "Fluffy Cloud Pancakes",
        price: 20.0,
        ingredients: "eggs, milk",
        img: Pancakes,
        item: 1,
      },
    ],
  },

  {
    Category: "Smoothies",

    menu: [
      {
        name: "Banana Bonanza",
        price: 10.0,
        ingredients: "banana, milk, vanilla ice cream",
        img: BananaSmoothie,
        item: 1,
      },
      {
        name: "Mixed Berry Smoothie",
        price: 15.0,
        ingredients: "strawberry, milk",
        img: StrawberrySmoothie,
        item: 1,
      },
      {
        name: "Chocolate Banana Smoothie",
        price: 20.0,
        ingredients: "banana,chocolate, milk",
        img: ChocolateBanana,
        item: 1,
      },
    ],
  },

  {
    Category: "Drinks",

    menu: [
      {
        name: "strawberry Juice",
        price: 15.0,
        ingredients: "strawberry",
        img: strawberryJuice,
        item: 1,
      },
      {
        name: "pineapple juice",
        price: 15.0,
        ingredients: "pineapple",
        img: pineappleJuice,
        item: 1,
      },
      {
        name: "orange Slush Punch",
        price: 15.0,
        ingredients: "orange",
        img: orangeSlushPunch,
        item: 1,
      },
      {
        name: "Orange Juice",
        price: 15.0,
        ingredients: "orange",
        img: orangeJuice,
        item: 1,
      },
      {
        name: "Lemon Juice",
        price: 15.0,
        ingredients: "lemon",
        img: LemonJuice,
        item: 1,
      },
    ],
  },

  {
    Category: "Dessert",

    menu: [
      {
        name: "strawberry dream dessert",
        price: 15.0,
        ingredients: "strawberry",
        img: strawBerryDessert,
        item: 1,
      },
      {
        name: "rasberry macorons",
        price: 15.0,
        ingredients: "blue berry",
        img: rasberryMacorons,
        item: 1,
      },
      {
        name: "Caramel Topped IceCream",
        price: 15.0,
        ingredients: "orange",
        img: caramelIceCream,
        item: 1,
      },
      {
        name: "Oreo dessert",
        price: 15.0,
        ingredients: "orange",
        img: oreoDessert,
        item: 1,
      },
    ],
  },
];
