// Write your code here 24263c

import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  Password,
  Description,
  Input,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [name, setName] = useState('')

  const onChangeValue = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <SubContainer>
        <Password>Password Validator</Password>
        <Description>Check how strong and secure is your password</Description>

        <Input onChange={onChangeValue} type="password" value={name} />
        {name.length > 7 ? (
          ''
        ) : (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </SubContainer>
    </MainContainer>
  )
}
export default PasswordValidator
