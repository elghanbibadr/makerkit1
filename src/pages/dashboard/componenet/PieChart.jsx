import { Pie } from 'react-chartjs-2'

// eslint-disable-next-line react/prop-types
const PieChart = ({PieChartData}) => {
   
  return (
    <Pie
    style={{ width: 100 }}
    options={{ responsive: true, plugins:{
      legend: {
        // display:false,
        labels: {
          borderRadius:200,	
            fontSize: 1,
            
        }
    }
    }, }}
    data={PieChartData}
  />
  )
}

export default PieChart