import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('transactions') === null)
            localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    render() {
        return (
            <div>
                <TransactionForm
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <hr/>

            <table>
                <thead>
                   <tr>
                    <td><h1>Name</h1></td>
                    <td><h1>Mobile</h1></td>
                    <td><h1>Address</h1></td>
                    <td><h1>Category</h1></td>
                    <td><h1>Operation</h1></td>
                   </tr>
                </thead>

                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>

                                <td>{item.Name}</td>
                                <td>{item.Mobile}</td>
                                <td>{item.Address}</td>
                                <td>{item.Category}</td>

                                <td>
                                <button onClick={() => this.handleEdit(index)}>Edit</button>
                                <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default TransactionList

