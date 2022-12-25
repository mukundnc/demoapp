import { Pie, PieChart, Sector } from 'recharts';

export default function SankeyNode({ x, y, width, height, index, payload, containerWidth }) {
    const data02 = [
      {
        "name": "Group A",
        "value": 2400
      },
      {
        "name": "Group B",
        "value": 4567
      },
      {
        "name": "Group C",
        "value": 1398
      },
      {
        "name": "Group D",
        "value": 9800
      },
      {
        "name": "Group E",
        "value": 3908
      },
      {
        "name": "Group F",
        "value": 4800
      }
    ];
    if(x!==0){
      x -=(height/2)-5;
    }else{
      x = 10;
    }
    return (<PieChart x={x} y={y} width={height} height={height}>
        <Pie 
          data={data02} 
          dataKey="value" 
          nameKey="name" 
          cx="50%" 
          cy="50%" 
          innerRadius={height/3} 
          outerRadius={height/2} 
          fill="#82ca9d"
          label={(props) => renderActiveShape(props, payload.value)}
          labelLine={false}
          />
      </PieChart>)
    }

  const generateRandomColor = () => {
    const maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    const randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
  }

  const renderActiveShape = (props: any, text: any) => {
    const fill = generateRandomColor()
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      // fill,
    } = props;
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
         {text}
        </text>
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