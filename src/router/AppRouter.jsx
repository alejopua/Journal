import { Routes, Route } from "react-router-dom";

import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { useDispatch, useSelector } from "react-redux";
import { ChekingAuth } from "../ui";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoUrl } = user;
      dispatch(login({ uid, email, displayName, photoUrl }));
    });
  }, []);

  if (status === "checking") {
    return <ChekingAuth />;
  }

  return (
    <Routes>
      {/* Login and Register */}
      <Route path="auth/*" element={<AuthRoutes />} />

      {/* Journal app */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
