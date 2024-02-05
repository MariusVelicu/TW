import React from 'react';
import AddBook from './AddBook'
export default class BookList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
           this.addBook = (book) => {
            var book1=this.state.data;
            book1.push(book);
            this.setState=({
                book:book1
            })
        }
    }

    render() {
        return (
            <div>
             <AddBook itemAdded={this.addBook} />
            </div>
        );
    }
}