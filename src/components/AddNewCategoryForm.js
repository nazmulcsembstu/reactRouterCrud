import React, { Component } from 'react'

class AddNewCategoryForm extends Component {

  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            category: ''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}

handleFormSubmit(e) {
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            category: this.documentData.category,
    })
} else {
    this.setState({
        category: ''
    })
}
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Category:</label>
                    <input type="text" name="category" className="form-control" value={this.state.category} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">AddCategory</button>
            </form>
        </div>
    ) 
  }
}

export default AddNewCategoryForm