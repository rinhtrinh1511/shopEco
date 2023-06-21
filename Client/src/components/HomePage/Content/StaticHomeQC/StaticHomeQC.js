import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class StaticHomeQC extends Component {
  render() {
    return (
      <div className="li-static-home mt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-static-home-image" />
              <div className="li-static-home-content">
                <p>Giảm giá<span>-20% </span>Trong tuần này</p>
                <h2>Featured Product</h2>
                <h2>Meito Accessories 2023</h2>
                <p className="schedule">
                  Starting at
                <span> 23.000.000</span>
                </p>
                <div className="default-btn">
                  <Link to="/" className="links">Mua ngay</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
