import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Link, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class MobileHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: "top",
            modalVisible: false,
            action: 'Login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    };

    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };

    handleClick(e) {
        if (e.key = "register") {
            this.setState({ current: 'register' });
            this.setModalVisible(true);
        } else {
            {
                this.setState({ current: e.key });
            }
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName=r_userName&password=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_conformPassword=" + formData.r_conformPassword, myFetchOptions).
            then(response => response.json()).then(json => {
                this.setState({ userNickName: json.NickUserName, userid: json.UserId });

            });
        message.success('请求成功!');
        this.setModalVisible(false);
    };

    login(){
        this.setModalVisible(true);
    }

    render() {
        let {getFieldDecorator} = this.props.form;

        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type="user" />
            </Link>
            :
            <Icon type="user" onClick={this.login.bind(this)} />



        return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo" />
                    <span>ReactNews</span>
                    {userShow}
                </header>
                <Modal title="用户中心" wrapClassName="vertical-center" visible={this.state.modalVisible}
                    onCancel={() => this.setModalVisible(false)}
                    onOk={() => this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card">
                        <TabPane tab="注册" key="2">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    <Input placeholder="请输入帐号" {...getFieldDecorator('r_userName') }></Input>
                                </FormItem>
                                <FormItem label="密码">
                                    <Input placeholder="请输入密码" {...getFieldDecorator('r_password') }></Input>
                                </FormItem>
                                <FormItem label="确认密码">
                                    <Input placeholder="请确认密码" {...getFieldDecorator('r_confirmPassword') }></Input>
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        );
    };
}

export default MobileHeader = Form.create({})(MobileHeader);