import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  width: 95%;
  background-color: #ccced2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border-radius: 7px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  padding: 12px;
  margin-top: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: rgb(52, 71, 103);
`;

export const DownloadButton = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  background-color: #267feb;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const DownloadText = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: 600;
`;

export const Touchablelinebar = styled.TouchableOpacity``;

export const Imagebar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 10px;
`;
export const LeftWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#fff",
  },
});
