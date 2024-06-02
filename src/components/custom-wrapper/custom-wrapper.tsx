import React, {Component} from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';
import style from './style';

interface CustomWrapperProps {
  paddingHorizontal?: boolean;
  paddingVertical?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: any;
}

interface CustomWrapperStates {}

class CustomWrapper extends Component<CustomWrapperProps, CustomWrapperStates> {
  constructor(props: CustomWrapperProps) {
    super(props);
    this.state = {};
  }

  getVerticalPadding = () => {
    return this.props.paddingVertical ? style.verticalPadding : null;
  };

  getHorizantalPadding = () => {
    return this.props.paddingHorizontal ? style.horizontalPadding : null;
  };

  render() {
    return (
      <View
        style={[
          style.wrapperStyle,
          this.getVerticalPadding(),
          this.getHorizantalPadding(),
          this.props.style,
        ]}>
        {this.props.children}
      </View>
    );
  }
}

export default React.memo(CustomWrapper);
