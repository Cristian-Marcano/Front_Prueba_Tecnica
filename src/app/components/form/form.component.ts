import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { dataRedes } from 'src/app/modals/dataRedes';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tiempoF:number=0;
  tiempoW:number=0;
  tiempoTw:number=0;
  tiempoIg:number=0;
  tiempoTik:number=0;
  edad:string="";
  messageError:string="";
  Error:boolean=false;
  constructor(private http:HttpService,private router:Router) {

  }
  subirDatos(Favorita:HTMLSelectElement,correo:HTMLInputElement,sexo:HTMLSelectElement){
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(correo.value===""){
      this.Error=true;
      this.messageError="No inserto ningun correo";
    }
    else if(regex.test(correo.value)){
      if(this.edad===""){
        this.Error=true;
        this.messageError="No seleccionaste tu rango de Edad";
      }
      else{
        const INSERT:dataRedes={correo:correo.value,edad:this.edad,sexo:sexo.value,
          tiempoF:this.tiempoF,tiempoW:this.tiempoW,tiempoTw:this.tiempoTw,
          tiempoIg:this.tiempoIg,tiempoTik:this.tiempoTik,redFavorita:Favorita.value
        };
        this.http.insertDatos(INSERT).subscribe(operaciones=>{
          if(operaciones.operacion=="Correo Repetido"){
            this.Error=true;
            this.messageError="El correo ya se encontraba registrado, inserte otro";
          }
          else this.router.navigate(['']);
        });
      }
    }
    else{
      this.Error=true;
      this.messageError="No inserto un correo de forma correcta";
    }
  }
  getEdad(input:Event): void{
    this.edad = (<HTMLInputElement>input.target).value;
  } 
}
