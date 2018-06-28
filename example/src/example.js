import React from 'react';
// import renderInCustomHtmlTag from '../../index.js';

import renderInCustomHtmlTag from 'react-render-custom-html-tag';

class ExampleComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const props = this.props;

        console.log({ props })

        return (
            <React.Fragment>
                <h1>Custom Html Tag</h1>
                <p>In this example we are using a custom html tag called <b>test-html-component</b></p>
                <p>View source to see how we add the custom html to the page</p>
                <div>
                    <h2>Props</h2>
                    <p>list of all props passed in from html, see them in console also.</p>
                    <ul>
                        { Object.keys(props).map((item, i) => <li key={i}>{ item }: { JSON.stringify(props[item]) }</li>)}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

renderInCustomHtmlTag(ExampleComponent, 'test-html-component')
