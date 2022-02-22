import { supabase } from "../../utils/supabaseClient";

export default async function handler(req, res) {
  const { data, error } = await supabase.from("tasks").select();

  if (error) {
    res.status(500).json({ error });
  } else {
    res.status(200).json(data);
  }
}
