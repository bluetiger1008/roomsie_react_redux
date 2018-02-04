import React, { Component } from 'react';
import { PointerIcon, CalendarIcon2, DownArrowIcon, SearchIcon } from 'assets';
import { css } from 'styled-components';
import { Div, Center, theme, Select } from 'components/common';

const AutoSuggestInput = Div.withComponent('input').extend`
  width: 438px;
  height: 54px;
  font-size: 17px;
  font-weight: 400;
  color: #828180;
  outline: none;
  padding-left: 45px;
  border: none;
  border-radius: 2px;
`;

const InputIcon = Div.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  left: ${props => (props.small ? '20px' : '16px')};
`;

const InputContainer = Div.extend`
  position: relative;
  margin-right: 10px;
`;

const DatePickerInput = AutoSuggestInput.extend`
  width: 167px;
  padding-left: 50px;
`;

const MarginRight = Div.extend`
  margin-right: 10px;
`;

const SubmitButton = Div.extend`
  ${theme.button1};
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 54px;
  border-radius: 54px;
`;

const SelectGenderContainer = Div.extend`
  height: 54px;
  width: 167px;
`;

const selectGenderCustomStyle = css`
  .Select-value,
  .Select-input > input,
  .Select-placeholder {
    font-size: 17px;
    font-weight: 400;
    color: #828180 !important;
    padding: 0 0 0 20px !important;
  }

  .Select-control {
    border: none !important;
  }

  .Select-value-label {
    color: #828180 !important;
  }

  .Select-arrow-zone {
    padding: 0 20px 0 0 !important;
  }
`;

class Search extends Component {
  render() {
    const options = [
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' }
    ];

    return (
      <Center>
        <InputContainer>
          <InputIcon small>
            <PointerIcon color={'#5e5e5e'} />
          </InputIcon>
          <AutoSuggestInput placeholder={'Washington, DC, USA'} />
        </InputContainer>
        <InputContainer>
          <InputIcon>
            <CalendarIcon2 color={'#5e5e5e'} />
          </InputIcon>
          <DatePickerInput placeholder={'Check-in'} />
        </InputContainer>
        <InputContainer>
          <InputIcon>
            <CalendarIcon2 color={'#5e5e5e'} />
          </InputIcon>
          <DatePickerInput placeholder={'Check-out'} />
        </InputContainer>
        <InputContainer>
          <SelectGenderContainer>
            <Select
              name="search--select-gender"
              placeholder={'Select gender'}
              arrowRenderer={() => <DownArrowIcon color={'#2d2d2d'} />}
              options={options}
              customStyle={selectGenderCustomStyle}
              onChange={console.log}
            />
          </SelectGenderContainer>
        </InputContainer>
        <SubmitButton>
          <MarginRight>
            <SearchIcon color={'#0c613a'} />
          </MarginRight>
          <Div>Search</Div>
        </SubmitButton>
      </Center>
    );
  }
}

export default Search;
