# Food Delivery App 🍔🥗

A React-based food ordering application with cart functionality and meal categorization (sorry for not much styling).

## Features 🚀

### 1. Food Catalog
- Display food items with images, prices, and descriptions
- Categorize items into Breakfast, Lunch, and Dinner
- Search functionality with auto-suggest (startsWith match)
- Responsive grid layout for food cards

### 2. Cart Management
- Add/Remove items from cart
- Quantity adjustment (+/- buttons)
- Real-time cart total calculation
- Cart visibility toggle (cart icon/cross icon)
- Delete individual items from cart

### 3. Order Management
- Persistent cart state using React useState
- Total items counter in cart icon
- Price calculation based on quantities
- Clear cart indicators when items removed

### 4. UI Features
- Active state visualization for category buttons
- Interactive hover states for buttons
- Loading states for food items
- Error handling for API calls
- Responsive design for various screen sizes

## Technologies Used 💻
- **Frontend**: 
  - React.js (v18+)
  - CSS Modules for styling
  - Functional components with Hooks (useState, useEffect)
  
- **Backend**:
  - Express.js
  - CORS middleware
  - Static file serving for images

## Components Structure 🧩
1. **App**: Root component
2. **Home**:
   - Manages all application state
   - Handles API communication
   - Implements search and filter logic
3. **Card**: Displays individual food items
4. **Button**: Reusable category filter button
5. **Cart**: Manages cart display and interactions
6. **Item**: Individual cart item component

