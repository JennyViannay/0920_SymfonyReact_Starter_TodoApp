import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom bg-blue-dark pt-3">
      <div className="text-center">
        <a
          href="/todo/add"
          className="btn btn-dark animate__animated animate__slideInUp"
        >
          <div className="bg-white border-radius100">
            <i className="fas fa-plus-circle fa-4x"></i>
          </div>
        </a>
      </div>
      <div className="text-center mt-2">
        <small>Symfony & React Starter by Jenny Viannay &copy; 2021</small>
      </div>
    </div>
  );
};

export default Footer;
