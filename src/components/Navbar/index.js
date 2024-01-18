import { SafeAreaView, View } from "react-native";
import { BlurView } from "expo-blur";
import React from "react";
import {
  DownloadButton,
  Header,
  HeaderTitle,
  DownloadText,
  Imagebar,
  Touchablelinebar,
  LeftWrapper,
} from "./styles";
import linebar from "../../assets/linebar.png";

const Navbar = () => {
  return (
    <>
      <SafeAreaView style={{ height: 30, backgroundColor: "#fff" }} />
      <BlurView
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "center",
          borderRadius: 8,
          padding: 12,
          position: "absolute",
          top: 70,
          zIndex: 100,
          backgroundColor: "white",
          opacity:0.8,
        }}
        tint="dark"
        intensity={10}
      >
        <HeaderTitle>Material Kit2</HeaderTitle>
        <LeftWrapper>
          <DownloadButton>
            <DownloadText>Free Download</DownloadText>
          </DownloadButton>
          <Touchablelinebar>
            <Imagebar source={linebar} />
          </Touchablelinebar>
        </LeftWrapper>
      </BlurView>
    </>
  );
};

export default Navbar;
