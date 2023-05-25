import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";

interface ILoginState {
  email: string;
  password: string;
}

export default function Login() {
  const [data, setData] = useState<ILoginState>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  }
  console.log(data);
  return (
    <div>
      <h1>Login</h1>
      <Input
        label="Email"
        type="text"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="text"
        value={data.password}
        name="password"
        onChange={handleChange}
      />
    </div>
  );
}
