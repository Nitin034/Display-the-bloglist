import React, { Component } from 'react'

export class Theory extends Component {
  render() {
    let {title, content} = this.props;
    return (
      <div className='my-3'>
        <div className="card text-center">
  <div className="card-header">
    NeverSettle67
  </div>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{content}</p>
    <a href="/" className="btn btn-sm btn-primary">Read more</a>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
      </div>
    )
  }
}

export default Theory
