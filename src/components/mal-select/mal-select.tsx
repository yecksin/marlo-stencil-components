import { Component, Host, h, Prop, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'mal-select',
  styleUrl: 'mal-select.css',
  shadow: false, // Set to false to allow PrimeReact styles to work properly
})
export class MalSelect {
  @Element() el!: HTMLElement;
  
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

  private reactApp: any = null;

  componentDidLoad() {
    // Wait for React and PrimeReact to be available, then initialize
    const checkReact = () => {
      if ((window as any).React && (window as any).ReactDOM && (window as any).primereact) {
        this.initializeReactDropdown();
      } else {
        setTimeout(checkReact, 100);
      }
    };
    checkReact();
  }

  disconnectedCallback() {
    // Clean up React component when element is removed
    if (this.reactApp && (window as any).ReactDOM) {
      (window as any).ReactDOM.unmountComponentAtNode(this.el.querySelector('#react-dropdown'));
    }
  }

  @Watch('data')
  @Watch('value')
  onPropsChange() {
    // Re-render when props change
    this.initializeReactDropdown();
  }

  private initializeReactDropdown() {
    const React = (window as any).React;
    const ReactDOM = (window as any).ReactDOM;
    
    // Check if primereact is available
    if (!React || !ReactDOM) {
      console.error('React or ReactDOM not found');
      return;
    }

    // Ensure primereact global object exists
    const primereact = (window as any).primereact || {};
    
    // Create a complete mock of the style system if needed
    const createEmptyStyleHook = () => ({
      bind: () => {},
      unbind: () => {},
      value: {}
    });
    
    // Create or extend core if needed
    if (!primereact.core) {
      primereact.core = {};
    }
    
    // Setup complete style system mocks
    primereact.core.useStyle = primereact.core.useStyle || createEmptyStyleHook;
    primereact.core.useMountEffect = primereact.core.useMountEffect || function(fn) { setTimeout(fn, 0); };
    primereact.core.ObjectUtils = primereact.core.ObjectUtils || { 
      equals: (a, b) => JSON.stringify(a) === JSON.stringify(b),
      isEmpty: (value) => value === null || value === undefined || value === '' 
    };
    
    // Get PrimeReact Dropdown from either individual component or full bundle
    const PrimeDropdown = primereact.dropdown?.Dropdown || primereact.Dropdown;
    
    if (!PrimeDropdown) {
      console.error('PrimeReact Dropdown not found');
      return;
    }

    // Use simple props to avoid style system dependencies
    const dropdown = React.createElement(PrimeDropdown, {
      name: this.name,
      options: this.data,
      value: this.value,
      onChange: (e) => {
        this.value = e.value;
        this.valueChange.emit(e.value);
      },
      optionLabel: 'label',
      className: 'w-full',
      placeholder: 'Select an option',
      filter: true,
      filterPlaceholder: 'Search...',
      filterInputAutoFocus: true,
      virtualScrollerOptions: { 
        itemSize: 25,
        showLoader: true,
        loadingTemplate: loadingTemplate,
        delay: 25,
      },
    });

    // Find container element
    const container = this.el.querySelector('#react-dropdown');
    if (container) {
      // Use try/catch to handle potential render errors
      try {
        ReactDOM.render(dropdown, container);
      } catch (err) {
        console.error('Error rendering PrimeReact dropdown:', err);
      }
    }
  }

  render() {
    return (
      <Host>
        <div id="react-dropdown"></div>
      </Host>
    );
  }
}

const loadingTemplate = (options: any) => {

  const React = (window as any).React;
  const ReactDOM = (window as any).ReactDOM;

  // Check if primereact is available
  if (!React || !ReactDOM) {
    console.error('React or ReactDOM not found');
    return;
  }

  // Ensure primereact global object exists
  const primereact = (window as any).primereact || {};

  const Skeleton = primereact.skeleton?.Skeleton || primereact.Skeleton;

  if (!Skeleton) {
    console.error('PrimeReact Skeleton not found');
    return;
  }

  // Use React.createElement instead of JSX to avoid Stencil compilation
  return React.createElement('div', {
    className: 'flex align-items-center p-2 justify-content-center',
    style: {  
      height: '25px',
      backgroundColor: options.odd ? '#fff' : '#fafafa', // Use actual color values instead of Tailwind classes
    }
  }, React.createElement(Skeleton, {
      style: {
        width: '50%',
        borderRadius: '0.375rem',
        padding: '0.25rem 0.25rem',
        margin: '0.25rem 0',
      }
  }));
};