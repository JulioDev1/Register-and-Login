import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input";
import Layout from "../layout";
import { FormContainer, Title } from "../_styled";
import Button from "../../components/Button";
import { useRouter } from "next/router";

interface IRegisterState {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}
interface IData {
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
  const router = useRouter();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  }

  function verifyFilledInput(datas: IData): boolean {
    for (const key in datas) {
      if (!datas[key as keyof IData]) {
        return false;
      }
    }
    return true;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (verifyFilledInput(data)) {
      router.push("/welcomePage");
    } else {
      return;
    }
  }

  return (
    <Layout>
      <FormContainer onSubmit={handleSubmit}>
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
          type="password"
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
        <Button type="submit" />
      </FormContainer>
    </Layout>
  );
}
