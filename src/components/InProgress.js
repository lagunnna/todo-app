import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './styles/NotFound.less';
import Icon from '../../assets/images/inProgress.png';

const myIcon = new Image();
myIcon.src = Icon;

export function InProgress() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => { setRedirect(true); }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="notificationContainer">
      {redirect
        ? <Redirect to="/" />
        : (
          <>
            <p className="notification">Sorry, this page is not ready</p>
            <p className="notification">
              <Link to="/">Go to home</Link>
            </p>
            <img src={myIcon.src} alt="img" width="30%" height="30%" />
          </>
        )}
    </div>
  );
}
