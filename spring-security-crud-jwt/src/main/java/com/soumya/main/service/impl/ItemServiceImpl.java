package com.soumya.main.service.impl;

import com.soumya.main.entity.Item;
import com.soumya.main.repository.ItemRepository;
import com.soumya.main.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemRepository itemRepository;

    @Async
    public CompletableFuture<Page<Item>> getItemsByProductId(Long productId, Pageable pageable) {
        return CompletableFuture.completedFuture(itemRepository.findByProductId(productId, pageable));
    }
}
