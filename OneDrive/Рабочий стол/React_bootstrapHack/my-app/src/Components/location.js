import { Component } from "react"
import './location.css'

export default class Location extends Component {
  
   render() {
    return <div>
    <div className="m-3">
        <div className="text-center">
            <button id="button_with_stik">
                <div className="Stick"></div>
                <div className="Stick"></div>
                <div className="Stick"></div>
            </button>
        </div>

        <p className="m-5" Style="text-align:center">ул.Северная, 405</p>
        <button type="button" className="btn btn-primary m-0 container-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.props.onClick}>Сообщить</button>
    </div>
    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            ...
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
        </div>
   }
}
