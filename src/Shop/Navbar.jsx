import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingBag} from '@fortawesome/free-solid-svg-icons';


function Navbar({cart}) {
  return (
    <nav class="navbar navbar-expand-lg nav" style={{ position: "sticky", top: "0", zIndex: "100" }}>
  <div class="container-fluid ">
    <a class="navbar-brand nav-1" href="#"><FontAwesomeIcon icon={faShoppingBag} /> Naiman Bags</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
       
      <button type="button"class="btn btn-dark btn-1 "><FontAwesomeIcon icon={faShoppingBag}/> Cart {cart} </button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
