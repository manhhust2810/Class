import React from 'react';
import './App.css';
import Item1 from '../src/Component/Item1.js'
import Card from '../src/Component/Card.js'
import './Component/Draft.css'
// import Icon1 from '../src/Component/Card.js'
import data1 from '../src/quynhanh.json'
// var data = { 
//       admin1: "USERS",
//       admin2: "MANAGERS", 
//       type: 
//       {
//         admin: {
//         GovernmentInitiative: 
//         {
//           user: [
//           { empId: 1, fullName: "Trump", gender: "Male" },
//           { empId: 2, fullName: "Ivanka", gender: "Female" },
//           { empId: 3, fullName: "Kushner", gender: "Male" },
//           { empId: 4, fullName: "Trump", gender: "Male" },
//           { empId: 5, fullName: "Ivanka", gender: "Female" },
//           { empId: 6, fullName: "Kushner", gender: "Male" },
//           { empId: 1, fullName: "Trump", gender: "Male" },
//         ],
//           manager: [
//           { empId: 1, fullName: "Trump", gender: "Male" },
//           { empId: 2, fullName: "Ivanka", gender: "Female" },
//           { empId: 3, fullName: "Kushner", gender: "Male" }
//         ],
//       },
//         TrainingTeam: 
//         {
//           user: [
//         { empId: 1, fullName: "Trump", gender: "Male" },
//         { empId: 2, fullName: "Ivanka", gender: "Female" },
//       ],
//         manager: [
//         { empId: 1, fullName: "Trump", gender: "Male" },
//         { empId: 2, fullName: "Ivanka", gender: "Female" },
//         { empId: 3, fullName: "Kushner", gender: "Male" },
//         { empId: 1, fullName: "Trump", gender: "Male" },
//         { empId: 2, fullName: "Ivanka", gender: "Female" },
//       ]
// }
//         }
//       }
//     }
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      user: 'USERS',
      manager: 'MANAGERS',
    }
  }

  render() {
    const { user, manager } = this.state;
    const listCard = data1.map((post) =>
      <Card key={post.id} user={user} manager={manager} cardName={post.name} data1={data1} creator={post.creator} memberIds={post.memberIds} managerIds={post.managerIds}/>);
    return (
      <div>
        <Item1 className="my-button1" />
        <div className="rows2-2">
          {/* <Card user={user} manager={manager} cardName = {data1[0].name} data1={data1[0]} />  */}
          {/* <Card user={user} manager={manager} cardName = {data1[1].name} data1={data1[1]} /> */}
          {listCard}
        </div>
      </div>
    );
  };
};
export default App