import SampleRow from "./Table/SampleRow";
import HandleRow from "./Table/HandleRow";
import CurrentRow from "./Table/CurrentRow";
import NewRow from "./Table/NewRow";

function Table(props) {
    const { 
        columnTitles, 
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
    return (
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
                    </div>) :
                    null}
                </span>
            </div>
        </div>)
}

export default Table;
