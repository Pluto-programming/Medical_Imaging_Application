import React, { useState, useContext } from "react";
import { Context } from '../Store';

function UserProfile() {

  const [ state, setState ] = useContext(Context);

  return (
    <div>
      User Profile Page
      { state.firstName }
      { state.lastName }
      {state.id }
      { state.code }
      { state.zip }
    </div>
  );
}

export default UserProfile;