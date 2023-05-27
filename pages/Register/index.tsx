import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import Layout from "../layout";
import { FormContainer, Title } from "../_styled";
import { NavBarButtons } from "../../components/ButtonNav/styled";
import Button from "../../components/Button";

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
    <Layout>
      <FormContainer>
        <Title>Register</Title>
        <Input
          label="Name"
          value={data.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="digite seu nome"
        />
        <Input
          label="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="digite seu email"
        />
        <Input
          label="Password"
          value={data.password}
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="digite sua senha"
        />
        <Input
          label="Repeat Password"
          value={data.repeatPassword}
          name="repeatPassword"
          onChange={handleChange}
          type="text"
          placeholder="repita sua senha"
        />
        <Button />
      </FormContainer>
    </Layout>
  );
}
