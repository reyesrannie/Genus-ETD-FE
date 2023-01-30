import { usePostLoginQuery } from "../Api/apiSlice";
export const Data = () => {
  const { login } = usePostLoginQuery("username: rannie", "password: rannie");
  console.log(login);
};
