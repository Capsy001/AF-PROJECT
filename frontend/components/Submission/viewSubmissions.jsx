import { React, Component } from "react";
import { Button} from "@mui/material";
import { Campaign, FileDownload } from "@mui/icons-material";
import { Campaign, CloudUpload } from "@mui/icons-material";
import CustomHeader from "../header/customheader";
import axios from "axios";

export default class ViewSubmissions extends Component {
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
    axios.get("http://localhost:3000/submissions").then(response =>
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
                <td>Title</td>
                <td>Description</td>
                <td>Deadline</td>
                <td>File</td>
                </tr>
              
              {(this.state.data).map(data => 
                <tr>
                        <td>{data.title}</td>
                        <td>{data.desc}</td>
                        <td> {data.deadline}</td>
                        <td>{data.file}</td>
                     <td><Button>Download</Button></td>
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
