import { EventEmitter } from '../../stencil-public-runtime';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export declare class MalSelect {
    el: HTMLElement;
    /**
     * The name of the dropdown
     */
    name: string;
    /**
     * The data for the dropdown options
     */
    data: any[];
    /**
     * The currently selected value
     */
    value: any;
    /**
     * Event emitted when the selection changes
     */
    valueChange: EventEmitter<any>;
    /**
     * Container for the React component
     */
    private container?;
    /**
     * Function to clean up React component
     */
    private cleanup?;
    /**
     * Component lifecycle methods
     */
    componentDidLoad(): void;
    disconnectedCallback(): void;
    onPropsChange(): void;
    /**
     * Render the React component
     */
    private renderReactComponent;
    render(): any;
}
