// rfc, rfce, rafce,
// look at the ES7/React Snippets extension for more

import React, { useState } from 'react';

const initialState = {
  displayName: '',
};

const FindUsers = ( { searchDisplayName } ) => {
  const [ searchCriteria, setSearchCriteria ] = useState( initialState );

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h3>Find Users</h3>
          <div className="mb-3">
            <label htmlFor="searchDisplayName" className="form-label">
              Find user by display name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="searchDisplayName"
              value={searchCriteria.displayName}
              onChange={( e ) =>
                setSearchCriteria( {
                  ...searchCriteria,
                  displayName: e.target.value,
                } )
              }
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => searchDisplayName( searchCriteria )}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Searching for {JSON.stringify( searchCriteria )}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FindUsers;
