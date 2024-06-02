import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import CustomHeader from "../../components/custom-header/custom-header";
import CustomWrapper from "../../components/custom-wrapper/custom-wrapper";
import CustomList from "../../components/custom-list/custom-list";
import ApiManager from "../../api-manager/api-manager";
import style from "./style";

interface HomeScreenProps {
}

interface HomeScreenStates {
    genreList: [];
    selectedId: number;
}

class HomeScreen extends Component<HomeScreenProps, HomeScreenStates> {
    constructor(props: HomeScreenProps) {
        super(props);
        this.state = {
            genreList: [],
            selectedId: 0
        }
    }

    componentDidMount() {
        this.getGenres();
    }

    componentDidUpdate() {
        if(this.state.genreList.length == 0) {
            this.getGenres();
        }
    }

    getGenres = () => {
        ApiManager.getGenres()
        .then((res)=>{
            this.setState({genreList: res})
        })
        .catch((err)=>{
            console.log("error of genres=", err);
        })
    }

    render() {
        return (
            <CustomWrapper style={style.wrapperStyle}>
                <CustomHeader onPressChip={(item)=> this.setState({selectedId: item.id})} title={'MoviePlex'} data={this.state.genreList}/>
                <CustomWrapper paddingHorizontal>
                    <CustomList selectedId={this.state.selectedId}></CustomList>
                </CustomWrapper>
            </CustomWrapper>
        );
    }
}

export default React.memo(HomeScreen);