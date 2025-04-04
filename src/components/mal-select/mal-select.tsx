import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mal-select',
  styleUrl: 'mal-select.css',
  shadow: true,
})
export class MalSelect {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
