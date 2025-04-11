import { Component, Host, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { createReactComponent } from '../../utils/react-wrapper/react-wrapper';

@Component({
  tag: 'mal-select',
  styleUrl: 'mal-select.css',
  shadow: false, // Set to false to allow PrimeReact styles to work properly
})
export class MalSelect {
  @Element() el: HTMLElement;
  
  /**
   * The name of the dropdown
   */
  @Prop() name: string = '';
  
  /**
   * The data for the dropdown options
   */
  @Prop() data: any[] = [];
  
  /**
   * The currently selected value
   */
  @Prop({ mutable: true }) value: any;
  
  /**
   * Event emitted when the selection changes
   */
  @Event() valueChange: EventEmitter<any>;

  /**
   * Container for the React component
   */
  private container?: HTMLDivElement;
  
  /**
   * Function to clean up React component
   */
  private cleanup?: () => void;

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

  @Watch('data')
  @Watch('value')
  onPropsChange() {
    this.renderReactComponent();
  }

  /**
   * Render the React component
   */
  private renderReactComponent() {
    if (this.cleanup) {
      this.cleanup();
    }

    if (this.container) {
      this.cleanup = createReactComponent(
        this.container,
        Dropdown,
        {
          name: this.name,
          options: this.data,
          value: this.value,
          onChange: (e) => {
            this.value = e.value;
            this.valueChange.emit(e.value);
          },
          optionLabel: 'label', // Assuming your data has a 'label' property
          className: 'w-full md:w-14rem',
        }
      );
    }
  }

  render() {
    return (
      <Host>
        <div ref={(el) => this.container = el as HTMLDivElement}></div>
      </Host>
    );
  }
}