import React from 'react';
import { createRoot } from 'react-dom/client';

export const createReactComponent = (
  container: HTMLElement,
  component: any,
  props: any,
  children?: any
) => {
  const root = createRoot(container);
  root.render(
    React.createElement(component, props, children)
  );
  
  return () => {
    root.unmount();
  };
};