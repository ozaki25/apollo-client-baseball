import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TEAMS } from '../graphql/query';

function Teams() {
  const { loading, error, data } = useQuery(GET_TEAMS);
  console.log({ loading, error, data });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.teams.map(team => (
        <dl>
          <dt>ID</dt>
          <dd>{team.id}</dd>
          <dt>チーム名</dt>
          <dd>{team.name}</dd>
          <dt>創設日</dt>
          <dd>{team.foundingDate}</dd>
          <dt>ホーム球場</dt>
          <dd>{team.homeStadium}</dd>
          <dt>所属選手</dt>
          <dd>
            {team.players.map(player => (
              <dl>
                <dt>背番号</dt>
                <dd>{player.no}</dd>
                <dt>名前</dt>
                <dd>{player.name}</dd>
                <dt>守備位置</dt>
                <dd>{player.position}</dd>
              </dl>
            ))}
          </dd>
        </dl>
      ))}
    </div>
  );
}

export default Teams;
