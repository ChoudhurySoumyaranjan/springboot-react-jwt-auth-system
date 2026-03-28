package com.soumya.main.service.impl;

import com.soumya.main.entity.Product;
import com.soumya.main.repository.ProductRepository;
import com.soumya.main.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Transactional(readOnly = true)
    @Override
    public Page<Product> getAllProducts(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new NoSuchElementException("Product not found"));
    }

    @Transactional
    @Override
    public Product createProduct(Product product) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        product.setCreatedBy(username);
        return productRepository.save(product);
    }

    @Transactional
    @Override
    public Product updateProduct(Long id, Product updatedProduct) {
        Product product = getProductById(id);
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        product.setProductName(updatedProduct.getProductName());
        product.setModifiedBy(username);
        return productRepository.save(product);
    }



    @Transactional
    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
