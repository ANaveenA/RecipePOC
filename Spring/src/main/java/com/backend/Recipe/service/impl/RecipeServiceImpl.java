package com.backend.Recipe.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.Recipe.dao.RecipeRepository;
import com.backend.Recipe.entity.Recipe;
import com.backend.Recipe.service.RecipeService;


@Service
public class RecipeServiceImpl implements RecipeService {
	
	
	private RecipeRepository recipeRepository;

	//set up construtor injection 
	
	@Autowired
	public RecipeServiceImpl(RecipeRepository theRecipeRepository) {
		recipeRepository = theRecipeRepository;
	}
	
	@Override
	public List<Recipe> findAll() {
		
		return recipeRepository.findAll();
	}

	@Override
	public Recipe findById(int theId) {
		
		Optional<Recipe> result = recipeRepository.findById(theId);
		
       Recipe theRecipe = null;
		
		if (result.isPresent()) {
			theRecipe = result.get();
		}
		else {
			// we didn't find the employee
			throw new RuntimeException("Did not find recipe id - " + theId);
		}
		
		return theRecipe;
	}

	@Override
	public void save(Recipe theRecipe) {
		
		recipeRepository.save(theRecipe);

	}

	@Override
	public void deleteBy(int theId) {
		recipeRepository.deleteById(theId);

	}

}
