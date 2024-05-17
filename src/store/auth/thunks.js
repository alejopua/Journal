import {
  registreUserWithEmailPassword,
  singInWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    console.log({ email, password });
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registreUserWithEmailPassword({
      displayName,
      email,
      password,
    });

    if (!result.ok) return dispatch(logout());

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};
