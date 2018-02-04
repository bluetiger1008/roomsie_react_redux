import React from 'react';
import Select from 'react-select';
import { DownArrowIcon } from 'assets';
import { Div, Column } from 'components/common';

const SelectContainer = Div.extend`
  flex: none;
  width: 100%;
  height: 47px;

  .authentication--form--select,
  .Select-input,
  .Select-multi-value-wrapper {
    width: 100%;
    height: 100%;
  }

  .Select-control {
    border-radius: 2px;
    box-shadow: none !important;
    border: 1px solid ${props =>
        props.error ? '#ef585a' : '#b2b2b2'} !important;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .Select-value,
  .Select-input > input,
  .Select-placeholder {
    display: flex;
    width: 100% !important;
    overflow: hidden;
    height: 100%;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    color: #858585 !important;
    padding: 0 0 0 15px !important;
  }

  .Select-value-label {
    color: #858585 !important;
  }

  .Select-input {
    padding: 0 !important;
  }

  .Select-arrow-zone {
    display: inline-flex;
    align-items: center;
    width: auto;
    padding: 0 15px 0 0 !important;
  }

  input {
    box-sizing: border-box !important;
  }

  ${props => props.customStyle};
`;

const Error = Div.extend`
  color: #ef585a;
  margin-top: 7px;
  font-size: 13px;
`;

const arrowRender = () => <DownArrowIcon color={'#5e5e5e'} />;

const SelectComponent = ({
  className,
  customStyle,
  error,
  clearable,
  hasError,
  placeholder,
  label,
  ...props
}) => {
  const arrowRenderer = props.arrowRenderer || arrowRender;
  const errorLabel = placeholder || label;
  return (
    <Column>
      <SelectContainer customStyle={customStyle} error={error || hasError}>
        <Select
          clearable={clearable || false}
          arrowRenderer={arrowRenderer}
          className={`authentication--form--select ${className}`}
          placeholder={placeholder}
          {...props}
        />
      </SelectContainer>

      {error ? (
        <Error>
          {errorLabel} {error}
        </Error>
      ) : null}
    </Column>
  );
};

export default SelectComponent;
