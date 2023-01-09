import { Sankey, Tooltip  } from 'recharts';
import CompNode from './compNode';
import CompLink from './compLink';

export default function SankeyChart({ data }) {

    return (
        <Sankey 
            // nodePadding={150}
            margin={{
                left: 50,
                right: 50,
                // top: 10,
                // bottom: 50,
            }}
            width={960} 
            height={500} 
            data={data}
            link={<CompLink />}
            node={(nodeProps) => {
                const { x, y, width, height, index, payload, containerWidth } = nodeProps;
                return (<CompNode x={x} y={y} width={width} height={height} index={index} payload={payload} containerWidth={containerWidth}/>)
            }}
            >
            <Tooltip />
        </Sankey>
    )
}

