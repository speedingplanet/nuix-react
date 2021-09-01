import React, { useState } from 'react';
import FindUsers from './FindUsers';
import UsersGrid from './UsersGrid';

const FindUsersContainer = ( { users, columns } ) => {
  const [ searchCriteria, setSearchCriteria ] = useState( {} );
  let searchCriteriaRE = new RegExp( searchCriteria.displayName, 'i' );
  let displayUsers = searchCriteria.displayName
    ? users.filter( ( user ) => searchCriteriaRE.test( user.displayName ) )
    : [];

  return (
    <>
      <div className="row">
        <div className="col">
          <FindUsers
            searchDisplayName={( criteria ) =>
              setSearchCriteria( { ...searchCriteria, ...criteria } )
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <UsersGrid users={displayUsers} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default FindUsersContainer;
