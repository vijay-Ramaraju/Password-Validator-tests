// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SubContainer = styled.div`
  background-color: #475569;
  padding: 35px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Password = styled.h1`
  color: #f8fafc;
  font-size: 26px;
  font-family: Roboto;
  margin-bottom: 2px;
`
export const Description = styled.p`
  font-size: 10px;
  color: #fff;
  font-family: roboto;
  margin-bottom: 20px;
`
export const Input = styled.input`
  background-color: #edeeff;
  border: 0px;
  width: 100%;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  padding-left: 10px;
`
export const Error = styled.p`
  font-size: 11px;
  color: #ef4444;
  font-family: roboto;
  margin-top: 5px;
`
