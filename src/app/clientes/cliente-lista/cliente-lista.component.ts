import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Livro[] = [];
  constructor() {}

  ngOnInit(): void {}
}
