
import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import PCNewsBlock from './pc_news_block';

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/01.jpg" alt="1" /></div>
                                    <div><img src="./src/images/02.jpg" alt="2" /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="新闻" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" border="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" border="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}