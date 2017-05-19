
import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {

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

    render() {
        let { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" class="register">
                <Button type="primary" htmlType="button">{this.props.userNickName}</Button>
                &npsp;&nbsp;
            <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &npsp;&nbsp;
                <Button type="dashed" htmlType="button">退出</Button>
            </Menu.Item>
            :
            <Menu.Item>
                <Icon type="user" />注册/登录
        </Menu.Item>

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src="./src/images/logo.png" alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"></Icon>头条
                            </Menu.Item>
                            <Menu.Item key="caijin">
                                <Icon type="appstore"></Icon>财经
                            </Menu.Item>
                            <Menu.Item key="car">
                                <Icon type="appstore"></Icon>汽车
                            </Menu.Item>
                            <Menu.Item key="shuma">
                                <Icon type="appstore"></Icon>数码
                            </Menu.Item>
                            <Menu.Item key="junshi">
                                <Icon type="appstore"></Icon>军事
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"></Icon>社会
                            </Menu.Item>
                            {userShow}
                        </Menu>

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
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
export default PCHeader = Form.create({})(PCHeader);