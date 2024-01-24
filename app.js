import React from "react";
import ReactDOM from "react-dom/client";

// header section 
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://w7.pngwing.com/pngs/894/279/png-transparent-online-food-ordering-food-delivery-grubhub-others-food-service-logo-thumbnail.png" alt="logo Not Coming"/>
            </div>
            <div className="Nav-Bar" >
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Restaurentcard = (prop) => {
  const { resdata } = prop;
    return (
        <div className="res-card" >
            <img className="res-logo" alt="restaurent logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3sbDbh1CFfkBLFCL2XWW2M84Elff1wX40a-koRbhKEA&s"/> 
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines}</h4>
            <h4>Rating: {resdata.info.avgRating}</h4>
            <h4>costForTwo: {resdata.info.costForTwo}</h4>
        </div>
    );
};

// Zomato Api for food restaurant
const cardobj = [{
  info: {
    "id": "24635",
    name: "Domino's Pizza",
    cloudinaryImageId: "tpkl3pquueqk1yrgbwea",
    "locality": "Shaikpet Darga",
    "areaName": "Film Nagar",
    costForTwo: "₹400 for two",
    cuisines: [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
    ],
    avgRating: 4.2,
    "parentId": "2456",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    sla: {
      deliveryTime: 30,
      "serviceability": "SERVICEABLE",
      "slaString": "30 mins",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 02:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-shaikpet-darga-film-nagar-hyderabad-24635",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  info: {
    "id": "627394",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
    "locality": "Gandipet",
    "areaName": "Manikonda",
    costForTwo: "₹300 for two",
    cuisines: [
      "American",
      "Snacks",
      "Turkish",
      "Portuguese",
      "Continental"
    ],
    avgRating: 4.4,
    "parentId": "371281",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    sla: {
      deliveryTime: 29,
      "lastMileTravel": 4.8,
      "serviceability": "SERVICEABLE",
      "slaString": "29 mins",
      "lastMileTravelString": "4.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 03:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹499",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-gandipet-manikonda-hyderabad-627394",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  info: {
    "id": "240185",
    name: "Burger King",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Sheikpet",
    "areaName": "Toli Chowki",
    costForTwo: "₹350 for two",
    cuisines: [
      "Burgers",
      "American"
    ],
    avgRating: 4.2,
    "parentId": "166",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    sla: {
      deliveryTime: 35,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "35 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹129"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-sheikpet-toli-chowki-hyderabad-240185",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  info: {
    "id": "34444",
    name: "Pakwaan Grand",
    cloudinaryImageId: "mkmmacm0pxdt61gz0m4y",
    "locality": "Gachibowli",
    "areaName": "Gachibowli",
    costForTwo: "₹300 for two",
    cuisines: [
      "Chinese",
      "Biryani",
      "Tandoor"
    ],
    avgRating: 3.9,
    "parentId": "19911",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    sla: {
      deliveryTime: 27,
      "lastMileTravel": 3.7,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "3.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 02:30:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pakwaan-grand-gachibowli-hyderabad-34444",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  info: {
    "id": "263535",
    name: "Sairam Ki Bandi",
    cloudinaryImageId: "rmcl7tixfs9owmfw2f8e",
    "locality": "Circle No.11\n(Serilingampally-1)",
    "areaName": "Madhapur",
    costForTwo: "₹150 for two",
    cuisines: [
      "South Indian",
      "Juices"
    ],
    avgRating: 3.8,
    "parentId": "175822",
    "avgRatingString": "3.8",
    "totalRatingsString": "1K+",
    sla: {
      deliveryTime: 25,
      "lastMileTravel": 4,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "lastMileTravelString": "4.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 11:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/sairam-ki-bandi-circle-no-11-serilingampally-1-madhapur-hyderabad-263535",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  info: {
    "id": "502578",
    name: "Pepper 69",
    cloudinaryImageId: "dume9igvcnq1hfg8nwdf",
    "locality": "Madhapur Chandan Nagar",
    "areaName": "Madhapur",
    costForTwo: "₹200 for two",
    cuisines: [
      "Chinese",
      "Indian"
    ],
    avgRating: 4,
    "parentId": "301000",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    sla: {
      deliveryTime: 28,
      "lastMileTravel": 4,
      "serviceability": "SERVICEABLE",
      "slaString": "28 mins",
      "lastMileTravelString": "4.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-24 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pepper-69-chandan-nagar-madhapur-hyderabad-502578",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}];

const Body = () => {
    return (
        <div className="body" >
            <div className="search" >Search Bar</div>
            <div className="res-container" >
                <Restaurentcard resdata = {cardobj}/>
                <Restaurentcard resname="Sangrila" cuisine="North-East, Momos,Fried Rice" rating="5.0" deliverytime="30 mins"/>
                <Restaurentcard/>
                <Restaurentcard/>
                <Restaurentcard/>
            </div>
        </div>
    );
};

// main div tag 
const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
