import { Component} from '@angular/core';
import axios from 'axios';
  
@Component({
  selector: 'managefilm',
  templateUrl: './managefilm.component.html',
  styleUrls: ['./managefilm.component.css']
})
export class Managefilm {
  title = 'manageuser';
  backgroun:boolean=true
  add:boolean=true
  addupdate:boolean=true
  users:any
  new:any
  id:any
  name:any
  img:any
  backgound:any
  source:any
  director:any
  point:any
  status:any
  ngOnInit():void
  {
    axios
    .get('http://localhost:3002/flim')
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
    
    if( value.name!=null && value.director!=null && value.point!=null && value.source!=null && value.status!=null)
    {
    axios
    .post('http://localhost:3002/flim',value)
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
    .delete(`http://localhost:3002/flim/${value}`)
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
    this.director=value.director
    this.point=value.point
    this.status=value.status
    this.source=value.source
    this.backgound=value.backgound
    this.addupdate=false;
    this.backgroun=false;
  }
  updateinfor(value:any)
  {
    axios
    .patch(`http://localhost:3002/flim/${value.id}`,value)
    .then((response)=> {
      location.reload()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}