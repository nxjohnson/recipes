import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { GetServerSideProps } from "next";
import { Recipe } from "../types/RecipeTypes";
import Step1 from "../components/forms/addRecipe/Step1";
import Step2 from "../components/forms/addRecipe/Step2";
import Step3 from "../components/forms/addRecipe/Step3";
import Step4 from "../components/forms/addRecipe/Step4";
import Step5 from "../components/forms/addRecipe/Step5";
import FormProgressBar from "../components/ui/FormProgressBar";

interface Context {
  formData: Recipe;
  setFormData: React.Dispatch<React.SetStateAction<Recipe>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormContext = createContext<Context | undefined>(undefined);

const AddRecipe = (): JSX.Element => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Recipe>({
    activeTime: 0,
    attributes: {
      category: "",
    },
    created: new Date(),
    image: null,
    ingredients: [],
    numberOfServings: 1,
    nutrition: {
      calories: 0,
      protein: null,
      carbs: null,
      fats: null,
    },
    recipeDirections: [],
    recipeName: "",
    source: {
      sourceName: "",
      sourceUrl: null,
    },
    totalTime: 0,
  });
  const steps: string[] = [
    "Recipe Details",
    "Ingredients",
    "Directions",
    "Nutrition",
    "Review",
  ];

  const renderFormStep = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 addRecipe={addRecipe} />;
      default:
        return <Step1 />;
    }
  };

  const addRecipe = async (): Promise<void> => {
    console.log(formData);
    const response = await fetch("/api/recipes", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const id = await response.json();

    router.push({
      pathname: `/recipes/${formData.recipeName}`,
      query: { _id: id },
    });
  };

  return (
    <FormContext.Provider value={{ setCurrentStep, formData, setFormData }}>
      <div className="flex flex-col w-full gap-4 px-8 py-8 lg:px-24">
        <div className=" w-full pb-4 border-b-2 border-neutral-200">
          <h1 className="font-heading text-4xl lg:text-7xl">Add Recipe</h1>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-full gap-2 md:w-136">
            <FormProgressBar steps={steps} currentStep={currentStep} />
            {renderFormStep(currentStep)}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);

  if (!session)
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

export default AddRecipe;
