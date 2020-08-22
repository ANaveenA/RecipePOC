package com.backend.Recipe.com.backend.Recipe.restController;


import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.backend.Recipe.entity.Recipe;
import com.backend.Recipe.restController.RecipeRestController;
import com.backend.Recipe.service.RecipeService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

/**
 * Test class  for RecipeRestController
 *
 * @See com.backend.Recipe.restController.RecipeRestController
 */
//Spring runner
@ExtendWith(SpringExtension.class)
//Only loading RecipeRestController
@ContextConfiguration(classes = {RecipeRestController.class})
@WebMvcTest(controllers = RecipeRestController.class)
//Disabling security
@WithMockUser
public class RecipeRestControllerTest {

  @Autowired
  private MockMvc mockMvc;

  //Injecting service
  @MockBean
  private RecipeService recipeService;

  //Checking the positive case by returning by validating against status code 200
  @Test
  public void testGetRecipePositive() throws Exception {
    //Creating mimic function call.
    when(recipeService.findById(12)).thenReturn(new Recipe());
    //Returning valid Recipe object will end up in having 200 as status code.
    mockMvc.perform(MockMvcRequestBuilders.get("/api/recipe/{recipeId}", 12))
        .andExpect(status().isOk());
  }
}
