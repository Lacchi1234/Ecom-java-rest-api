package com.laksh.ecom.service;

import com.laksh.ecom.entity.Role;
import com.laksh.ecom.payload.LoginDto;
import com.laksh.ecom.payload.RegisterDto;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    String createRole(Role role);
    String deleteRole(String name);
    List<Role> getAllRoles();
    String getRoleByName(String name);

}