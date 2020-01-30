package com.backend.Recipe.entity;


import java.sql.Timestamp;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="recipe")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Recipe {
	
   //define fields
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="recipe_title")
	private String recipeTitle;
	
	@Column(name="recipe_description")
	private String recipeDescription;
	
	@Column(name="recipe_incredients")
	private String recipeIncredients;
	
	@Column(name="recipe_cooking_method")
	private String recipeCookingMethod;
	
    @Column(name="recipe_created_at")
	@JsonFormat(pattern="dd-MM-yyyy HH:mm")
    @CreationTimestamp
    private Timestamp recipeCreatedAt;
    
    @Column(name="recipe_modified_at")
    @UpdateTimestamp
    @JsonFormat(pattern="dd-MM-yyyy HH:mm")
    private Timestamp recipeModifiedAt;

	@Column(name="filename")
	private String filename;

	@Column(name="content_type")
	private String contentType;
	
	@Column(name="vegitarian_non_vegiterian")
	private String vegitarian_non_vegiterian;
	
	@Column(name="number_of_sutiable")
	private String number_of_sutiable;
	
	@Column(name="imagepath")
	@Lob
	private byte[] imagepath;


	
	public Recipe() {
		
	}



	public Recipe( String recipeTitle, String recipeDescription, String recipeIncredients,
			String recipeCookingMethod, Timestamp recipeCreatedAt, Timestamp recipeModifiedAt, String filename,
			String contentType, String vegitarian_non_vegiterian, String number_of_sutiable, byte[] imagepath) {
		
		
		this.recipeTitle = recipeTitle;
		this.recipeDescription = recipeDescription;
		this.recipeIncredients = recipeIncredients;
		this.recipeCookingMethod = recipeCookingMethod;
		this.recipeCreatedAt = recipeCreatedAt;
		this.recipeModifiedAt = recipeModifiedAt;
		this.filename = filename;
		this.contentType = contentType;
		this.vegitarian_non_vegiterian = vegitarian_non_vegiterian;
		this.number_of_sutiable = number_of_sutiable;
		this.imagepath = imagepath;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getRecipeTitle() {
		return recipeTitle;
	}



	public void setRecipeTitle(String recipeTitle) {
		this.recipeTitle = recipeTitle;
	}



	public String getRecipeDescription() {
		return recipeDescription;
	}



	public void setRecipeDescription(String recipeDescription) {
		this.recipeDescription = recipeDescription;
	}



	public String getRecipeIncredients() {
		return recipeIncredients;
	}



	public void setRecipeIncredients(String recipeIncredients) {
		this.recipeIncredients = recipeIncredients;
	}



	public String getRecipeCookingMethod() {
		return recipeCookingMethod;
	}



	public void setRecipeCookingMethod(String recipeCookingMethod) {
		this.recipeCookingMethod = recipeCookingMethod;
	}



	public Timestamp getRecipeCreatedAt() {
		return recipeCreatedAt;
	}



	public void setRecipeCreatedAt(Timestamp recipeCreatedAt) {
		this.recipeCreatedAt = recipeCreatedAt;
	}



	public Timestamp getRecipeModifiedAt() {
		return recipeModifiedAt;
	}



	public void setRecipeModifiedAt(Timestamp recipeModifiedAt) {
		this.recipeModifiedAt = recipeModifiedAt;
	}



	public String getFilename() {
		return filename;
	}



	public void setFilename(String filename) {
		this.filename = filename;
	}



	public String getContentType() {
		return contentType;
	}



	public void setContentType(String contentType) {
		this.contentType = contentType;
	}



	public String getVegitarian_non_vegiterian() {
		return vegitarian_non_vegiterian;
	}



	public void setVegitarian_non_vegiterian(String vegitarian_non_vegiterian) {
		this.vegitarian_non_vegiterian = vegitarian_non_vegiterian;
	}



	public String getNumber_of_sutiable() {
		return number_of_sutiable;
	}



	public void setNumber_of_sutiable(String number_of_sutiable) {
		this.number_of_sutiable = number_of_sutiable;
	}



	public byte[] getImagepath() {
		return imagepath;
	}



	public void setImagepath(byte[] imagepath) {
		this.imagepath = imagepath;
	}



	@Override
	public String toString() {
		return "Recipe [id=" + id + ", recipeTitle=" + recipeTitle + ", recipeDescription=" + recipeDescription
				+ ", recipeIncredients=" + recipeIncredients + ", recipeCookingMethod=" + recipeCookingMethod
				+ ", recipeCreatedAt=" + recipeCreatedAt + ", recipeModifiedAt=" + recipeModifiedAt + ", filename="
				+ filename + ", contentType=" + contentType + ", vegitarian_non_vegiterian=" + vegitarian_non_vegiterian
				+ ", number_of_sutiable=" + number_of_sutiable + ", imagepath=" + Arrays.toString(imagepath) + "]";
	}

	
	
	
}