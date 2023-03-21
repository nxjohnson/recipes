import { supabase } from "../lib/supabaseClient";

export async function insertImage(recipeId: number, url: string) {
  const { data, error } = await supabase
  .from("recipe_images")
  .insert({
    url,
    recipe_id: recipeId,
  });

  if (error) {
    console.log(error)
    return;
  }
  return;
}
