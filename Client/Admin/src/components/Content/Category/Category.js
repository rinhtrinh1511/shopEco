import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actFetchCategoriesRequest, actDeleteCategoryRequest, actFindCategoriesRequest } from '../../../redux/actions/category';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MyFooter from '../../MyFooter/MyFooter'
import Paginator from 'react-js-paginator';
import {exportExcel} from '../../../utils/exportExcel'
const MySwal = withReactContent(Swal)

let token;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      total: 0,
      currentPage: 1
    }
  }
  componentDidMount() {
    this.fetch_reload_data(); //recive data from return promise dispatch
  }

  fetch_reload_data(){
    token = localStorage.getItem('_auth');
    this.props.fetch_categories(token).then(res => {
      this.setState({
        total: res.total
      });
    }).catch(err => {
      console.log(err);  
    })
  }

  pageChange(content){
    const limit = 10;
    const offset = limit * (content - 1);
    this.props.fetch_categories(token, offset);
    this.setState({
      currentPage: content
    })
    window.scrollTo(0, 0);
  }

  handleRemove = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(async (result) => {
      if (result.value) {
        await this.props.delete_category(id, token);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchText } = this.state;
    this.props.find_categories(token, searchText).then(res => {
      this.setState({
        total: res.total
      })
    })
  }

  downloadExcel = () => {
    const key = 'categories'
    exportExcel(key)
  }

  render() {
    let { categories } = this.props;
    const { searchText, total } = this.state;
    return (
      <div className="content-inner">
        {/* Page Header*/}
        <header className="page-header">
          <div className="container-fluid">
            <h2 className="no-margin-bottom">Thể loại</h2>
          </div>
        </header>
        {/* Breadcrumb*/}
        <div className="breadcrumb-holder container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
            <li className="breadcrumb-item active">Thể loại</li>
          </ul>
        </div>
        <section className="tables pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    <h3 className="h4">Tải xuống danh sách danh mục</h3>
                    <button onClick={()=>this.downloadExcel()} style={{ border: 0, background: "white" }}> <i className="fa fa-file-excel-o"
                        style={{fontSize: 18, color: '#1d7044'}}> Excel</i></button>
                  </div>
                  <form onSubmit={(event) => this.handleSubmit(event)}
                    className="form-inline md-form form-sm mt-0" style={{ justifyContent: 'flex-end', paddingTop: 5, paddingRight: 20 }}>
                    <div>
                      <i className="fa fa-search" aria-hidden="true"></i>
                      <input
                        name="searchText"
                        onChange={this.handleChange}
                        value={searchText}
                        className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                    </div>
                    <Link to="/categories/add" className="btn btn-primary" > Thêm mới</Link>
                  </form>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Hình ảnh</th>
                            <th style={{ textAlign: "center" }}>Hoạt động</th>
                            <th style={{ textAlign: "center" }}>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories && categories.length ? categories.map((item, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nameCategory}</td>
                                <td>{item.description}</td>
                                <td style={{ textAlign: "center" }}>
                                    <div className="fix-cart2">
                                      <img src={item.image} className="fix-img2" alt="avatar" />
                                    </div>                 
                                </td>
                                <td style={{ textAlign: "center" }}>{item.isActive ?
                                  <div className="i-checks">
                                    <input type="checkbox" checked={true} onChange={() => this.handleChangeCheckBox} className="checkbox-template" />
                                  </div>
                                  :
                                  <div className="i-checks">
                                    <input type="checkbox" checked={false} onChange={() => this.handleChangeCheckBox} className="checkbox-template" />
                                  </div>}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  <div>
                                    <span title='Edit' className="fix-action"><Link to={`categories/edit/${item.id}`}> <i className="fa fa-edit"></i></Link></span>
                                    <span title='Delete' onClick={() => this.handleRemove(item.id)} className="fix-action"><Link to="#"> <i className="fa fa-trash" style={{ color: '#ff00008f' }}></i></Link></span>
                                  </div>
                                </td>
                              </tr>
                            )
                          }) : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example" style={{ float: "right" }}>
                  <ul className="pagination">
                  <Paginator
                        pageSize={10}
                        totalElements={total}
                        onPageChangeCallback={(e) => {this.pageChange(e)}}
                      />
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Page Footer*/}
        <MyFooter></MyFooter>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_categories: (token, offset) => {
      return dispatch(actFetchCategoriesRequest(token, offset))
    },
    delete_category: (id, token) => {
      dispatch(actDeleteCategoryRequest(id, token))
    },
    find_categories: (token, searchText) => {
      return dispatch(actFindCategoriesRequest(token, searchText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)