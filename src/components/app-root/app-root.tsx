import {Component, h} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <ui-header>
          <h1>
            <stencil-route-link url="/">Pottery Shop Stencil</stencil-route-link>
          </h1>
          <ui-navbar>
            <ui-search/>
            <stencil-route-link url="/cart">
              <ui-cart-link count={2} />
            </stencil-route-link>
          </ui-navbar>
        </ui-header>
        <ui-main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-books' exact={true}/>
              <stencil-route url='/cart' component='app-cart'/>
            </stencil-route-switch>
          </stencil-router>
        </ui-main>
      </div>
    );
  }
}
