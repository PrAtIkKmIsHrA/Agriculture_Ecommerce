import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/AgriAstra2.png";
import cart_icon from "../../../assets/icon-cart.svg";
import user_icon from "../../../assets/icon-user.svg";
import { Button } from "@/components/atoms";
import "./header.css";
import { GrNotification } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import notification from "../../../assets/notification.png";
import wishlist from "../../../assets/Wishlist.png";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <header>
           
      <div className="Header">
             
        <div className="Header-logo">
                    <img src={logo} alt="" />     
        </div>
             
        <ul className="menu">
                 
          <li
            onClick={() => {
              setMenu("Farmingproducts");
            }}
          >
                     
            <div class="dropdown">
                         
              <a
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                                Farming Products              
              </a>
                           
              <ul class="dropdown-menu">
                             
                <li>
                               
                  <a class="dropdown-item" href="#">
                                     
                    <Link to="/Farming_Products/seeds">Seeds</Link>             
                       
                  </a>
                               
                </li>
                             
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                     
                    <Link to="/Farming_Products/Herbicides">Herbicides</Link>   
                                 
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/Farming_Products/viricides">Viricides</Link>     
                               
                  </a>
                               
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/Farming_Products/Nutrients">Nutrients</Link>     
                               
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                     
                    <Link to="/Farming_Products/Fungicides">Fungicides</Link>   
                                 
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/Farming_Products/Insecticides">
                           Insecticides                    
                    </Link>
                                   
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/Farming_Products/Organic_Farming">
                          Organic_Farming_products                    
                    </Link>
                                     
                  </a>
                                 
                </li>
                             
              </ul>
                         
            </div>
                     
          </li>
                   
          <li
            onClick={() => {
              setMenu("FarmingEquipments");
            }}
          >
                       
            <div class="dropdown">
                           
              <a
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Farming Equipments              
              </a>
                         
              <ul class="dropdown-menu">
                               
                <li>
                                 
                  <a class="dropdown-item" href="#">
                                     
                    <Link to="/FarmingEquipments/implements">Implements</Link> 
                                   
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/FarmingEquipments/Agriculture_tools">
                      Agricultural Tools
                    </Link>
                                   
                  </a>
                               
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/FarmingEquipments/Accessories">Accessories</Link>
                                     
                  </a>
                                 
                </li>
                               
                <li>
                                   
                  <a class="dropdown-item" href="#">
                                       
                    <Link to="/FarmingEquipments/irrigation">Irrigation</Link> 
                                   
                  </a>
                                 
                </li>
                             
              </ul>
                         
            </div>
                     
          </li>
                 
        </ul>
               
        <div className="login-cart">
                   
          <div className="wishlist">
                     {/* <Link to="/Wishlist"> */}
                          <img src={wishlist} alt="" />           
            {/* </Link> */}            <div className="wishlist-count">0</div> 
                   
          </div>
                 
          <Link to="/Cart">
                        <img src={cart_icon} alt="" />       
          </Link>
                    <div className="cart-count">0</div>         
          <div className="notification">
                       {/* <Link to="/Notification"> */}
                          <img src={notification} alt="" />       
            {/* </Link> */}           
            <div className="notification-count">0</div>         
          </div>
                   
          <div className="user">
                       {/* <Link to="/User"> */}             
            <img
              src={user_icon}
              type="button"
              onClick={() => loginWithRedirect()}
            />
            {/* </Link> */}         
          </div>
          {isAuthenticated && <p> {user.name} </p>}
          {isAuthenticated ? (
            <button
              className="logout-button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
                       
              <button type="button" onClick={() => loginWithRedirect()}>
                + Sell
              </button>
                       
            </Link>
          )}
                 
        </div>
             
      </div>
         
    </header>
  );
};

const HeaderStory = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="storybook-header">
    <div className="Login-signin">
         
      {user ? (
        <>
                 
          <span className="welcome">
                        Welcome, <b>{user.name}</b>!        
          </span>
                    <Button size="small" onClick={onLogout} label="Log out" /> 
             
        </>
      ) : (
        <>
                    <Button size="small" onClick={onLogin} label="Log in" />
                 
          <Button
            primary
            size="small"
            onClick={onCreateAccount}
            label="Sign up"
          />
               
        </>
      )}
       
    </div>
  </header>
);

HeaderStory.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

HeaderStory.defaultProps = {
  user: null,
};

export default Header;
