import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form>
        Book title:
        <input type="text" placeholder='To Kill a Mockingbird'/>
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;
