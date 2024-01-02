import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrl: './usuario-nuevo.component.scss'
})
export class UsuarioNuevoComponent implements OnInit{

  constructor(private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    // console.log(this.activateRoute.parent?.parent);
    this.activateRoute?.parent?.parent?.params.subscribe(parametros => {
      console.log('Ruta hija usuario nuevo');
      console.log(parametros);
    });  
  }
}
