import React from 'react';
import PropTypes from 'prop-types';
import { 
    BsExclamationTriangleFill
} from "react-icons/bs";

function DataNotFound(props) {
  return (
    <tr>
      <td colspan="11" className="text-center" style={{ color: '#8C1515' }}>
        <strong>
          <BsExclamationTriangleFill />
          Data not found
        </strong>
      </td>
    </tr>
  );
}

DataNotFound.propTypes = {};

export default DataNotFound;