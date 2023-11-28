import { Link ,NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'

function Header() {
    return (
      <div className="header">

<nav class="navbar navbar-expand-lg bg-link navbar-light ">

  <div class="container-fluid d-flex flex-row">

  <Link to ="/">
  <i class="fab fa-bitcoin logo fa-5x"></i>
  </Link>
  
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div class="w-auto">
        <p  className="mall">Online Mall</p>
      </div>

    </div>
  </div>
 
</nav>
<div className="d-flex flex-row  justify-content-around center card mt-1 p-3">
    <NavLink to="/recharge">
    <div className="d-flex flex-column text-center">
      <i class="fas fa-chart-line text-success fa-2x"></i>
      <span>Recharge</span>
      </div>
    </NavLink>
<NavLink to="/withdrawal">
      <div className="d-flex flex-column text-center">
      <i className="far fa-credit-card text-danger fa-2x"></i>
    <span>Withdrawal</span>
      </div>
      </NavLink>
      <NavLink to="/teams">
      <div className="d-flex flex-column text-center">
      <i class="fas fa-users text-warning fa-2x"></i>
      <span>Teams</span>
      </div>
      </NavLink>
    <NavLink to="/invitaion">
    <div className="d-flex flex-column text-center">
      <i class="fas fa-user-plus text-primary fa-2x"></i>
      <span>Invitation</span>
      </div>
    </NavLink>
      
      </div>
   </div>
    );
  }

  export default Header;