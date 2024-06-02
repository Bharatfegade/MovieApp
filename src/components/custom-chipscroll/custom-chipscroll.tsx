import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import CustomWrapper from '../custom-wrapper/custom-wrapper';
import style from './style';

export type tyData = {
  id: number;
  name: string;
};

interface CustomChipScrollProps {
  onPress: (item: tyData) => void;
  data: any;
}

interface CustomChipScrollStates {
  index: number;
  myData: [];
}

class CustomChipScroll extends Component<
  CustomChipScrollProps,
  CustomChipScrollStates
> {
  constructor(props: CustomChipScrollProps) {
    super(props);
    this.state = {
      index: 0,
      myData: [],
    };
  }

  componentDidUpdate() {
    if (this.state.myData.length == 0) {
      this.setState({myData: this.props.data.genres});
    }
    if (this.state.myData.findIndex(item => item.id == 0) < 0) {
      this.state.myData.unshift({id: 0, name: 'All'});
    }
  }

  renderItem = (item: tyData, index: number) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress(item);
          this.setState({index: index});
        }}
        style={[
          {
            backgroundColor: this.state.index == index ? '#FF0000' : '#5A5A5A',
            marginLeft: index == 0 ? 0 : 4,
          },
          style.renderWrapperStyle,
        ]}>
        <Text style={style.textStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <CustomWrapper style={style.wrapperStyle}>
        <FlatList
          data={this.state.myData}
          extraData={this.state.myData}
          renderItem={({item, index}) => {
            return this.renderItem(item, index);
          }}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </CustomWrapper>
    );
  }
}

export default React.memo(CustomChipScroll);
