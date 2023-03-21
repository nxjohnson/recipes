import { supabase } from "../lib/supabaseClient";

export async function getCategoryId(category:string) {
  const { data, error } = await supabase
    .from("categories")
    .select()
    .eq("category", category.toLowerCase());

  if (error) {
    console.log(error);
  } else {
    return data[0].id;
  }
}
