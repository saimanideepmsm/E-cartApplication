package com.example.BackEnd.Repository;

import com.example.BackEnd.Contoller.CustomerCon;
import com.example.BackEnd.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersRepo extends JpaRepository<Customer,String>
{

}
