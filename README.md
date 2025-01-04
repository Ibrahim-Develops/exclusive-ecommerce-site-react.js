## **Exclusive E-commerce Site**

This repository contains the source code for the **Exclusive E-commerce Site**, a fully functional e-commerce platform built using **React** and **Redux**. The site is designed to offer a seamless shopping experience, with features like product browsing, cart management, dynamic pricing, and order confirmations. It's optimized for a modern user interface and integrates Email.js for communication, making it a comprehensive e-commerce solution.

## Features
- **Product Catalog**: Browse and search through a diverse range of products.
- **Product Details**: Detailed product pages including images, prices, star ratings, and descriptions.
- **Cart and Checkout**: Add items to the cart, update quantities, and proceed to checkout.
- **Dynamic Pricing**: Display old and new prices with discounts and offers.
- **Search Functionality**: Search for products by name.
- **Sort by Category**: Sort products by various categories.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: Redux for managing global state (e.g., cart, user data)
- **Email Integration**: Email.js for sending emails (e.g., order confirmation, user queries)
- **Styling**: Tailwind CSS for responsive and modern UI design
- **Version Control**: GitHub

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ibrahim-Develops/exclusive-ecommerce-site.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Exclusive-Ecommerce-Site
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   The site should be accessible at `http://localhost:3000`.

## Usage
- Search for products using the search bar.
- Sort products by categories to find items of interest.
- Add products to your cart and manage quantities before proceeding to checkout.
- Use the contact form or other email-triggered actions to send emails via Email.js (e.g., order confirmation or customer inquiries).

## Redux Integration
Redux is used to manage the global state of the application. It helps to store and update the state for:
- **Cart**: Managing added products, quantities, and calculating totals.
- **User Data**: Storing user information and authentication status.

The Redux store is set up with the following slices:
- **cartSlice**: Handles actions related to adding, removing, and updating products in the cart.
- **userSlice**: Manages user authentication and data.

You can interact with the Redux store via actions and reducers.

## Email.js Integration
Email.js is integrated into the project to send emails from the frontend without requiring a backend server. You can use it for various functionalities, such as:
- Sending order confirmation emails.
- Sending customer inquiries or contact form submissions.

To set it up:
1. Create an Email.js account at [Email.js](https://www.emailjs.com/).
2. Configure your Email.js service ID, template ID, and user ID in the `.env` file:
   ```env
   REACT_APP_EMAIL_JS_SERVICE_ID=your_service_id
   REACT_APP_EMAIL_JS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAIL_JS_USER_ID=your_user_id
   ```

## Project Structure
```
Exclusive-Ecommerce-Site/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/                # Redux-related files
│   │   ├── cartSlice.js      # Cart state management
│   │   ├── userSlice.js      # User state management
│   │   └── store.js          # Redux store configuration
│   ├── services/             # Email.js integration
│   │   └── emailService.js   # Service for handling Email.js requests
│   ├── styles/
│   ├── utils/
│   └── services/
├── .env
├── package.json
└── README.md
```

## Contributing
Contributions are welcome! Please fork the repository, create a new branch for your changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact
For any questions or collaboration opportunities, feel free to reach out:
- **Email**: ibrahimdevelopss@gmail.com
- **Location**: Bahawalpur, Punjab, Pakistan
