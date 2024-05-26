import supabase from "../../public/supabase/Supabase";

export async function Login({email, password}) {
  console.log("email",email)
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);


  console.log('error login',error)
  return data;
}



export async function SignUp({email, password}) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
   
  });



  if (!error) {
    const { user } = data;
    const { error: insertError } = await supabase.from('profiles').insert([
      { userId: user.id, email: email }
    ]);

    if(insertError) throw new Error(insertError.message);
  }
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
