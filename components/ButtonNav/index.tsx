import { useRouter } from "next/router";
import { NavBarButtons, ButtonNavbar } from "./styled";

export default function ButtonNav() {
  const router = useRouter();
  function handleChangeRoute(link: string) {
    router.push(link);
  }
  return (
    <NavBarButtons>
      <ButtonNavbar onClick={() => handleChangeRoute("/login")}>
        Login
      </ButtonNavbar>
      <ButtonNavbar onClick={() => handleChangeRoute("/register")}>
        Sign Up
      </ButtonNavbar>
    </NavBarButtons>
  );
}
