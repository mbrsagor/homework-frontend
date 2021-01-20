import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {listTypes } from '../store/actions/typeAction';


class Dashboard extends Component {

    componentDidMount() {
        document.title = "Dashboard";
        this.props.listTypes()
    }

    render() {
        let { auth, types } = this.props
        // console.log(types.results)
        return (
            <div className="type">
                {auth.isAuthenticated ? 
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-7">
                                    <h2>Dashboard</h2>
                                    <p>User ID: {auth.user.user_id}</p>
                                </div>
                                <div className="col-md-5 text-right">
                                    <button className="btn btn-success btn-sm">Add New</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Color</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {types.results && types.results.map(type => (
                                        <tr key={type.id}>
                                            <td>{type.title}</td>
                                            <td>{type.color}</td>
                                            <td> {type.is_active ? <span className="bg-success p-1 text-light">active</span> : <span className="bg-warning p-1 text-light">Deactive</span>}</td>
                                            <td>{type.created_at}</td>
                                            <td>
                                                <button
                                                    onClick={() => console.log("Updated")} className="btn btn-info btn-sm">
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => console.log("Deleted")}
                                                    className="btn btn-danger ml-2 btn-sm">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className="card text-center">
                        <div className="card-header">
                            <h4 className="card-title">Dashboard</h4>
                        </div>
                        <div className="card-body">
                            <h1>Sorry, this is authAction</h1>
                        </div>
                        <div className="card-footer">
                            <Link className="btn btn-primary" to='/login'>Login</Link>
                            <Link className="btn btn-primary ml-2" to='/registration'>Registration</Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    types: state.types
})

export default connect(mapStateToProps, {listTypes}) (Dashboard)