import axios from 'axios';
import Header from '../components/Header';
import Users from '../components/Users';
export default function Home() {

  // async function fetchPosts(){
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(response.data);
  // }

  return (
    
    <main>
      <Header />
      {/* <button onClick={fetchPosts()} className=''>Take data</button> */}
      <Users/>
    </main>

  )
}
