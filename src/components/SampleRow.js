import React from "react";
import { connect } from "react-redux";

function SampleRow(props){

    const { sampleMembers } = props;   
    
    return (
      sampleMembers.map((post) =>
            <tr key={post.id}>
              <td className="text-center">{post.id}</td>
              <td>{post.teamName}</td>
              <td className="text-center">{post.position}</td>
              <td className="text-center">{post.memberName}</td>
              <td className="text-center">
              <center>
              <button className="btn btn-info">Add more</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-danger">Delete</button>
              </center>
              </td>
              <td className="text-center">
              <span className={
                post.status==="Success"?"label label-success":(post.status==="Pending"?"label label-primary":(post.status==="Rejected")?"label label-warning":"label label-danger")
              }>
              {post.status}
               </span>
              </td>
            </tr>)
    )
}

const mapStateToProps = (state) => {
  return {
    sampleMembers : state.sampleMembers
  }
};

export default connect(mapStateToProps, null)(SampleRow);

