import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleGetPhoneNumber({code}) {
    console.log(code)
  }

  render() {
    return (
      <View className="index">
        <AtButton
          className="nl-button"
          type="primary"
          circle={true}
          openType="getPhoneNumber"
          onGetPhoneNumber={this.handleGetPhoneNumber.bind(this)}
        >
          获取手机号
        </AtButton>

        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle={true}>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
      </View>
    );
  }
}