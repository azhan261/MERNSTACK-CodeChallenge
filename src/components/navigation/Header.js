import React from 'react';

function Header() {
  return (
      <>
        <div>
        <header>
        <div className="sci">
          <ul className="social-menu">
            <li><a href="https://facebook.com/"><i className="fab fa-facebook-square" /></a></li>
            <li><a href="https://instagram.com/"><i className="fab fa-instagram" /></a></li>
            <li><a href="https://twitter.com/"><i className="fab fa-twitter" /></a></li>
            <li><a href="#"><i className="fab fa-snapchat" /></a></li> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           
          </ul>
        </div>
        <a href="https://html5op.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}  className="logo" /></a>
        <ul className="navigation">
         
        </ul>

        </header>
      </div>
      </>
  );
}

export default Header;
