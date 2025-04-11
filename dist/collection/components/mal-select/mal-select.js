import { Host, h } from "@stencil/core";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { createReactComponent } from "../../utils/react-wrapper/react-wrapper";
export class MalSelect {
    el;
    /**
     * The name of the dropdown
     */
    name = '';
    /**
     * The data for the dropdown options
     */
    data = [];
    /**
     * The currently selected value
     */
    value;
    /**
     * Event emitted when the selection changes
     */
    valueChange;
    /**
     * Container for the React component
     */
    container;
    /**
     * Function to clean up React component
     */
    cleanup;
    /**
     * Component lifecycle methods
     */
    componentDidLoad() {
        this.renderReactComponent();
    }
    disconnectedCallback() {
        if (this.cleanup) {
            this.cleanup();
        }
    }
    onPropsChange() {
        this.renderReactComponent();
    }
    /**
     * Render the React component
     */
    renderReactComponent() {
        if (this.cleanup) {
            this.cleanup();
        }
        if (this.container) {
            this.cleanup = createReactComponent(this.container, Dropdown, {
                name: this.name,
                options: this.data,
                value: this.value,
                onChange: (e) => {
                    this.value = e.value;
                    this.valueChange.emit(e.value);
                },
                optionLabel: 'label', // Assuming your data has a 'label' property
                className: 'w-full md:w-14rem',
            });
        }
    }
    render() {
        return (h(Host, { key: '5d54f86d25e9fed371f02f0686f27fa5a461411c' }, h("div", { key: '8e5c14f842f9c80341351a81c0165edf02f9ab32', ref: (el) => this.container = el })));
    }
    static get is() { return "mal-select"; }
    static get originalStyleUrls() {
        return {
            "$": ["mal-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["mal-select.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the dropdown"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The data for the dropdown options"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The currently selected value"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "valueChange",
                "name": "valueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the selection changes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "onPropsChange"
            }, {
                "propName": "value",
                "methodName": "onPropsChange"
            }];
    }
}
//# sourceMappingURL=mal-select.js.map
