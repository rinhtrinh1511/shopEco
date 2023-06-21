import React, { Component } from 'react'
import { actLoginRequest } from '../../redux/actions/auth';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recaptcha from 'react-recaptcha'
import { startLoading, doneLoading } from '../../utils/loading'
import { Link } from 'react-router-dom'
toast.configure()

class Login extends Component {

  constructor(props) {
    super(props);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      email: "",
      password: "",
      isVerified: false
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value
    });
  }

  recaptchaLoaded(){
    //reload captcha
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password, isVerified } = this.state;
    //verifi captcha
    if (isVerified) {
      if (password.length < 6 || password.length > 32) {
        return toast.error('Mật khẩu từ 6-32 kí tự');
      }
      const user = {
        email,
        password
      }
      startLoading();
      await this.props.loginRequest(user);
      doneLoading();
    } else {
      return toast.error('Xác nhận capcha');
    }
  }
  verifyCallback(res) {
    if (res) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    const { email, password } = this.state;
    const { user } = this.props;
    if (user !== null ) {
      return <Redirect to="/"></Redirect>
    }
    return (
      <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
        {/* Login Form s*/}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="login-form">
            <h4 className="login-title">Đăng nhập</h4>
            <div className="row">
              <div className="col-md-12 col-12 mb-20">
                <label>Địa chỉ Email*</label>
                <input onChange={this.handleChange} value={email} className="mb-0" type="email" placeholder="Địa chỉ Email" name='email' />
              </div>
              <div className="col-12 mb-20">
                <label>Mật khẩu</label>
                <input onChange={this.handleChange} value={password} className="mb-0" type="password" placeholder="Mật khẩu" name='password' />
              </div>
              <div className="col-md-8">
                <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                  <input type="checkbox" id="remember_me" />
                  <label htmlFor="remember_me">Nhớ</label>
                </div>
              </div>
              <div className="col-md-4 mt-10 mb-20 text-left text-md-right">
                <Link to="/forgot-password"> Quên mật khẩu?</Link>
              </div>
              <div className="col-md-4">
                <button className="register-button mt-0 mb-3">Đăng nhập</button>
              </div>
              <div className="col-md-8">
                <Recaptcha
                  sitekey="6Lcd9sEUAAAAAAEj4w9sjBETFKCPXVmcPelQzGjK"
                  render="explicit"
                  verifyCallback={(res) => this.verifyCallback(res)}
                  onloadCallback={this.recaptchaLoaded}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (user) => {
      dispatch(actLoginRequest(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
