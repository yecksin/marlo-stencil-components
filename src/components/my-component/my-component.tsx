import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Element() el!: HTMLElement;
  @State() count: number = 0;

  componentDidLoad() {
    // Wait for Vue to be available
    const checkVue = () => {
      if ((window as any).Vue) {
        this.initializeVue();
      } else {
        setTimeout(checkVue, 100);
      }
    };
    checkVue();
  }

  private initializeVue() {
    const Vue = (window as any).Vue;
    const app = Vue.createApp({
      data() {
        return {
          count: 0
        };
      },
      methods: {
        increment() {
          this.count++;
        },
        decrement() {
          this.count--;
        }
      },
      template: `
        <div class="counter-container">
          <h2>Vue Counter in Stencil</h2>
          <div class="counter">
            <button @click="decrement">-</button>
            <span>{{ count }}</span>
            <button @click="increment">+</button>
          </div>
        </div>
      `
    });

    // Mount Vue app to the container
    const container = this.el.shadowRoot.querySelector('#vue-counter');
    if (container) {
      app.mount(container);
    }
  }

  render() {
    return (
      <div>
        <div id="vue-counter"></div>
        <style>{`
          .counter-container {
            padding: 20px;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          .counter {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
          }
          button {
            padding: 8px 16px;
            font-size: 18px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
          }
          button:hover {
            background-color: #45a049;
          }
          span {
            font-size: 24px;
            font-weight: bold;
            min-width: 40px;
          }
        `}</style>
      </div>
    );
  }
}
