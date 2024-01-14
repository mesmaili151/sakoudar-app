import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import getInfluencers from '@wasp/queries/getInfluencers';

export function Influencers() {
  const { data: influencers, isLoading, error } = useQuery(getInfluencers);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      <h1>Influencers</h1>
      {influencers.map((influencer) => (
        <div key={influencer.id} className='bg-gray-100 p-4 mb-4 rounded-lg'>
          <div>{influencer.name}</div>
          <div>{influencer.platform}</div>
          <div>
            <Link to={`/influencer/${influencer.id}`} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2'>
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}