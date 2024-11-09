import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  max-width: 425px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.borderBase};
  
  input {
    border: none;
    outline: none;
    width: 80%;
    padding: 4px 6px;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    cursor: pointer;
    border: none;
    flex: 1;
    width: 40px;
    height: 40px;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    background-color: ${({ theme }) => theme.backgroundLevel2};
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
`;

export default function Search({ filterValue, setFilterValue }) {
  const searchValue = filterValue;
  const setSearchValue = setFilterValue;

  return (
    <StyledSearch>
      <input type="text" onChange={(event) => {
        setSearchValue(event.target.value)
      }} value={searchValue} />
      <button>🔎</button>
    </StyledSearch>
  )
}