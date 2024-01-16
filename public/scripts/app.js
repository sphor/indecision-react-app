'use strict';

// JSX 

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision React App'
    ),
    React.createElement(
        'p',
        null,
        'Paragraph Text'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
