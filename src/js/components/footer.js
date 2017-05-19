import React from 'react';
import ReactDOM from 'react-dom';
var footerCss = require('../../css/footer.css');

export default class Footer extends React.Component{
    render(){
        console.log(footerCss);
        return(
            
            <footer className={footerCss.miniFooter}>
                <p>底部区域·版权声明</p>
            </footer>
        )
    }
}