import React, { Component } from 'react';
import { Button } from 'antd';

import './index.less';

export default class SayHello extends Component {
    render() {
        return (
            <div className="say-hello">
                <p>welcome!</p>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}