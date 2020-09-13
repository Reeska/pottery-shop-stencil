import { Component, h } from '@stencil/core';
import {books} from '../../constants/books';

@Component({
  tag: 'app-books',
  styleUrl: 'app-books.css',
  shadow: true
})
export class AppBooks {

  render() {
    return (
      <ui-book-list books={books} />
    );
  }
}
