import React, { Component } from 'react'
import AddNewCategoryForm from './AddNewCategoryForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class TransactionForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex === -1)
            return {
                Name: '',
                Mobile: '',
                Address: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list !== this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    state = {
        key:'',
        Category:''
    }

     change = (e) => {
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
        let key = e.target.value;
        this.setState({ key: key, Category: label});
    }

    render() {
          
        const list=[];  
        var apple = JSON.parse(localStorage.getItem('document'));
        list.push(apple.category);

        return (
            <div>
             <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="Name" placeholder="Name" onChange={this.handleInputChange} value={this.state.Name} /><br />
                <input name="Mobile" placeholder="Mobile" onChange={this.handleInputChange} value={this.state.Mobile} /><br />
                <input name="Address" placeholder="Address" onChange={this.handleInputChange} value={this.state.Address} /><br />
                
                <form>
                 
                  <select onChange={this.change} value={this.state.value}>
                     <option value="0">--Select--</option>
                     <option value="1">Engineer</option>
                     <option value="2">{list}</option>

                 </select>
                <input name="Category" placeholder="Category" onChange={this.handleInputChange} value={this.state.Category} /><br />

                </form>

                <button onClick={() => this.handleSubmit}>Submit</button>
            </form>
            
                 <Router>
                   <Link to="/AddNewCategory" className="btn btn-primary">CreateNewCategory</Link> <br />

                   <Switch>
                     <Route path="/AddNewCategory">
                       <AddNewCategoryForm />
                     </Route>
                   </Switch>

                 </Router>

          </div>
        )
    }
}

export default TransactionForm
