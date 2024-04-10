import supabase from "../../public/supabase/Supabase"

export default async function getUser(){
    
const { data,error} = await supabase.auth.getUser()

 return {data,error}
}