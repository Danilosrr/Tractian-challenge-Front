import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useEffect, useState } from 'react';
import { getAllAssets, getUnitAssets } from '../services/assetsApi';
import { groupBy, statusColor } from '../services/utils';

export default function Overview() {
  const [allAssetsData, setAllAssetsData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [unitsAssetsData, setUnitsAssetsData] = useState([]);

  useEffect(() => {
    const companyId = '633d204450cf920b1b527fe7'; //Obter de um context 

    const allAssets = async () => {
      const data = await getAllAssets(companyId);
      const dataFormat = data.map(asset => { return { ...asset, color: statusColor(asset.status) } })
      setAllAssetsData(dataFormat);
      setStatusData(groupBy(dataFormat, 'status'));
    }
    const allUnits = async () => {
      const data = await getUnitAssets(companyId);
      data.forEach(unit => {
        unit.assets.forEach(asset => {
          asset.color = statusColor(asset.status)
        });
      })
      setUnitsAssetsData(data);
    }

    allUnits();
    allAssets();
  }, []);

  const chartOptions = {
    title: {
      text: 'unit'
    },
    chart: {
      type: 'column'
    },
    series: [{
      name: 'Health',
      data: []
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
        {unitsAssetsData.map(units =>
            <HighchartsReact
              containerProps={{ style: { width: "100%", height: '100%' } }}
              highcharts={Highcharts}
              options={{ ...chartOptions, title: { text: units.name }, series: [{ data: units.assets }] }}
            />
        )}

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
          options={{ ...chartOptions, title: { text: 'All units' }, series: [{ data: allAssetsData }] }}
        />
      </div>
    </>
  );
};
