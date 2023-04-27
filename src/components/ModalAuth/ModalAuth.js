import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../redux-store/actions';
import Portal from '../Portal/Portal';

const ModalAuth = ({ onClose, dispatch }) => {

  const [loginData, setLoginData] = useState({
    login: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(loginData.login));
    onClose();
  }

  const handleChangeLoginData = (e) => {
    const { value, name } = e.target;

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  return (
    <Portal>
      <div className='modal-auth'>
        <div className='modal-dialog modal-dialog-auth'>
          <button className='close-auth' onClick={onClose}>&times;</button>
          <form onSubmit={handleSubmit}>
            <fieldset className='modal-body'>
              <legend className='modal-title'>Authorisation</legend>

              <label className='label-auth'>
                <span>Login:</span>
                <input name="login" type="text" value={loginData.value} onChange={handleChangeLoginData}/>
              </label>

              <label className='label-auth'>
                <span>Password:</span>
                <input name="password" type="password" value={loginData.password} onChange={handleChangeLoginData}/>
              </label>
            </fieldset>
            <div className='modal-footer'>
              <div className='footer-buttons'>
                <button type="submit" className='button button-primary button-login'>Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Portal>
  )
}

export default connect(null)(ModalAuth);