package com.laksh.ecom.service.impl;

import com.laksh.ecom.entity.Category;
import com.laksh.ecom.exception.ResourceNotFoundException;
import com.laksh.ecom.repository.CategoryRepository;
import com.laksh.ecom.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        return category;
    }

    @Override
    public Category saveCategory(Category newCategory) {
        return categoryRepository.save(newCategory);
    }

    @Override
    public Category updateCategory(Long id, Category updateCategory) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        category.setName(updateCategory.getName());
        category.setImage(updateCategory.getImage());
        return categoryRepository.save(category);
    }
    @Override
    public void deleteCategory(Long id) {
        Category category = categoryRepository
                .findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("category", "categoryId", id));
        categoryRepository.deleteById(id);
    }
}
