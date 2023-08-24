import React from 'react';
// import Logoicon from '../Image/logo-icon.png'
// import Logotext from '../Image/logo-text.png'
// import Logolight from '../Image/logo-light-text.png'

function Header(props) {
    return (
        <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header" data-logobg="skin6">
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#"><i
                        className="ti-menu ti-close"></i></a>
                    <div className="navbar-brand">
                        <a href="index.html">
                            {/* <b className="logo-icon">
                                <img src={Logoicon} alt="homepage" className="dark-logo" />
                                <img src={Logoicon} alt="homepage" className="light-logo" />
                            </b> */}
                            
                            <span className="logo-text">
                                {/* <img src={Logotext} alt="homepage" className="dark-logo" />
                                <img src={Logolight} className="light-logo" alt="homepage" />
                                <a class="gh-head-logo no-image" href="dashboard">Admin Dashboards</a> */}
                                <h3 class="gh-head-logo no-image" >Admin Dashboard</h3>
                            </span>
                        </a>
                    </div>
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="#"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="settings" className="svg-icon"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Hoạt động</a>
                                <a className="dropdown-item" href="#">Hoạt động khác</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Vấn đề khác</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/IMG_6225.jpg" alt="user" className="rounded-circle"
                                    width="40" />
                                <span className="ml-2 d-none d-lg-inline-block"><span>Xin chào,</span> <span
                                    className="text-dark">Admin</span> <i data-feather="chevron-down"
                                        className="svg-icon"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <a className="dropdown-item" href="#"><i data-feather="power"
                                    className="svg-icon mr-2 ml-1"></i>
                                    Thoát</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;