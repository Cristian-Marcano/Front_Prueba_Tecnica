import { Component } from '@angular/core';
import { redFavorita } from 'src/app/modals/redFavorita';
import { tiempoRedes } from 'src/app/modals/tiempoRedes';
import { timeProm } from 'src/app/modals/timeProm';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent {
  barChartOptions = { scaleShowVerticalLines: false, responsive: true };
  barChartLabels = ['Red Favorita'];
  barChartLegend = true;
  barChartData = [
    { data: [0], label: 'Series A' }
  ];
  indexMax:number[]=[];
  indexMin:number[]=[];
  nroEncuestas!:number;
  tiempoProm!:timeProm;
  redFavorita:redFavorita[]=[];
  rangoEdadUso:tiempoRedes[]=[];
  constructor(private http:HttpService) {
    this.obtenerDatos();
  }
  obtenerDatos():void{
    this.http.showDatos().subscribe(datos=>{
      this.nroEncuestas=datos.nroEncuestas;
      if(this.nroEncuestas>0){
        this.tiempoProm=datos.timeProm;
        this.redFavorita=datos.redFavorita;
        this.rangoEdadUso=datos.times;
        this.rangoEdadUso.map(x=>{
          if(x.tiempo_18_25==null) x.tiempo_18_25=0;
          if(x.tiempo_26_33==null) x.tiempo_26_33=0;
          if(x.tiempo_34_40==null) x.tiempo_34_40=0;
          if(x.tiempo_40p==null) x.tiempo_40p=0;
        });
        this.setRedFavoritas();
      }
    });
  }
  setRedFavoritas():void{
    let getMin:number=Number.MAX_SAFE_INTEGER, getMax:number=0;
    for(let i:number=0; i<this.redFavorita.length; i++){
      if(this.redFavorita[i].nro>=getMax){
        if(this.redFavorita[i].nro==getMax) this.indexMax.push(i);
        else{
          getMax=this.redFavorita[i].nro;
          this.indexMax.splice(0,this.indexMax.length);
          this.indexMax.push(i);
        }
      }
      if(this.redFavorita[i].nro<=getMin){
        if(this.redFavorita[i].nro==getMin) this.indexMin.push(i);
        else{
          getMin=this.redFavorita[i].nro;
          this.indexMin.splice(0,this.indexMin.length);
          this.indexMin.push(i);
        }
      }
      this.barChartData.push({data:[this.redFavorita[i].nro], label:this.redFavorita[i].red});
    }
    this.barChartData.splice(0,1);
  }
  compareArrays():boolean{
    if(this.indexMax.join('')==this.indexMin.join('')) return true;
    return false;
  }
  resTiempoProm(time:number):string{
    let n:number;
    if((time-Math.floor(time))==0) return Math.round(time)+' Horas';
    else if((time-Math.floor(time))>=0.5) return 'menos de '+Math.round(time)+' Horas'; 
    return 'mas de '+Math.floor(time)+' Horas';
  }
}
