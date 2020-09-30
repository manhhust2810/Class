import React from 'react'
import User1 from './User1.js'
import Icon1 from './Icon1.js'
import './Draft.css'
// import data1 from '../quynhanh.json'
const style = {
    p3: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "large",
    }
};

export default function UserGroup(props) {
    const { admin, data1 } = props;
    // const listIcon = data1.map((post) =>
    // <Icon1 key={post.id} email={post.email} firstName={post.firstName} lastName={post.lastName} status={post.status} />);
            var trieu1 = function(){
                let rows = [];
                for (let i=1; i<=data1.length; i++)
                    rows.push(<Icon1 key={i} />);
                return rows;
            }
    
            var trieu2 = function(){
                let rows = [];
                for (let i=1; i<=5; i++)
                    rows.push(<Icon1 key={i} />);
                rows.push(<div className='number' style={style.p3}>+{data1.length-5}</div>)
                return rows;

        }
    return (
        <div>
            <User1 type={data1.length} admin={admin} />
            {/* <div className='img3'>{listIcon}</div> */}
            <div className='img3' type={data1.length}>{(data1.length<=5)?trieu1():trieu2()}
                {/* <div className="number" style={style.p3}>+{data1.length-3}</div> */}
            </div>
        </div>
    )
}
