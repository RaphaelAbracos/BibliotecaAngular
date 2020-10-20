import { Component, EventEmitter, Output } from '@angular/core';
import { Livro } from '../livro.model';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter<Livro>();
  id: string;
  titulo: string;
  autor: string;
  numeroPaginas: string;

  onAdicionarCliente() {
    const cliente: Livro = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      numeroPaginas: this.numeroPaginas,
    };
    this.clienteAdicionado.emit(cliente);
  }
}
