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
    let { type } = this.props;
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
                    <span>
                      更多{item.name}好物
                    </span>
                  </dt>
                  <dd>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg==" alt=""/>
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
