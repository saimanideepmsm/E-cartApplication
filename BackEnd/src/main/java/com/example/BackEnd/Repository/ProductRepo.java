package com.example.BackEnd.Repository;

import com.example.BackEnd.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product,Integer> {
}
