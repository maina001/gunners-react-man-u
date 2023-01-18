import React from "react"

function Navbar(){
return(
<nav class="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light"href="#home">Gunners</a>

<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link text-light active"
href="#home">SOURCES</a>
</li>
</ul>
  <form className="d-flex">
 <input type="search" className="form-control"
 placeholder="search hapa ivo..."/>
 <button className="btn btn-succes ms-2" type="submit">
 {'search'}</button>
</form>

  </div>
</nav>
)

}
export default Navbar
