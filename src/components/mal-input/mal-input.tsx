import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'mal-input',
  styleUrl: 'mal-input.css',
  shadow: true,
})
export class MalInput {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
