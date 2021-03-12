import React, { Component } from "react";
import './App.scss';
// import TodoContainer from './components/todo-container/TodoContainer';
import { connect } from "react-redux";
// import ChangeThem from './components/change-theme/ChangeThem';
import Header from "./components/Display/Header";
import Display from "./views/Display";
import TodoList from "./views/TodoList";
import Color from "./views/Color";
import TranscriptCalculate from "./views/TranscriptCalculate";
import Menu from "./views/Menu";
import UserManager from "./views/UserManager";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import { arrayMove } from 'react-sortable-hoc';
import List from './list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
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

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
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

  handleSelectOption = (event) => {
    const { value } = event.target;
    this.setState({
      position: value
    });
  }

  render() {
    const { edittingId } = this.state;
    return (
      <Router>
          <Menu />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/display" exact>
              <Header />
              {/* {({ match }) => ( */}
           
              <Display
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
            <Route path="/transcript" exact>
              <TranscriptCalculate />
            </Route>
          
            <Route path="/statistical" exact>

            </Route>
            <Route path="/color" exact>
              <Color />
            </Route>
            <Route path="/covid19" exact>
              
            </Route>
            <Route path="/worldcup" exact>
              
            </Route>
            <Route path="/blockchain" exact>
            <List items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} />
            </Route>
            <Route component={NotFound} />
          </Switch>
      
      </Router>
      // <div>
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