import React, {Component, createRef, PureComponent} from 'react';
import {Alert, SectionList, Text} from 'react-native';
import CustomWrapper from '../custom-wrapper/custom-wrapper';
import CustomCard from '../custom-card/custom-card';
import ApiManager from '../../api-manager/api-manager';
import style from './style';

interface CustomListProps {
  selectedId: number;
}

interface CustomListStates {
  listData: any;
  itemIndex: number;
}

class CustomList extends PureComponent<CustomListProps, CustomListStates> {
  constructor(props: CustomListProps) {
    super(props);
    this.state = {
      listData: [],
      itemIndex: 0,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = (date?: string) => {
    ApiManager.getMovies(date)
      .then((res: any) => {
        this.setState({listData: res});
      })
      .catch((err: any) => {
        console.log('error in movies=', err);
      });
  };

  componentDidUpdate() {}

  getCustomData = () => {
    let dict = {};
    let updatedArray = this.state.listData.results.filter((item: any) =>
      item.genre_ids.includes(this.props.selectedId),
    );
    dict = {
      release_date: this.state.listData.results[0].release_date,
      data: this.state.listData.results,
    };
    return [dict];
  };

  renderSectionHeader = (release_date: string) => {
    return (
      <CustomWrapper style={style.renderWrapperStyle}>
        <Text style={style.sectionTitleStyle}>
          {new Date(release_date).getFullYear()}
        </Text>
      </CustomWrapper>
    );
  };

  pullToRefresh = (event: any) => {
    let prevDate = new Date(
      this.state.listData.results[0].release_date,
    ).getFullYear();
    if (prevDate != 2012) {
      let newDate = prevDate - 1;
      this.getMovies(`${newDate}`);
    }
  };

  handleScroll = (event: any) => {
    let prevDate = new Date(
      this.state.listData.results[0].release_date,
    ).getFullYear();
    let newDate = new Date().getFullYear();
    if (prevDate != newDate) {
      this.getMovies(`${prevDate + 1}`);
    }
  };

  renderItemList = ({index, section}) => {
    if (index % 2 !== 0) {
      return null;
    }

    const item = section.data[index];
    const nextItem = section.data[index + 1];
    return (
      <CustomWrapper
        style={{
          flexDirection: 'row',
        }}>
        {item ? <CustomCard data={item} /> : null}
        {nextItem ? <CustomCard data={nextItem} /> : <CustomWrapper />}
      </CustomWrapper>
    );
  };

  sectionListRef = createRef(null);

  render() {
    return (
      <CustomWrapper style={{marginRight: -5}}>
        {this.state.listData.results ? (
          <SectionList
            ref={this.sectionListRef}
            sections={this.getCustomData()}
            renderItem={this.renderItemList}
            scrollEnabled
            onEndReached={event => {
              this.handleScroll(event);
            }}
            onStartReached={event => {
              this.pullToRefresh(event);
            }}
            onEndReachedThreshold={0.3}
            onStartReachedThreshold={0.3}
            bounces={false}
            renderSectionHeader={({section: {release_date}}) =>
              this.renderSectionHeader(release_date)
            }
          />
        ) : null}
      </CustomWrapper>
    );
  }
}

export default React.memo(CustomList);
