import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";
@inject("home")
@observer
@withRouter
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { type, list } = this.props;
    return (
      <>
        {type.map(item => (
          <div className="list_cateGoryName" key={item.id}>
            <span className="ti">{item.name}</span>
            <div className="dls">
              {item.goodsList.map(v => (
                <dl key={v.id} onClick={() => this.detail(v.id, v.name)}>
                  <dt>
                    <img src={v.list_pic_url} alt="" />
                  </dt>
                  <dd>
                    <span>{v.name}</span>
                    <span>￥{v.retail_price}</span>
                  </dd>
                </dl>
              ))}
              {
                <dl onClick={() => this.living(item.id, item)}>
                  <dt>
                    <span style={{ lineHeight: "144px" }}>
                      {" "}
                      更多{item.name}好物
                    </span>
                  </dt>
                  <dd
                    style={{
                      marginTop: "-250px",
                      border: "1px solid #ccc",
                      display: "inline-block",
                      padding: "0 10px",
                      borderRadius: "50px"
                    }}
                  >
                    <span>&gt;</span>
                  </dd>
                </dl>
              }
            </div>
          </div>
        ))}
      </>
    );
  }
  detail = (id, name) => {
    this.props.history.push({
      pathname: `/home/goods/${id}`,
      state: { name: name }
    });
  };
  living = (id, item) => {
    this.props.history.push({
      pathname: `/home/classifylist/${id}`,
      params: item
    });
  };
}

export default List;
