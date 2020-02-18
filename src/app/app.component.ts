import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  transacciones = [];
  monedero = 0;

  transaccion(input: HTMLInputElement, operation: string) {
  const value = Number(input.value);

  if (value <= 0) {
    alert('Ingrese una cantidad mayor a 0');
  } else {
    this.transacciones.unshift(value);

    if (operation === 'Deposit') {
      this.monedero += value;
    } else if (operation === 'Expense') {
      this.monedero -= value;
    }
  }
}
}
