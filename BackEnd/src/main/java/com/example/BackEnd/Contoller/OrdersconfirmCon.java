package com.example.BackEnd.Contoller;


import com.example.BackEnd.Entity.Order;
import com.example.BackEnd.Entity.OrdersConfirm;
import com.example.BackEnd.Repository.OrdersconfirmRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class OrdersconfirmCon
{
    @Autowired
    OrdersconfirmRepo ordersconfirmRepo;
    @PostMapping("/confirmorders")
    public void postorder(@RequestBody OrdersConfirm l)
    {
        ordersconfirmRepo.save(l);
    }

    @GetMapping("/confirmorders")
    public List<OrdersConfirm> getall()
    {
        return ordersconfirmRepo.findAll();
    }

    @DeleteMapping("/confirmorders/{id}")
    public void deletecart(@PathVariable Integer id)
    {
        System.out.println("accessed");
        OrdersConfirm r = ordersconfirmRepo.findById(id).get();
        ordersconfirmRepo.delete(r);
    }
}
