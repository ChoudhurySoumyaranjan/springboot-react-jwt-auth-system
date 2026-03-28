package com.soumya.main.service;

import com.soumya.main.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {

    Page<Product> getAllProducts(Pageable pageable) ;
    Product getProductById(Long id);
    Product createProduct(Product product) ;
    Product updateProduct(Long id, Product updatedProduct);
    void deleteProduct(Long id);

    List<Product> getAllProducts();
}