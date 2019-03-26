import React from 'react';
import ReactDOM from 'react-dom';

/**
 * reactSprinkle
 * Allows user to add a custom html tag eg. test-tag into the page and
 * and Render the wrapped component into it.
 * Automatically parses json when passed into a prop to be available as an object in the react component.
 * @param {*} WrappedComponent
 * @param {*} customHtmlTag
 * @returns {*} WrappedComponent
 */
export default function reactSprinkle(WrappedComponent, customHtmlTag) {
    /**
     * Get the elements in the page
     */
    const elements = document.getElementsByTagName(customHtmlTag);

    /**
     * Loop through elements that are in the page, get props and render the WrappedComponent
     */
    Array.from(elements).forEach((element) => {
        element.innerHtml = '';

        let props = {};

        for (let i = 0, atts = element.attributes, n = atts.length; i < n; i++) {
            let propName = atts[i].nodeName,
                value = atts[i].value;

            try {
                value = JSON.parse(value);
            } catch (e) {}

            props[propName] = value;
        }

        ReactDOM.render(React.createElement(WrappedComponent, props, null), element);
    });

    /**
     * Return Wrapped Components
     */
    return WrappedComponent;
}
