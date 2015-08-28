// React powered "client" starts here (written in ES2015)
import './cssnext/app.css';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>Hello, Tint</div>
        );
    }
}

React.render(
    <App />,
    document.getElementById('app')
);
