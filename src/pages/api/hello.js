import { supabase } from "../../../lib/supabaseClient";

export default async function handler(req, res) {
  res.status(200).json({messague: 'hello world'})
}
