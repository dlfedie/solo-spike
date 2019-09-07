import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
import StarRatingComponent from 'react-star-rating-component';
// import { StarRatingInput} from 'react-star-rating-input';
// import dotenv from 'dotenv';
// require('dotenv').config();


// const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY

class SearchForm extends Component {
    state = {
        search: '',
        results: [],
        rating: 1,
        value: 0
    }

    onChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    handleClick = (event) => {
        event.preventDefault();
        console.log('clicked button');
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=`)
            .then(response => {
                console.log('response from goog:', response.data.items);
                this.setState({
                    ...this.state,
                    results: response.data.items
                })
            }).catch(err => {
                console.log('error in GET', err);

            })

    }

    // handleChange = (event) => {
    //     this.setState({
    //         ...this.state,
    //         value: event.target.value
    //     })
    // }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {

        // let bookList = this.state.results.map((book) => {
        //     return <li>Title: {book.volumeInfo.title} Author: {book.volumeInfo.authors[0]} Cover: <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover" /> </li>
        // })

        return (
            <div>
                <form>
                    <Input focus onChange={this.onChange} placeholder="Search" />
                    <Button primary onClick={this.handleClick}>Search!</Button>
                </form>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                {/* <StarRatingInput
                    size={5}
                    value={this.state.value}
                    onChange={this.handleChange} /> */}
                <div>
                    {JSON.stringify(this.state)}
                    <ul>
                        {/* items go here */}
                        {/* {bookList} */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchForm;
