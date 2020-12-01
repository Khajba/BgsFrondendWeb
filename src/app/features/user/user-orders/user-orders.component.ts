import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/enums/order.status.enum';
import { UserOrderItem } from 'src/app/models/user-models';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  orders: UserOrderItem[] = [
    {orderNumber: '123', date: '25/15/2020', totalAmount: 75, statusId: OrderStatus.Delivered, status: 'Delivered', statusDate:'30/12/2020'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
