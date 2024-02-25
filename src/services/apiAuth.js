import { useNavigate } from "react-router-dom";
import supabase from "../../public/supabase/Supabase";

export async function Login(email, password) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function SignUp(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options:{
      data:{
        fullName,
        avatar:""
      }
    }
  });

console.log(data)

  if (error) throw new Error(error.message);

  return data;
}


export const logout = async () => {
  console.log("hi")
  const { error } = await supabase.auth.signOut();
  if (error) {
    return error
  };
};
