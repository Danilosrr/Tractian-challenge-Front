import { Space } from 'antd';
import Highcharts, { chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function Overview() {
  const statusData = [{name:'Running', y:16, color:'#5FBF00'}, {name:'Alerting', y:25, color:'#FFD91E'}, {name:'Stopped', y:40, color:'#F63D52'}]

  const chart = {
    title: {
      text: 'unit'
    },
    series: [{
      data: [1, 25, 40]
    }],
    yAxis: {
      max: Math.max(100),
      min: Math.min(0)
    },
  };
  const pie = {
    title: {
      text: 'Assets Status'
    },
    subtitle: {
      text: statusData.map(i=>i.y).reduce((sum,a)=>sum+a,0),
      align: 'center',
      verticalAlign: 'middle',
      style: { fontSize: "18px" }
    },
    chart: {
      type: 'pie',
    },
    series: [{
      innerSize: '80%',
      name: 'Assets',
      data: statusData
    }],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: false,
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y} </b><p>({point.percentage:.1f}%)</p>'
    }
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px',
          gap: '10px',
          backgroundColor: 'lightskyblue',
          position: 'absolute',
          top: 0,
          width: '50%',
          height: '50%',
          flexWrap: 'wrap',
          overflowY: 'scroll',
        }}
      >
        <HighchartsReact
          containerProps={{ style: { width: "100%", height: '100%' } }}
          highcharts={Highcharts}
          options={chart}
        />
        <HighchartsReact
          containerProps={{ style: { width: "100%", height: '100%' } }}
          highcharts={Highcharts}
          options={chart}
        />
      </div>
      <div
        style={{
          backgroundColor: 'lightpink',
          position: 'absolute',
          padding: '10px',
          top: 0,
          right: 0,
          width: '50%',
          height: '50%',
        }}
      >
        <HighchartsReact
          containerProps={{ style: { width: "100%", height: '100%' } }}
          highcharts={Highcharts}
          options={pie}
        />
      </div>
    </>
  );
}