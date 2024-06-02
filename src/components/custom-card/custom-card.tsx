import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import CustomWrapper from '../custom-wrapper/custom-wrapper';
import {UrlEndpoint} from '../../constants/url-endpoint';
import style from './style';

interface CustomCardProps {
  data: any;
}

interface CustomCardStates {}

class CustomCard extends Component<CustomCardProps, CustomCardStates> {
  constructor(props: CustomCardProps) {
    super(props);
    this.state = {};
  }

  getImage = (path: string) => {
    return `${UrlEndpoint.imageUrl}` + `${path}`;
  };

  render() {
    return (
      <CustomWrapper style={style.wrapperStyle}>
        <Image
          source={{uri: this.getImage(this.props.data.poster_path)}}
          style={style.imageStyle}
          resizeMode={'stretch'}></Image>
        <CustomWrapper style={style.textWrapperStyle}>
          <Text style={style.textStyle}>{this.props.data.title}</Text>
        </CustomWrapper>
        <CustomWrapper style={style.ratingWrapperStyle}>
          <Text style={style.ratingTextStyle}>
            {this.props.data.vote_average.toFixed(1)}
          </Text>
        </CustomWrapper>
      </CustomWrapper>
    );
  }
}

export default React.memo(CustomCard);
