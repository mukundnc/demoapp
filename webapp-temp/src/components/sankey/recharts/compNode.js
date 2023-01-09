import { Pie, PieChart, Sector, Text, Surface } from 'recharts';
import pieData from '../../../_mock/pieData';

export default function SankeyNode({ x, y, width, height, index, payload, containerWidth }) {
    
    let py = y;
    if(height <= 20){
      height = 20;
      py -= height/2;
    }
    if(x!==0){
      x -=(height/2);
    }else{
      x = 10;
    }
    return (
      <foreignObject x={x} y={y} width={height} height={height}>
        <PieChart x={x} y={py} width={height} height={height}>
          <Pie style={{position: 'absolute'}} 
            data={pieData} 
            dataKey="value" 
            nameKey="name" 
            cx="50%" 
            cy="50%" 
            innerRadius={(height-20)/3} 
            outerRadius={(height-20)/2} 
            fill="#82ca9d"
            label={(props) => renderActiveShape(props, payload.name, payload.value, pieData.length)}
            labelLine={false}
            startAngle={450}
            endAngle={90}
            />
        </PieChart>
      </foreignObject>
      )
    }

  const generateRandomColor = (index, length) => {
    if(index+1 === length)
      return 'rgb(0 96 95)';
    let r = 210;
    let g = 250;
    let b = 220;
    const gradient = 100/length;
    r -= Math.floor(index*gradient);
    g -= Math.floor(index*gradient);
    b -= Math.floor(index*gradient);
    return `rgb(${r} ${g} ${b})`;
  }

  const renderActiveShape = (props, name, value, length) => {
    const fill = generateRandomColor(props.index, length);
    const text = `${value.toFixed(1)}K`;
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
    } = props;
  
    return (
      <g>
        <Text 
          x={cx} 
          y={cy+3} 
          textAnchor="middle" 
          fill={'rgb(0 0 0)'} 
          style={{fontSize: '10px'}}>
         {text}
        </Text> 
        <Text 
          x={cx} 
          y={cy+outerRadius+10} 
          textAnchor="middle" 
          fill={'blue'} 
          style={{fontSize: '10px'}}>
        {name}
        </Text> 
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        /> 
      </g>
    );
  };