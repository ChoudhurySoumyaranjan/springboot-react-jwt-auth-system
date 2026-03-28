package com.soumya.main.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "product", indexes = @Index(columnList = "product_name"))
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Product name is required")
    private String productName;

    @NotBlank(message = "Created by is required")
    private String createdBy;

    @CreationTimestamp
    private LocalDateTime createdOn;

    private String modifiedBy;

    @UpdateTimestamp
    private LocalDateTime modifiedOn;
}
