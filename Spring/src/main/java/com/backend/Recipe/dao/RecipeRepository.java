package com.backend.Recipe.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.Recipe.entity.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe,  Number> {

}
