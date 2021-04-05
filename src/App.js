import "./App.css";
import HomeScreen from "./screens/Home/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./screens/About/AboutScreen";
import Contact from "./screens/Contact/ContactScreen";
import Cart from "./screens/Cart/CartScreen";
import ProductScreen from "./screens/Product/ProductScreen";
import Login from "./screens/Login/LoginScreen";
import Register from "./screens/Register/RegisterScreen";
import { Container } from "react-bootstrap";
import Categories from "./screens/Categories/CategoriesScreen";
import CategoryProduct from "./screens/CategoryProduct/CategoryProductScreen";
import UserListScreen from "./screens/Admin/UserList/UserListScreen";
import UserEditScreen from "./screens/Admin/UserEdit/UserEditScreen";
import ProductListScreen from "./screens/Admin/ProductList/ProductListScreen";
import ProductEditScreen from "./screens/Admin/ProductEdit/ProductEditScreen";
import CategoryEditScreen from "./screens/Admin/CategoryEdit/CategoryEditScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import OrderListScreen from "./screens/Admin/OrderList/OrderListScreen";
import OrderScreen from "./screens/Order/OrderScreen";
import CategoryListScreen from "./screens/Admin/CategoryList/CategoryListScreen";
import Checkout from "./screens/Checkout/CheckoutScreen";
import ShippingScreen from "./screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen/PlaceOrderScreen";
import ContactMessageScreen from "./screens/Admin/ContactMessages/ContactMessagesScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Route render={({ history }) => <Header history={history} />} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/about" component={About} exact />

        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/categories/:name" component={CategoryProduct} exact />
        <Route path="/checkout" component={Checkout} exact />
        <main className="py-3">
          <Container>
            <Route path="/contact" component={Contact} exact />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} exact />
            <Route
              path="/admin/orderlist/:pageNumber"
              component={OrderListScreen}
              exact
            />
            <Route path="/cart/:id?" component={Cart} exact />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/categorylist"
              component={CategoryListScreen}
              exact
            />
            <Route
              path="/admin/categorylist/:pageNumber"
              component={CategoryListScreen}
              exact
            />
            <Route
              path="/admin/category/:id/edit"
              component={CategoryEditScreen}
            />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route
              path="/admin/messages"
              component={ContactMessageScreen}
              exact
            />
            <Route
              path="/admin/messages/:pageNumber"
              component={ContactMessageScreen}
              exact
            />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
