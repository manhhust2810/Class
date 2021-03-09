import { connect } from 'react-redux';
import * as action from './../../actions/index';

function CurrentView(props) {
  const { 
    status, 
    addNewRow, 
    deleteRow, 
    generateId,
    examination,
    factor,
    process,
    saveRow 
  } = props;

  return (
    <tr>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="5"
          maxlength="5"
          // onChange={handleChangeTeamName}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="7"
          maxlength="7"
          // onChange={handleChangeTeamName}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="48"
          // onChange={handleChangeTeamName}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="2"
          maxlength="2"
          // onChange={handleChangeTeamName}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          // onChange={handleChangeTeamName}
        />
      </td>

      <td>
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          // onChange={handleChangeMemberName}
        />
        {/* <select 
        className="form-control" 
        defaultValue={factor} 
        // onChange={handleSelectOption}
        >
        <option value="user">0.5</option>
        <option value="manager">0.3</option>
        <option value="custormer">0.4</option>
        </select> */}
      </td>
      <td>
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          // onChange={handleChangeMemberName}
        />
      </td>
      <td>
        <center>
          {/* {actionsArray.map((item)=>(<button 
        className={`btn btn-${item.buttonType}`}
        onClick={item.handleEvent}
        >{item.name}
        </button>))} */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-success"
            onClick={()=>saveRow(generateId, factor, process, examination)}
          >
            Save
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => deleteRow(generateId)}
          >
            Delete
          </button>
        </center>
      </td>
      <td></td>
      <td></td>
      <td className="text-center">
        <span
          className={
            status === 'Pending'
              ? 'label label-success'
              : status === 'Error'
              ? 'label label-danger'
              : null
          }
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addNewRow: value => {
      dispatch(action.addNewRow(value));
    },
    deleteRow: id => {
      dispatch(action.deleteRow(id));
    },
    saveRow: (id, factor, process, examination) => {
      dispatch(action.saveRow(id, factor, process, examination));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentView);
