import React from 'react';
import ReactDOM from 'react-dom';
import BodyTab from './body_tab';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
// import {DataPicker} from 'antd';



export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'LXFAWH'
        }
    };

    componentWillMount() {
        console.log('body will mount');
        // alert(this.props.name)
    };
    componentDidMount() {
        console.log('body did mount');
    };

    test() {
        MixinLog.log();
    };
    changeInfo() {
        this.setState({
            username: "lllxxxfff"
        });

        // var myBtn=document.getElementById('btn');
        // ReactDOM.findDOMNode(myBtn).style.color="red";

        console.log(this.refs.btn);
        this.refs.btn.style.color = "red";

    };
    handleChange(event) {
        this.setState({
            username: event.target.value
        });

    }

    render() {
        var userName = 'lxfawh';
        var state = true;
        var oldname = this.state.username;
        // setTimeout(() => { 
        //     this.setState({ username:oldname+'lxf'}) 
        // }, 2000);
        return (
            <div>
                {/*<DataPicker/>*/}
                <p>这里是body</p>
                <p>{userName == '' ? '未登录' : '欢迎' + this.state.username}</p>
                <input type="button" value={this.props.name} disabled={!state} onClick={this.test.bind(this)} />
                <input type="button" value="submit" id="btn" ref="btn" onClick={this.changeInfo.bind(this)} />
                <BodyTab handleChange={this.handleChange.bind(this)} />
                {/*asfdasfds*/}
            </div>
        )
    };
}

ReactMixin(BodyIndex.prototype, MixinLog);