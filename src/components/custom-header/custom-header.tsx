import React, {Component} from 'react';
import {Text} from 'react-native';
import CustomWrapper from '../custom-wrapper/custom-wrapper';
import CustomChipscroll from '../custom-chipscroll/custom-chipscroll';
import style from './style';

interface CustomHeaderProps {
  title: string;
  data: any;
  onPressChip: (item: any) => void;
}

interface CustomHeaderStates {}

class CustomHeader extends Component<CustomHeaderProps, CustomHeaderStates> {
  constructor(props: CustomHeaderProps) {
    super(props);
    this.state = {};
  }

  renderTitle = () => {
    return (
      <CustomWrapper style={style.textWrapperStyle}>
        <Text style={style.textStyle}>{this.props.title}</Text>
      </CustomWrapper>
    );
  };

  onPressItem = item => {
    this.props.onPressChip(item);
  };

  renderChipScroll = () => {
    return (
      <CustomChipscroll
        data={this.props.data}
        onPress={item => this.onPressItem(item)}
      />
    );
  };

  render() {
    return (
      <CustomWrapper paddingHorizontal style={style.wrapperStyle}>
        {this.props.title ? this.renderTitle() : null}
        {this.renderChipScroll()}
      </CustomWrapper>
    );
  }
}

export default React.memo(CustomHeader);
