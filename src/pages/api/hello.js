import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      res.status(400).json(error);
    }
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { Name } = req.body
    console.log(Name)
    const { data, error } = await supabase.from("users").insert([{Name}]).single();
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json(data);
  }else{
    return res.status(405).json({error:"Method not allowed"})
  }
}
