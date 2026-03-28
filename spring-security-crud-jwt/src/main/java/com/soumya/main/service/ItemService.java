package com.soumya.main.service;

import com.soumya.main.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.concurrent.CompletableFuture;

public interface ItemService {

     CompletableFuture<Page<Item>> getItemsByProductId(Long productId, Pageable pageable);
}