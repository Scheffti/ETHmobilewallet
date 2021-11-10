import { LOGIN } from "../../Type";

const Login = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, Login: action.payload }

        default:
            return state;
    }
};

export default Login
