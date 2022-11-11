import React, { useState } from "react";
import { string, util, isValid } from "valid.js";
import { Link, useMatch, useNavigate } from "react-router-dom";
import css from "./Login.module.css";
import { useTheme } from "../../hooks/useTheme";

export function Login(props) {
  const isLogin = useMatch("/login");
  const themeContext = useTheme();
  const theme = themeContext.theme === "dark" ? css.dark : "";
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handlerSubmit(event) {
    event.preventDefault();

    const emailValid = isValid(form.email, [util.isEmail, util.isRequired]);
    const passwordValid = isValid(form.password, [
      string.minLength(4),
      util.isRequired,
    ]);
    let isFormValid = true;
    if (!emailValid) {
      alert("Введите email");
      isFormValid = false;
    }
    if (!passwordValid) {
      alert("Пароль не проходит валидацию");
      isFormValid = false;
    }
    if (!isFormValid) return;

    fetch(`http://localhost:3000/${isLogin ? "login" : "register"}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    })
      .catch((err) => alert(err))
      .then((response) => {
        if (response.ok) {
          alert("Вы успешно авторизованы");
          navigate("/profile");
          localStorage.setItem("isAuth", "true");
        } else alert("Вы не авторизованы");
      });
  }

  function handlerPassword(event) {
    setForm({ ...form, password: event.target.value });
  }
  function handlerEmail(event) {
    setForm({ ...form, email: event.target.value });
  }

  return (
    <section className={css.login}>
      <form
        action="/login"
        method="POST"
        onSubmit={handlerSubmit}
        className={css.form}
      >
        <input
          type="text"
          name="email"
          id="email"
          onChange={handlerEmail}
          value={form.email}
          className={`${css.input} ${theme}`}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlerPassword}
          value={form.password}
          className={`${css.input} ${theme}`}
        />
        <input
          type="submit"
          value={isLogin ? "Login" : "Register"}
          className={`${css.submit} ${theme}`}
        />
      </form>
      <div>
        {isLogin ? (
          <>
            <p>You are not registred?</p>
            <Link to="/register">Let's change it!</Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
