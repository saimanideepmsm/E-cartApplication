package com.example.BackEnd.Contoller;

import com.example.BackEnd.Entity.Product;
import com.example.BackEnd.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class ProductCon
{
    @Autowired
    ProductRepo productRepo;

    @GetMapping("/products")
    public List<Product> getall()
    {
        return productRepo.findAll();
    }

    @PostMapping("/product")
    public Product putone(@RequestBody Product p)
    {
        return productRepo.save(p);
    }

    @PostMapping("/products")
    public List<Product> putall(@RequestBody List<Product> p)
    {
        return productRepo.saveAll(p);
    }
}