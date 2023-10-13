import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl, filterData } from './data';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Spinner from './Components/Spinner';
import Card from './Components/Card';
import Navbar from './Components/navbar';
import{toast} from 'react-toastify'






const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }

    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {

    fetchData();

  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-600">
      <div className='nav'>
        <Navbar ></Navbar>

      </div>
      <div className="bg-gray-600">
     
      <div >
        <Filter filterData={filterData}  category = {category} setCategory = {setCategory} ></Filter>

      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" >
        {

          loading ? (<Spinner />) : (<Cards courses={courses}  category = {category}/>)
        }
      </div>
      </div>

    </div>
  )

}

export default App;
