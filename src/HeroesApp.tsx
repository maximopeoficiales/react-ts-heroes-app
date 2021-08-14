import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/AuthContext";
import { authReducer, User } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";

function HeroesApp() {
  // carga la informacion inicial de localStorage
  const init = (): User => {
    let user = localStorage.getItem("user");
    return user == null ? { logged: false } : JSON.parse(user);
  };
  // creo un reducer para obtener las funcionalidades de un state
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  // se podra acceder por toda la aplicacion a l usuario y el dispatch
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default HeroesApp;
