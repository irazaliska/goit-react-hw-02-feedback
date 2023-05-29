import styled from '@emotion/styled'

export const Button = styled.button`
  border-radius: 6px;
  border: 1px solid #000000;
  display: inline-block;
  color: #ffffff;
  font-weight: 600;
  padding: 5px 15px;
  background: #212121;
  :not(:last-child) {
    margin-right: 10px;}
  &:hover {
    color: #212121;
    background: #ffffff;
  }
`
