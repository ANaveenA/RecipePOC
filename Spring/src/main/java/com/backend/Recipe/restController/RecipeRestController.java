package com.backend.Recipe.restController;


import java.io.IOException;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.rowset.serial.SerialException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.Recipe.entity.Recipe;
import com.backend.Recipe.service.RecipeService;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/api")
public class RecipeRestController {
	
	
	  @Autowired
	   private Environment env;
	
	private RecipeService recipeService;
	
	//inject recipe DAO
	
	public RecipeRestController(RecipeService theRecipeService) {
		
		recipeService = theRecipeService;
	}
	
	//expose "/recipe" and return list of recipe
	
	@GetMapping("/recipe")
	
	public List<Recipe> findAll(){
		
		return recipeService.findAll();
		
	}
	
	//add mapping for get /recipe/{recipeID}
	
	@GetMapping("/recipe/{recipeId}")
	
	public Recipe getRecipe(@PathVariable int recipeId){
		
		Recipe theRecipe = recipeService.findById(recipeId);
		
		if(theRecipe == null) {
			throw new RuntimeException("Recipe id not found-" + recipeId);
		}
		
		return theRecipe;
	}
	

	@PostMapping(value = "/addRecipe", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public Recipe addRecipe(@RequestParam("recipe") String recipeObj,
		@RequestParam("file") MultipartFile file,HttpServletRequest request) throws JsonParseException, JsonMappingException, IOException, SerialException, SQLException {
		
		Recipe recipe = new ObjectMapper().readValue(recipeObj, Recipe.class);
		Date date= new Date();
		long time = date.getTime();

		byte[] data = file.getBytes();
		   
		recipe.setContentType(file.getContentType());
		
		recipe.setFilename(file.getOriginalFilename());
		
		recipe.setImagepath(data);
		
		
		recipe.setId(0);
		recipeService.save(recipe);
		return recipe;
		
	}
	

	@PutMapping(value = "/updateRecipe", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public Recipe updateRecipe(@RequestParam("recipe") String recipeObj,
		@RequestParam("file") MultipartFile file,HttpServletRequest request) throws JsonParseException, JsonMappingException, IOException, SerialException, SQLException {
		
		Recipe recipe = new ObjectMapper().readValue(recipeObj, Recipe.class);
		Date date= new Date();
		long time = date.getTime();

		byte[] data = file.getBytes();
		   
		recipe.setContentType(file.getContentType());
		   
		recipe.setFilename(file.getOriginalFilename());
		
		recipe.setImagepath(data);
		
		recipeService.save(recipe);
		
		return recipe;
		
		
	}
	
   @DeleteMapping("/recipe/{recipeId}")
	
	public ResponseEntity<?> deleteRecipe(@PathVariable int recipeId){
		
		Recipe theRecipe = recipeService.findById(recipeId);
		
		if(theRecipe == null) {
			throw new RuntimeException("Recipe id not found-" + recipeId);
		}
		
		recipeService.deleteBy(recipeId);

		return new ResponseEntity<>(theRecipe, HttpStatus.OK);
	}
	
		
}
