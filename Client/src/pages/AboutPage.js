import React, { Component } from "react";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="breadcrumb-area">
            <div className="container">
              <div className="breadcrumb-content">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">/About Us</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Li's Breadcrumb Area End Here */}
          {/* about wrapper start */}
          <div className="about-us-wrapper pt-60 pb-40">
            <div className="container">
              <div className="row">
                {/* About Text Start */}
                <div className="col-lg-6 order-last order-lg-first">
                  <div className="about-text-wrap">
                    <h2>
                      <span>Dịch Vụ cung cấp tốt nhất</span>Sản phẩm tốt nhất
                      cho bạn
                    </h2>
                    <p>
                      Chào mừng bạn đến với cửa hàng Minh Nhật, nơi chúng tôi
                      chuyên bán các điện thoại tự chế độc đáo. Với kỹ năng và
                      đam mê sáng tạo, chúng tôi tạo ra những sản phẩm độc nhất
                      vô nhị, mang phong cách riêng của bạn. Với mỗi chiếc điện
                      thoại Minh Nhật, bạn sẽ trải nghiệm công nghệ tiên tiến,
                      kết hợp với thiết kế tinh tế. Sự tập trung vào chất lượng
                      và khách hàng là ưu tiên hàng đầu của chúng tôi. Hãy đến
                      với chúng tôi và khám phá thế giới độc đáo của của hàng
                      điện thoại Minh Nhật.
                    </p>
                    <p>
                      Một số khách hàng của chúng tôi nói rằng họ tin tưởng
                      chúng tôi và mua sản phẩm của chúng tôi mà không có bất kỳ
                      sự nghi ngờ nào vì họ tin tưởng chúng tôi và luôn vui vẻ
                      mua sản phẩm của chúng tôi.
                    </p>
                    <p>
                      Chúng tôi cung cấp những gì tốt nhất mà họ đã tin tưởng và
                      mua sản phẩm của chúng tôi mà không có bất kỳ sự nghi ngờ
                      nào vì họ tin tưởng chúng tôi và luôn vui vẻ mua hàng.
                    </p>
                  </div>
                </div>
                {/* About Text End */}
                {/* About Image Start */}
                <div className="col-lg-5 col-md-10">
                  <div className="about-image-wrap">
                    <img
                      className="img-full"
                      src="https://i.ibb.co/mtWXXkq/13.jpg"
                      alt="About Us"
                    />
                  </div>
                </div>
                {/* About Image End */}
              </div>
            </div>
          </div>
          {/* about wrapper end */}
          {/* Begin Counterup Area */}
          <div className="counterup-area">
            <div className="container-fluid p-0">
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-6">
                  {/* Begin Limupa Counter Area */}
                  <div className="limupa-counter white-smoke-bg">
                    <div className="container">
                      <div className="counter-img">
                        <img src="https://i.ibb.co/QKXDBNM/1.png" alt="" />
                      </div>
                      <div className="counter-info">
                        <div className="counter-number">
                          <h3 className="counter">2169</h3>
                        </div>
                        <div className="counter-text">
                          <span>Người dùng hạnh phúc</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* limupa Counter Area End Here */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Begin limupa Counter Area */}
                  <div className="limupa-counter gray-bg">
                    <div className="counter-img">
                      <img src="https://i.ibb.co/f1Zj6SL/2.png" alt="" />
                    </div>
                    <div className="counter-info">
                      <div className="counter-number">
                        <h3 className="counter">869</h3>
                      </div>
                      <div className="counter-text">
                        <span>Giải thưởng đạt được</span>
                      </div>
                    </div>
                  </div>
                  {/* limupa Counter Area End Here */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Begin limupa Counter Area */}
                  <div className="limupa-counter white-smoke-bg">
                    <div className="counter-img">
                      <img src="https://i.ibb.co/vBktQgS/3.png" alt="" />
                    </div>
                    <div className="counter-info">
                      <div className="counter-number">
                        <h3 className="counter">689</h3>
                      </div>
                      <div className="counter-text">
                        <span>Giờ làm việc</span>
                      </div>
                    </div>
                  </div>
                  {/* limupa Counter Area End Here */}
                </div>
                <div className="col-lg-3 col-md-6">
                  {/* Begin limupa Counter Area */}
                  <div className="limupa-counter gray-bg">
                    <div className="counter-img">
                      <img src="https://i.ibb.co/z5t0Q7H/4.png" alt="" />
                    </div>
                    <div className="counter-info">
                      <div className="counter-number">
                        <h3 className="counter">2169</h3>
                      </div>
                      <div className="counter-text">
                        <span>Hoàn thành dự án</span>
                      </div>
                    </div>
                  </div>
                  {/* limupa Counter Area End Here */}
                </div>
              </div>
            </div>
          </div>
          {/* Counterup Area End Here */}
          {/* team area wrapper start */}
          <div className="team-area pt-60 pt-sm-44">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="li-section-title capitalize mb-25">
                    <h2>
                      <span>Đội ngũ</span>
                    </h2>
                  </div>
                </div>
              </div>{" "}
              {/* section title end */}
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="team-member mb-60 mb-sm-30 mb-xs-30">
                    <div className="team-thumb">
                      <img
                        src="https://i.ibb.co/MNQpYyz/1.png"
                        alt="Our Team Member"
                      />
                    </div>
                    <div className="team-content text-center">
                      <h3>Jonathan Scott</h3>
                      <p>IT Expert</p>
                      <a href="/">info@example.com</a>
                      <div className="team-social">
                        <a href="/">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="/">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="/">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="/">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end single team member */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="team-member mb-60 mb-sm-30 mb-xs-30">
                    <div className="team-thumb">
                      <img
                        src="https://i.ibb.co/7YqMhw3/2.png"
                        alt="Our Team Member"
                      />
                    </div>
                    <div className="team-content text-center">
                      <h3>Oliver Bastin</h3>
                      <p>Web Designer</p>
                      <a href="/">info@example.com</a>
                      <div className="team-social">
                        <a href="/">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="/">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="/">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="/">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end single team member */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="team-member mb-30 mb-sm-60">
                    <div className="team-thumb">
                      <img
                        src="https://i.ibb.co/YWGt86f/3.png"
                        alt="Our Team Member"
                      />
                    </div>
                    <div className="team-content text-center">
                      <h3>Erik Jonson</h3>
                      <p>Web Developer</p>
                      <a href="/">info@example.com</a>
                      <div className="team-social">
                        <a href="/">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="/">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="/">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="/">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end single team member */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="team-member mb-30 mb-sm-60 mb-xs-60">
                    <div className="team-thumb">
                      <img
                        src="https://i.ibb.co/CbjRfW2/4.png"
                        alt="Our Team Member"
                      />
                    </div>
                    <div className="team-content text-center">
                      <h3>Maria Mandy</h3>
                      <p>Marketing officer</p>
                      <a href="/">info@example.com</a>
                      <div className="team-social">
                        <a href="/">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="/">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="/">
                          <i className="fa fa-linkedin" />
                        </a>
                        <a href="/">
                          <i className="fa fa-google-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end single team member */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
