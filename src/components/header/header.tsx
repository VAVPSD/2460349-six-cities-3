import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

interface HeaderProps {
  isLoginPage?: boolean;
  authorizationStatus: AuthorizationStatus;
}

function Header({ isLoginPage = false, authorizationStatus }: HeaderProps) {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {!isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={isAuth ? '/favorites' : '/login'}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {isAuth
                      ?
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </>
                      :
                      <span className="header__login">Sign in</span>}
                  </Link>
                </li>
                {isAuth &&
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>}

              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
