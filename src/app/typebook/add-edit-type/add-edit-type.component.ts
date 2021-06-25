import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-type',
  templateUrl: './add-edit-type.component.html',
  styleUrls: ['./add-edit-type.component.css']
})
export class AddEditTypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() typ:any;
  typeId:string;
  typeName:string;

  ngOnInit(): void {
    this.typeId=this.typ.typeId;
    this.typeName=this.typ.typeName;
  }

  addType(){
    var val = {typeId:this.typeId,
      typeName:this.typeName};
    this.service.addType(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateType(){
    var val = {typeId:this.typeId,
      typeName:this.typeName};
    this.service.updateType(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}