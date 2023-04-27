import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux-store/actions';
import ModalAuth from '../ModalAuth/ModalAuth';
import ModalBasket from '../ModalBasket/ModalBasket';

const Header = ({ login, dispatch }) => {

  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleLoginModalOpen = () => {
    setIsLoginModal(!isLoginModal);
  }

  const toggleBasketModalOpen = () => {
    setIsBasketOpen(!isBasketOpen);
  }

  const handleLogOut = () => {
    dispatch(logOut());
  }

  const logo = require("../../assets/img/icon/logo.svg").default;
  
  return (
    <header className='store-header'>
      <div className='container'>

        <div className='store-header__wrapper'>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <label className='store-header__address'>
            <input 
              type="text" 
              className='input store-header__input-address' 
              placeholder='Адрес доставки'
            />
          </label>

          <div className='store-header__buttons'>
            <span className='store-header__user-name'>{login}</span>

            {!!login
              ? <>
                  <button className='button button-cart' onClick={toggleBasketModalOpen}>
                    <span className='button-cart-svg'></span>
                    <span className='button-text'>Корзина</span>
                  </button>

                  <button className='button button-primary button-out' onClick={handleLogOut}>
                    <span className='button-text'>Выйти</span>
                    <span className='button-out-svg'></span>
                  </button>
                </>
              : <button className='button button-primary button-auth' onClick={toggleLoginModalOpen}>
                  <span className='button-auth-svg'></span>
                  <span className='button-text'>Войти</span>
                </button>
            }
          </div>
        </div>
      </div>

      {isLoginModal && <ModalAuth onClose={toggleLoginModalOpen}/>}
      {isBasketOpen && <ModalBasket onClose={toggleBasketModalOpen} login={login}/>}
    </header>
  )
}

const mapStateToProps = (state) => ({
  login: state.login
})

export default connect(mapStateToProps)(Header);