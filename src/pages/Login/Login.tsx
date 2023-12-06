import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  Container,
  Content,
  FormBox,
  FormContainer,
  Heading,
  Link,
  LoginBtn,
  RegisterBtn
} from "./styled";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PathRoutes } from "../../routes";

type LoginType = {
  email: string;
  password: string;
}

type UserType = {
  name: string;
  email: string;
  cpf: string;
  date: string;
  password: string;
  confirm_password: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Digite o seu e-mail de acesso")
    .required("Precisa do e-mail para acessar"),
  password: Yup.string().required("Coloque a sua senha de acesso correta"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserType>();

  const [loginValues] = useState<LoginType>({
    email: "",
    password: ""
  });

  useEffect(() => {
    const storage = sessionStorage.getItem('user');

    if (typeof storage === "string") {
      const obj: UserType = JSON.parse(storage);
      setUser(obj)
    }
  }, []);

  const formik = useFormik({
    initialValues: loginValues,
    validationSchema: validationSchema,
    onSubmit: (value) => {
      if (user) {
        if (value.email === user.email && value.password === user.password) {
          toast.success("Usuário logado!", {duration: 5000});
        } else {
          toast.error("E-mail ou senha inválidos!", { duration: 5000 });
        }
      } else {
        toast.error("Erro no servidor!", { duration: 5000 });
      }
    }
  })

  return (
    <Container>
      <Content>
        <Heading>Fazer Login</Heading>

        <FormContainer>
          <FormBox onSubmit={formik.handleSubmit}>
            <TextField
              type="email"
              variant="standard"
              placeholder="Digite seu E-mail..."
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              type="password"
              variant="standard"
              placeholder="Digite sua Senha..."
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <LoginBtn type="submit">Acessar</LoginBtn>
          </FormBox>

          <Link>Esqueceu a senha?</Link>

          <RegisterBtn onClick={() => navigate(PathRoutes.REGISTER)}>Criar conta</RegisterBtn>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Login;
