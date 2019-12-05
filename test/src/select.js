import React, { Component } from 'react';
import { Select, Radio } from 'antd';
import 'antd/dist/antd.css'

const Option = Select.Option;

const children = [];
for (let i = 0; i <= 100 ;) {
    children.push(<Option key={i.toString(36) + i}>{i + '%'}</Option>);
     i = i + 5;
}

class MySelect extends Component {

    state = {
        size: 'default',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }



    render() {
        const { size } = this.state;
        return (
            <div>

                <Select
                    mode="multiple"
                    size={size}
                    placeholder="Please select"
                    defaultValue={[0 + '%']}
                    onChange={this.handleChange}
                    style={{ width: '500px' }}
                >
                    {children}
                </Select>

            </div>
        );
    }
}

export default MySelect;