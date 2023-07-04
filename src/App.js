import './App.css';
import React, { Component } from 'react'
import List from './components/List'
export default class App extends Component {


  state = {
    item: [],
    text: ''
  }

  handleChange = (t) => {
    this.setState({
      text: t.target.value
    })
  }


  handleClick = () => {
    this.setState({
      item: [...this.state.item, this.state.text],
      text: ''
    })
  }


  handleDelete = (key) => {

    const Olditems = [...this.state.item]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== key
    }
    )
    console.log(items)
    this.setState({
      item: items
    })
  }


  render() {
    return (
      <>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 shadow-lg mx-auto p-3">
              <h1 className='text-center'>Todo List</h1>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-9">
                    <input type="text" className='form-control' placeholder='Write here' value={this.state.text} onChange={this.handleChange} />
                  </div>
                  <div className="col-2">
                    <button className="btn btn-warning fw-bold" onClick={this.handleClick}>
                      Add
                      {console.log(this.state.item)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row my-5">
              {
                this.state.item.map((value, i) => {

                  return <List value={value} key={i} id={i} handleDelete={this.handleDelete} />

                })
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}


