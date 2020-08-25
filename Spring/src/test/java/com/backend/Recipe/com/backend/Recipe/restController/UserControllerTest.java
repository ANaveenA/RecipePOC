package com.backend.Recipe.com.backend.Recipe.restController;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.backend.Recipe.Jwtoken.JwtTokenProvider;
import com.backend.Recipe.entity.User;
import com.backend.Recipe.restController.UserController;
import com.backend.Recipe.service.UserService;
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
 * Test class  for UserController
 *
 * @See com.backend.Recipe.restController.UserController
 */
//Spring runner
@ExtendWith(SpringExtension.class)
//Only loading RecipeRestController
@ContextConfiguration(classes = {UserController.class})
@WebMvcTest(controllers = UserController.class)
//Disabling security
@WithMockUser
public class UserControllerTest {

  @Autowired
  private MockMvc mockMvc;

  //Injecting service
  @MockBean
  private UserService userService;

  @MockBean
  private JwtTokenProvider jwtTokenProvider;

  //Checking the positive case by returning by validating against status code 200
  @Test
  public void testLoginPositive() throws Exception {
    //Creating mimic function call.
    when(userService.findByUsername("user")).thenReturn(new User());
    //Returning valid Recipe object will end up in having 200 as status code.
    mockMvc.perform(MockMvcRequestBuilders.get("/api/user/login"))
        .andExpect(status().isOk());
  }
}

