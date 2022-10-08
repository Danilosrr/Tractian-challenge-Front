import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function Overview() {
  const statusData = [{ name: 'Running', y: 16, color: '#5FBF00' }, { name: 'Alerting', y: 25, color: '#FFD91E' }, { name: 'Stopped', y: 40, color: '#F63D52' }]
  const chartData = [{ name: 'asset 1', status: 'Running', color: '#5FBF00', y: 1 }, { name: 'asset 2', status: 'Running', color: '#5FBF00', y: 25 }, { name: 'asset 3', status: 'Alerting', color: '#FFD91E', y: 40 }, { name: 'asset 4', status: 'Stopped', color: '#F63D52', y: 40 }]
  const chartAllData = [{ name: 'asset 1', status: 'Running', color: '#5FBF00', y: 1 }, { name: 'asset 2', status: 'Running', color: '#5FBF00',  y: 25 }, { name: 'asset 3', status: 'Alerting', color: '#FFD91E', y: 40 }, { name: 'asset 4', status: 'Running', color: '#5FBF00',  y: 26 }, { name: 'asset 5', status: 'Running', color: '#5FBF00',  y: 55 }, { name: 'asset 6', status: 'Alerting', color: '#FFD91E', y: 65.9 }]
  const unitChart = {
    title: {
      text: 'unit'
    },
    chart: {
      type: 'column'
    },
    series: [{
      name: 'Health',
      data: chartData
    }],
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Health'
      },
      labels: {
        format: '{value}%'
      },
      max: Math.max(100),
      min: Math.min(0)
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: `<span>health: </span><b>{point.y:.2f}%</b><br/><span>status: </span><b>{point.status}</b><br/>`
    },
  };

  let overallChart = { ...unitChart, title: {text:'All units'} ,series: [{ data: chartAllData }] };

  const statusChart = {
    title: {
      text: 'Assets Status'
    },
    subtitle: {
      text: statusData.map(i => i.y).reduce((sum, a) => sum + a, 0),
      align: 'center',
      verticalAlign: 'middle',
      style: { fontSize: "18px" }
    },
    chart: {
      type: 'pie',
    },
    series: [{
      innerSize: '75%',
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
          options={unitChart}
        />
        <HighchartsReact
          containerProps={{ style: { width: "100%", height: '100%' } }}
          highcharts={Highcharts}
          options={unitChart}
        />
      </div>
      <div
        style={{
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
          options={statusChart}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          padding: '10px',
          bottom: 0,
          width: '100%',
          height: '50%',
        }}
      >
        <HighchartsReact
          containerProps={{ style: { width: "100%", height: '100%' } }}
          highcharts={Highcharts}
          options={overallChart}
        />
      </div>
    </>
  );
}