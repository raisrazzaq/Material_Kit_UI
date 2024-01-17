import styled from "styled-components";
import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("screen");

export const Container = styled.View`
  flex: 1;
  background-color: #f0f2f5;
  margin-top: 30px;
  position: relative;
`;

export const BgImage = styled.ImageBackground`
  object-fit: cover;
  height: ${height - 220}px;
`;

export const TextWrapper = styled.View`
  margin-top: 140px;
  width: 90%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const TitleHeading = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 700;
`;

export const TextDiscription = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 300;
  text-align: center;
  line-height: 30px;
`;

export const LowerView = styled.View`
  flex: 1;
  width: 90%;
  align-self: center;
  background-color: #fcfcfe;
  z-index: 10;
  margin-top: -190px;
  border-radius: 10px;
  elevation: 5;
`;

export const InfoWrapper = styled.View`
  justify-content: center;
  margin-top: 50px;
`;

export const Counter = styled.Text`
  font-size: 40px;
  color: #328ced;
  font-weight: 700;
  text-align: center;
`;

export const TextElement = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-top: 12px;
  text-align: center;
`;

export const TextElementDiscription = styled.Text`
  font-size: 15px;
  width: 100%;
  padding: 8px 30px;
  color: rgb(123, 128, 154);
  text-align: center;
`;

export const RotatingCard = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
  width: 90%;
  padding: 96px 24px;
  background-color: #61aff1;
  border-radius: 15px;
`;

export const CardText = styled.Text`
  color: white;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export const CardDescription = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  padding: 0px 20px;
  line-height: 22px;
`;

export const DocumentationWrapper = styled.View`
  justify-content: center;
  margin-top: 30px;
  padding-left: 25px;
`;

export const TitleDoc = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-top: 12px;
`;

export const DescriptionText = styled.Text`
  font-size: 14px;
  margin-top: 7px;
  color: #7b809a;
`;

export const Section = styled.View`
  height: 30px;
  width: 190px;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: #aecef7;
  margin-top: 60px;
  border-radius: 7px;
`;

export const Textsection = styled.Text`
  font-size: 15px;
  color: #095bc6;
  font-weight: 700;
`;

export const TextHeading = styled.View`
  margin-top: 30px;
  align-items: center;
  padding: 10px 10px;
`;

export const Texthp = styled.Text`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
`;

export const Textdiscript = styled.Text`
  font-size: 16px;
  color: #7b809a;
  text-align: center;
  margin-top: 8px;
`;
export const BlockSection = styled.View`
  padding-left: 20px;
  margin-top: 40px;
`;

export const TextBlocks = styled.Text`
  font-size: 30px;
  font-weight: 800;
`;

export const BlockDescription = styled.Text`
  color: #7b809a;
  font-size: 16px;
  margin-top: 8px;
`;

export const CardWrapper = styled.View`
  margin-top: 30px;
`;

export const CardContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 170px;
  width: 280px;
  border-radius: 15px;
  margin-top: 35px;
  elevation: 5;
  overflow: hidden;
  position: relative;
`;

export const CardImages = styled.Image`
  height: 160px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-top: -10px;
  object-fit: fill;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  margin-left: 25px;
  margin-top: 7px;
`;

export const CardExample = styled.Text`
  font-size: 14px;
  color: #7e829c;
  margin-left: 25px;
  font-weight: 600;
  margin-top: 2px;
`;

export const DocumentationCard = styled.ImageBackground`
  margin-top: 50px;
  width: 95%;
  height: 370px;
  flex: 1;
  align-self: center;
  resize: cover;
  opacity: 0.8;
  position: relative;
`;
export const Overlay = styled.View`
  /* background-color: rgba(0, 0, 0 0.5); */
  position: absolute;
  flex: 1;
  top: 0;
  z-index: 25;
  /* border-radius: 15px; */
`;
export const OverlayText = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 700;
  margin-top: 10px;
`;
export const OverlayTitle = styled.Text`
  color: white;
  font-size: 35px;
  font-weight: 800;
`;

export const OverlayDescription = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

export const ProjectCard = styled.View`
  background-color: #3c95ef;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
  border-radius: 15px;
  width: 90%;
  elevation: 5;
`;

export const Titleprojectcard = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 15px;
`;

export const DescriptionCard = styled.Text`
  color: white;
  font-size: 16px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const PlugInCard = styled.View`
  background-color: #f8f9fa;
  justify-content: center;
  align-self: center;
  margin-top: 10px;
  border-radius: 15px;
  width: 90%;
  elevation: 5;
`;

export const PluginTitle = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 15px;
`;
export const Plugindescription = styled.Text`
  color: #9a9eb2;
  font-size: 16px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const Arrowtext = styled.Text`
  color: #257eea;
  font-size: 16px;
  margin-left: 15px;
  margin-bottom: 10px;
`;

export const OVerviewdev = styled.Text`
  font-size: 40px;
  font-weight: 800;
  margin-top: 60px;
  text-align: center;
`;

export const Counting = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #257eea;
  margin-top: 10px;
`;

export const Kitproducts = styled.Text`
  color: #9a9eb2;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  padding: 0 12px;
  margin-top: 10px;
`;

export const Authortitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-left: 25px;
  margin-top: 60px;
`;

export const AuthorExample = styled.Text`
  color: #9a9eb2;
  font-size: 17px;
  font-weight: bold;
`;

export const AuthorExample1 = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Productdescription = styled.Text`
  color: #9a9eb2;
  font-size: 17px;
  margin-top: 50px;
  margin-left: 20px;
  padding: 0 10px;
`;

export const StarDiv = styled.View`
  color: #9a9eb2;
  flex-direction: row;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 30px;
`;

export const StarDiv1 = styled.View`
  color: #9a9eb2;
  flex-direction: row;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 30px;
`;

export const LogoContainer = styled.View`
  margin-top: 35px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

export const LogoIcon = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #9a9eb2;
`;

export const UICard = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 50px;
  width: 90%;
  padding: 96px 24px;
  background-color: #414249;
  border-radius: 15px;
`;

export const UIcardText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const UIcardDescription = styled.Text`
  color: white;
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
  padding: 0px 5px;
  line-height: 22px;
`;

export const DownloadButton = styled.TouchableOpacity`
  height: 40px;
  width: 130px;
  background-color: #267feb;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 50px;
`;

export const DownloadText = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: 600;
`;

export const AvailabeTech = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TechText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export const LogoImages = styled.Image`
  height: 60px;
  width: 60px;
`;

export const LowerWrapper = styled.View`
  margin-top: 50px;
`;

export const LowerWrapperTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding: 5px 10px;
  margin-left: 20px;
`;

export const LowerWrapperDescription = styled.Text`
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 20px;
  color: #9a9eb2;
`;

export const SocialIconWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const SocialIcon = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  background-color: #267feb;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
`;

export const SocialIconFB = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  background-color: #3b5998;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const SocialIconPIN = styled.TouchableOpacity`
  height: 40px;
  width: 100px;
  background-color: #cc2127;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
`;

export const SocialImages = styled.Image`
  height: 20px;
  width: 20px;
`;

export const SocialIconText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const Arrowswrapper = styled.View`
  margin-top: 30px;
  margin-left: 15px;
`;

export const Arrowicon = styled.Image`
  height: 30px;
  width: 30px;
`;

export const MaterialText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #546580;
  margin-top: 30px;
`;

export const Sociallogo = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
  gap: 30px;
`;

export const FooterView = styled.View``;

export const FooterHeading = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Footerdescription = styled.Text`
  font-size: 16px;
  color: #546580;
`;

export const CopyrightWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Texter = styled.Text`
  color: #546580;
  font-size: 12px;
  margin-left: 15px;
  text-align: center;
  margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lockIcon: {
    backgroundColor: "#000",
    position: "absolute",
    padding: 7,
    borderRadius: 50,
    top: 10,
    right: 10,
  },
  arrow: {
    fontWeight: "bold",
    marginTop: 10,
  },
  flag: {
    marginTop: 15,
    marginLeft: 15,
  },
  sedule: {
    marginLeft: 20,
    fontWeight: "bold",
  },
  star: {
    marginTop: 30,
    marginLeft: 25,
  },
});
