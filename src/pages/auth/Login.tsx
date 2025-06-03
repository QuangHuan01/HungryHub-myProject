import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { loginSchema } from "./../../validations/authSchema";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../api";
import { loginApi } from "../../api/authApi";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await loginApi(data);
      if (res) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Đăng nhập thành công !");
        nav("/");
      }
    } catch (error) {
      console.log(error);
      reset();
    }
  };

  return (
    //
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Register Now</h1>
        <form
          action=""
          className="max-w-md mx-auto space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: true })}
            />
            {errors?.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <span className="text-gray-600">You have an account? </span>
            <Link to="/auth/register" className="text-blue-500 hover:underline">
              Register now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
