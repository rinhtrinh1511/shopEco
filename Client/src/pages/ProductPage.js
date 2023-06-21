import React, { Component } from 'react'
import LinkHere from '../components/LinkHere/LinkHere'
import ProductAll from '../components/ProductAll/ProductAll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default class ProductPage extends Component {
  render() {
    let url = this.props.match.match.url;
    if(url === '/products'){
      url = (
        <>
          <FontAwesomeIcon icon={faAngleRight}/> {'Sản phẩm'}
        </>
      )
    }
  //  console.log(textsearch)
    return (
      <div>
        <LinkHere url={url}></LinkHere>
        <ProductAll/>
      </div>
    )
  }
}

