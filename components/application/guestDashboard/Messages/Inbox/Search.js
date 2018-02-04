import React, { Component } from 'react';
import { DownArrowIcon, SearchIcon } from 'assets';
import { Div, SpaceBetween } from 'components/common';
import Select from 'react-select';

const AutoSuggestInput = Div.withComponent('input').extend`
  width: 521px;
  height: 38px;
  font-size: 17px;
  font-weight: 400;
  color: #828180;
  outline: none;
  padding-left: 19px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

const InputIcon = Div.extend`
  position: absolute;
  top: 0;
  bottom: 0;
  align-items: center;
  right: ${props => (props.small ? '20px' : '16px')};
`;

const InputContainer = Div.extend`
  position: relative;
  margin-right: 10px;
`;

class Search extends Component {
  render() {
    const options = [
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' }
    ];

    return (
      <SpaceBetween>
        <InputContainer>
          <InputIcon small>
            <SearchIcon color={'#828180'} />
          </InputIcon>
          <AutoSuggestInput placeholder={'Search'} />
        </InputContainer>
        <InputContainer>
          <Select
            name="sort--select"
            placeholder={'Sort messages by'}
            arrowRenderer={() => <DownArrowIcon color={'#5e5e5e'} />}
            options={options}
            className={'sort--select'}
            onChange={console.log}
          />
        </InputContainer>
      </SpaceBetween>
    );
  }
}

export default Search;
