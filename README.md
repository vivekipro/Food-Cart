# Host Link: https://vivekipro.github.io/Food-Cart/

# Project README

This README provides an overview of a Food CART application, focusing on the `App.js` file, its components, and how they function together.

## Project Overview

This React application appears to be an e-commerce or online shopping platform. The main features include:

- Displaying products in a list.
- Managing a shopping cart.
- Showing the user's orders.
- Providing a loading screen while the application loads.

## Getting Started

Before running this application, ensure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download them from [Node.js website](https://nodejs.org/).

1. Clone this repository to your local machine.

   ```shell
   https://github.com/vivekipro/Food-Cart.git
   ```

2. Navigate to the project directory.

   ```shell
   cd project-directory
   ```

3. Install the required dependencies.

   ```shell
   npm install
   ```

4. Start the development server.

   ```shell
   npm start
   ```

This will start the React development server, and you can access the application in your web browser at `http://localhost:3000` by default.

## Project Structure

The project structure is organized with different components that are combined in `App.js`. Here is a brief overview of the main components and their functionalities:

- **Cart**: Manages the shopping cart. It can be opened and closed by the user.
- **Itemlist**: Displays a list of items/products for users to choose from.
- **Navbar**: The application's navigation bar, which may contain the cart icon and item count.
- **MyOrders**: Displays a user's past orders or order history.
- **Loader**: A loading screen that displays while the application is loading.

## App.js

`App.js` is the main entry point for the application and serves as a container for the components mentioned above. The key state variables and functions include:

- `show`: A state variable to control the visibility of the cart.
- `cartItemQty`: A state variable that keeps track of the number of items in the shopping cart.
- `isLoader`: A state variable to display a loading screen while the application loads.
- `handleClose`: A function to close the cart.
- `handleShow`: A function to open the cart.
- `handleGotoHome`: A function to return to the home screen.
- A timeout function to remove the loading screen after a specified delay.

The rendering of components is conditionally controlled based on the values of `isMyOrder` and `isLoader`. When `isLoader` is true, the loading screen is displayed. When `isMyOrder` is true, the "MyOrders" component is displayed; otherwise, the home screen components (e.g., `ImgContainer`, `Card`, `Itemlist`) are rendered.

## Screenshoot 

![Screenshot from 2023-10-19 11-26-16](https://github.com/vivekipro/Food-Cart/assets/143787878/5d29bdd0-3fdd-4c94-8863-facd9d57c5b2)

![Screenshot from 2023-10-19 11-26-41](https://github.com/vivekipro/Food-Cart/assets/143787878/f9434f3e-5501-4256-abc5-c8492ff39011)

![Screenshot from 2023-10-19 11-26-51](https://github.com/vivekipro/Food-Cart/assets/143787878/a937b947-ee47-4619-8896-632cc995ff2e)

![Screenshot from 2023-10-19 11-27-11](https://github.com/vivekipro/Food-Cart/assets/143787878/a16c85b8-b7e2-4245-8d94-6115a7423f83)

![Screenshot from 2023-10-19 11-27-15](https://github.com/vivekipro/Food-Cart/assets/143787878/9b28ba80-4ed3-4c49-bded-08a0afaa8d86)


## Using the Application

- The user can interact with the shopping cart by clicking on the cart icon in the Navbar.
- Products can be added to the cart from the `Itemlist` component.
- The user can view their past orders by clicking on the appropriate button, which sets `isMyOrder` to true.

## Conclusion

This React application provides an interactive online shopping experience, allowing users to browse products, manage a shopping cart, and view their order history. It also includes a loading screen to enhance the user experience. The project structure and key components are organized to ensure modularity and maintainability.
