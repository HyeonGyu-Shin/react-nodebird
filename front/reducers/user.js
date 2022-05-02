const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LogInAction = (data) => {
  return {
    type: 'Log_In_Action',
    data: data,
  };
};

export const LogOutAction = () => {
  return {
    type: 'Log_Out_Action',
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Log_In_Action':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'Log_Out_Action':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
