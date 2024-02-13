import React from 'react'
import './navbar.css'
import { FaQuora } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="container-fluid">
        <div className='logo'>
            <h3><FaQuora size={30}/> QuickRent</h3>
        </div>
        <div className='categories'>
          <div className="container-fluid">
            <div class="input-group">
            <span class="input-group-text" id="basic-addon1">
                  <select className="form-select" id="formFile">
                  <option selected="selected" value="search-alias=aps">All</option>
                  <option value="search-alias=alexa-skills">Alexa Skills</option>
                  <option value="search-alias=alexa-skills">Alexa Skills</option>
                  <option value="search-alias=alexa-skills">Alexa Skills</option>
                  <option value="search-alias=alexa-skills">Alexa Skills</option>
                  </select>
            </span>
            <input type="text" class="form-control" placeholder="Search Here" aria-describedby="basic-addon1" />
            <span class="input-group-text" id="basic-addon1"><IoMdSearch size={30}/></span>
            </div>
            </div>
        </div>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
        </div>
    </div> 
  )
}
