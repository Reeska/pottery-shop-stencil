import {Component, h} from '@stencil/core';
import {books} from '../../constants/books';

@Component({
  tag: 'app-cart',
  styleUrl: 'app-cart.css',
  shadow: true
})
export class AppCart {
  items = books.slice(0, 2);
  total = 65;
  totalWithPromo = 50;

  render() {
    return (
      <ui-cart items={this.items} total={this.total} totalWithPromo={this.totalWithPromo}/>
    );
  }
}
