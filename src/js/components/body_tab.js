import React from 'React';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

export default class BodyTab extends React.Component {
    testmix() {
        MixinLog.log();
    };
    render() {

        return (
            <div>
                <span>子页面输入</span>
                <input type="text" onChange={this.props.handleChange} />
                <input type="button" value="测试mixin" onClick={this.testmix} />
            </div>
        )
    };
}

ReactMixin(BodyTab.prototype, MixinLog);

