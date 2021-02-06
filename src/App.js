import React, { Component } from 'react';
import Header from "./components/Header.js";
// import Card from "./components/Card.js";
import Display from "./components/Display.js";
import data1 from './quynhanh.json';
import "./components/Draft.css";
import "./App.css";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultTeamName: "New Name",
      userTiltle: "USERS",
      managerTiltle: "MANAGERS",
      data: data1,
      originData: data1,
      ordinalNumber: "",
      newTeamName: "",
      newMemberName: "",
      status: "",
      position: "",
      edittingId: [],
      dataAPI: []
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1',
  //     {
  //       // headers: 'abc',
  //       // body: {
  //       // }
  //     })
  //     .then(data => data.json())
  //     .then(res => {
  //       this.setState({
  //         dataAPI: res
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

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

  // componentDidMount = () => {
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       const { tiltle } = data;
  //       this.setState({ userTiltle: tiltle });
  //     })
  //     .catch(error => console.log('Big error', error))
  // }

  // static getDerivedStateFromProps = () => {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }

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
    console.log(newData)
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

  handleChangeTeamName = (id, newName) => {
    console.log(this.state);
    // this.setState((oldState) => ({
    //   ...oldState,
    //   data: oldState.data.map(item => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         name: "New Name",
    //       }
    //     }
    //     return item;
    //   })
    // }))
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
    // console.log(id)
    // this.setState({
    //   edittingId: id
    // })
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
    // for(item in originData) {
    //   if(item.id === id) {
    //     item.name = newName
    //     }
    // }
    const newData = originData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: newName
        }
      }
      return item
    })

    // console.log('-------------');
    // console.log('originData', originData);
    // console.log('id', id);
    // const test = originData.filter(data => data.id !== id);
    // console.log('test', test);

    const newEdittingId = edittingId.filter(item => item !== id)

    this.setState({
      edittingId: newEdittingId,
      data: newData,
      originData: newData,
    })
  }

  render() {
    // console.log(this.state);
    const {
      userTiltle,
      managerTiltle,
      data,
      edittingId,
      dataAPI
    } = this.state;
    console.log(dataAPI)
    return (
      <div>
        <div>{dataAPI.title}</div>
        <h1 className="text-center">MY FIRST PROJECT WITH REACT APP AND BOOTSTRAP 4</h1>
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
            <tr>
            <td>Example No. 1</td>
            <td>
            <span>School of Information and Communications Technology</span>
            </td>
            <td className="text-center">
            <span className="">USER</span>
            </td>
            <td className="text-center"><span>Hoang Pho Nam</span></td>
            <td>
            <center>
            <button className="btn btn-info">Add more</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger">Delete</button>
            </center>
            </td>
            <td className="text-center">
            <span className="label label-success">Success</span>
            </td>   
            </tr>
            <tr>
            <td>Example No. 2</td>
            <td>
            <span>Seta International Vietnam</span>
            </td>
            <td className="text-center">
            <span className="">MANAGER</span>
            </td>
            <td className="text-center"><span>Vu Van Hung</span></td>
            <td>
            <center>
            <button className="btn btn-info">Add more</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger">Delete</button>
            </center>
            </td>
            <td className="text-center">
            <span className="label label-primary">Pending</span>
            </td>      
            </tr>
            <tr>
            <td>Example No. 3</td>
            <td>
            <span>School of Electronics and Telecommunications</span>
            </td>
            <td className="text-center">
            <span className="">CUSTORMER</span>
            </td>
            <td className="text-center"><span>Do Van Trieu</span></td>
            <td>
            <center>
            <button className="btn btn-info">Add more</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger">Delete</button>
            </center>
            </td>
            <td className="text-center">
            <span className="label label-danger">Rejected</span>
            </td>   
            </tr>
            <tr>
            <td className="format-input-cell"><input type="text" className="border-input"/></td>
            <td className="format-input-cell"><input type="text" className="border-input"/></td>
            <td>
            <select className="form-control">
              <option>USER</option>
              <option>MANAGER</option>
            </select>
            </td>
            <td><input type="text" className="border-input"/></td>
            <td>
            <center>
            <button className="btn btn-info">Add more</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger">Delete</button>
            </center>
            </td>
            <td></td>   
            </tr>
          </thead>
          </table>
          <Display 
              onClearTeam={this.handleClearTeam}
              newName={this.state.defaultTeamName}
              onChangeName={this.handleChangeTeamName}
              onEditNameTeam={this.handleEditTeamName}
              onChange={this.handleChangeName}
              onClickCheckSymbol={this.handleChangeName1}
              userTiltle={userTiltle}
              managerTiltle={managerTiltle}
              data1={data1}
              data={data}
              edittingId={edittingId}
          />
          {/* <div className="my-card">
          {data.map((post) =>
            <Card
              isEditing={edittingId.includes(post.id)}
              onClearTeam={this.handleClearTeam}
              newName={this.state.defaultTeamName}
              onChangeName={this.handleChangeTeamName}
              onEditNameTeam={this.handleEditTeamName}
              onChange={this.handleChangeName}
              onClickCheckSymbol={this.handleChangeName1}
              key={post.id}
              userTiltle={userTiltle}
              managerTiltle={managerTiltle}
              cardName={post.name}
              data1={data1}
              {...post}
            />
          )}
        </div> */}
          </div>
        </div>
        
      </div>
    );
  };
};

export default App;