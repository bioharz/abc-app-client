/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';


declare global {
  interface HTMLAbcAppElement extends HTMLStencilElement {

  }
  var HTMLAbcAppElement: {
    prototype: HTMLAbcAppElement;
    new (): HTMLAbcAppElement;
  };
  interface HTMLElementTagNameMap {
    'abc-app': HTMLAbcAppElement;
  }
  interface ElementTagNameMap {
    'abc-app': HTMLAbcAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'abc-app': JSXElements.AbcAppAttributes;
    }
  }
  namespace JSXElements {
    export interface AbcAppAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAbcLoginElement extends HTMLStencilElement {

  }
  var HTMLAbcLoginElement: {
    prototype: HTMLAbcLoginElement;
    new (): HTMLAbcLoginElement;
  };
  interface HTMLElementTagNameMap {
    'abc-login': HTMLAbcLoginElement;
  }
  interface ElementTagNameMap {
    'abc-login': HTMLAbcLoginElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'abc-login': JSXElements.AbcLoginAttributes;
    }
  }
  namespace JSXElements {
    export interface AbcLoginAttributes extends HTMLAttributes {

    }
  }
}


declare global {
  interface HTMLAbcTestElement extends HTMLStencilElement {

  }
  var HTMLAbcTestElement: {
    prototype: HTMLAbcTestElement;
    new (): HTMLAbcTestElement;
  };
  interface HTMLElementTagNameMap {
    'abc-test': HTMLAbcTestElement;
  }
  interface ElementTagNameMap {
    'abc-test': HTMLAbcTestElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'abc-test': JSXElements.AbcTestAttributes;
    }
  }
  namespace JSXElements {
    export interface AbcTestAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
