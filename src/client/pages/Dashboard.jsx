import React from 'react';
import { Link } from 'react-router-dom';


export function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to='/new-campaign'>New Campaign</Link>
        </li>
        <li>
          <Link to='/influencers'>Influencers</Link>
        </li>
        <li>
          <Link to='/campaigns'>Campaigns</Link>
        </li>
        <li>
          <Link to='/payouts'>Payouts</Link>
        </li>
      </ul>
    </div>
  );
}