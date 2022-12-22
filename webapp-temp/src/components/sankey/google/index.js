import { Chart } from "react-google-charts";

export default function SankeyChart({ data }) {
    const options = {
        // sankey: {
        //     link: { color: { fill: "#d799ae" } },
        //     node: {
        //       colors: ["#a61d4c"],
        //       label: { color: "#871b47" },
        //     },
        // },
    };
    function getRowData(obj){
        const result = [['From', 'To', 'Weight']];
        for(let i= 0; i<obj.links.length; i+=1){
            const node = obj.links[i];
            const item = [];
            item.push(obj.nodes[node.source].name);
            item.push(obj.nodes[node.target].name);
            item.push(node.value);
            result.push(item);
        }
        return result;
    }

    return (
        <Chart 
            chartType="Sankey"
            data={getRowData(data)}
            options={options}
            width={960} 
            height={500} 
            legendToggle
            />
    )
}

