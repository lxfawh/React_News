var React = require('react');
var ReactDOM = require('react-dom');

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBody from './components/body';

import 'antd/dist/antd.css';


export default class Index extends React.Component {
	componentWillMount(){
        console.log('index will mount');
    }
    componentDidMount(){
        console.log('index did mount');
    }
	
	render() {
		return (
			<div>
				<ComponentHeader />
				<ComponentBody name="hello lxfawh"/>
				<ComponentFooter/>
			</div>

		)
	}
}
