import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Cart extends Component {
  render() {
    const jwt = Cookies.get('jwt_token')
    if (jwt === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <img
        className="products-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    )
  }
}

export default Cart
