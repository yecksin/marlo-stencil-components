import { r as registerInstance, h, g as getElement } from './index-DgWrjH6D.js';

const malMultiselectCss = ":host{display:block}";

const MalMultiselect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("h1", { key: '97edf002ad5fa3db6ad6b8a5b5f5de3168c2c978' }, "Hello World");
    }
};
MalMultiselect.style = malMultiselectCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    count = 0;
    componentDidLoad() {
        // Wait for Vue to be available and initialize the app
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
        return (h("div", { key: 'e0e4a7ac0f3d9f1c6c494700d2df6689369caa5d' }, h("div", { key: '7e46f240da2d34e601416a6d1a35d46be44c02f7', id: "vue-counter" }), h("style", { key: '7d923e34682dff8be910ba992fcdb1bbe6c1db04' }, `
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

export { MalMultiselect as mal_multiselect, MyComponent as my_component };
//# sourceMappingURL=mal-multiselect.my-component.entry.js.map

//# sourceMappingURL=mal-multiselect_2.entry.js.map