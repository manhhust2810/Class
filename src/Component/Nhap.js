import React from 'react';
import './App.css';
import Header from './Component/Header.js'
import Card from '../src/Component/Card.js'
import './Component/Draft.css'
import data1 from '../src/quynhanh.json'


class App extends React.Component {
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            value: '',
            userTiltle: 'USERS',
            managerTiltle: 'MANAGERS',
            isClickOn: false,
            data: data1,
            originData: data1,
        };
    }

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                const { tiltle } = data;
                this.setState({ userTiltle: tiltle });
            })
            .catch(error => console.log('Big error', error))
    }

    static getDerivedStateFromProps = () => {
        console.log("getDerivedStateFromProps");
        return null;
    }

    handleAddNewTeam = (e) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    "id": "",
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

    handleChangeSearchBox = (e) => {
        const { value } = e.target;
        // console.log(value)
        const { originData } = this.state;
        const newData = originData.filter(item => {
            const { memberIds, managerIds } = item;
            console.log(memberIds, managerIds);
            const matchUserId = [...memberIds, ...managerIds].filter(({ firstName, lastName }) => firstName.includes(value) || lastName.includes(value))
            if (matchUserId.length > 0) {
                return true;
            }
            return item.name.includes(value)
        })
        this.setState((oldState) => ({
            ...oldState,
            value,
            data: newData,
        }))
    }
    handleClearTeam = (id, newName) => {
        console.log(this.state);
        this.setState((oldState) => ({
            ...oldState,
            data: oldState.data.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        name: "New Name",
                    }
                }
                return item;

            })
        }))
    }
    render() {
        const { userTiltle, managerTiltle, data } = this.state;
        return (
            <div>
                <Header
                    className="my-button1"
                    onClick={this.handleAddNewTeam}
                    onChange={this.handleChangeSearchBox}
                    value={this.state.value}
                />
                <div className="rows2-2">
                    {data.map((post) =>
                        <Card
                            onClearTeam={this.handleClearTeam}
                            key={post.id}
                            userTiltle={userTiltle}
                            managerTiltle={managerTiltle}
                            cardName={post.name}
                            data1={data1}
                            {...post}
                        />
                    )}
                </div>
            </div>
        );
    };
};
export default App