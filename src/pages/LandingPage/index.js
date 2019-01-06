import React from 'react';
import {Link} from "react-router-dom";
import { Card, Col, Row } from 'antd';

const LandingPage = () => (
  <div style={{ background: '#ECECEC', padding: '30px', margin: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Link to="/day/1">
        <Card title="Day 1" bordered={false}>JavaScript Drums Kit</Card>
        </Link>
      </Col>
    </Row>
  </div>
);

LandingPage.propTypes = {
};

LandingPage.defaultProps = {
};

export default LandingPage;
