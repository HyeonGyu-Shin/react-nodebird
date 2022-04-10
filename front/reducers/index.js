import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
    },
};

export const LogInAction = (data) => {
    return {
        type: "Log_In_Action",
        data: data,
    };
};

export const LogOutAction = () => {
    return {
        type: "Log_Out_Action",
    };
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE: {
            return {
                ...state,
                ...action.payload,
            };
        }
        case "Log_In_Action":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case "Log_Out_Action":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;
