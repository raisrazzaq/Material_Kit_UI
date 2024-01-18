import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import MainBg from "../../assets/background.jpg";
import Navbar from "../../components/Navbar";
import laptop from "../../assets/laptop3.jpg";
import react from "../../assets/react.jpg";
import sketch from "../../assets/sketch.jpg";
import bootstrap from "../../assets/bootstrap5.jpg";
import vue from "../../assets/vue.jpg";
import angular from "../../assets/angular.jpg";
import tailwind from "../../assets/icon-tailwind.jpg";
import pinterest from "../../assets/pinterest.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import arrows from "../../assets/arrows.png";
import fb from "../../assets/FB.jpg";
import github from "../../assets/github.jpg";
import youtube from "../../assets/youtube.png";
import X from "../../assets/twiterBW.png";
import {
  Container,
  BgImage,
  LowerView,
  TitleHeading,
  TextWrapper,
  TextDiscription,
  styles,
  InfoWrapper,
  Counter,
  TextElement,
  TextElementDiscription,
  RotatingCard,
  CardText,
  CardDescription,
  DocumentationWrapper,
  TitleDoc,
  DescriptionText,
  Section,
  Textsection,
  TextHeading,
  Texthp,
  Textdiscript,
  BlockSection,
  TextBlocks,
  BlockDescription,
  CardContainer,
  CardImages,
  CardTitle,
  CardWrapper,
  CardExample,
  DocumentationCard,
  Overlay,
  OverlayText,
  OverlayTitle,
  OverlayDescription,
  ProjectCard,
  Titleprojectcard,
  DescriptionCard,
  PlugInCard,
  PluginTitle,
  Plugindescription,
  Arrowtext,
  OVerviewdev,
  Counting,
  Kitproducts,
  Authortitle,
  AuthorExample,
  AuthorExample1,
  Productdescription,
  StarDiv,
  LogoContainer,
  LogoIcon,
  UICard,
  UIcardText,
  UIcardDescription,
  DownloadButton,
  DownloadText,
  AvailabeTech,
  TechText,
  LogoImages,
  ImageContainer,
  LowerWrapper,
  LowerWrapperTitle,
  LowerWrapperDescription,
  SocialIconWrapper,
  SocialIcon,
  SocialIconText,
  SocialIconFB,
  SocialIconPIN,
  SocialImages,
  Arrowswrapper,
  Arrowicon,
  MaterialText,
  Sociallogo,
  Footer,
  FooterHeading,
  Footerdescription,
  FooterView,
  CopyrightWrapper,
  Texter,
} from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  InformationData,
  DocumentationData,
  CardImagesData,
  NavigationData,
  InputData,
  AttentionData,
  ElementData,
  CodedPagesData,
} from "../../utils/constants";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navbar />
      <ScrollView style={{ flex: 1 }}  showsVerticalScrollIndicator={false}>
        <Container>
          <BgImage source={MainBg}>
            <TextWrapper>
              <TitleHeading>Material Kit 2</TitleHeading>
              <TextDiscription>
                Free & Open Source Web UI Kit built over Bootstrap 5. Join over
                1.6 million developers around the world.
              </TextDiscription>
            </TextWrapper>
          </BgImage>
          <LowerView>
            {InformationData.map((item, index) => {
              return (
                <InfoWrapper key={index}>
                  <Counter>{item.number}</Counter>
                  <TextElement>{item.title}</TextElement>
                  <TextElementDiscription>
                    {item.description}
                  </TextElementDiscription>
                </InfoWrapper>
              );
            })}
            <RotatingCard>
              <CardText>Feel the Material Kit</CardText>
              <CardDescription>
                All the MUI components that you need in a development have been
                re-design with the new look.
              </CardDescription>
            </RotatingCard>
            {DocumentationData.map((item, index) => {
              const { name, description, iconName } = item;
              return (
                <DocumentationWrapper key={index}>
                  <Icon name={iconName} size={30} color="#2F88EC" />
                  <TitleDoc>{name}</TitleDoc>
                  <DescriptionText>{description}</DescriptionText>
                </DocumentationWrapper>
              );
            })}
            <Section>
              <Textsection>INFINITE COMBINATIONS</Textsection>
            </Section>
            <TextHeading>
              <Texthp>Huge collection of sections</Texthp>
              <Textdiscript>
                We have created multiple options for you to put together and
                customise into pixel perfect pages.
              </Textdiscript>
            </TextHeading>
            <BlockSection>
              <TextBlocks>Design Blocks</TextBlocks>
              <BlockDescription>
                A selection of 45 page sections that fit perfectly in any
                combination
              </BlockDescription>
            </BlockSection>
            {CardImagesData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardExample>{item.example}</CardExample>
                </CardWrapper>
              );
            })}
            <BlockSection>
              <TextBlocks>Navigation</TextBlocks>
              <BlockDescription>
                30+ components that will help go through the pages
              </BlockDescription>
            </BlockSection>
            {NavigationData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardExample>{item.example}</CardExample>
                </CardWrapper>
              );
            })}

            <BlockSection>
              <TextBlocks>Input Areas</TextBlocks>
              <BlockDescription>
                50+ elements that you need for text manipulation and insertion
              </BlockDescription>
            </BlockSection>
            {InputData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardExample>{item.example}</CardExample>
                </CardWrapper>
              );
            })}

            <BlockSection>
              <TextBlocks>Attention Catchers</TextBlocks>
              <BlockDescription>
                20+ Fully coded components that popup from different places of
                the screen
              </BlockDescription>
            </BlockSection>
            {AttentionData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardExample>{item.example}</CardExample>
                </CardWrapper>
              );
            })}

            <BlockSection>
              <TextBlocks>Elements</TextBlocks>
              <BlockDescription>
                80+ carefully crafted small elements that come with multiple
                colors and shapes
              </BlockDescription>
            </BlockSection>
            {ElementData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardExample>{item.example}</CardExample>
                </CardWrapper>
              );
            })}

            <Section>
              <Textsection>BOOST CREATIVITY</Textsection>
            </Section>
            <TextHeading>
              <Texthp>With our coded pages</Texthp>
              <Textdiscript>
                The easiest way to get started is to use one of our pre-built
                example pages.
              </Textdiscript>
            </TextHeading>

            {CodedPagesData.map((item, index) => {
              return (
                <CardWrapper key={index}>
                  <CardContainer>
                    <CardImages source={item.image} />
                    {item.lockIcon && (
                      <Icon
                        name="lock"
                        size={16}
                        color={"white"}
                        style={styles.lockIcon}
                      />
                    )}
                  </CardContainer>
                  <CardTitle>{item.title}</CardTitle>
                </CardWrapper>
              );
            })}
            <BlockSection>
              <TextBlocks>
                Presentation Pages for Company, Landing Pages, Blogs and Support
              </TextBlocks>
              <BlockDescription>
                These is just a small selection of the multiple possibitilies
                you have. Focus on the business, not on the design.
              </BlockDescription>
            </BlockSection>
            <DocumentationCard source={laptop}>
              <Overlay>
                <OverlayText>Built by developers</OverlayText>
                <OverlayTitle>Complex Documentation</OverlayTitle>
                <OverlayDescription>
                  From colors, cards, typography to complex elements, you will
                  find the full documentation. Play with the utility classes and
                  you will create unlimited combinations for our components.
                </OverlayDescription>
                <OverlayDescription>
                  Read docs
                  <Icon
                    name="arrow-forward"
                    size={20}
                    color={"white"}
                    style={styles.arrow}
                  />
                </OverlayDescription>
              </Overlay>
            </DocumentationCard>
            <ProjectCard>
              <Icon name="flag" size={26} color={"white"} style={styles.flag} />
              <Titleprojectcard>Getting Started</Titleprojectcard>
              <DescriptionCard>
                Check the possible ways of working with our product and the
                necessary files for building your own project.
              </DescriptionCard>
              <DescriptionCard>
                Let's start{" "}
                <Icon
                  name="arrow-forward"
                  size={26}
                  color={"white"}
                  style={styles.arrow}
                />
              </DescriptionCard>
            </ProjectCard>
            <PlugInCard>
              <Icon
                name="flag"
                size={30}
                color={"#257EEA"}
                style={styles.flag}
              />
              <PluginTitle>Plugins</PluginTitle>
              <Plugindescription>
                Get inspiration and have an overview about the plugins that we
                used to create the Material Kit.
              </Plugindescription>
              <TouchableOpacity style={{ justifyContent: "flex-start" }}>
                <Arrowtext>
                  Read More
                  <Icon
                    name="arrow-forward"
                    size={25}
                    color={"#257EEA"}
                    style={styles.arrow}
                  />
                </Arrowtext>
              </TouchableOpacity>
            </PlugInCard>
            <PlugInCard>
              <Icon
                name="apps"
                size={30}
                color={"#257EEA"}
                style={styles.flag}
              />
              <PluginTitle>Components</PluginTitle>
              <Plugindescription>
                Material Kit is giving you a lot of pre-made components, that
                will help you to build UI's faster.
              </Plugindescription>
              <Arrowtext>
                Read More
                <Icon
                  name="arrow-forward"
                  size={30}
                  color={"#257EEA"}
                  style={styles.flag}
                />
              </Arrowtext>
            </PlugInCard>
            <OVerviewdev>Trusted by over</OVerviewdev>
            <Counting>1,679,477+ web developers</Counting>
            <Kitproducts>
              Many Fortune 500 companies, startups, universities and
              governmental institutions love Creative Tim's products.
            </Kitproducts>
            <Authortitle>Nick Willever</Authortitle>
            <View style={{ marginLeft: 20 }}>
              <AuthorExample>
                <Icon
                  name="schedule"
                  size={20}
                  color={"#9A9EB2"}
                  style={styles.sedule}
                />
                1 day ago
              </AuthorExample>
            </View>
            <Productdescription>
              "This is an excellent product, the documentation is excellent and
              helped me get things done more efficiently."
            </Productdescription>
            <StarDiv>
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
            </StarDiv>
            <ProjectCard>
              <Titleprojectcard>Shailesh Kushwaha</Titleprojectcard>
              <View style={{ marginLeft: 20 }}>
                <AuthorExample1>
                  <Icon
                    name="schedule"
                    size={20}
                    color={"white"}
                    style={styles.sedule}
                  />
                  1 day ago
                </AuthorExample1>
              </View>
              <DescriptionCard>
                "I found solution to all my design needs from Creative Tim. I
                use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!"
              </DescriptionCard>
              <StarDiv>
                <Icon
                  name="star"
                  size={20}
                  color={"white"}
                  style={styles.star}
                />
                <Icon
                  name="star"
                  size={20}
                  color={"white"}
                  style={styles.star}
                />
                <Icon
                  name="star"
                  size={20}
                  color={"white"}
                  style={styles.star}
                />
                <Icon
                  name="star"
                  size={20}
                  color={"white"}
                  style={styles.star}
                />
                <Icon
                  name="star"
                  size={20}
                  color={"white"}
                  style={styles.star}
                />
              </StarDiv>
            </ProjectCard>
            <Authortitle>Samuel Kamuli</Authortitle>
            <View style={{ marginLeft: 20 }}>
              <AuthorExample>
                <Icon
                  name="schedule"
                  size={20}
                  color={"#9A9EB2"}
                  style={styles.sedule}
                />
                3 weeks ago
              </AuthorExample>
            </View>
            <Productdescription>
              "Great product. Helped me cut the time to set up a site. I used
              the components within instead of starting from scratch. I highly
              recommend for developers who want to spend more time on the
              backend!."
            </Productdescription>
            <StarDiv>
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
              <Icon
                name="star"
                size={20}
                color={"#9A9EB2"}
                style={styles.star}
              />
            </StarDiv>
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(52, 71, 103, 0.2)",
                margin: 20,
              }}
            />
            <LogoContainer>
              <LogoIcon>Apple</LogoIcon>
              <LogoIcon>facebook</LogoIcon>
            </LogoContainer>
            <LogoContainer>
              <LogoIcon>NASA</LogoIcon>
              <LogoIcon>vodafone</LogoIcon>
            </LogoContainer>
            <LogoContainer>
              <LogoIcon>DigitalOcean</LogoIcon>
            </LogoContainer>
            <UICard>
              <UIcardText>
                Do you love this awesome UI Kit for ReactJS & MUI?
              </UIcardText>
              <UIcardDescription>
                Cause if you do, it can be yours for FREE. Hit the button below
                to navigate to Creative Tim where you can find the Design System
                in HTML. Start a new project or give an old Bootstrap project a
                new look!
              </UIcardDescription>
              <DownloadButton>
                <DownloadText>DOWNLOAD NOW</DownloadText>
              </DownloadButton>
            </UICard>
            <AvailabeTech>
              <TechText>Available on these technologies</TechText>
              <ImageContainer>
                <LogoImages source={bootstrap} />
                <LogoImages source={tailwind} />
                <LogoImages source={vue} />
              </ImageContainer>
              <ImageContainer>
                <LogoImages source={angular} />
                <LogoImages source={react} />
                <LogoImages source={sketch} />
              </ImageContainer>
            </AvailabeTech>
            <LowerWrapper>
              <LowerWrapperTitle>Thank you for your support!</LowerWrapperTitle>
              <LowerWrapperDescription>
                We deliver the best web products
              </LowerWrapperDescription>
            </LowerWrapper>
            <SocialIconWrapper>
              <SocialIcon>
                <SocialIconText>
                  <SocialImages source={twitter} />
                  TWEET
                </SocialIconText>
              </SocialIcon>
              <SocialIconFB>
                <SocialIconText>
                  <SocialImages source={facebook} />
                  SHARE
                </SocialIconText>
              </SocialIconFB>
              <SocialIconPIN>
                <SocialIconText>
                  <SocialImages source={pinterest} />
                  PIN IT
                </SocialIconText>
              </SocialIconPIN>
            </SocialIconWrapper>
          </LowerView>
          <Arrowswrapper>
            <Arrowicon source={arrows} />
            <MaterialText>Material Kit 2</MaterialText>
            <Sociallogo>
              <Arrowicon source={fb} />
              <Arrowicon source={X} />
              <Arrowicon source={github} />
              <Arrowicon source={youtube} />
            </Sociallogo>
          </Arrowswrapper>
          <Footer>
            <FooterView>
              <FooterHeading>Company</FooterHeading>
              <Footerdescription>About Us</Footerdescription>
              <Footerdescription>Freebies</Footerdescription>
              <Footerdescription>Premium Tools</Footerdescription>
              <Footerdescription>Blog</Footerdescription>
            </FooterView>
            <FooterView>
              <FooterHeading>Resources</FooterHeading>
              <Footerdescription>Illustrations</Footerdescription>
              <Footerdescription>Bits & Snippets</Footerdescription>
              <Footerdescription>Affiliate Program</Footerdescription>
            </FooterView>
          </Footer>
          <Footer>
            <FooterView>
              <FooterHeading>Help & Support</FooterHeading>
              <Footerdescription>Contact Us</Footerdescription>
              <Footerdescription>Knowledge Center</Footerdescription>
              <Footerdescription>Custom Development</Footerdescription>
              <Footerdescription>Sponsorships</Footerdescription>
            </FooterView>
            <FooterView>
              <FooterHeading>Legal</FooterHeading>
              <Footerdescription>Terms & Conditions</Footerdescription>
              <Footerdescription>Privacy Policy</Footerdescription>
              <Footerdescription>Licenses (EULA)</Footerdescription>
            </FooterView>
          </Footer>
          <CopyrightWrapper>
            <Texter>
              All rights reserved. Copyright © 2024 Material Kit by Creative
              Tim.
            </Texter>
          </CopyrightWrapper>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
