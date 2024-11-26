import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderInformation } from '../../modules/OrderInformation';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class OrderListComponent {
  @Input() orders: OrderInformation[] = [];
  @Output() buttonClick = new EventEmitter<any>();

  onClick(item: any) {
    this.buttonClick.emit(item);
  }

}
