import React from "react";

import { Img, Text, Stack, Input, TextArea, Button, Line } from "components";

const ContactPage = () => {
  const [showHeader, setshowHeader] = React.useState(false);

  function handleNavigate() {
    window.location.href = "www.nexus.com";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center w-[100%]">
          <header className="w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1113px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] md:my-[10px] my-[15px] sm:my-[7px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="header-row w-[13%] max-w-[100%]">
                <Img
                  src="images/img_group645.svg"
                  className="max-w-[100%]"
                  alt="Group645"
                />
                <div
                  className="mobile-menu"
                  onClick={() => setshowHeader(true)}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              {showHeader && (
                <div
                  className="menu-overlay"
                  onClick={() => setshowHeader(false)}
                ></div>
              )}
              <div
                className="sm:bg-white_A700 sm:fixed flex flex-row md:flex-wrap sm:flex-wrap sm:h-[100%] items-start justify-between sm:left-[0] sm:mb-[0] sm:ml-[0] sm:mr-[0] sm:mt-[0] sm:mx-[0] md:pr-[4px] pr-[7px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] sm:shadow-md sm:top-[0] sm:w-[288px] w-[39%] sm:z-[1]"
                style={{ display: showHeader ? "block" : "none" }}
              >
                <div
                  className="mobile-menu menu-close-icon"
                  onClick={() => setshowHeader(false)}
                >
                  <div className="close-line1" />
                  <div className="close-line2" />
                </div>
                <Text
                  className="font-bold mt-[1px] text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Home
                </Text>
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  About
                </Text>
                <Text
                  className="font-bold text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Works
                </Text>
                <div className="flex flex-col items-center justify-start mr-[10px] md:mr-[6px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-bold text-red_401 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Contact
                  </Text>
                  <div className="bg-red_401 sm:h-[4px] md:h-[5px] h-[6px] mt-[10px] sm:mt-[5px] md:mt-[6px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col justify-start max-w-[1311px] ml-[auto] mr-[auto] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <div className="bg-blue_50 flex flex-col items-center justify-start ml-[121px] md:ml-[83px] sm:mx-[0] sm:p-[15px] md:p-[35px] p-[51px] rounded-radius90 sm:w-[100%] w-[91%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:mb-[48px] md:mb-[62px] mb-[91px] sm:mt-[38px] md:mt-[49px] mt-[72px] sm:mx-[0] sm:p-[15px] md:p-[49px] p-[72px] sm:w-[100%] w-[98%]"
              style={{ backgroundImage: "url('images/img_group744.svg')" }}
            >
              <Text
                className="sm:mt-[2px] md:mt-[3px] mt-[5px] text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                <span className="text-black_900 text-[50px] font-inter font-normal sm:text-[40px] md:text-[46px] not-italic">
                  Get in{" "}
                </span>
                <span className="text-red_401 text-[50px] font-inter font-normal sm:text-[40px] md:text-[46px] not-italic">
                  touch
                </span>
              </Text>
              <Text
                className="font-normal leading-[40.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[41px] md:mt-[52px] mt-[77px] sm:mx-[0] not-italic text-center text-gray_700 sm:w-[100%] w-[86%]"
                as="h2"
                variant="h2"
              >
                Stay connected with us, we will help you with your various
                needs. we will provide the best service in technical and
                consulting matters. You can provide your needs or something you
                ask in the form below
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
            <Stack className="bg-white_A700 h-[599px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:p-[15px] md:p-[48px] p-[70px] relative rounded-radius20 shadow-bs1 sm:w-[100%] w-[66%]">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] rounded-radius5 top-[12%] sm:w-[100%] w-[75%]">
                <Input
                  className="font-bold p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="w-[100%]"
                  name="GroupFour"
                  placeholder="Send Message"
                  size="md"
                ></Input>
                <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] rounded-radius5 w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Input
                        className="font-bold p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[48%]"
                        type="text"
                        name="Group750"
                        placeholder="Your Name"
                        shape="RoundedBorder5"
                        variant="FillGray100"
                      ></Input>
                      <Input
                        className="font-bold p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[48%]"
                        type="email"
                        name="Group751"
                        placeholder="Your Email"
                        shape="RoundedBorder5"
                        variant="FillGray100"
                      ></Input>
                    </div>
                    <TextArea
                      className="font-bold sm:mt-[19px] md:mt-[25px] mt-[37px] text-[16px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                      name="Group748"
                      placeholder="Your Message"
                    ></TextArea>
                  </div>
                </div>
              </div>
              <Button className="absolute bottom-[17%] cursor-pointer font-normal left-[14%] min-w-[24%] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                Send
              </Button>
            </Stack>
            <div className="bg-white_A700 flex flex-col mb-[12px] sm:mb-[6px] md:mb-[8px] md:ml-[28px] ml-[41px] sm:mx-[0] sm:p-[15px] md:p-[22px] p-[33px] rounded-radius20 shadow-bs1 sm:w-[100%] w-[32%]">
              <div className="flex flex-col items-center justify-start sm:mb-[19px] md:mb-[24px] mb-[36px] sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Input
                    className="font-bold p-[0] text-[20px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group762"
                    placeholder="Contact Information"
                    size="lg"
                  ></Input>
                  <div className="flex flex-col justify-start ml-[4px] sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                      <Img
                        src="images/img_frame666.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="Frame666"
                      />
                      <Text
                        className="flex-grow sm:ml-[13px] md:ml-[17px] ml-[25px] mt-[1px] text-gray_401"
                        as="h4"
                        variant="h4"
                      >
                        hello@nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_globe.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="globe"
                      />
                      <Text
                        className="common-pointer flex-grow sm:ml-[13px] md:ml-[17px] ml-[25px] mt-[4px] text-gray_401"
                        as="h4"
                        variant="h4"
                        onClick={handleNavigate}
                      >
                        www.nexus.com
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mt-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow leading-[normal] md:ml-[17px] ml-[25px] sm:mx-[0] text-gray_401"
                        as="h4"
                        variant="h4"
                      >
                        Sudirman street, holgan, melbourne
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_call.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="call"
                      />
                      <Text
                        className="flex-grow sm:ml-[13px] md:ml-[17px] ml-[25px] mt-[4px] text-gray_401"
                        as="h4"
                        variant="h4"
                      >
                        0361 - 8878
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                  <div className="flex flex-col justify-start md:mr-[5px] mr-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_600 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Social Media
                    </Text>
                    <Line className="bg-gray_200 h-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]" />
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_group270.png"
                      className="sm:h-[26px] md:h-[33px] h-[47px] max-w-[100%] sm:w-[25px] md:w-[32px] w-[47px]"
                      alt="Group270"
                    />
                    <Img
                      src="images/img_group271.png"
                      className="sm:h-[26px] md:h-[33px] h-[47px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[19px] sm:w-[25px] md:w-[32px] w-[47px]"
                      alt="Group271"
                    />
                    <Img
                      src="images/img_group268.png"
                      className="sm:h-[26px] md:h-[33px] h-[47px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[19px] sm:w-[25px] md:w-[32px] w-[47px]"
                      alt="Group268"
                    />
                    <Img
                      src="images/img_group269.png"
                      className="sm:h-[26px] md:h-[33px] h-[47px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[19px] sm:w-[25px] md:w-[32px] w-[47px]"
                      alt="Group269"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_800 mt-[108px] sm:mt-[57px] md:mt-[74px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[102px] ml-[149px] md:mr-[32px] mr-[47px] sm:mt-[35px] md:mt-[45px] mt-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Img
                    src="images/img_group642.svg"
                    className="max-w-[100%] w-[19%]"
                    alt="Group642"
                  />
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                    <Stack className="h-[260px] pr-[4px] pt-[4px] relative w-[32%]">
                      <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[1%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[90%]">
                        <Text
                          className="font-bold text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          ABOUT
                        </Text>
                        <div className="flex flex-col justify-start sm:mt-[27px] md:mt-[35px] mt-[51px] w-[100%] common-column-list">
                          <ul className="flex flex-col">
                            <li className="w-[auto]">
                              <Text
                                className="cursor-pointer font-semibold text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                as="h3"
                                variant="h3"
                              >
                                About
                              </Text>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                What we do
                              </a>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                Works
                              </a>
                            </li>
                            <li className="w-[auto] mt-[30px] ml-[1px] sm:mt-[15px] md:mt-[20px]">
                              <a
                                href={"javascript:"}
                                className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                                rel="noreferrer"
                              >
                                Testimonial
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Line className="absolute bg-deep_orange_A100 h-[2px] left-[0] top-[13%] sm:w-[100%] w-[41%]" />
                    </Stack>
                    <div className="flex flex-col sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[38%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-bold text-white_A700 md:tracking-ls2 sm:tracking-ls2 tracking-ls4 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          FOLLOW US
                        </Text>
                        <Line className="bg-deep_orange_A100 h-[2px] mt-[12px] sm:mt-[6px] md:mt-[8px] w-[34%]" />
                      </div>
                      <div className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[auto]">
                            <Text
                              className="cursor-pointer font-semibold text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              as="h3"
                              variant="h3"
                            >
                              Dribbble
                            </Text>
                          </li>
                          <li className="w-[auto] mt-[35px] sm:mt-[18px] md:mt-[24px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Instagram
                            </a>
                          </li>
                          <li className="w-[auto] mt-[30px] sm:mt-[15px] md:mt-[20px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Behance
                            </a>
                          </li>
                          <li className="w-[auto] mt-[30px] sm:mt-[15px] md:mt-[20px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-semibold text-[18px] text-white_A700 tracking-ls08999999761581421 md:tracking-ls1 sm:tracking-ls1"
                              rel="noreferrer"
                            >
                              Pinterest
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[3px] text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Oracle Brand - All Rights Reserved
                </Text>
              </div>
              <Img
                src="images/img_group710.svg"
                className="max-w-[100%] mt-[120px] sm:mt-[63px] md:mt-[82px] w-[24%]"
                alt="Group710"
              />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
