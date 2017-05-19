import React from 'react';
import ReactDOM from 'react-dom';
export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            miniHeader:false
        }
    };
    changeHeader (){
        this.setState({
            miniHeader:!this.state.miniHeader
        });
    };
    render() {
        const styleHeader = {
            backgroundColor: "#eee",
            color: "#ff0000",
            paddingBottom: (this.state.miniHeader)?"3px":"20px"
        };

        return (
            // <header className="myheader">
        //    <header style={styleHeader} onClick={this.changeHeader.bind(this)}>
            <header style={styleHeader} >
                <h1>这里是头部区域</h1>
            </header>
        )
    }
}