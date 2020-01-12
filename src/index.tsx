import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
	msgText: string;
}

class App extends React.Component<AppProps> {
	render() {
		return <div>{this.props.msgText}</div>;
	}
}

ReactDOM.render(<App msgText="Hi there" />, document.querySelector('#root'));
