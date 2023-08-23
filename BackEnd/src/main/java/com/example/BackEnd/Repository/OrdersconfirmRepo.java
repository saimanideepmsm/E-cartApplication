package com.example.BackEnd.Repository;

import com.example.BackEnd.Entity.OrdersConfirm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersconfirmRepo extends JpaRepository<OrdersConfirm,Integer>
{

}