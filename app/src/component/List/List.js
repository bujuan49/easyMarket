import React, { Component } from 'react';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props);
        return (
            <div className="dls">
              {this.props.accessories.map(item => (
                <dl key={item.id}>
                  <dt>
                    <img src={item.list_pic_url} alt="" />
                  </dt>
                  <dd>
                    <span>{item.name}</span>
                    <span>￥{item.retail_price}</span>
                  </dd>
                </dl>
              ))}
              <dl>
                <dt></dt>
                <dd>更多居家好物</dd>
              </dl>
            </div>
        );
    }
}

export default List;