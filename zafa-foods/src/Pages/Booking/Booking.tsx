import React, { useState } from "react";
import {
  SectionHeader,
  SectionContainer,
  Input,
  FormElement,
  Button,
  Center,
  Text,
} from "../../Components/GeneralStyling";
import { formLabel } from "./formLabel";
import { styled } from "styled-components";
import { MdOutlineArrowDropDown } from "react-icons/md";
import DatePicker from "../../Components/DatePicker";
import image from "../../Images/restaurant.png";
import Modals from "../../Components/Modals";

const Booking = () => {
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<boolean[]>(
    formLabel.map(() => false)
  );

  const [selectedOption, setSelectedOption] = useState<string[]>(
    formLabel.map(() => "choose option")
  );

  const dropDownHandler = (index: number) => {
    setOpenDropdown((prevState) =>
      prevState.map((state, i) => (i === index ? !state : false))
    );
  };

  const optionPickHandler = (option: string, index: number) => {
    setSelectedOption((prevState) =>
      prevState.map((state, i) => (i === index ? option : state))
    );
    setOpenDropdown((prevState) =>
      prevState.map((state, i) => (i === index ? false : state))
    );
  };

  const [showDatePicker, setShowDatePicker] = useState(false);

  const datePickerHandler = () => {
    setShowDatePicker(!showDatePicker);
  };

  const closeModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && (
        <Modals closeModal={closeModalHandler}>
          <Text>
            We have received you message. Please check your email for more
            information. Thank you
          </Text>
        </Modals>
      )}
      <Backgrnd>
        <SectionContainer>
          <SectionHeader>Book for an event</SectionHeader>

          {/* <DatePicker /> */}

          <FormDisplay>
            {/* <FormElement style={{}}>
              <label>Date</label>
              <Dropdown
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  opacity: "1",
                }}
              >
                <DropdownBtn onClick={datePickerHandler}>
                  <div>Pick Date</div>
                  <MdOutlineArrowDropDown />
                </DropdownBtn>
                {showDatePicker ? <DatePicker /> : null}
              </Dropdown>
            </FormElement> */}

            {formLabel.map((item, index) => {
              return (
                <>
                  {item.options ? (
                    <>
                      <FormElement key={index}>
                        <label>{item.label}</label>

                        <Dropdown>
                          <DropdownBtn onClick={() => dropDownHandler(index)}>
                            <div>{selectedOption[index]}</div>
                            <MdOutlineArrowDropDown />
                          </DropdownBtn>

                          <OptionsContainer isOpen={openDropdown[index]}>
                            {item.options.map((option, index) => {
                              return (
                                <>
                                  <Option
                                    key={index}
                                    onClick={() =>
                                      optionPickHandler(option.option, index)
                                    }
                                  >
                                    {option.option}
                                  </Option>
                                </>
                              );
                            })}
                          </OptionsContainer>
                        </Dropdown>
                      </FormElement>
                    </>
                  ) : (
                    <>
                      <FormElement>
                        <label>{item.label}</label>
                        <Input type={item.type} />
                      </FormElement>
                    </>
                  )}
                </>
              );
            })}
          </FormDisplay>

          <Center>
            <Button onClick={closeModalHandler}>Reserve</Button>
          </Center>
        </SectionContainer>
      </Backgrnd>
    </>
  );
};

interface OptionsContainerProps {
  isOpen: boolean;
}
const Backgrnd = styled.div`
  background-image: url("../../Images/restaurant.png");
`;
const FormDisplay = styled.div`
  display: grid;
  column-gap: 40px;
  grid-template-columns: auto auto;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const DropdownBtn = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: relative;
  width: 300px;
  display: inline-block;

  @media only screen and (max-width: 768px) {
    width: auto;
  }
`;
const OptionsContainer = styled.ul<OptionsContainerProps>`
  position: absolute;
  left: 0;
  right: 100%;
  top: 100%;
  padding: 0;
  margin: 0;
  background-color: #fdf5e6;
  z-index: 99;
  width: 100%;
  list-style: none;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  max-height: 170px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a2673b;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`;

const Option = styled.li`
  padding: 8px;
  cursor: pointer;
  width: 100%;
  border-bottom: 1px solid black;

  &:hover {
    background-color: #ddd;
  }

  &:nth-child() {
  }
`;
export default Booking;
