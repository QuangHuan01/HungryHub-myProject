import { z } from "zod";
export const loginSchema = z.object({
  email: z
    .string()
    .email("Email Không Hợp Lệ!")
    .min(6, "Email phải có ít nhất 6 ký tự!"),
  password: z
    .string()
    .min(6, "Mật Khẩu Ít Nhất 6 Ký Tự!")
    .max(20, "Mật Khẩu Tối Đa 20 Ký Tự!"),
});

export const registerSchema = z
  .object({
    username: z.string().min(3, "Tên người dùng phải ít nhất 3 ký tự !"),
    email: z
      .string()
      .email("Email Không Hợp Lệ!")
      .min(6, "Email phải có ít nhất 6 ký tự !"),
    password: z
      .string()
      .min(6, "Mật khẩu ít nhất 6 ký tự !")
      .max(20, "Mật khẩu tối đa có 20 ký tự !"),
    confirmPassword: z
      .string()
      .min(6, "Mật khẩu xác nhận ít nhất 6 ký tự !")
      .max(20, "Mật khẩu xác nhận tối đa có 20 ký tự !"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp !",
    path: ["confirmPassword"],
  });
