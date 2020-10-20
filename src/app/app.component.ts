import { Component } from '@angular/core';
import { Livro } from './clientes/livro.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clientes: Livro[] = [];
  onClienteAdicionado(cliente) {
    this.clientes = [...this.clientes, cliente];
  }
}
