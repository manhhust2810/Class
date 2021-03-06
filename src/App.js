import React, { Component } from "react";
import './App.scss';
// import TodoContainer from './components/todo-container/TodoContainer';
import { connect } from "react-redux";
// import ChangeThem from './components/change-theme/ChangeThem';
import sampleMemberData from "./sampleData.json";
import dataMembers from "./allDataMember.json";
import Header from "./components/Display/Header";
import Display from "./views/Display";
import TodoList from "./views/TodoList";
import Color from "./views/Color";
import Table from "./views/Table";
import Menu from "./views/Menu";
import UserManager from "./views/UserManager";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch
} from "react-router-dom";
import routes from "./views/routes"
import "./App.css";

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
      // dataAPI: [],
      newRow: {},
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
      if (this.state.newMemberName !== "" && this.state.newTeamName !== "") {
        return "Pending"
      }
      return "Error"
    }
    this.setState({
      isSaveOnSuccess: !this.state.isSaveOnSuccess,
      ordinalNumber: (this.state.status === "Pending") ? "1" : "",
      status: checkStatus(),
    })
  }

  handleAddMoreData = () => {
    this.setState({
      ...this.state.isAddOnMoreData,
      isAddOnMoreData: true,
      numberOfRow: this.state.numberOfRow + 1,
      newRow: {
        ordinalNumber: "Auto",
        newTeamName: "",
        position: "user",
        newMemberName: "",
        status: ""
      }
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
    console.log("newState", newState);
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
      // dataAPI,
      value,
    } = this.state;
    // console.log("numberOfRow", this.state.numberOfRow);
    return (
      <Router>
          <Menu />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/display" exact>
              <Header
                handleAddNewTeam={this.handleAddNewTeam}
                handleChangeSearchBox={this.handleChangeSearchBox}
                handleCreateNew={this.handleCreateNew}
                value={value}
              />
              {/* {({ match }) => ( */}
              <Display
                newName={this.state.defaultTeamName}
                handleEditTeamName={this.handleEditTeamName}
                handleChangeName1={this.handleChangeName1}
                userTiltle={userTiltle}
                managerTiltle={managerTiltle}
                edittingId={edittingId}
                // match={match}
              />
              {/* )} */}
            </Route>
            <Route path="/todolist" exact>
              <TodoList />
            </Route>
            <Route path="/usermanager" exact>
              <UserManager />
            </Route>
            <Route path="/table" exact>
              <Table
                status={this.state.status}
                position={this.state.position}
                isAddOnMoreData={this.state.isAddOnMoreData}
                handleSave={this.handleSave}
                handleAddMoreData={this.handleAddMoreData}
                ordinalNumber={this.state.ordinalNumber}
                newMemberName={this.state.newMemberName}
                newTeamName={this.state.newTeamName}
                handleChangeTeamName={this.handleChangeTeamName}
                handleChangeMemberName={this.handleChangeMemberName}     
              />
            </Route>
          
            <Route path="/transcript" exact>

            </Route>
            <Route path="/color" exact>
              <Color />
            </Route>
            <Route path="/covid19" exact>
              
            </Route>
            <Route path="/worldcup" exact>
              
            </Route>
            <Route path="/blockchain" exact>
              
            </Route>
            <Route component={NotFound} />
          </Switch>
      
      </Router>
      // <div>
      //   <div>{dataAPI.title}</div>
      //   <span>
      //   {/* <TodoList />  */}
      //   </span>
      //   <div className={"App " + this.props.visibleTheme}>
      //   <ChangeThem />
      //   {/* <TodoContainer /> */}
      //   </div>
      //   <div className="row-mt-15 format-table">
      //     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //     <table className="table table-bordered table-hover">
      //     <thead>
      //       <tr>
      //         {columnTitles.map((columnTitle) => (<th className="text-center">{columnTitle}</th>))}
      //       </tr>
      //     </thead>
      //     <tbody>
      //     <SampleRow />
      //     </tbody>    
      //     <tfoot>
      //     {(status==="Pending")
      //     ?
      //     (<HandleRow 
      //     status={status} 
      //     handleSave={this.handleSave}
      //     handleAddMoreData={this.handleAddMoreData}
      //     ordinalNumber={this.state.ordinalNumber}
      //     newMemberName={this.state.newMemberName}
      //     newTeamName={this.state.newTeamName}
      //     position={position}    
      //     />)
      //     :
      //     (<CurrentRow
      //     isAddOnMoreData={this.state.isAddOnMoreData}
      //     status={status} 
      //     handleSave={this.handleSave}
      //     handleAddMoreData={this.handleAddMoreData}
      //     ordinalNumber={this.state.ordinalNumber}
      //     newMemberName={this.state.newMemberName}
      //     newTeamName={this.state.newTeamName}
      //     handleChangeTeamName={this.handleChangeTeamName}
      //     handleChangeMemberName={this.handleChangeMemberName}
      //     position={position} 
      //     handleSelectOption={this.handleSelectOption} 
      //     />)}
      //     <>{(this.state.isAddOnMoreData)&&
      //     (<NewRow 
      //     status={status} 
      //     handleSave={this.handleSave}
      //     handleAddMoreData={this.handleAddMoreData}
      //     ordinalNumber={this.state.ordinalNumber}
      //     handleChangeTeamName={this.handleChangeTeamName}
      //     handleChangeMemberName={this.handleChangeMemberName}
      //     newMemberName={this.state.newMemberName}
      //     newTeamName={this.state.newTeamName}    
      //     />)}</>
      //     </tfoot>         
      //       </table> 
      //       <span>{(status==="Pending")
      //     ?
      //     (<div className="alert alert-success">
      //         <strong>Saved New Member On Success Action!</strong>
      //     </div>)
      //     :
      //     (status==="Error")
      //     ?
      //     (<div className="alert alert-danger">
      //         <strong>Saved New Member On Failure Action!</strong>
      //     </div>):
      //     null}  
      //     </span>         
      //     <Display
      //         newName = {this.state.defaultTeamName}
      //         handleEditTeamName = {this.handleEditTeamName}
      //         handleChangeName1 = {this.handleChangeName1}
      //         userTiltle = {userTiltle}
      //         managerTiltle = {managerTiltle}
      //         edittingId = {edittingId}
      //     />
      //     </div>         
      //   </div>      
      // </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    visibleTheme: state.visibleTheme,
    newRow: state.sampleMembers
  }
}

export default connect(mapStateToProps, null)(App);