import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TEAM } from '../graphql/schema';

function AddTeam() {
  const [form, setForm] = useState({});
  const [addTeam, { data }] = useMutation(ADD_TEAM);
  console.log({ data });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addTeam({ variables: form });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        チーム名 <input name="name" id="name" onChange={onChange} />
      </label>
      <label htmlFor="homeStadium">
        ホーム球場
        <input name="homeStadium" id="homeStadium" onChange={onChange} />
      </label>
      <label htmlFor="foundingDate">
        創設年月日
        <input name="foundingDate" id="foundingDate" onChange={onChange} />
      </label>
      <button>作成</button>
    </form>
  );
}

export default AddTeam;
