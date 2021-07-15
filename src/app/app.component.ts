import { Component } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-tutorial';
  cliente: Cliente = new Cliente();

  constructor(private httpcliente: HttpClient) {

  }

  VerificaCEP() {
    this.httpcliente.get(`https://viacep.com.br/ws/${this.cliente.CEP}/json/`).toPromise().then(
      data => {
        const dado: any = data; 
        this.cliente.Rua = dado.logradouro;
        this.cliente.Bairro = dado.bairro;
        this.cliente.Municipio = dado.localidade;
        this.cliente.Estado = dado.uf;
      });
  }

  salvar() {
    console.log(this.cliente);
  }
}