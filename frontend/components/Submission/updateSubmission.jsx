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
        


        axios.put(`http://localhost:3000/submissions/update/${id}`,data).then((res) =>{
        if(res.data.success){
alert("Updated Successfully")

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
    
        axios.get(`http://localhost:3000/submissions/${id}`).then((res) =>{
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
<div>

<div>
        <form className="needs-validation" noValidate>
    <div className="colum1">

 
<div>
<label>Title</label>
<input type="text"
className="form-contorl"
name="title"
placeholder="Title"
value={this.state.title}
onChange={this.handleInputChange} required/>
</div>



<div>
<label>Description</label>
<input type="text"
className="form-contorl"
name="desc"
placeholder="Description"
value={this.state.desc}
onChange={this.handleInputChange} required/>
</div>

<div>
<label>Deadline</label>
<input type="text"
className="form-contorl"
name="deadline"
placeholder="Deadline"
value={this.state.deadline}
onChange={this.handleInputChange} required/>
</div>

<div>
<label>File</label>
<input type="text"
className="form-contorl"
name="file"
placeholder="File"
value={this.state.file}
onChange={this.handleInputChange} required/>
</div>
</div>


<button className="btn btn-success" type="submit" onClick={this.onSubmit}>
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
