import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-type',
  templateUrl: './show-type.component.html',
  styleUrls: ['./show-type.component.css']
})
export class ShowTypeComponent implements OnInit {

  constructor(private service:SharedService ) { }

  TypeList:any=[];

  ActivateAddEditTypComp:boolean=false;

  ModalTitle:string;

  typ:any;

  ngOnInit(): void {
    this.refreshTypeList();
  }

  addClick(){ 
    console.log('hello');
      this.typ={
      typeId:0,
      typeName:""
    }
this.ModalTitle="Add Type book";
this.ActivateAddEditTypComp=true;

  }



  editClick(item){
this.typ=item;
this.ModalTitle="Edit Type book";
this.ActivateAddEditTypComp=true;
  }

  
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteType(item.typeId).subscribe(data=>{
        alert(data.toString());
        this.refreshTypeList();
      })
    }
  }

closeClick(){
  this.ActivateAddEditTypComp=false;
  this.refreshTypeList();
}


refreshTypeList(){
  this.service.getTypeList().subscribe(data=>{
this.TypeList=data;
  });
}



}
