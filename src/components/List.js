import React, { Component } from 'react'

export default class List extends Component {
    render() {

        return (
            <div className="container my-2">
                <div className="row">

                    <div className="col-9"><li className='shadow-lg'>{this.props.value}</li></div>
                    <div className="col-2"><button className="btn btn-sm btn-danger" onClick={() => { this.props.handleDelete(this.props.id) }}>Delete</button></div>

                </div>
            </div>
        )
    }
}
