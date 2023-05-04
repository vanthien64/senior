import { Component} from '@angular/core';
import axios from 'axios';
  
@Component({
  selector: 'managesinger',
  templateUrl: './managesinger.component.html',
  styleUrls: ['./managesinger.component.css']
})
export class Managesinger {
  title = 'managesinger';
  backgroun:boolean=true
  add:boolean=true
  addupdate:boolean=true
  users:any
  new:any
  id:any
  name:any
  img:any
  backgound:any
  idsong:any
  status:any
  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/singer')
    .then((response)=> {
      this.users=response.data
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  create(value:any)
  {
    console.log(value);
    
    if( value.name!=null && value.img!=null && value.backgound!=null && value.status!=null && value.idsong!=null)
    {
    axios
    .post('http://localhost:3002/singer',value)
    .then((response)=> {
      location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  else
  {
    alert('You have to fill all input')
  }
  }
  addnewcreate()
  {
    this.add=false
    this.backgroun=false
  }
  remove()
  {
    this.add=true
    this.addupdate=true
    this.backgroun=true
  }
  delete(value:any,index:any)
  {
    console.log(this.users);
    
    axios
    .delete(`http://localhost:3002/singer/${value}`)
    .then((response)=> {
      this.new =this.users.splice(index,1)
      this.users=[...this.users]
      console.log(this.users);
      console.log(index);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  updatesong(value:any)
  {
    this.id=value.id
    this.name=value.name
    this.img=value.img
    this.idsong=value.idsong
    this.status=value.status
    this.backgound=value.backgound
    this.addupdate=false;
    this.backgroun=false;
  }
  updateinfor(value:any)
  {
    axios
    .patch(`http://localhost:3002/singer/${value.id}`,value)
    .then((response)=> {
      location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}