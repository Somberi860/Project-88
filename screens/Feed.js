import React,{Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, Image} from "react-native";
import { FlatList } from "react-native-web";
import PostCard from "./PostCard";

export default class Feed extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea}/>
                <View style = {styles.appTitle}>
                    <View style = {styles.appIcon}>
                        <Image
                        source = {require("../assets/logo.png")}
                        style = {styles.iconImage}></Image>
                    </View>
                    <View style = {styles.appTitleTextContainer}>
                        <Text style = {styles.appTitleText}>Spectagram</Text>
                    </View>
                </View>
                <View style = {styles.cardContainer}>
                    <FlatList
                    keyExtractor = {this.keyExtractor}
                    data = {posts}
                    renderItem = {this.renderItem}>

                    </FlatList>
                    </View> 
            </View>
        )
    }

    renderItem =({item:post})=>{
        return <PostCard post={post} navigator={this.props.navigation}/>;
    };
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.2,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justufyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    cardContainer: {
        flex: 0.85
    }
})