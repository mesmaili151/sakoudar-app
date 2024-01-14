import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getInfluencers from '@wasp/queries/getInfluencers';
import createCampaign from '@wasp/actions/createCampaign';

export function NewCampaign() {
  const { data: influencers, isLoading, error } = useQuery(getInfluencers);
  const createCampaignFn = useAction(createCampaign);
  const [platform, setPlatform] = useState('');

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateCampaign = () => {
    createCampaignFn({ platform });
    setPlatform('');
  };

  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4'>Create New Campaign</h2>
      <div className='flex gap-x-4 py-2'>
        <select
          className='px-1 py-2 border rounded text-lg'
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value=''>Select Platform</option>
          {influencers.map((influencer) => (
            <option value={influencer.platform} key={influencer.id}>
              {influencer.platform}
            </option>
          ))}
        </select>
        <button
          onClick={handleCreateCampaign}
          className='bg-blue-500 hover:bg-blue-700 px-2 py-2 text-white font-bold rounded'
          disabled={!platform}
        >
          Create Campaign
        </button>
      </div>
      <div className='mt-4'>
        <Link to='/dashboard' className='text-blue-500 hover:underline'>Back to Dashboard</Link>
      </div>
    </div>
  );
}