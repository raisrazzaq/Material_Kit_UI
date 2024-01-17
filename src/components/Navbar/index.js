import { SafeAreaView, View } from "react-native";
import React from "react";
import {
  DownloadButton,
  Header,
  HeaderTitle,
  DownloadText,
  Imagebar,
  Touchablelinebar,
  LeftWrapper,
  styles,
} from "./styles";
import linebar from "../../assets/linebar.png";

const Navbar = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header>
        <HeaderTitle>Material Kit2</HeaderTitle>
        <LeftWrapper>
          <DownloadButton>
            <DownloadText>Free Download</DownloadText>
          </DownloadButton>
          <Touchablelinebar>
            <Imagebar source={linebar} />
          </Touchablelinebar>
        </LeftWrapper>
      </Header>
    </SafeAreaView>
  );
};

export default Navbar;
