
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (recipe) => {
    const updated = [...get().recipes, recipe];
    set({ recipes: updated });
    get().filterRecipes(); // Keep filteredRecipes in sync
  },

  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updated });
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },
}));