import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PLAYER } from '../graphql/schema';

function AddPlayer() {
  const [form, setForm] = useState({});
  const [addPlayer, { data }] = useMutation(ADD_PLAYER);
  console.log({ data });

  const onChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addPlayer({ variables: form });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">
        名前 <input name="name" id="name" onChange={onChange} />
      </label>
      <label htmlFor="no">
        背番号
        <input name="no" id="no" onChange={onChange} />
      </label>
      <label htmlFor="position">
        守備位置
        <input name="position" id="position" onChange={onChange} />
      </label>
      <label htmlFor="teamId">
        チームID
        <input name="teamId" id="teamId" onChange={onChange} />
      </label>
      <button>作成</button>
    </form>
  );
}

export default AddPlayer;
