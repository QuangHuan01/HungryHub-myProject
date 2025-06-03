import React from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../api/authApi";
import { toast } from "react-toastify";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      delete data.confirmPassword;
      await registerApi(data);
      reset();
      toast.success("Register successfully!");
      nav("/auth/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data || "Register failed!");
      reset();
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Register Now</h1>
        <form
          action=""
          className="max-w-md mx-auto space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="mb-1 font-medium text-gray-700"
            >
              UserName
            </label>
            <input
              type="text"
              id="username"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("username", { required: true })}
            />
            {errors?.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
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
          <div className="flex flex-col">
            <label
              htmlFor="confirm-password"
              className="mb-1 font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("confirmPassword", { required: true })}
            />
            {errors?.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="text-center">
            <span className="text-gray-600">You have an account? </span>
            <Link to="/auth/login" className="text-blue-500 hover:underline">
              Login now!
            </Link>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
