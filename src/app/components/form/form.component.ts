import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Asistentes } from 'src/app/models/asistentes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Asistentesarray: Asistentes[] = [
    { id: 1, name: 'Angie', lastname: 'Gómez', email: 'angie.gomez@ucp.edu.co', address: 'Dubai' },
  ];

  selectedAsistente: Asistentes = new Asistentes();

  addorEdit() {
    if(this.selectedAsistente.id === 0){
      this.selectedAsistente.id = this.Asistentesarray.length + 1;
      this.Asistentesarray.push(this.selectedAsistente);
    }
 
  

    this.selectedAsistente = new Asistentes();
  }


  openForEdit(asistentes: Asistentes) {
    this.selectedAsistente = asistentes;
  }

 eliminar(){
    if(confirm('¿Estas seguro de eliminar este registro?')){
      this.Asistentesarray = this.Asistentesarray.filter(x => x != this.selectedAsistente)
      this.selectedAsistente = new Asistentes();
    } 
    
  } 
  
  constructor() { }

  ngOnInit(): void {
  }

}
