import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actFetchUsersRequest, actDeleteUserRequest, actFindUsersRequest } from '../../../redux/actions/user';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import MyFooter from '../../MyFooter/MyFooter';
import Paginator from 'react-js-paginator';
import {exportExcel} from '../../../utils/exportExcel'
const MySwal = withReactContent(Swal)

let token;
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      total: 0,
      currentPage: 1
    }
  }

  componentDidMount() {
   this.fetch_reload_data();
  }

  fetch_reload_data(){
    token = localStorage.getItem('_auth');
    this.props.fetch_users(token).then(res => {
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
    this.props.fetch_users(token, offset);
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
        await this.props.delete_user(id, token);
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
    this.props.find_users(token, searchText).then(res => {
      this.setState({
        total: res.total
      })
    })
  }

  downloadExcel = () => {
    const key = 'users'
    exportExcel(key)
  }

  render() {
    let { users } = this.props;
    const { searchText, total } = this.state;
    return (
      <div className="content-inner">
        {/* Page Header*/}
        <header className="page-header">
          <div className="container-fluid">
            <h2 className="no-margin-bottom">Người dùng</h2>
          </div>
        </header>
        {/* Breadcrumb*/}
        <div className="breadcrumb-holder container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
            <li className="breadcrumb-item active">Người dùng</li>
          </ul>
        </div>
        <section className="tables pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center">
                    <h3 className="h4">Tải xuống danh sách người dùng</h3>
                    <button onClick={()=>this.downloadExcel()} style={{ border: 0, background: "white" }}> <i className="fa fa-file-excel-o"
                        style={{fontSize: 18, color: '#1d7044'}}> Excel</i></button>
                  </div>
                  <form  onSubmit={(event) => this.handleSubmit(event)}
                   className="form-inline md-form form-sm mt-0" style={{ justifyContent: 'flex-end', paddingTop: 5, paddingRight: 20 }}>
                    <div>
                    <button style={{border: 0, background: 'white'}}><i className="fa fa-search" aria-hidden="true"></i></button>
                      <input
                       name="searchText"
                       onChange={this.handleChange}
                       value={searchText}
                       className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                    </div>
                    <Link to='/users/add' className="btn btn-primary" > Thêm</Link>
                  </form>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Tên</th>
                            <th style={{textAlign: "center"}}>Supper Admin</th>
                            <th style={{textAlign: "center"}}>Admin</th>
                            <th style={{textAlign: "center"}}>Nhân viên</th>
                            <th style={{textAlign: "center"}}>Người dùng</th>
                            <th style={{textAlign: "center"}}>Tình trang hoạt động</th>
                            <th style={{textAlign: "center"}}>Hành động</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users && users.length ? users.map((item, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.email}</td>
                                <td>{item.name}</td>
                                <td style={{textAlign: "center"}}>
                                  <div class="i-checks">
                                    {
                                      item.role.nameRole === 'superadmin' ? 
                                      <input type="radio" checked={true} onChange={() => this.handleChangeRadio} class="radio-template" />
                                      :
                                      <input type="radio" checked={false} onChange={() => this.handleChangeRadio} class="radio-template" />
                                    }                                 
                                  </div>
                                </td>
                                <td style={{textAlign: "center"}}>
                                  <div class="i-checks">
                                    {
                                      item.role.nameRole === 'admin' ? 
                                      <input type="radio" checked={true} onChange={() => this.handleChangeRadio} class="radio-template" />
                                      :
                                      <input type="radio" checked={false} onChange={() => this.handleChangeRadio} class="radio-template" />
                                    }                                 
                                  </div>
                                </td>
                                <td style={{textAlign: "center"}}>
                                  <div class="i-checks">
                                    {
                                      item.role.nameRole === 'staff' ? 
                                      <input type="radio" checked={true} onChange={() => this.handleChangeRadio} class="radio-template" />
                                      :
                                      <input type="radio" checked={false} onChange={() => this.handleChangeRadio} class="radio-template" />
                                    }                                 
                                  </div>
                                </td>
                                <td style={{textAlign: "center"}}>
                                  <div class="i-checks">
                                    {
                                      item.role.nameRole === 'user' ? 
                                      <input type="radio" checked={true} onChange={() => this.handleChangeRadio} class="radio-template" />
                                      :
                                      <input type="radio" checked={false} onChange={() => this.handleChangeRadio} class="radio-template" />
                                    }                                 
                                  </div>
                                </td>
                                <td style={{textAlign: "center"}}>{item.isActive ?
                                  <div className="i-checks">
                                    <input type="checkbox" checked={true} onChange={() => this.handleChangeCheckBox} className="checkbox-template" />
                                  </div>
                                  :
                                  <div className="i-checks">
                                    <input type="checkbox" checked={false} onChange={() => this.handleChangeCheckBox} className="checkbox-template" />
                                  </div>}
                                </td>
                                <td style={{textAlign: "center"}}>
                                  <div>
                                    <span title='Edit' className="fix-action"><Link to={`/users/edit/${item.id}`}> <i className="fa fa-edit"></i></Link></span>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_users: (token, offset) => {
      return dispatch(actFetchUsersRequest(token, offset))
    },
    delete_user: (id, token) => {
      dispatch(actDeleteUserRequest(id, token))
    },
    find_users: (token, searchText) => {
      return dispatch(actFindUsersRequest(token, searchText))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)