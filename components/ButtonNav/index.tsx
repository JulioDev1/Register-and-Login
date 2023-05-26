import { useRouter } from "next/router";

export default function ButtonNav() {
  const router = useRouter();
  function handleChangeRoute(link: string) {
    router.push(link);
  }
  return (
    <div>
      <button onClick={() => handleChangeRoute("/login")}>Login</button>
      <button onClick={() => handleChangeRoute("/register")}>Sign Up</button>
    </div>
  );
}
