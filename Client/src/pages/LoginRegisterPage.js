import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import LoginRegister from '../components/LoginRegister/LoginRegister'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default class LoginRegisterPage extends Component {
  render() {
    let url = this.props.match.match.url;
    if (url === "/login-register") {
       url = (
        <>
          <FontAwesomeIcon icon={faAngleRight} /> {" Đăng kí / Đăng nhập"}
        </>
      );
    }
    return (
      <div>
        <LinkHere url={url}></LinkHere>
        <LoginRegister></LoginRegister>
      </div>
    )
  }
}
