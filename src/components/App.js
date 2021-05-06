import React from "react";
import { connect } from "react-redux";
import { getCartProductsList } from "../actions";
import Product from "./product";
import AddProduct from "./AddProduct";
import Cart from "./cart.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class App extends  React.Component {
  componentDidMount() {
    this.props.dispatch(getCartProductsList());
  }
    render() {
      const {products,cart}=this.props
      const count=cart.length
        return (
            <Router>
            <div>
              <div>
                <nav className="nav-bar">
                  <div className="logo">
                  <img
                          style={styles.image}
                          src="https://www.logodesign.net/logo-new/line-art-shopping-trolley-for-supermarket-7524ld.png"
                        />
                  </div>
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <Link to="/Products">Products</Link>
                        </li>
                        <li>
                          <Link to="/AddProducts">AddProducts</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="right">
                      <div className="cart-icon">
                        <img
                          style={styles.image}
                          src="https://image.flaticon.com/icons/svg/1170/1170627.svg"
                        />
                        <span className="show-number">{count}</span>
                      </div>
                    </li>
                    <li className="avtar">
                      <div className="avtar-icon">
                        <span className="avatar-text"><b>Jhon Doe</b></span>
                        <img
                          style={styles.image}
                          src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                        />
                        <span className="show-number"></span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <Switch>
              <Route path="/Products">
                <Product list={products}></Product>
              </Route>
              <Route path="/AddProducts">
                <AddProduct dispatch={this.props.dispatch} />
              </Route>
              <Route path="/cart">
                <Cart list={cart} />
              </Route>
              <Route path="/">
                <Product list={products}></Product>
              </Route>
            </Switch>
        
              </div>
              
          </Router> 
           
        )
    }
}
function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

const styles = {
    image: {
      height: 50,
      width: 50,
    },
  };

export default connect(mapStateToProps) (App);
