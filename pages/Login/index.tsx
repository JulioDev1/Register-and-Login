import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import Layout from "../layout";
import { FormContainer, Title } from "../_styled";
import Button from "../../components/Button";
import { Email } from "../../icons/Email";
import { Lock } from "../../icons/Lock";
import { SeePassword } from "../../icons/SeePassword";

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
    <Layout>
      <FormContainer>
        <Title>Login in to your Account</Title>
        <Input
          label="Email"
          type="text"
          value={data.email}
          name="email"
          onChange={handleChange}
          placeholder="digite seu email"
          icons={<Email />}
        />
        <Input
          label="Password"
          type="text"
          value={data.password}
          name="password"
          onChange={handleChange}
          placeholder="digite sua senha"
          icons={<Lock />}
          lock={<SeePassword />}
        />
        <Button type="submit" />
      </FormContainer>
    </Layout>
  );
}
