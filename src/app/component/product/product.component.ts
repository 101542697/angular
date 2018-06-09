import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//la variable se establece como abajo, nombre de la variable(name):tipo devariable y la variable
  name:string ="hola tu"; 
  producto:any = [];
  carrito:any =[];
  
  constructor() {
      
  
    //para llamar la variable se hace con this.+ nombre de la variable
    
    console.log($("body"));

    this.producto = [{
      id:"1",
      imagen:"/assets/product-img/cuaderno.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",

    },
    {
      id:"2",
      imagen:"/assets/product-img/esferos.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"3",
      imagen:"/assets/product-img/detergente.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"4",
      imagen:"/assets/product-img/paños.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"5",
      imagen:"/assets/product-img/huevos.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"6",
      imagen:"/assets/product-img/cereal.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"7",
      imagen:"/assets/product-img/esferos.png",
      precio:"$8.500",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"",
      comprar:"Comprar",
    },
    {
      id:"8",
      imagen:"/assets/product-img/cuaderno.png",
      precio:"$8.500  ",
      ahorra:"ahorra $7.750",
      titulo:"cuaderno norma",
      descripcion:"Cuaderno Cosido Kiut 100 hojas",
      descuento:"$ 1.250",
      comprar:"Comprar",
    },
  ];

  }

agregar(id){
  this.carrito.push();
  console.log("ok compra")
}
    
   

  ngOnInit() {
  }

}
