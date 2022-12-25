import { Sankey, Tooltip  } from 'recharts';
import Node from './node';
import CompNode from './compNode';

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
            link={{ stroke: '#bcc5cf' }}
            node={(nodeProps) => {
                const { x, y, width, height, index, payload, containerWidth } = nodeProps;
                return (<CompNode x={x} y={y} width={width} height={height} index={index} payload={payload} containerWidth={containerWidth}/>)
            }}
            >
            <Tooltip />
        </Sankey>
    )
}

