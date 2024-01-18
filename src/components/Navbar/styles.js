import styled from "styled-components/native";
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";


// export const Header = styled.View`
//   width: 90%;
//   background-color: rgba(204, 206, 210, 0.5);
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   align-self: center;
//   border-radius: 7px;
//   padding: 12px;
//   position: absolute;
//   top: 40px;
//   z-index: 100;
//   /* elevation:1; */
// `;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #344767;
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

export default styles=StyleSheet.create({


})