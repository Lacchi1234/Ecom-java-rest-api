package com.laksh.ecom.service;

import com.laksh.ecom.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProductService {
    List<Product> getAllProducts();

    List<Product> getProductsByCategoryId(Long categoryId);

    Product getProductById(Long id);

    Product saveProduct(Long categoryId, Product product);

    Product updateProduct(Long categoryId, Long productId, Product updateProduct);

    void deleteProduct(Long categoryId, Long productId);
}