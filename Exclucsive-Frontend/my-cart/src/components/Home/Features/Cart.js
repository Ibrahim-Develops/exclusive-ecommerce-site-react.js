import { createSlice } from "@reduxjs/toolkit";
import img1 from "./../../../components/Home/Products/img1.png"
import img2 from "./../../../components/Home/Products/img2.png"
import img3 from "./../../../components/Home/Products/img3.png"
import img4 from "./../../../components/Home/Products/img4.png"
import img5 from "./../../../components/Home/Products/img5.png"
import img6 from "./../../../components/Home/Products/img6.png"
import img7 from "./../../../components/Home/Products/img7.png"
import img8 from "./../../../components/Home/Products/img8.png"
import img9 from "./../../../components/Home/Products/img9.png"
import img10 from "./../../../components/Home/Products/img10.png"
import img11 from "./../../../components/Home/Products/img11.png"
import img12 from "./../../../components/Home/Products/img12.png"
import img13 from "./../../../components/Home/Products/img13.png"
import img14 from "./../../../components/Home/Products/img14.png"
import img15 from "./../../../components/Home/Products/img15.png"

import dp1 from "../../../assets/dp1.png";
import dp2 from "../../../assets/dp2.png";
import dp3 from "../../../assets/dp3.png";
import dp4 from "../../../assets/dp4.png";
import dp5 from "../../../assets/dp5.png";
import dp6 from "../../../assets/dp6.png";
import dp7 from "../../../assets/dp7.png";
import dp8 from "../../../assets/dp8.png";
import dp9 from "../../../assets/dp9.png";
import dp10 from "../../../assets/dp10.png";
import dp11 from "../../../assets/dp11.png";
import dp12 from "../../../assets/dp12.png";
import dp13 from "../../../assets/dp13.png";
import dp14 from "../../../assets/dp14.png";
import dp15 from "../../../assets/dp15.png";
import dp16 from "../../../assets/dp16.png";
import dp17 from "../../../assets/dp17.png";
import dp18 from "../../../assets/dp18.png";
import dp19 from "../../../assets/dp19.png";
import dp20 from "../../../assets/dp20.png";
import dp21 from "../../../assets/dp21.png";
import dp22 from "../../../assets/dp22.png";
import dp23 from "../../../assets/dp23.png";
import dp24 from "../../../assets/dp24.png";
import dp25 from "../../../assets/dp25.png";
import dp26 from "../../../assets/dp26.png";
import dp27 from "../../../assets/dp27.png";
import dp28 from "../../../assets/dp28.png";
import dp29 from "../../../assets/dp29.png";
import dp30 from "../../../assets/dp30.png";
import dp31 from "../../../assets/dp31.png";
import dp32 from "../../../assets/dp32.png";
import dp33 from "../../../assets/dp33.png";
import dp34 from "../../../assets/dp34.png";
import dp35 from "../../../assets/dp35.png";
import dp36 from "../../../assets/dp36.png";
import dp37 from "../../../assets/dp37.png";
import dp38 from "../../../assets/dp38.png";
import dp39 from "../../../assets/dp39.png";
import dp40 from "../../../assets/dp40.png";
import dp41 from "../../../assets/dp41.png";
import dp42 from "../../../assets/dp42.png";
import dp43 from "../../../assets/dp43.png";
import dp44 from "../../../assets/dp44.png";
import dp45 from "../../../assets/dp45.png";



const initialState = {
  Products: [], 
  quantity: 0, 
  totalprice: 0, 
  totalProducts:[
  
      { id: 1, category: "Clothes", name: 'Smart Shirt', price: 100, image: img1, oldprice: 150, about: "Undiagnosed But Something Ain't Right Funny Mental Health Saying Men's T-Shirt" },
      { id: 2, category: "Computers", name: 'IPS LCD Gaming Monitor', price: 200, image: img2, oldprice: 250, about: "MSI G274F 27″ eSport 16:9 Full HD 180Hz 1ms IPS LCD Gaming Monitor" },
      { id: 3, category: "Gaming", name: 'HAVIT HV-G92 Gamepad', price: 300, image: img3, oldprice: 350, about: "Wired USB Game Controller Gamepad for PC Laptop Windows 10/8/7/XP Accessories" },
      { id: 4, category: "Gaming", name: 'Gaming Chair', price: 400, image: img4, oldprice: 450, about: "Leather Gaming Chair With Recliner Foot Rest and Pillow Many Colours!" },
      { id: 5, category: "Phones", name: 'UMIDIGI Android 13', price: 500, image: img5, oldprice: 650, about: "UMIDIGI G5 8GB+128GB Android 13 Up to 1TB Unlocked T-Mobile AT&T Smartphone" },
      { id: 6, category: "Gaming", name: 'Rgb Keyboard', price: 600, image: img6, oldprice: 750, about: "V200 with Spanish Wired 68Key RGB Streamer Mini Gaming Keyboard 19-Key Conflic" },
      { id: 7, category: "Clothes", name: 'Face Cover', price: 700, image: img7, oldprice: 850, about: "Motorcycle Game Balaclava Hood Ghost Skull Full Face Cover CS Halloween Mask US" },
      { id: 8, category: "Clothes", name: 'Mens Cargo Waist', price: 800, image: img8, oldprice: 950, about: "Mens Elasticated Waist Cargo Combat Work Trousers Joggers Pocket Cuffed Pants" },
      { id: 9, category: "Camera", name: 'Cannon Camera', price: 900, image: img9, oldprice: 1050, about: "Canon EOS 50D 15.1MP Digital SLR Black Body Camera from Japan (m0399)" },
      { id: 10, category: "Computers", name: 'Lenovo ThinkPad', price: 1000, image: img10, oldprice: 1150, about: "Lenovo ThinkPad L15 15.6 Laptop AMD Ryzen 5 16GB RAM 256GB SSD Windows 11 Pro" },
      { id: 11, category: "Phones", name: 'Apple iPhone 12 Pro', price: 1200, image: img11, oldprice: 1250, about: "Apple iPhone 12 Pro|12|11 Pro|11|XR|XS|8-64GB/128GB/256G-Unlocked-Excellent" },
      { id: 12, category: "Clothes", name: 'Quality Satin Jacket', price: 1300, image: img12, oldprice: 1350, about: "90s Athletic Vintage Jacket Blue Satin Bomber Style NY Yankees Varsity Jacket" },
      { id: 13, category: "Computers", name: 'Sony PS5', price: 1400, image: img13, oldprice: 1450, about: "Sony PS5 Standard Disk Edition PlayStation 5 825GB Blu-Ray Gaming Console" },
      { id: 14, category: "Computers", name: 'Smart Assistant', price: 1500, image: img14, oldprice: 1550, about: "AMAZON Echo 1st Gen Smart Assistant Alexa Speaker White SK705DI No Power Lead" },
      { id: 15, category: "Clothes", name: 'Women Perfume', price: 1600, image: img15, oldprice: 1650, about: "Gucci Intense Oud by Gucci eau de PARFUM 3.0oz~90mL Discontinued Top Seller" },
  ],

  display_products: [
    { id: 1, img1: dp1, img2: dp2, img3: dp3 },
    { id: 2, img4: dp4, img5: dp5, img6: dp6 },
    { id: 3, img7: dp7, img8: dp8, img9: dp9 },
    { id: 4, img10: dp10, img11: dp11, img12: dp12 },
    { id: 5, img13: dp13, img14: dp14, img15: dp15 },
    { id: 6, img16: dp16, img17: dp17, img18: dp18 },
    { id: 7, img19: dp19, img20: dp20, img21: dp21 },
    { id: 8, img22: dp22, img23: dp23, img24: dp24 },
    { id: 9, img25: dp25, img26: dp26, img27: dp27 },
    { id: 10, img28: dp28, img29: dp29, img30: dp30 },
    { id: 11, img31: dp31, img32: dp32, img33: dp33 },
    { id: 12, img34: dp34, img35: dp35, img36: dp36 },
    { id: 13, img37: dp37, img38: dp38, img39: dp39 },
    { id: 14, img40: dp40, img41: dp41, img42: dp42 },
    { id: 15, img43: dp43, img44: dp44, img45: dp45 },
]


};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    Cart: (state, action) => {
      const newProduct = state.Products.find((Product) => Product.id === action.payload.id);
      if (newProduct) {
        newProduct.quantity++; 
      } else {
        state.Products.push({ ...action.payload, quantity: 1 }); 
      }
    },
    
    incrementQuantity: (state, action) => {
      const existingProduct = state.Products.find(
        (product) => product.id === action.payload 
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    
    decrementQuantity: (state, action) => {
      const existingProduct = state.Products.find(
        (product) => product.id === action.payload
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--;
        } else {
          
          state.Products = state.Products.filter((item) => item.id !== action.payload);
        }
      }
    },
   
    removeFromCart: (state, action) => {
      state.Products = state.Products.filter((Product) => Product.id !== action.payload);
    },
  },
});

export const { Cart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
