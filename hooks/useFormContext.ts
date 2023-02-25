import { useContext } from "react"
import { FormContext } from "../pages/add-recipe"

const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useFormContext must be within FormContextProvider")
  }
  return context;
}

export default useFormContext