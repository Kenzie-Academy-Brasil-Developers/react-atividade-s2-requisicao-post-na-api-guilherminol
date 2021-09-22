import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Form, AcceptRequisition, DeniedRequisition } from "./style.js";
const Login = () => {
  const [isAuthent, setIsAuthent] = useState(false);
  const [hasTried, setHasTried] = useState(false);
  const formSchema = yup.object().shape({
    username: yup.string().required("Login obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((response) => {
        setIsAuthent(true);
        setHasTried(true);
      })
      .catch((err) => {
        setIsAuthent(false);
        setHasTried(true);
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div></div>
        <TextField
          error={!!errors.username?.message}
          label="Login"
          size="small"
          variant="outlined"
          {...register("username")}
          helperText={errors.username?.message}
        ></TextField>
        <TextField
          error={!!errors.password?.message}
          label="Senha"
          size="small"
          variant="outlined"
          {...register("password")}
          helperText={errors.password?.message}
        ></TextField>
        <Button type="submit" variant="outlined" size="medium">
          Login
        </Button>
        {hasTried ? (
          isAuthent ? (
            <AcceptRequisition>Requisição aceita</AcceptRequisition>
          ) : (
            <DeniedRequisition>Requisição negada</DeniedRequisition>
          )
        ) : (
          ""
        )}
      </Form>
    </>
  );
};
export default Login;
