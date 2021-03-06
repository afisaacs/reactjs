import React, { Component } from 'react'

class BadgeForm extends Component {

  handleClick = event => {
    console.log('Button was clicked')
  }

  render() {
    return (
      <div>
        <h1>{this.props.formtitle}</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="email" value={this.props.formValues.email} />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter} />
          </div>
          <button type="submit" onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
        {this.props.error && (
          <p className="text-danger">{this.props.error.message}</p>
        )}
      </div>
    )
  }
}

export default BadgeForm