package com.backend.Recipe.service;

import java.util.List;

import com.backend.Recipe.entity.Recipe;

public interface RecipeService {
	
	public List<Recipe> findAll();
	
	public Recipe findById(int theId);
	
	public void save(Recipe theRecipe);
	
	public void deleteBy(int theId);
	

}
