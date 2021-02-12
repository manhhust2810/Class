import React, { Component } from "react";
import Header from "./components/Header";
import Display from "./components/Display";
import dataMembers from "./allDataMember.json";
import sampleMemberData from "./sampleData.json";
import NewRow from "./components/NewRow";
import HandleRow from "./components/HandleRow";
import CurrentRow from "./components/CurrentRow";
import SampleRow from "./components/SampleRow";
// import "./components/Draft.css";
import "./App.css";
import demoRedux from "./redux/demoRedux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleMemberData: sampleMemberData,
      defaultTeamName: "New Name",
      userTiltle: "USERS",
      managerTiltle: "MANAGERS",
      data: dataMembers,
      originData: dataMembers,
      ordinalNumber: "Auto",
      newTeamName: "",
      newMemberName: "",
      status: "",
      position: "user",
      edittingId: [],
      isSaveOnSuccess: false,
      isAddOnMoreData: false,
      numberOfRow: 0,
      dataAPI: [],
      newRow: {},
      data15: dataMembers,
      columnTitles: ["Ordinal number", "New team name", "Position", "New Member Name", "Action", "Status"]
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

  // componentWillMount(){
  //   if(localStorage&&localStorage.getItem("task")){
  //     var tasks = JSON.parse(localStorage.getItem("task"))
  //     this.setState({
  //       tasks : tasks
  //     });
  //   }
  // }

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
      ordinalNumber: (this.state.status==="Pending")?"1":"",
      status: checkStatus(),
    })
  }

  handleAddMoreData = () => {  
    this.setState({
      // ordinalNumber: "Auto",
      ...this.state.isAddOnMoreData,
      isAddOnMoreData: true,
      numberOfRow: this.state.numberOfRow+1,
      newRow: {
        ordinalNumber: "Auto",
        newTeamName: "",
        position: "user",
        newMemberName: "",
        status: ""
      }
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
    })
  }

  handleSelectOption = (event) => {
    const { value } = event.target; 
    this.setState({
      position: value
    });
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

  handleCreateNew = (newState) => {
    console.log("newState", newState)
    this.setState({
      data15: newState
    })
    console.log("data15", this.state.data15)
  }

  render() {
    const {
      userTiltle,
      managerTiltle,
      edittingId,
      dataAPI,
      value,
      columnTitles
    } = this.state;
    // console.log(dataAPI);
    console.log("numberOfRow", this.state.numberOfRow);
    return (
      <div>
        <div>{dataAPI.title}</div>
        <h1 className="text-center">
        BUILD FIRST PROJECT WITH REACT APP + REDUX + GRID LAYOUT/BOOTSTRAP 4
        </h1>
        <Header
          handleAddNewTeam = {this.handleAddNewTeam}
          handleChangeSearchBox={this.handleChangeSearchBox}
          handleCreateNew={this.handleCreateNew}
          value={value}
        />     
        <div className="row-mt-15 format-table">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
          <thead>
            <tr>
              {columnTitles.map((columnTitle) => (<th className="text-center">{columnTitle}</th>))}
            </tr>
          </thead>
          <tbody>
          <SampleRow />
          </tbody>    
          <tfoot>
          {(this.state.status==="Pending")
          ?
          (<HandleRow 
          status={this.state.status} 
          handleSave={this.handleSave}
          handleAddMoreData={this.handleAddMoreData}
          ordinalNumber={this.state.ordinalNumber}
          newMemberName={this.state.newMemberName}
          newTeamName={this.state.newTeamName}
          position={this.state.position}    
          />)
          :
          (<CurrentRow
          isAddOnMoreData={this.state.isAddOnMoreData}
          status={this.state.status} 
          handleSave={this.handleSave}
          handleAddMoreData={this.handleAddMoreData}
          ordinalNumber={this.state.ordinalNumber}
          newMemberName={this.state.newMemberName}
          newTeamName={this.state.newTeamName}
          handleChangeTeamName={this.handleChangeTeamName}
          handleChangeMemberName={this.handleChangeMemberName}
          position={this.state.position} 
          handleSelectOption={this.handleSelectOption} 
          />)}
          <>{(this.state.isAddOnMoreData)&&
          (<NewRow 
          status={this.state.status} 
          handleSave={this.handleSave}
          handleAddMoreData={this.handleAddMoreData}
          ordinalNumber={this.state.ordinalNumber}
          handleChangeTeamName={this.handleChangeTeamName}
          handleChangeMemberName={this.handleChangeMemberName}
          newMemberName={this.state.newMemberName}
          newTeamName={this.state.newTeamName}    
          />)}</>
          </tfoot>         
            </table>
            <span>{(this.state.status==="Pending")
          ?
          (<div className="alert alert-success">
              <strong>Saved New Member On Success Action!</strong>
          </div>)
          :
          (this.state.status==="Error")
          ?
          (<div className="alert alert-danger">
              <strong>Saved New Member On Failure Action!</strong>
          </div>):
          null}  
          </span>         
          <Display 
              onClearTeam = {this.handleClearTeam}
              newName = {this.state.defaultTeamName}
              onEditNameTeam = {this.handleEditTeamName}
              handleChangeName = {this.handleChangeName}
              onClickCheckSymbol = {this.handleChangeName1}
              userTiltle = {userTiltle}
              managerTiltle = {managerTiltle}
              edittingId = {edittingId}
              data15={this.state.data15}
          />
          {/* <div className="grid-container">
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>  
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>  
          <div className="grid-item">7</div>
          <div className="grid-item">8</div>
          <div className="grid-item">9</div>  
          </div> */}
          </div>
          
        </div>      
      </div>
    );
  };
};

export default App;