import React , {useEffect} from 'react';
import Header from '../Menu/Header';
import { Chart } from 'react-google-charts';
import styled from 'styled-components';
import ListBtn from '../Menu/ListBtn';
import { WrapMenuItems } from '../Menu/Menu';;

const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

const options = {
  title: "Population Cities",
  chartArea: { width: "70%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
};

const Dashboard = ({setAuth, auth}) => {

  const arrData = [];

    useEffect(() => {
      const url = 'https://countriesnow.space/api/v0.1/countries/population/cities';
      if(auth){
        fetch(url)
        .then(res => res.json())
        .then(res => {
          for(let i = 0; i< 15 ; i++){
            arrData.push([res.data[i]])
          }
        }).then(() => {
          for(let i = 0; i< arrData.length; i++){
            data.push([
              `${arrData[i][0].country}, ${arrData[i][0].city}` ,
              arrData[i][0].populationCounts[0].value ,
              0])
          }
        })
        console.log('fetching...')
      }
      
    },[])
  
  return (
    <>
       <Header 
          setAuth={setAuth}
          auth={auth}/>
       <WrapMenu>
            <ListBtn />
            <Chart
              chartType="BarChart"
              width="80%"
              height="100%"
              max-height="2000px"
              data={data}
              options={options}
            />
        </WrapMenu>
    </>

  )
}
const WrapMenu = styled(WrapMenuItems)`
    @media(min-width: 601px) {
      height: 500px;
    }
    @media(max-width: 600px) {
      flex-direction: column;
      font-size:20px;
      width:100% !important;
  }
`
export {WrapMenu};
export default Dashboard



