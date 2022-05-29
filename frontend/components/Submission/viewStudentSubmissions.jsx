import { React, Component } from "react";
import { Button} from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "../header/customheader";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ViewStudentSubmissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(subdata){
    this.setState({
      data:subdata
    });
  }

  componentDidMount(){
    axios.get("http://localhost:3000/studentsubmissions").then(response =>
    {
      this.handleData(response.data);
    });
  }

  render() {

    return (
      <div>
        
        <CustomHeader />

        <div  style={{marginTop:'40px'}}>
            <div>
              <table>
                <tr>
                <td>Group ID</td>
                <td>Topic</td>
                <td>Upload Date</td>
                <td>File</td>
                </tr>
              
              {(this.state.data).map(data => 
                <tr>
                        <td>{data.groupid}</td>
                        <td>{data.topic}</td>
                        <td> {data.uploaddate}</td>
                        <td>{data.file}</td>
                     <td><Button>Download</Button></td>
                     <td><Link to="/updateStudentSubmission"><Button>Update</Button></Link></td>
                     <td><Button>Delete</Button></td>
                     </tr>
                )
              }
              </table>
            </div>
        </div>
      </div>
    );
  }
}
