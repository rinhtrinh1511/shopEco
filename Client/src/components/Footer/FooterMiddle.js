import React, { Component } from 'react'
import logo from "../../Logo/logo.png";
export default class FooterMiddle extends Component {
  render() {
    return (
      <div className="footer-static-middle">
        <div className="container">
          <div className="footer-logo-wrap pt-50 pb-35">
            <div className="row">
              {/* Begin Footer Logo Area */}
              <div className="col-lg-4 col-md-6">
                <div className="footer-logo">
                <img style={{width:'320px'}} src={logo} alt="" />
                  <p className="info">
                    We are Champion.
            </p>
                </div>
                <ul className="des">
                  <li>
                    <span>Địa chỉ: </span>
                    Nam Định - Việt Nam
            </li>
                  <li>
                    <span>Phone: </span>
                    <a href="/">(+123) 123 456 789</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href="mailto://info@admin.com">info@admin.com</a>
                  </li>
                </ul>
              </div>
              {/* Footer Logo Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Sản Phẩm</h3>
                  <ul>
                    <li><a href="/">Giá giảm</a></li>
                    <li><a href="/">Sản phẩm mới</a></li>
                    <li><a href="/">Hàng bán tôt nhât</a></li>
                    <li><a href="/">Liên hệ chúng tôi</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer Block Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer-block">
                  <h3 className="footer-block-title">Thông tin</h3>
                  <ul>
                    <li><a href="/">Vận chuyển</a></li>
                    <li><a href="/">Thông báo pháp lý</a></li>
                    <li><a href="/">Về chúng tôi</a></li>
                    <li><a href="/">Liên hệ chúng tôi</a></li>
                  </ul>
                </div>
              </div>
              {/* Footer Block Area End Here */}
              {/* Begin Footer Block Area */}
              <div className="col-lg-4">
                <div className="footer-block">
                  <h3 className="footer-block-title">Theo dõi chúng tôi</h3>
                  <ul className="social-link">
                    <li className="twitter" style={{borderRadius:'50%'}}>
                      <a href="https://twitter.com/" data-toggle="tooltip" title="Twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="rss" style={{borderRadius:'50%'}}>
                      <a href="https://rss.com/" data-toggle="tooltip" title="RSS">
                        <i className="fa fa-rss" />
                      </a>
                    </li>
                    <li className="google-plus" style={{borderRadius:'50%'}}>
                      <a href="https://www.plus.google.com/discover" data-toggle="tooltip" title="Google Plus">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li className="facebook" style={{borderRadius:'50%'}}>
                      <a href="https://www.facebook.com/" data-toggle="tooltip" title="Facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="youtube" style={{borderRadius:'50%'}}>
                      <a href="https://www.youtube.com/" data-toggle="tooltip" title="Youtube">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li className="instagram" style={{borderRadius:'50%'}}>
                      <a href="https://www.instagram.com/" data-toggle="tooltip" title="Instagram">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Begin Footer Newsletter Area */}
                <div className="footer-newsletter">
                  <h4>Đăng kí để nhận khuyến mãi.</h4>
                  <form action="/" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <div id="mc-form" className="mc-form subscribe-form form-group">
                        <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email" />
                        <button className="btn" id="mc-submit">Gửi</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Footer Newsletter Area End Here */}
              </div>
              {/* Footer Block Area End Here */}
            </div>
          </div>
        </div>
      </div>


    )
  }
}
