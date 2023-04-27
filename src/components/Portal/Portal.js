import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = '';
  }, [])

  return ReactDOM.createPortal(children, document.getElementById('modal'));
}

export default Portal;