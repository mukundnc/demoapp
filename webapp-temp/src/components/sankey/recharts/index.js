import { Pie, Sankey, Tooltip  } from 'recharts';
import { useRef, useEffect } from 'react'
import Node from './node';

export default function SankeyChart({ data }) {

    setTimeout(() => {
        if(document.getElementsByClassName("recharts-wrapper").length && document.getElementsByClassName('recharts-pie-sector')[0].children.length){
            document.querySelectorAll('.recharts-sankey-nodes .recharts-wrapper').forEach(x => {x.outerHTML = x.innerHTML});
        }
    }, 3000);

    return (
        <Sankey 
            width={960} 
            height={500} 
            data={data}
            node={(nodeProps) => {
                const { x, y, width, height, index, payload, containerWidth } = nodeProps;
                return (<Node x={x} y={y} width={width} height={height} index={index} payload={payload} containerWidth={containerWidth}/>)
            }}
            >
            <Tooltip />
        </Sankey>
    )
}

