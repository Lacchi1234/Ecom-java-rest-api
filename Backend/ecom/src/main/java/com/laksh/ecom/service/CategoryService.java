package com.laksh.ecom.service;

import com.laksh.ecom.entity.Category;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface CategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category saveCategory(Category newCategory);
    Category updateCategory(Long id, Category updateCategory);
    void deleteCategory(Long id);
}
