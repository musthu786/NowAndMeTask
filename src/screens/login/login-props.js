export const loginProps = props => {
  const {emailId, password, handlePasswordChange, handleEmailChange} = props;
  const formFileds = [
    {
      isPrefix: true,
      prefixVal: 'Email or UserName',
      title: 'User name',
      label: 'Username',
      value: emailId,
      placeholder: 'User name',
      onChangeText: handleEmailChange,
      isPassword: false,
      keyboardType: 'email-address',
      maxlength: 40,
    },
    {
      isPassword: true,
      isPrefix: true,
      prefixVal: 'Password',
      title: 'Password',
      label: 'Password',
      value: password,

      placeholder: 'Password',
      onChangeText: handlePasswordChange,
      isPassword: true,
      maxlength: 30,
    },
  ];
  return formFileds;
};
