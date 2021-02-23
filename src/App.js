import React, { Component } from "react";
import './App.scss';
// import TodoContainer from './components/todo-container/TodoContainer';
import { connect } from "react-redux";
import ChangeThem from './components/change-theme/ChangeThem';
import Header from "./components/Header";
import Display from "./components/Display";
import dataMembers from "./allDataMember.json";
import sampleMemberData from "./sampleData.json";
import NewRow from "./components/NewRow";
import HandleRow from "./components/HandleRow";
import CurrentRow from "./components/CurrentRow";
import SampleRow from "./components/SampleRow";
import TodoList from './components/TodoList';
import "./App.css";
// import demoRedux from "./redux/demoRedux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleMemberData: sampleMemberData,
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

  handleEditTeamName = (id) => {
    const { edittingId } = this.state;
    const newEdittingId = edittingId.includes(id)
      ?
      edittingId.filter(item => item !== id)
      :
      [...edittingId, id]
    this.setState({
      edittingId: newEdittingId
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
      columnTitles,
      status,
      position
    } = this.state;
    console.log("numberOfRow", this.state.numberOfRow);
    return (
      <div>
        <div>{dataAPI.title}</div>
        <span>
        <TodoList /> 
        </span>
        <div className={"App " + this.props.visibleTheme}>
        <ChangeThem />
        {/* <TodoContainer /> */}
        </div>
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
          {(status==="Pending")
          ?
          (<HandleRow 
          status={status} 
          handleSave={this.handleSave}
          handleAddMoreData={this.handleAddMoreData}
          ordinalNumber={this.state.ordinalNumber}
          newMemberName={this.state.newMemberName}
          newTeamName={this.state.newTeamName}
          position={position}    
          />)
          :
          (<CurrentRow
          isAddOnMoreData={this.state.isAddOnMoreData}
          status={status} 
          handleSave={this.handleSave}
          handleAddMoreData={this.handleAddMoreData}
          ordinalNumber={this.state.ordinalNumber}
          newMemberName={this.state.newMemberName}
          newTeamName={this.state.newTeamName}
          handleChangeTeamName={this.handleChangeTeamName}
          handleChangeMemberName={this.handleChangeMemberName}
          position={position} 
          handleSelectOption={this.handleSelectOption} 
          />)}
          <>{(this.state.isAddOnMoreData)&&
          (<NewRow 
          status={status} 
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
            <span>{(status==="Pending")
          ?
          (<div className="alert alert-success">
              <strong>Saved New Member On Success Action!</strong>
          </div>)
          :
          (status==="Error")
          ?
          (<div className="alert alert-danger">
              <strong>Saved New Member On Failure Action!</strong>
          </div>):
          null}  
          </span>         
          <Display 
              handleClearTeam = {this.handleClearTeam}
              newName = {this.state.defaultTeamName}
              handleEditTeamName = {this.handleEditTeamName}
              handleChangeName1 = {this.handleChangeName1}
              userTiltle = {userTiltle}
              managerTiltle = {managerTiltle}
              edittingId = {edittingId}
          />
          </div>
                 
        </div>
            
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    visibleTheme: state.visibleTheme
  }
}

export default connect(mapStateToProps, null)(App);