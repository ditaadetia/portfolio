import React, { Component } from "react";
import { Link } from "react-router-dom";
import profil from '../profil.jpeg';
import '../App.css';

class Sidebar extends Component {
  render() {
    const imgStyle = {
        width: "250px", // Lebar gambar
        height: "250px", // Tinggi gambar (agar berbentuk bulat, tinggi harus sama dengan lebar)
        borderRadius: "50%", // Mengatur bentuk bulat
    };
    return (
      <>
        <div className="text-uppercase text-center">
            <img src={profil} className="img-profil" alt="logo" style={imgStyle} />>
            <div className="text-gray-800 m-3">
                <Link to={"/"} className="d-block link">
                About
                </Link>
                <Link to={"/experience"} className="d-block link">
                Experience
                </Link>
                <Link to={"/education"} className="d-block link">
                Education
                </Link>
                <Link to={"/skills"} className="d-block link">
                Skills
                </Link>
                <Link to={"/interests"} className="d-block link">
                Interests
                </Link>
                <Link to={"/awards"} className="d-block link">
                Awards
                </Link>
            </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
