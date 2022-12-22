import ReactECharts from 'echarts-for-react';

export default function SankeyChart({ data }) {
    
    const options = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        animation: false,
        series: [
        {
            type: 'sankey',
            emphasis: {
                focus: 'adjacency'
            },
            data: data.nodes,
            links: data.links,
            lineStyle: {
                color: 'source',
                curveness: 0.5
            }
        }]
    };

    return (
        <ReactECharts
            option={options}
            notMerge
            lazyUpdate
            theme={"theme_name"}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            opts={{renderer: 'svg'}}
            style={{ width: '960px', height: '500px' }}
            />
    )
}

