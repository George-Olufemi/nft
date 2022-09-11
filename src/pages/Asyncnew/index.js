import React from "react";

import { Column, Row, Text, Img, Button, Line, Stack, List } from "components";

const AsyncnewPage = () => {
  return (
    <>
      <Column className="bg-gray_900 font-spacegrotesk items-end mx-[auto] lg:pb-[518px] xl:pb-[592px] 2xl:pb-[666px] 3xl:pb-[799px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-gray_900 items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
            <Text className="cursor-pointer font-bold hover:font-normal lg:ml-[63px] xl:ml-[72px] 2xl:ml-[82px] 3xl:ml-[98px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[34px] xl:text-[39px] 2xl:text-[44px] 3xl:text-[52px] text-white_A700 w-[auto]">
              async
            </Text>
            <Text className="cursor-pointer hover:font-normal font-normal lg:ml-[588px] xl:ml-[672px] 2xl:ml-[756px] 3xl:ml-[907px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
              Menu
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
              alt="arrowdown"
            />
            <Button
              className="font-normal lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[8%]"
              shape="RoundedBorder20"
            >
              Sign Up
            </Button>
            <Img
              src="images/img_twitter.svg"
              className="lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:w-[17px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[27px]"
              alt="twitter"
            />
            <Img
              src="images/img_user.svg"
              className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[2%]"
              alt="user"
            />
          </Row>
        </header>
        <Line className="bg-gray_600 h-[1px] mt-[2px] w-[100%]" />
        <Text className="font-bold leading-[normal] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[82px] 3xl:mt-[98px] lg:text-[49px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[75px] text-center text-white_A700">
          Join async to onboard 1<br /> millon to Full-stack web
          <br />
          development
        </Text>
        <Text className="font-normal lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_200 w-[auto]">
          Get our free “7 days of web2” emails or explore our learning paths
        </Text>
        <Row className="bg-bluegray_900 items-center justify-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius41 w-[43%]">
          <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_200 w-[auto]">
            Your email address
          </Text>
          <Button
            className="font-normal lg:ml-[163px] xl:ml-[186px] 2xl:ml-[210px] 3xl:ml-[252px] mr-[4px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[24%]"
            size="md"
          >
            Subscribe
          </Button>
        </Row>
        <Text className="font-normal lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_200 w-[auto]">
          Sponsored by
        </Text>
        <Row className="items-center justify-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[28%]">
          <Stack className="bg-bluegray_900 3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius20 w-[48%]">
            <Img
              src="images/img_lightbulb.svg"
              className="absolute lg:h-[45px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] inset-[0] justify-center m-[auto] w-[47%]"
              alt="lightbulb"
            />
          </Stack>
          <Stack className="bg-bluegray_900 3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:px-[21px] xl:px-[24px] 2xl:px-[27px] 3xl:px-[32px] rounded-radius20 w-[48%]">
            <Img
              src="images/img_logo.svg"
              className="absolute lg:h-[30px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] inset-y-[0] my-[auto] right-[5%] w-[55%]"
              alt="Logo"
            />
          </Stack>
        </Row>
        <Text className="font-bold 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[49px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[75px] text-white_A700 w-[auto]">
          What we deliver
        </Text>
        <Stack className="lg:h-[1059px] xl:h-[1211px] 2xl:h-[1362px] 3xl:h-[1635px] mt-[3px] w-[93%]">
          <Column className="absolute items-center left-[0] w-[93%]">
            <Stack className="lg:h-[525px] xl:h-[600px] 2xl:h-[675px] 3xl:h-[810px] w-[100%]">
              <Stack className="absolute lg:h-[525px] xl:h-[600px] 2xl:h-[675px] 3xl:h-[810px] left-[10%] right-[8%] w-[82%]">
                <Row className="absolute bottom-[0] justify-between w-[100%]">
                  <div className="backdrop-opacity-[0.5] bg-teal_700_4c blur-[150.00px] lg:h-[348px] xl:h-[398px] 2xl:h-[448px] 3xl:h-[537px] lg:mb-[175px] xl:mb-[200px] 2xl:mb-[225px] 3xl:mb-[270px] rotate-[12deg] rounded-radius50 lg:w-[347px] xl:w-[397px] 2xl:w-[447px] 3xl:w-[536px]"></div>
                  <div className="backdrop-opacity-[0.5] bg-indigo_900_4c blur-[150.00px] lg:h-[339px] xl:h-[387px] 2xl:h-[436px] 3xl:h-[523px] lg:mt-[184px] xl:mt-[210px] 2xl:mt-[237px] 3xl:mt-[284px] rotate-[12deg] rounded-radius50 lg:w-[338px] xl:w-[386px] 2xl:w-[435px] 3xl:w-[522px]"></div>
                </Row>
                <div className="absolute backdrop-opacity-[0.5] bg-purple_800_4c blur-[150.00px] lg:h-[514px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] inset-[0] justify-center m-[auto] rotate-[12deg] rounded-radius50 lg:w-[513px] xl:w-[587px] 2xl:w-[660px] 3xl:w-[792px]"></div>
              </Stack>
              <Row className="absolute bg-gray_900 border-bw02 border-solid border-white_A700 items-center lg:p-[48px] xl:p-[55px] 2xl:p-[62px] 3xl:p-[74px] right-[0] rounded-radius20 top-[12%] w-[49%]">
                <Img
                  src="images/img_developmentski.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  alt="DevelopmentSki"
                />
                <Text className="font-normal leading-[normal] lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-white_A700 w-[65%]">
                  Gain practical experience
                  <br />
                  and develop your skills
                  <br />
                  as you go.
                </Text>
              </Row>
              <Row className="absolute bg-gray_900 border-bw02 border-solid border-white_A700 bottom-[17%] lg:p-[42px] xl:p-[48px] 2xl:p-[55px] 3xl:p-[66px] right-[0] rounded-radius20 w-[49%]">
                <Img
                  src="images/img_resume.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  alt="Resume"
                />
                <Text className="font-normal leading-[normal] lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-white_A700 w-[59%]">
                  Take practice tests and
                  <br />
                  exams to improve your
                  <br />
                  ability as a developer.
                </Text>
              </Row>
              <Row className="absolute bg-gray_900 border-bw02 border-solid border-white_A700 items-center left-[0] lg:p-[37px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-radius20 top-[12%] w-[49%]">
                <Img
                  src="images/img_course.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"
                  alt="Course"
                />
                <Text className="font-normal leading-[normal] lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-white_A700 w-[60%]">
                  An engaging method of
                  <br />
                  learning the abilities <br />
                  required to land a career <br />
                  in web development.
                </Text>
              </Row>
              <Row className="absolute bg-gray_900 border-bw02 border-solid border-white_A700 bottom-[17%] items-center left-[0] lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius20 w-[49%]">
                <Stack className="3xl:h-[110px] lg:h-[71px] xl:h-[81px] 2xl:h-[92px] lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] w-[16%]">
                  <Img
                    src="images/img_eye.svg"
                    className="absolute bottom-[8%] lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] right-[7%] w-[27%]"
                    alt="eye"
                  />
                  <Img
                    src="images/img_handshake.png"
                    className="absolute 3xl:h-[110px] lg:h-[71px] xl:h-[81px] 2xl:h-[92px] w-[100%]"
                    alt="Handshake"
                  />
                </Stack>
                <Text className="font-normal leading-[normal] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mt-[1px] not-italic lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px] text-white_A700 w-[53%]">
                  Utilizing our discord <br />
                  network to establish <br />
                  connections and relationship with other techies.
                </Text>
              </Row>
            </Stack>
            <Text className="font-bold lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:text-[49px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[75px] text-white_A700 w-[auto]">
              Explore Our Learning Paths
            </Text>
            <List
              className="lg:gap-[24px] xl:gap-[27px] 2xl:gap-[31px] 3xl:gap-[37px] grid grid-cols-3 min-h-[auto] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-bluegray_900 items-center lg:pb-[28px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_rectangle60.png"
                  className="lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                  alt="RectangleSixty"
                />
                <Column className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[84%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                    Product design
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[98%]">
                    You’ll know how to design beautiful <br />
                    websites and be familiar with UI/UX
                    <br />
                    Design.
                  </Text>
                  <Line className="bg-white_A700 h-[1px] ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]" />
                  <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[47%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Start Learning
                    </Text>
                    <Img
                      src="images/img_cut.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[3px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                      alt="cut"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-bluegray_900 lg:pb-[28px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_rectangle61.png"
                  className="lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                  alt="RectangleSixtyOne"
                />
                <Column className="lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[83%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                    Frontend Development
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[90%]">
                    You’ll be able to code fluently in
                    <br />
                    React.js and be able to start <br />
                    building your own web apps.
                  </Text>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                  <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[48%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Start Learning
                    </Text>
                    <Img
                      src="images/img_cut.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[3px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                      alt="cut One"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="bg-bluegray_900 items-center lg:pb-[28px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] rounded-radius20 w-[100%]">
                <Img
                  src="images/img_rectangle62.png"
                  className="lg:h-[181px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[279px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]"
                  alt="RectangleSixtyTwo"
                />
                <Column className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[83%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-white_A700 w-[auto]">
                    Backend Development
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[92%]">
                    You’ll know how to use Backend
                    <br />
                    tools and be familiar with Django
                    <br />
                    and Python.
                  </Text>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                  <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[48%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] text-white_A700 w-[auto]">
                      Start Learning
                    </Text>
                    <Img
                      src="images/img_cut.svg"
                      className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[3px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                      alt="cut Two"
                    />
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
          <Img
            src="images/img_capa1.svg"
            className="absolute bottom-[38%] lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] right-[0] w-[15%]"
            alt="CapaOne"
          />
        </Stack>
        <Stack className="3xl:h-[1150px] lg:h-[745px] xl:h-[852px] 2xl:h-[958px] lg:mt-[122px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] w-[100%]">
          <Column className="absolute bg-bluegray_901 lg:p-[44px] xl:p-[50px] 2xl:p-[57px] 3xl:p-[68px] w-[100%]">
            <Row className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[94%]">
              <Img
                src="images/img_ellipse5.png"
                className="lg:h-[140px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[215px] lg:mt-[108px] xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] rounded-radius895 w-[14%]"
                alt="EllipseFive"
              />
              <Column className="lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[83%]">
                <Text className="font-bold lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] lg:text-[49px] xl:text-[56px] 2xl:text-[63px] 3xl:text-[75px] text-white_A700 w-[auto]">
                  Testimonials
                </Text>
                <Column className="font-poppins lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[26%]">
                  <Text className="font-medium lg:text-[24px] xl:text-[27px] 2xl:text-[31px] 3xl:text-[37px] text-white_A700 w-[auto]">
                    John Doe
                  </Text>
                  <Text className="font-normal mt-[4px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                    Front-end Trainee at Async
                  </Text>
                </Column>
                <Row className="justify-evenly lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <Text className="font-inter font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
                    ❝
                  </Text>
                  <Text className="font-normal font-poppins leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-white_A700 w-[95%]">
                    I had already began with my journey in front-end web
                    development, and it still found it pretty hard to design
                    useful websites. Thanks to Async, the experience here is one
                    to always remember.{" "}
                  </Text>
                  <Text className="font-inter font-normal lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
                    ❞
                  </Text>
                </Row>
              </Column>
            </Row>
            <List
              className="font-poppins gap-[0] lg:mb-[20px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] min-h-[auto] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[42%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] xl:mr-[9px] lg:my-[30px] xl:my-[34px] 2xl:my-[39px] 3xl:my-[46px] w-[98%]">
                <Img
                  src="images/img_frame33.png"
                  className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius50 lg:w-[124px] xl:w-[142px] 2xl:w-[160px] 3xl:w-[192px]"
                  alt="FrameThirtyThree"
                />
                <Column className="lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[62%]">
                  <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[100%]">
                    “Async provides the ability to learn web <br />
                    development with ease and step by step <br />
                    guidance from beginner to milestone level.’’
                  </Text>
                  <Line className="bg-blue_100 h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                  <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                    John E, Dev Ops
                  </Text>
                  <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    Freelance Developer
                  </Text>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:my-[30px] xl:my-[34px] 2xl:my-[39px] 3xl:my-[46px] w-[100%]">
                <Img
                  src="images/img_frame33_160X160.png"
                  className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius50 lg:w-[124px] xl:w-[142px] 2xl:w-[160px] 3xl:w-[192px]"
                  alt="FrameThirtyThree One"
                />
                <Column className="py-[3px] w-[63%]">
                  <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[98%]">
                    “Lorem ipsum dolor sit amet, consectetur
                    <br />
                    adipiscing elit. Nunc vulputate libero et velit
                    <br />
                    interdum, ac aliquet odio mattis.”
                  </Text>
                  <Line className="bg-blue_100 h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                  <Text className="font-medium lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                    Etieno M, Frontend Dev
                  </Text>
                  <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                    ASYNC
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
          <Row className="absolute bottom-[35%] font-poppins items-center justify-between lg:pr-[22px] xl:pr-[25px] 2xl:pr-[29px] 3xl:pr-[34px] right-[0] w-[46%]">
            <Img
              src="images/img_frame33_1.png"
              className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius50 lg:w-[124px] xl:w-[142px] 2xl:w-[160px] 3xl:w-[192px]"
              alt="FrameThirtyThree Two"
            />
            <Column className="lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[67%]">
              <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[83%]">
                “Async provides the ability to learn web
                <br />
                development with ease and step by step <br />
                guidance from beginner to milestone level.’’
              </Text>
              <Line className="bg-blue_100 h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[82%]" />
              <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                John E, Dev Ops
              </Text>
              <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                Freelance Developer
              </Text>
            </Column>
          </Row>
          <Row className="absolute bottom-[9%] font-poppins items-center justify-between lg:pr-[22px] xl:pr-[25px] 2xl:pr-[29px] 3xl:pr-[34px] right-[0] w-[46%]">
            <Img
              src="images/img_frame33_1.png"
              className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius50 lg:w-[124px] xl:w-[142px] 2xl:w-[160px] 3xl:w-[192px]"
              alt="FrameThirtyThree Three"
            />
            <Column className="lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] w-[67%]">
              <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[83%]">
                “Async provides the ability to learn web
                <br />
                development with ease and step by step <br />
                guidance from beginner to milestone level.’’
              </Text>
              <Line className="bg-blue_100 h-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[82%]" />
              <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[auto]">
                John E, Dev Ops
              </Text>
              <Text className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_600 w-[auto]">
                Freelance Developer
              </Text>
            </Column>
          </Row>
        </Stack>
        <Text className="font-bold leading-[normal] 2xl:mt-[106px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] lg:text-[40px] xl:text-[46px] 2xl:text-[52px] 3xl:text-[62px] text-center text-shadow-ts text-white_A700 w-[49%]">
          Join us now on a journey to,
          <br />
          learn, build and grow
          <br />
          your career
        </Text>
        <Text className="font-normal leading-[normal] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[17px] xl:text-[20px] 2xl:text-[23px] 3xl:text-[27px] text-center text-gray_500 w-[44%]">
          We are providing awesome course content and support <br />
          our our students so that they shine in their life perfectly
        </Text>
        <Button
          className="2xl:mt-[49px] 3xl:mt-[58px] flex items-center justify-center lg:mt-[38px] text-center w-[12%] xl:mt-[43px]"
          rightIcon={
            <Img
              src="images/img_arrowright.svg"
              className="text-center lg:w-[12px] lg:h-[13px] lg:ml-[4px] xl:w-[14px] xl:h-[15px] xl:ml-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[6px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[7px]"
              alt="arrow_right"
            />
          }
          size="lg"
        >
          <div className="bg-transparent font-bold lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]">
            Get Started
          </div>
        </Button>
        <Line className="bg-white_A700 h-[0.3px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] 2xl:mt-[95px] w-[100%]" />
      </Column>
    </>
  );
};

export default AsyncnewPage;
