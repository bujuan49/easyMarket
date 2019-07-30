import React, { Component } from "react";
import { withRouter } from "react-router";

@withRouter
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dls">
        {this.props.accessories.map(item => (
          <dl key={item.id} onClick={() => this.detail(item.id, item.name)}>
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
          <dt />
          <dd>更多居家好物</dd>
        </dl>
      </div>
    );
  }
  detail = (id, name) => {
    this.props.history.push({
      pathname: `/home/goods/${id}`,
      state: { name: name }
    });
  };
}

export default List;
