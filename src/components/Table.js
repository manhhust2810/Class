import SampleRow from "./Table/SampleRow";
import HandleRow from "./Table/HandleRow";
import CurrentRow from "./Table/CurrentRow";
import NewRow from "./Table/NewRow";
import { connect } from "react-redux";
import * as action from "./../actions/index";

function Table(props) {
const { 
    status, 
    position,
    isAddOnMoreData,
    handleSave,
    handleAddMoreData,
    ordinalNumber,
    newMemberName,
    newTeamName,
    handleChangeTeamName,
    handleChangeMemberName,
    handleSelectOption } = props;

    const columnTitles = [
        "Ordinal number", 
        "New team name", 
        "Position", 
        "New Member Name", 
        "Action", 
        "Status"]

return (
    <div className="row-mt-15 format-table">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                {columnTitles.map((columnTitle, index) => (<th 
                className="text-center"
                key={index}>
                {columnTitle}
                </th>))}
                </tr>
                </thead>
                <tbody>
                <SampleRow />
                </tbody>
                <tfoot>
                {(status === "Pending")
                ?
                (<HandleRow
                    status={status}
                    handleSave={handleSave}
                    handleAddMoreData={handleAddMoreData}
                    ordinalNumber={ordinalNumber}
                    newMemberName={newMemberName}
                    newTeamName={newTeamName}
                    position={position}
                />)
                :
                (<CurrentRow
                    isAddOnMoreData={isAddOnMoreData}
                    status={status}
                    handleSave={handleSave}
                    handleAddMoreData={handleAddMoreData}
                    ordinalNumber={ordinalNumber}
                    newMemberName={newMemberName}
                    newTeamName={newTeamName}
                    handleChangeTeamName={handleChangeTeamName}
                    handleChangeMemberName={handleChangeMemberName}
                    position={position}
                    handleSelectOption={handleSelectOption}
                />)}
                <>{(isAddOnMoreData) &&
                (<NewRow
                    status={status}
                    handleSave={handleSave}
                    handleAddMoreData={handleAddMoreData}
                    ordinalNumber={ordinalNumber}
                    handleChangeTeamName={handleChangeTeamName}
                    handleChangeMemberName={handleChangeMemberName}
                    newMemberName={newMemberName}
                    newTeamName={newTeamName}
                    />)}</>
                </tfoot>
            </table>
            <span>{(status === "Pending")
            ?
            (<div className="alert alert-success">
            <strong>Saved New Member On Success Action!</strong>
            </div>)
            :
            (status === "Error")
            ?
            (<div className="alert alert-danger">
            <strong>Saved New Member On Failure Action!</strong>
            </div>) 
            :
            null}
            </span>
        </div>
    </div>)
}

const mapStateToProps = state => {
    return {
        newRow: state.TableData
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        addNewRow: (value) => {
            dispatch(action.addNewRow(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
