import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";

interface IRegisterState {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}
export default function Register() {
  const [data, setData] = useState<IRegisterState>({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
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
      <h1>Register</h1>
      <Input
        label="Name"
        value={data.name}
        name="name"
        onChange={handleChange}
        type="text"
      />
      <Input
        label="Email"
        value={data.email}
        name="email"
        onChange={handleChange}
        type="text"
      />
      <Input
        label="Password"
        value={data.password}
        name="password"
        onChange={handleChange}
        type="text"
      />
      <Input
        label="Repeat Password"
        value={data.repeatPassword}
        name="repeatPassword"
        onChange={handleChange}
        type="text"
      />
    </div>
  );
}
