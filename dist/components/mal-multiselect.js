import { p as proxyCustomElement, H, h } from './p-htVXLZqF.js';

const malMultiselectCss = ":host{display:block}";

const MalMultiselect$1 = /*@__PURE__*/ proxyCustomElement(class MalMultiselect extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h("h1", { key: '97edf002ad5fa3db6ad6b8a5b5f5de3168c2c978' }, "Hello World");
    }
    static get style() { return malMultiselectCss; }
}, [1, "mal-multiselect"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["mal-multiselect"];
    components.forEach(tagName => { switch (tagName) {
        case "mal-multiselect":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MalMultiselect$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MalMultiselect = MalMultiselect$1;
const defineCustomElement = defineCustomElement$1;

export { MalMultiselect, defineCustomElement };
//# sourceMappingURL=mal-multiselect.js.map

//# sourceMappingURL=mal-multiselect.js.map