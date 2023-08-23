package com.example.BackEnd.Entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Ordersconfirm")
public class OrdersConfirm
{
    @Id
    private Integer OrderId;
    private Integer ProductId;
    private String productname;
    private Integer productprice;
    private Long productquantity;
    private String name;
    private String phone;
    private String address;
}