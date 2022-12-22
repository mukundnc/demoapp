import { Rectangle, Layer, Pie, PieChart } from 'recharts';
import { useRef, useEffect } from 'react'

export default function SankeyNode({ x, y, width, height, index, payload, containerWidth }) {
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x} y={y} width={width} height={height}
        fill="#5192ca" fillOpacity="1"
      />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="#333"
      >{payload.name}</text>
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="#333"
        strokeOpacity="0.5"
      >{`${payload.value}k`}</text>
    </Layer>
  );
    // const isOut = x + width + 6 > containerWidth;
    // const nodeRef = useRef(null);

    // useEffect(() => {
        // document.querySelectorAll('.recharts-sankey-nodes .recharts-wrapper').forEach(x => x.outerHTML = x.innerHTML)
        // Update the document title using the browser API
        // console.log(nodeRef.current.container.parentNode);
        // if(nodeRef.current.container.className.baseVal === 'recharts-wrapper' && nodeRef.current.container.parentNode)
        //     nodeRef.current.container.outerHTML = nodeRef.current.container.innerHTML;
      // });
    // return (
    //   <svg key={`CustomNode${index}`}>
    //     <text
    //       textAnchor={isOut ? 'end' : 'start'}
    //       x={x + (width/2)}
    //       y={y + (height/2)}
    //       fontSize="14"
    //       stroke="#333">
    //       {payload.name} </text>
    //     <text
    //       textAnchor={isOut ? 'end' : 'start'}
    //       x={x + (width/2)}
    //       y={y + (height/2) + 13}
    //       fontSize="12"
    //       stroke="#333"
    //       strokeOpacity="0.5"
    //     >{`${payload.value}k`}</text>
    //   </svg>
    // );
    // const data01 = [
    //     {
    //       "name": "Group A",
    //       "value": 400
    //     },
    //     {
    //       "name": "Group B",
    //       "value": 300
    //     },
    //     {
    //       "name": "Group C",
    //       "value": 300
    //     },
    //     {
    //       "name": "Group D",
    //       "value": 200
    //     },
    //     {
    //       "name": "Group E",
    //       "value": 278
    //     },
    //     {
    //       "name": "Group F",
    //       "value": 189
    //     }
    //   ];
    //   const data02 = [
    //     {
    //       "name": "Group A",
    //       "value": 2400
    //     },
    //     {
    //       "name": "Group B",
    //       "value": 4567
    //     },
    //     {
    //       "name": "Group C",
    //       "value": 1398
    //     },
    //     {
    //       "name": "Group D",
    //       "value": 9800
    //     },
    //     {
    //       "name": "Group E",
    //       "value": 3908
    //     },
    //     {
    //       "name": "Group F",
    //       "value": 4800
    //     }
    //   ];
    // return (<PieChart ref={nodeRef} cx={x} cy={y} width={730} height={250}>
    //     {/* <Pie data={data01} dataKey="value" nameKey="name" cx={x} cy={y} outerRadius={50} fill="#8884d8" /> */}
    //     <Pie data={data02} dataKey="value" nameKey="name" cx={x} cy={y} innerRadius={60} outerRadius={80} fill="#82ca9d"/>
    //   </PieChart>)
  }