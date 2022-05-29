import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateSubmission extends Component {


    constructor(props){
        super(props);
        this.state={
            title:"",
  desc:"",
  deadline:"",
  file:"",
        }
        
        }
        
        handleInputChange = (e) =>{
        const {name,value} = e.target;
        
        this.setState({
        ...this.state,
        [name]:value
        })
        }
        
        onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        
        const {title,desc,deadline,file} = this.state;

        const data ={
            title:title,
  desc:desc,
  deadline:deadline,
  file:file,
        }
        console.log(data)
        


        axios.put(`http://localhost:8070/submissions/update/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Room Details Updated Successfully")

        this.setState(
        {title:"",
        desc:"",
        deadline:"",
        file:""
        }
        )
        }
        })
        }
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8070/submissions/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        title:res.data.post.title,
        desc:res.data.post.desc,
        deadline:res.data.post.deadline,
        file:res.data.post.file
    });
    console.log(this.state.post);  
    }
        });
    }
        
    




render() {
return (
<div>
<div style={{marginLeft:"-100px", marginTop:"-1360px", padding:"10px"}}>

<div style={{marginLeft:"200px"}}>
    <h1 className="h3 mb-3 font-weight-normal">Update excisting Room Details</h1>
    <form className="needs-validation" noValidate style={{marginTop:"50px"}}>
    <div className="colum1">

 
<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>Room Title</label>
<input style={{marginLeft:'46px', border: '1px solid #4CAF50'}} type="text"
className="form-contorl"
name="title"
placeholder="Enter Room Title"
value={this.state.title}
onChange={this.handleInputChange} required/>
</div>



<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>Room Number</label>
<input style={{marginLeft:'24px', border: '1px solid #4CAF50'}} type="text"
className="form-contorl"
name="desc"
placeholder="Enter Room Number"
value={this.state.desc}
onChange={this.handleInputChange} required/>
</div>

<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>Room Short Code</label>
<input style={{marginLeft:'8px', border: '1px solid #4CAF50'}} type="text"
className="form-contorl"
name="deadline"
placeholder="Enter Room Short Code"
value={this.state.deadline}
onChange={this.handleInputChange} required/>
</div>

<div className="form-group" style={{marginBottom:'25px'}}>
<label style={{marginBottom:'5px'}}>Discount</label>
<input style={{marginLeft:'56px', border: '1px solid #4CAF50'}} type="text"
className="form-contorl"
name="Discount"
placeholder="Enter Discount"
value={this.state.Discount}
onChange={this.handleInputChange} required/>
</div>
</div>


<button className="btn btn-success" type="submit" style={{marginTop:'15px', marginLeft:"100px", width:"200px"}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
&nbsp; UPDATE
</button>

</form>
</div>
</div>

</div>







)
}
}
