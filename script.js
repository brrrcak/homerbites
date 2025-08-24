// Enhanced Restaurant Data with High-Quality Images
let restaurants = [
    {
        id: 1,
        name: "Cosmic Kitchen",
        description: "A cozy Homer favorite serving hearty breakfasts, smash burgers, and Mexican-inspired plates with plenty of vegetarian options—all in a laid-back, rustic setting.",
        address: "510 E Pioneer Ave, Homer, AK 99603",
        phone: "(907) 235-1301",
        website: "https://www.cosmickitchenhomer.com/",
        hours: "Tuesday - Saturday: 11:00AM - 7:00PM",
        imageURL: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/481341661_122129057186592631_7628068687369387549_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5icgLVwy9UMQ7kNvwFVUR7n&_nc_oc=AdlpuMF-gtAUBXSK4ZhHcZ2df-S--7j_ZJoMQhF64TU6DPSH1H2Sme1eAmANG6YxUY4&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=OC6MpAtgGyG_Ln-OU_O6zg&oh=00_AfUk8g1iC0r0tpqXDGn_BTQY4thLnN6tGxhCyjYM5Yv_EA&oe=68B08DA0",
        lat: 59.647521,
        lng: -151.533005,
        menu: "https://order.toasttab.com/online/cosmickitchenhomer",
        tags: ["restaurant", "burgers", "mexican", "breakfast", "vegetarian"],
        rating: 4,
        priceRange: "$-$$"
    },
    {
        id: 2,
        name: "Fat Olive's Restaurant",
        cuisine: "italian;pizza;american",
        description: "Home",
        address: "",
        phone: "+1 907-235-8488",
        website: "https://www.fatoliveshomer.com/",
        hours: "Mo-Su 11:00-20:30",
        imageURL: "https://static.parastorage.com/client/pfavico.ico",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "italian", "pizza", "american"],
        rating: null,
        priceRange: ""
    },
    {
        id: 3,
        name: "Two Sisters Bakery & Cafe",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "+1 907-2352280",
        website: "https://twosistersbakery.net",
        hours: "Mo-Fr 07:00-18:00; Sa 07:00-14:00; Su 09:00-14:00",
        imageURL: "https://www.twosistersbakery.net/uploads/b/6555a1b0-6873-11ea-8fc5-3bfe1bbec7b5/IMG_1239.jpeg",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "bakery", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 4,
        name: "Duncan House Diner",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "http://www.duncanhousediner.com/",
        hours: "Mo-Su 07:00-14:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "diner"],
        rating: null,
        priceRange: ""
    },
    {
        id: 5,
        name: "AJ's Steakhouse & Tavern",
        cuisine: "nan",
        description: "Pub",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["pub", "steakhouse", "american"],
        rating: null,
        priceRange: ""
    },
    {
        id: 6,
        name: "Don Jose's Mexican Restaurant",
        cuisine: "mexican;tacos;burrito",
        description: "Located in the majestic great land of Alaska. Don Jose’s has brought the warmth of Mexico to Alaska, through the culinary traditions of Mexico.",
        address: "",
        phone: "+1-907-235-7963",
        website: "https://www.alaskadonjoses.com/",
        hours: "HOURS",
        imageURL: "http://static1.squarespace.com/static/61ce6c924fa60d0025c004a5/t/63866264bcba5f52634027c7/1669751396988/don+jose%27s+logo+bold+%281%29.png?format=1500w",
        lat: null,
        lng: null,
        menu: "https://www.alaskadonjoses.com/menus",
        tags: ["restaurant", "mexican", "tacos", "burrito"],
        rating: null,
        priceRange: ""
    },
    {
        id: 7,
        name: "McDonald's",
        cuisine: "burger",
        description: "Looking for Fast food near you? Visit McDonald's in Homer, AK at 3656 Ben Walters Ln, for breakfast, burgers, fries, and more, or order online!",
        address: "",
        phone: "nan",
        website: "https://www.mcdonalds.com/us/en-us/location/ak/homer/3656-ben-walters-ln/7548.html",
        hours: "Hours",
        imageURL: "https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/McD_GoldenArches_200x200.jpg",
        lat: null,
        lng: null,
        menu: "https://www.mcdonalds.com/us/en-us/full-menu.html",
        tags: ["fast_food", "burgers"],
        rating: null,
        priceRange: ""
    },
    {
        id: 8,
        name: "The Chart Room",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "seafood"],
        rating: null,
        priceRange: ""
    },
    {
        id: 9,
        name: "The Otter Room Bar & Grill",
        cuisine: "nan",
        description: "View the menu and dining options at the Otter Room Bar & Grill located in the Best Western Bidaraka Inn hotel in Homer, Alaska.",
        address: "",
        phone: "nan",
        website: "http://www.bidarkainn.com/restaurants",
        hours: "Hours: 12pm – 10pm",
        imageURL: "http://www.bidarkainn.com/Content/images/favicon.ico",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar", "grill", "american"],
        rating: null,
        priceRange: ""
    },
    {
        id: 10,
        name: "Wild Honey Bistro",
        cuisine: "crepe",
        description: "Cuisine: crepe",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Mo-Sa 08:00-17:00; Su 09:00-15:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "crepe", "bistro", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 11,
        name: "Homestead Restuarant",
        cuisine: "international",
        description: "Cuisine: international",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "international", "american", "seafood"],
        rating: null,
        priceRange: ""
    },
    {
        id: 12,
        name: "Pho & Thai Restaurant",
        cuisine: "thai",
        description: "Cuisine: thai",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "thai", "pho", "asian"],
        rating: null,
        priceRange: ""
    },
    {
        id: 13,
        name: "Harbor Grill",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "grill", "seafood", "burgers"],
        rating: null,
        priceRange: ""
    },
    {
        id: 14,
        name: "Happy Face",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant"],
        rating: null,
        priceRange: ""
    },
    {
        id: 15,
        name: "Kharacters",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar"],
        rating: null,
        priceRange: ""
    },
    {
        id: 16,
        name: "Blackwater Bend Espresso",
        cuisine: "nan",
        description: "Cafe",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 17,
        name: "Finn's Pizza",
        cuisine: "pizza",
        description: "Finn’s Pizza in Homer, Alaska. Pizza that's so good, you'll wish you could ship it home (and you can certainly try).",
        address: "",
        phone: "+1 907 2352878",
        website: "https://finnspizza.co/",
        hours: "12:00-21:00",
        imageURL: "https://www.finnspizza.co/assets/finns-pizza2.jpg",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "pizza"],
        rating: null,
        priceRange: ""
    },
    {
        id: 18,
        name: "Boardwalk Fish & Chips",
        cuisine: "regional",
        description: "Cuisine: regional",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "seafood", "fish_and_chips"],
        rating: null,
        priceRange: ""
    },
    {
        id: 19,
        name: "Glacier Drive-in",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "burgers", "fast_food"],
        rating: null,
        priceRange: ""
    },
    {
        id: 20,
        name: "Cece's Cafe",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 21,
        name: "The Bagel Shop",
        cuisine: "sandwich",
        description: "Cuisine: sandwich",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Tu-Fr 07:00-14:00, Sa-Su 07:00-16:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "sandwich", "bagels", "breakfast"],
        rating: null,
        priceRange: ""
    },
    {
        id: 22,
        name: "Down East Saloon",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar"],
        rating: null,
        priceRange: ""
    },
    {
        id: 23,
        name: "La Baleine Cafe",
        cuisine: "regional",
        description: "Cuisine: regional",
        address: "",
        phone: "+1 907 2996672",
        website: "nan",
        hours: "Tu-Su 05:00-16:00, Mo off",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "cafe", "seafood", "breakfast"],
        rating: null,
        priceRange: ""
    },
    {
        id: 24,
        name: "Little Mermaid Restaurant",
        cuisine: "regional",
        description: "This domain may be for sale!",
        address: "",
        phone: "nan",
        website: "https://littlemermaidhomer.com/",
        hours: "Mo-Su 11:00-21:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "https://littlemermaidhomer.com/menu",
        tags: ["restaurant", "seafood", "american"],
        rating: null,
        priceRange: ""
    },
    {
        id: 25,
        name: "Beluga Bar & Grill",
        cuisine: "burger",
        description: "Cuisine: burger",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Tu-Sa 15:00-22:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "burgers", "bar", "grill"],
        rating: null,
        priceRange: ""
    },
    {
        id: 26,
        name: "Glacier Room",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant"],
        rating: null,
        priceRange: ""
    },
    {
        id: 27,
        name: "Barnacle Espresso Co.",
        cuisine: "nan",
        description: "Cafe",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 28,
        name: "Coop's Coffee",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 29,
        name: "Dandelion Cafe",
        cuisine: "mexican",
        description: "Cuisine: mexican",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["fast_food", "mexican", "cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 30,
        name: "Kannery Grill",
        cuisine: "nan",
        description: "온라인 스포츠베팅을 즐기는 이용자들에게 있어 안전하고 신뢰할 수 있는 베팅 환경은 무엇보다 중요합니다. 먹튀검증 사이트는 이용자들이 안심하고 베팅을 즐길 수 있도록 먹튀 피해를 예방하고 이용자를 보호하는 역할을 담당하고 있습니다. 먹튀검증 사이트를 통해 검증된 안전한 토토사이트를 선택함으로써, 이용자들은 스포츠베팅의 재미와 즐거움을 마음껏 누릴 수 있습니다. rationalconspiracy.com",
        address: "",
        phone: "+1 (907) 435-0949",
        website: "https://kannerygrill.com/",
        hours: "Su-Th 16:00-22:00, Fr-Sa 16:00-23:00",
        imageURL: "https://kannerygrill.com/wp-content/uploads/2024/09/cropped-kannerygrill-ICON-32x32.png",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "grill", "seafood"],
        rating: null,
        priceRange: ""
    },
    {
        id: 31,
        name: "Vida's Thai Food",
        cuisine: "thai",
        description: "Cuisine: thai",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "thai", "asian"],
        rating: null,
        priceRange: ""
    },
    {
        id: 32,
        name: "Flying Whale",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 33,
        name: "Icy Otter",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee", "ice_cream"],
        rating: null,
        priceRange: ""
    },
    {
        id: 34,
        name: "Salmon Sisters Mug Up Coffee",
        cuisine: "nan",
        description: "Cafe",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 35,
        name: "Alice's Champagne Palace Bar & Grill",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["pub", "american", "grill"],
        rating: null,
        priceRange: ""
    },
    {
        id: 36,
        name: "Wasabi's Restaurant",
        cuisine: "sushi",
        description: "Cuisine: sushi",
        address: "",
        phone: "nan",
        website: "https://wasabisrestaurant.com/",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "sushi", "asian"],
        rating: null,
        priceRange: ""
    },
    {
        id: 37,
        name: "American Legion Post 16",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar"],
        rating: null,
        priceRange: ""
    },
    {
        id: 38,
        name: "Young's Oriental Resturant",
        cuisine: "chinese",
        description: "Cuisine: chinese",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "chinese", "asian"],
        rating: null,
        priceRange: ""
    },
    {
        id: 39,
        name: "Captain's Coffee Roasting Company",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 40,
        name: "Twisted Goat",
        cuisine: "regional",
        description: "Cuisine: regional",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Th-Tu 12:00-22:00, We off",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "regional", "pizza"],
        rating: null,
        priceRange: ""
    },
    {
        id: 41,
        name: "Salty Dawg",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar"],
        rating: null,
        priceRange: ""
    },
    {
        id: 42,
        name: "Coal Bay Coffee & Tea",
        cuisine: "nan",
        description: "Cafe",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Mo-Su 05:00-20:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 43,
        name: "Alibi",
        cuisine: "nan",
        description: "Pub",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["pub"],
        rating: null,
        priceRange: ""
    },
    {
        id: 44,
        name: "Boombox Cafe",
        cuisine: "sandwich",
        description: "The Boombox AK, Homer. 683 likes. Permanently Closed was a great time though",
        address: "",
        phone: "nan",
        website: "http://www.facebook.com/theboomboxak/",
        hours: "nan",
        imageURL: "https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-1/254021802_110176334805084_165117264938448655_n.jpg?stp=dst-jpg_tt6&cstp=mx750x750&ctp=s720x720&_nc_cat=110&ccb=1-7&_nc_sid=3ab345&_nc_ohc=3JYosN4_0rYQ7kNvwH8_1uq&_nc_oc=AdkEsgSqsC2JbOdF3DZYQj6GQElvPOREb6gMF5tx-fCQM0lczYIEc05QpMyK84B4cqs&_nc_zt=24&_nc_ht=scontent-sea5-1.xx&_nc_gid=YHOaWfV271vQ2Q-R5BL6dQ&oh=00_AfU6Bs-5mquwlRFVPhkkS-PMGroHzY3tQ67FKYLmNYKqhw&oe=68B094DC",
        lat: null,
        lng: null,
        menu: "https://www.facebook.com/theboomboxak/menu",
        tags: ["restaurant", "sandwich", "cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 45,
        name: "Fireweed Mountain ZenDen Cafe",
        cuisine: "nan",
        description: "Cafe",
        address: "",
        phone: "+19072995063",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 46,
        name: "Sunhouse Cafe",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 47,
        name: "Flagship Creamery",
        cuisine: "ice_cream",
        description: "Cuisine: ice_cream",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "ice_cream"],
        rating: null,
        priceRange: ""
    },
    {
        id: 48,
        name: "Wild Edge Espresso",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Mo-Su 06:00-20:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 49,
        name: "Captain Pattie's",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "seafood"],
        rating: null,
        priceRange: ""
    },
    {
        id: 50,
        name: "Divinitea",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "cafe", "tea"],
        rating: null,
        priceRange: ""
    },
    {
        id: 51,
        name: "Starvin Marvin's Pizza",
        cuisine: "pizza",
        description: "Cuisine: pizza",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["fast_food", "pizza"],
        rating: null,
        priceRange: ""
    },
    {
        id: 52,
        name: "Homer Brewing Company",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar", "brewery"],
        rating: null,
        priceRange: ""
    },
    {
        id: 53,
        name: "Star's Coffee",
        cuisine: "coffee_shop",
        description: "Cuisine: coffee_shop",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["cafe", "coffee"],
        rating: null,
        priceRange: ""
    },
    {
        id: 54,
        name: "Mike's Alaskan Eatery",
        cuisine: "sandwich",
        description: "Cuisine: sandwich",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "sandwich", "american"],
        rating: null,
        priceRange: ""
    },
    {
        id: 55,
        name: "Bubbles Sodas & Ice Cream",
        cuisine: "ice_cream",
        description: "Cuisine: ice_cream",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["fast_food", "ice_cream"],
        rating: null,
        priceRange: ""
    },
    {
        id: 56,
        name: "River Cafe",
        cuisine: "nan",
        description: "Restaurant",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "cafe"],
        rating: null,
        priceRange: ""
    },
    {
        id: 57,
        name: "Swell Taco",
        cuisine: "mexican",
        description: "Cuisine: mexican",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "mexican", "tacos"],
        rating: null,
        priceRange: ""
    },
    {
        id: 58,
        name: "Fresh Catch Cafe",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "seafood"],
        rating: null,
        priceRange: ""
    },
    {
        id: 59,
        name: "Lighthouse Grill",
        cuisine: "american",
        description: "Cuisine: american",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "nan",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["restaurant", "american", "grill"],
        rating: null,
        priceRange: ""
    },
    {
        id: 60,
        name: "Grace Ridge Brewing",
        cuisine: "nan",
        description: "Bar",
        address: "",
        phone: "nan",
        website: "nan",
        hours: "Mo-Su 12:00-20:00",
        imageURL: "nan",
        lat: null,
        lng: null,
        menu: "nan",
        tags: ["bar", "brewery"],
        rating: null,
        priceRange: ""
    }
];

// Global variables
let map;
let currentFilter = 'all'; // Start with 'all' selected by default
let mapMarkers = [];

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateFilterButtons();
    setupFilterButtons();
    setupRandomButton(); // Setup for the new random button
    setupViewToggle();
    renderCategories(); // Render the default 'all' view
    initializeMap();
    loadStoredData();
}

/**
 * MODIFIED: Dynamically creates filter buttons and adds a static "View All" button.
 */
function populateFilterButtons() {
    const filterContainer = document.getElementById('filterButtons');
    filterContainer.innerHTML = ''; // Clear any existing buttons
    
    // 1. Create and prepend the "View All" button
    const allButton = document.createElement('button');
    allButton.className = 'cuisine-filter active'; // Active by default
    allButton.dataset.tag = 'all';
    allButton.innerHTML = `
        <span class="filter-text">View All</span>
        <div class="filter-glow"></div>
    `;
    filterContainer.appendChild(allButton);

    // 2. Create buttons for each unique tag
    const tagsToIgnore = ['restaurant', 'cafe', 'bar', 'pub', 'fast_food', 'diner', 'bistro', 'grill', 'brewery', 'regional', 'international'];
    const allTags = new Set(restaurants.flatMap(r => r.tags));
    const filteredTags = [...allTags]
        .filter(tag => !tagsToIgnore.includes(tag))
        .sort();

    filteredTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'cuisine-filter';
        button.dataset.tag = tag;
        const tagName = tag.charAt(0).toUpperCase() + tag.slice(1).replace(/_/g, ' ');
        button.innerHTML = `
            <span class="filter-text">${tagName}</span>
            <div class="filter-glow"></div>
        `;
        filterContainer.appendChild(button);
    });
}

/**
 * Sets up event listeners for the filter buttons.
 */
function setupFilterButtons() {
    const filterContainer = document.getElementById('filterButtons');

    filterContainer.addEventListener('click', function(event) {
        const button = event.target.closest('.cuisine-filter');
        if (!button) return;

        filterContainer.querySelectorAll('.cuisine-filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.tag;
        
        renderCategories();
        updateMapMarkers();
    });
}

/**
 * NEW: Sets up the event listener for the random restaurant button.
 */
function setupRandomButton() {
    const randomBtn = document.getElementById('randomRestaurantBtn');
    if (randomBtn) {
        randomBtn.addEventListener('click', function() {
            if (restaurants.length > 0) {
                const randomIndex = Math.floor(Math.random() * restaurants.length);
                const randomRestaurant = restaurants[randomIndex];
                openRestaurantModal(randomRestaurant.id);
            }
        });
    }
}

// Setup view toggle
function setupViewToggle() {
    const gridBtn = document.getElementById('gridViewBtn');
    const mapBtn = document.getElementById('mapViewBtn');
    const gridContent = document.getElementById('gridContent');
    const mapContent = document.getElementById('mapContent');
    
    gridBtn.addEventListener('click', function() {
        gridBtn.classList.add('bg-gradient-to-r', 'from-brand-500', 'to-brand-600', 'text-white', 'shadow-lg');
        gridBtn.classList.remove('bg-white/10', 'text-white');
        mapBtn.classList.remove('bg-gradient-to-r', 'from-brand-500', 'to-brand-600', 'shadow-lg');
        mapBtn.classList.add('bg-white/10', 'text-white');
        
        gridContent.classList.remove('hidden');
        mapContent.classList.add('hidden');
    });
    
    mapBtn.addEventListener('click', function() {
        mapBtn.classList.add('bg-gradient-to-r', 'from-brand-500', 'to-brand-600', 'text-white', 'shadow-lg');
        mapBtn.classList.remove('bg-white/10', 'text-white');
        gridBtn.classList.remove('bg-gradient-to-r', 'from-brand-500', 'to-brand-600', 'shadow-lg');
        gridBtn.classList.add('bg-white/10', 'text-white');
        
        mapContent.classList.remove('hidden');
        gridContent.classList.add('hidden');
        
        setTimeout(() => {
            if (map) {
                map.invalidateSize();
                map.setView([59.6426, -151.5377], 12);
                updateMapMarkers();
            }
        }, 100);
    });
}

/**
 * NEW: Helper function to group restaurants by their tags.
 */
function groupByTag(restaurantList) {
    const grouped = {};
    const tagsToIgnore = ['restaurant', 'cafe', 'bar', 'pub', 'fast_food', 'diner', 'bistro', 'grill', 'brewery', 'regional', 'international'];

    restaurantList.forEach(restaurant => {
        restaurant.tags.forEach(tag => {
            if (!tagsToIgnore.includes(tag)) {
                if (!grouped[tag]) {
                    grouped[tag] = [];
                }
                grouped[tag].push(restaurant);
            }
        });
    });
    return grouped;
}

/**
 * MODIFIED: Renders restaurants based on the current filter ('all' or a specific tag).
 */
function renderCategories() {
    const container = document.getElementById('categoryContainer');
    container.innerHTML = '';

    if (currentFilter === 'all') {
        const groupedRestaurants = groupByTag(restaurants);
        // Sort the tags alphabetically for consistent order
        const sortedTags = Object.keys(groupedRestaurants).sort();
        sortedTags.forEach(tag => {
            const restaurantList = groupedRestaurants[tag];
            const categorySection = createCategorySection(tag, restaurantList);
            container.appendChild(categorySection);
        });
    } else {
        const filteredRestaurants = restaurants.filter(r => r.tags.includes(currentFilter));
        if (filteredRestaurants.length > 0) {
            const categorySection = createCategorySection(currentFilter, filteredRestaurants);
            container.appendChild(categorySection);
        } else {
            container.innerHTML = `<div class="text-center py-16 animate-fade-in"><h2 class="text-3xl font-bold text-white mb-4">No Results Found</h2><p class="text-xl text-gray-300">We couldn't find any restaurants with the tag "#${currentFilter}".</p></div>`;
        }
    }
}

// Create a section for a category of restaurants
function createCategorySection(tag, restaurantList) {
    const section = document.createElement('div');
    section.className = 'animate-slide-up';
    const categoryName = formatCategoryName(tag);
    
    section.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-white mb-4">${categoryName}</h2>
            <div class="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${restaurantList.map(restaurant => createRestaurantCard(restaurant)).join('')}
        </div>
    `;
    return section;
}

// Create a single restaurant card
function createRestaurantCard(restaurant) {
    return `
        <div class="restaurant-card group" onclick="openRestaurantModal(${restaurant.id})">
            <div class="restaurant-image">
                <img src="${restaurant.imageURL}" alt="${restaurant.name}" loading="lazy" onerror="this.src='https://placehold.co/400x200/1e293b/ffffff?text=Image+Not+Found'; this.onerror=null;">
                <div class="restaurant-overlay"></div>
            </div>
            <div class="bg-white p-6 rounded-b-3xl">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-xl font-bold text-gray-900">${restaurant.name}</h3>
                    <div class="flex items-center space-x-1 flex-shrink-0 ml-4">
                        <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <span class="text-sm font-medium text-gray-700">${restaurant.rating || 'N/A'}</span>
                    </div>
                </div>
                <p class="text-gray-600 mb-4 leading-relaxed">${restaurant.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${restaurant.tags.map(tag => `<span class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

// Format category/tag name for display
function formatCategoryName(tag) {
    return tag.charAt(0).toUpperCase() + tag.slice(1).replace(/_/g, ' ');
}

// Restaurant modal functions
function openRestaurantModal(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    const modal = document.getElementById('restaurantModal');
    const modalContent = document.getElementById('modalContent');
    
    const tagsDisplay = restaurant.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)).join(' • ');

    modalContent.innerHTML = `
        <div class="relative">
            <img src="${restaurant.imageURL}" alt="${restaurant.name}" class="w-full h-64 object-cover" onerror="this.src='https://placehold.co/600x250/1e293b/ffffff?text=Image+Not+Found'; this.onerror=null;">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-4 left-4 right-16">
                <h1 class="text-3xl font-bold text-white mb-2">${restaurant.name}</h1>
                <div class="flex items-center space-x-4 text-white">
                    <div class="flex items-center space-x-1">
                        <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                        <span class="font-medium">${restaurant.rating || 'N/A'}</span>
                    </div>
                    <span class="font-medium">${restaurant.priceRange || ''}</span>
                </div>
                 <p class="text-white text-sm mt-2">${tagsDisplay}</p>
            </div>
        </div>
        <div class="p-8">
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">${restaurant.description}</p>
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Address</h3><p class="text-gray-600">${restaurant.address}</p></div>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Phone</h3><a href="tel:${restaurant.phone}" class="text-brand-600 hover:text-brand-700">${restaurant.phone}</a></div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                        <div><h3 class="font-semibold text-gray-900">Hours</h3><p class="text-gray-600">${restaurant.hours}</p></div>
                    </div>
                    ${(restaurant.website && restaurant.website !== 'nan') ? `<div class="flex items-start space-x-3"><div class="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5 0 9-4 9-9s-4-9-9-9"></path></svg></div><div><h3 class="font-semibold text-gray-900">Website</h3><a href="${restaurant.website}" target="_blank" class="text-brand-600 hover:text-brand-700">Visit Website</a></div></div>` : ''}
                </div>
            </div>
            ${(restaurant.menu && restaurant.menu !== 'nan') ? `<div class="bg-gray-50 rounded-2xl p-6 mb-6"><h3 class="font-bold text-gray-900 mb-3 flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>Menu</h3><a href="${restaurant.menu}" target="_blank" class="text-brand-600 hover:text-brand-700">View Menu</a></div>` : ''}
            <div class="flex flex-wrap gap-2">${restaurant.tags.map(tag => `<span class="px-4 py-2 bg-gradient-to-r from-brand-100 to-brand-50 text-brand-700 font-medium rounded-xl">${tag}</span>`).join('')}</div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeRestaurantModal() {
    const modal = document.getElementById('restaurantModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Map functions
function initializeMap() {
    map = L.map('map', { zoomControl: false }).setView([59.6426, -151.5377], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors' }).addTo(map);
    L.control.zoom({ position: 'topright' }).addTo(map);
    updateMapMarkers();
}

/**
 * MODIFIED: Updates map markers based on the selected tag ('all' or specific).
 */
function updateMapMarkers() {
    if (!map) return;
    
    mapMarkers.forEach(marker => map.removeLayer(marker));
    mapMarkers = [];
    
    const restaurantsToShow = currentFilter === 'all'
        ? restaurants
        : restaurants.filter(r => r.tags.includes(currentFilter));

    restaurantsToShow.forEach(restaurant => {
        if (restaurant.lat && restaurant.lng) {
            const marker = L.marker([restaurant.lat, restaurant.lng])
                .bindPopup(`
                    <div class="p-4 min-w-64">
                        <div class="flex items-center space-x-3 mb-3">
                            <img src="${restaurant.imageURL}" alt="${restaurant.name}" class="w-16 h-16 rounded-lg object-cover" onerror="this.src='https://placehold.co/64x64/1e293b/ffffff?text=N/A'; this.onerror=null;">
                            <div>
                                <h3 class="font-bold text-gray-900">${restaurant.name}</h3>
                                <div class="flex items-center space-x-1">
                                    <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                                    <span class="text-sm text-gray-600">${restaurant.rating || 'N/A'}</span>
                                    <span class="text-sm text-gray-400">•</span>
                                    <span class="text-sm text-gray-600">${restaurant.priceRange || ''}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-sm text-gray-600 mb-3">${restaurant.description.substring(0, 100)}...</p>
                        <button onclick="openRestaurantModal(${restaurant.id})" class="w-full px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-200">
                            View Details
                        </button>
                    </div>
                `);
            
            marker.addTo(map);
            mapMarkers.push(marker);
        }
    });
}

// Storage functions
function loadStoredData() {
    const stored = localStorage.getItem('homerBitesRestaurants');
    if (stored) {
        try {
            restaurants = JSON.parse(stored);
        } catch (e) {
            console.error('Error loading stored data:', e);
        }
    }
}

function saveData() {
    localStorage.setItem('homerBitesRestaurants', JSON.stringify(restaurants));
}

// Event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRestaurantModal();
    }
});
