import { Component, OnInit } from '@angular/core';
import { UserOrderItem } from 'src/app/models/user-models';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {

  orders: UserOrderItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
