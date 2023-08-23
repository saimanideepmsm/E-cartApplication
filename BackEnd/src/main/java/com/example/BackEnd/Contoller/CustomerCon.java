package com.example.BackEnd.Contoller;

import com.example.BackEnd.Entity.Customer;
import com.example.BackEnd.Repository.CustomersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CustomerCon
{
    @Autowired
    CustomersRepo customersRepo;
    @GetMapping("/customers/{s}")
    public Customer getcustomer(@PathVariable String s)
    {
        return customersRepo.findById(s).get();
    }

    //user is registering
    @PostMapping("/customers")
    public void customer(@RequestBody Customer s)
    {
        customersRepo.save(s);
    }
}
