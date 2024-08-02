import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useToast } from "../context/ToastContext";

function Login() {
  const navigate = useNavigate();
  const { setToast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (payload) => {
    const response = await login(payload);
    if (response === true) {
      setToast("Đăng nhập thành công", "success");
      navigate("/");
    }
  };
  return (
    <section className="login__main flex justify-center items-center">
      <div className="login__container flex justify-center items-center">
        <div className="login__banner rounded-l-[20px]"></div>
        <div className="login__form p-5 rounded-r-[20px]">
          <h1 className="text-center text-3xl font-bold pb-2 mb-2 border-b-2 border-white border-solid">
            ADMIN
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box__input">
              <label htmlFor="username" className="">
                User name:
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: true })}
                autoFocus
              />
              {errors.username && (
                <span className="text-xs text-red-500">
                  Bạn chưa nhập tài khoản
                </span>
              )}
            </div>
            <div className="box__input">
              <label htmlFor="password" className="">
                Password:
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  Bạn chưa nhập mật khẩu
                </span>
              )}
            </div>
            <button className="login__btn mt-8">Đăng nhập</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
