import { r as registerInstance, g as getElement, h } from './index-DgWrjH6D.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    count = 0;
    componentDidLoad() {
        // Wait for Vue to be available
        const checkVue = () => {
            if (window.Vue) {
                this.initializeVue();
            }
            else {
                setTimeout(checkVue, 100);
            }
        };
        checkVue();
    }
    initializeVue() {
        const Vue = window.Vue;
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
        return (h("div", { key: 'fdd97322df4c613bc22361d4ecfc26a41c313011' }, h("div", { key: 'd38c07de83a847265797f6f0e4073b1a9bd6852a', id: "vue-counter" }), h("style", { key: '91a7115d91a635fa37c649f573b8a68d55998008' }, `
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
        `)));
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
//# sourceMappingURL=my-component.entry.js.map

//# sourceMappingURL=my-component.entry.js.map