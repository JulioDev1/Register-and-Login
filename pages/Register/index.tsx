import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input";
import Layout from "../layout";
import { FormContainer, Title } from "../_styled";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { User } from "../../icons/User";
import { Email } from "../../icons/Email";
import { Lock } from "../../icons/Lock";
import { SeePassword } from "../../icons/SeePassword";

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
  const router = useRouter();
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
          placeholder="Digite seu nome"
          icons={<User />}
        />
        <Input
          label="Email"
          value={data.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Digite seu email"
          icons={<Email />}
        />
        <Input
          label="Password"
          value={data.password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Digite sua senha"
          icons={<Lock />}
          lock={<SeePassword />}
        />
        <Input
          label="Repeat Password"
          value={data.repeatPassword}
          name="repeatPassword"
          onChange={handleChange}
          type="text"
          placeholder="Repita sua senha"
          icons={<Lock />}
          lock={<SeePassword />}
        />
        <Button type="submit" />
      </FormContainer>
    </Layout>
  );
}
