package com.example.BackEnd.Contoller;

import com.example.BackEnd.Entity.Order;
import com.example.BackEnd.Repository.Ordersrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

//add to cart
@RestController
@CrossOrigin
public class OrdersCon
{
    @Autowired
    Ordersrepo ordersrepo;

    @PostMapping("/orders")
    public void pushorders(@RequestBody Order s )
    {
    ordersrepo.save(s);
    }

    @GetMapping("/orders")
    public List<Order> getall()
    {
        return ordersrepo.findAll();
    }

    @DeleteMapping("/orders/{id}")
    public void deletecart(@PathVariable Integer id)
    {
        System.out.println("accessed");
        Order r = ordersrepo.findById(id).get();
        ordersrepo.delete(r);
    }
    @DeleteMapping("/orders")
    public void deleteall()
    {
        ordersrepo.deleteAll();
    }
}