import { usePromptContext } from "./PromptProvider";

import React, { createContext, useContext, useEffect, useState } from "react";

import { generateThreadId } from "../lib/chef";
import { generateRecipe } from "../lib/chef";
import { generateImage } from "../lib/chef";

const RecipeContext = createContext();
export const useRecipeContext = () => useContext(RecipeContext);

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { getPrompt } = usePromptContext();

  const fetchRecipe = async (prompt) => {
    setIsLoading(true);
    try {
      const threadId = await generateThreadId();
      const newRecipe = await generateRecipe(
        threadId,
        JSON.stringify(getPrompt)
      );

      const newImageURL = await generateImage(newRecipe.description);

      setRecipe(newRecipe);
      setThumbnailUrl(newImageURL);
    } catch (error) {
      console.error("Error generating recipe:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetRecipe = () => {
    setRecipe(null);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        setRecipe,
        resetRecipe,
        fetchRecipe,
        isLoading,
        thumbnailUrl,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
