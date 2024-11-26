import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  componentsPerOrder: number = 0;
  orderPerYear: number = 0;

  savedCapital: number = 0;
  savedCO2e: number = 0;

  updatedCalculations(): void {
    this.savedCapital = (this.componentsPerOrder + this.orderPerYear * 10);
    this.savedCO2e = (this.componentsPerOrder + this.orderPerYear * 4);
  }

}
