import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import { Container, Content, FormBox, FormContainer, Heading, Link, LoginBtn } from './styled';
import { useNavigate } from 'react-router-dom';
import { PathRoutes } from '../../routes';
import toast from 'react-hot-toast';

type RegisterType = {
  name: string;
  email: string;
  cpf: string;
  date: string;
  password: string;
  confirm_password: string;
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("O Nome é obrigatório")
    .max(50, "O nome não pode ter mais de 50 caracteres!"),
  email: Yup.string()
    .email("Digite um e-mail valido!")
    .required("O e-mail é obrigatório!"),
  cpf: Yup.string()
    .matches(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "O CFP deve ser no formato xxx.xxx.xxx-xx",
    )
    .required("O CPF é obrigatório!"),
  date: Yup.string().required("Coloque a data de nascimento!"),
  password: Yup.string()
    .min(8, "A senha deve ter no mínimo 8 caracteres!")
    .required("A senha é obrigatório!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas devem coincidir")
    .required("Confirme sua senha!"),
});

const Register: React.FC = () => {
    const navigate = useNavigate();

  const [registerValues] = useState<RegisterType>({
    name: "",
    email: "",
    cpf: "",
    date: "",
    password: "",
    confirm_password: "",
  });

  const formik = useFormik({
    initialValues: registerValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const JsonString = JSON.stringify(values);
      sessionStorage.setItem('user', JsonString);
        toast.success("Usuário cadastrado!", {duration: 5000});
    },
  });

  return (
    <Container>
      <Content>
        <Heading>Cadastrar usuário</Heading>

        <FormContainer>
          <FormBox onSubmit={formik.handleSubmit}>
            <TextField
              label="Nome completo"
              type="text"
              variant="standard"
              placeholder="Nome completo"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            <TextField
              label="E-mail"
              type="email"
              variant="standard"
              placeholder="E-mail"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              label="CPF"
              type="text"
              variant="standard"
              placeholder="CPF"
              name="cpf"
              id="cpf"
              value={formik.values.cpf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.cpf && Boolean(formik.errors.cpf)}
              helperText={formik.errors.cpf}
            />

            <TextField
              label="Data de nascimento"
              type="date"
              variant="standard"
              name="date"
              id="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />

            <TextField
              label="Senha"
              type="password"
              variant="standard"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              label="Confirme sua senha"
              type="password"
              variant="standard"
              name="confirm_password"
              id="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirm_password &&
                Boolean(formik.errors.confirm_password)
              }
              helperText={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
            />

            <LoginBtn type="submit">Cadastrar</LoginBtn>
          </FormBox>

          <Link onClick={() => navigate(PathRoutes.LOGIN)}>
            Já possui um cadastro? Clique aqui
          </Link>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Register;
