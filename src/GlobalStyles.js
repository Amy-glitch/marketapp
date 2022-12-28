import { StyleSheet } from "react-native";

const colors = StyleSheet.create({
    pColor: '#FF8C18',
    pColorDarker: '#954A00',
    pColorLighter: '#FFCF9F',
    sColor: '#D4DCCD',
    aColor: '#6B717E'

})

const globalStyles = StyleSheet.create({
    bottomBarColor: colors.pColorLighter,
    bottomTabFocused: colors.pColorDarker,
    bottomTabNotFocused: colors.pColor,
    profileColor: colors.pColor,
    searchInputFont: colors.pColorDarker,
    searchInputBorder: colors.pColorLighter,
    signInBtn: colors.pColorLighter,
    signUpBtn: colors.pColorLighter,
    pillColor: colors.pColorLighter,
    myItemColor: colors.pColorLighter,
    profileButton: colors.pColorLighter,
    //market screens
    itemCardColor: colors.pColorLighter,
    itemLabelColor: colors.pColorDarker,
    //aditemscreen
    addItemButtons: colors.pColorLighter,
    addItemPhotos: colors.pColorLighter


})


export default globalStyles;