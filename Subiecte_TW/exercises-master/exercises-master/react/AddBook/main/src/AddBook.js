import React from 'react';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookTitle: '',
            bookType: '',
            bookPrice: 0
        };
    }
handleChange = (evt) => {
            this.setState({
                [evt.target.name] : evt.target.value
            })
        }
  
    render(){
        return (
        <div>
                <input id="book-title"  name="book-title" onChange={this.handleChange} />
                 <input id="book-type"  name="book-type" onChange={this.handleChange} />
                 <input id="book-price"  name="book-price" onChange={this.handleChange}/>
                 <input type="button" value="add book" onClick={this.handleAdd}/>
        </div>
        );
    }

    handleAdd = () => {
        let item = {...this.state};
        this.props.itemAdded(item);
    }
}