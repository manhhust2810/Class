import React, { Component } from "react";
import Header from "./components/Header.js";
import Display from "./components/Display.js";
import dataMember from "./allDataMember.json";
import sampleMemberData from "./sampleData.json";
import NewRow from "./components/NewRow";
import "./components/Draft.css";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleMemberData: sampleMemberData,
      defaultTeamName: "New Name",
      userTiltle: "USERS",
      managerTiltle: "MANAGERS",
      data: dataMember,
      originData: dataMember,
      ordinalNumber: "Auto",
      newTeamName: "",
      newMemberName: "",
      status: "",
      position: "",
      edittingId: [],
      isSaveOnSuccess: false,
      isAddOnMoreData: false,
      dataAPI: []
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data2 = await data.json()

      this.setState({
        dataAPI: data2
      })
    } catch (err) {
      console.log('loi', err);
    }
  }

  handleSave = () => {
    console.log(this.state)
    const checkStatus = () => {
      if(this.state.newMemberName!== "" &&this.state.newTeamName!== "")
      {
        return "Pending"
      }
      return "Error"
    }
    this.setState({
      isSaveOnSuccess: !this.state.isSaveOnSuccess,
      ordinalNumber: 1,
      status: checkStatus(),
    })
  }

  handleAddMoreData = (event) => {  
    this.setState({
      // ordinalNumber: "Auto",
      ...this.state.isAddOnMoreData,
      isAddOnMoreData: true,
    })
  }

  handleAddNewTeam = (event) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          "id": "null",
          "name": "",
          "creator": "",
          "memberIds": [
          ],
          "managerIds": [
          ]
        },
      ]
    })
  }

  handleChangeTeamName = (event) => {
    const { value } = event.target;
    this.setState({
      newTeamName: value 
    })
  }

  handleChangeMemberName = (event) => {
    const { value } = event.target;
    this.setState({
      newMemberName: value
    })
  }

  handleChangeSearchBox = (event) => {
    const { value } = event.target;
    const { originData } = this.state;
    const newData = originData.filter(item => {
      const { memberIds, managerIds } = item;
      const matchUserId = [...memberIds, ...managerIds].filter(({ firstName = "", lastName = "" }) => firstName.includes(value) || lastName.includes(value))
      if (matchUserId.length > 0) {
        return true;
      }
      return item.name.includes(value);
    })
    this.setState((oldState) => ({
      ...oldState,
      value,
      data: newData,
    }))
  }

  handleClearTeam = (id) => {
    console.log(this.state);
    this.setState((oldState) => ({
      ...oldState,
      data: oldState.data.filter(item => item.id !== id)
    }))
  }

  handleEditTeamName = (id, event) => {
    const { newName } = event.target;
    const { edittingId } = this.state;
    const newEdittingId = edittingId.includes(id)
      ?
      edittingId.filter(item => item !== id)
      :
      [...edittingId, id]
    this.setState({
      defaultTeamName: newName,
      edittingId: newEdittingId,
    })
  }

  handleChangeName = (event) => {
    const { newName } = event.target;
    this.setState({
      defaultTeamName: newName,
      // edittingId: id
    })
    console.log(newName)
  }

  handleChangeName1 = (id, newName) => {
    const { originData, edittingId } = this.state;
    const newData = originData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: newName
        }
      }
      return item
    })

    const newEdittingId = edittingId.filter(item => item !== id)

    this.setState({
      edittingId: newEdittingId,
      data: newData,
      originData: newData,
    })
  }

  render() {
    const {
      userTiltle,
      managerTiltle,
      data,
      edittingId,
      dataAPI,
      sampleMemberData
    } = this.state;
    console.log(dataAPI)
    return (
      <div>
        <div>{dataAPI.title}</div>
        <h1 className="text-center">
        MY FIRST PROJECT WITH REACT APP AND GRID LAYOUT/BOOTSTRAP 4
        </h1>
        <Header
          onClick={this.handleAddNewTeam}
          onChange={this.handleChangeSearchBox}
          value={this.state.value}
        />     
        <div className="row-mt-15 format-table">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">Ordinal number</th>
              <th className="text-center">New team name</th>
              <th className="text-center">Position</th>
              <th className="text-center">New member name</th>
              <th className="text-center">Action</th>
              <th className="text-center">Status</th>
            </tr>    
          {sampleMemberData.map((post) =>
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
              post.status==="Success"?"label label-success":(post.status==="Pending"?"label label-primary":"label label-danger")
            }>
            {post.status}
             </span>
            </td>
          </tr>)}
            <tr>
            <td className="text-center format-input-cell"><b>{this.state.ordinalNumber}</b></td>
            <td className="format-input-cell">
            <input 
            type="text" 
            className="border-input"
            onChange={this.handleChangeTeamName}
            value={this.state.newTeamName}
            />
            </td>
            <td>
            <select className="form-control">
              <option>USER</option>
              <option>MANAGER</option>
              <option>CUSTORMER</option>
            </select>
            </td>
            <td>
            <input 
            type="text" 
            className="border-input"
            onChange={this.handleChangeMemberName}
            value={this.state.newMemberName}
            />
            </td>
            <td>
            <center>
            <button 
            className="btn btn-info"
            onClick={this.handleAddMoreData}>
            Add more
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="btn btn-success"
            handleSave={this.handleSave} 
            onClick={this.handleSave}>
            Save
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button 
            className="btn btn-danger"
            >
            Delete
            </button>
            </center>
            </td>
            <td className="text-center">
            <span className="label label-primary">{this.state.status}</span>
            </td>        
            </tr>{(this.state.isAddOnMoreData)&&
            (<NewRow 
            status={this.state.status} 
            handleSave={this.handleSave}
            handleAddMoreData={this.handleAddMoreData}
            ordinalNumber={this.state.ordinalNumber}
            handleChangeTeamName={this.handleChangeTeamName}
            handleChangeMemberName={this.handleChangeMemberName}
            newMemberName={this.state.newMemberName}
            newTeamName={this.state.newTeamName}    
            />)}
          </thead>
          </table>
          <span>{(this.state.isSaveOnSuccess)&&
          (<div class="alert alert-success">
              <strong>Saved New Member On Success Action!</strong>
          </div>)}  
          </span>         
          <Display 
              onClearTeam={this.handleClearTeam}
              newName={this.state.defaultTeamName}
              // onChangeName={this.handleChangeTeamName}
              onEditNameTeam={this.handleEditTeamName}
              onChange={this.handleChangeName}
              onClickCheckSymbol={this.handleChangeName1}
              userTiltle={userTiltle}
              managerTiltle={managerTiltle}
              dataMember={dataMember}
              data={data}
              edittingId={edittingId}
          />
          </div>
        </div>      
      </div>
    );
  };
};

export default App;