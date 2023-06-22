'use client'
import axios from 'axios';
import Header from '../components/Header';
import Users from '../components/Users';

export default function Home() {
  // useClient();
  return (
    <main>
      <Header />
      <Users/>
    </main>

  )
}
