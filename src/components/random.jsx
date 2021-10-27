import React from 'react';
import {Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor} from '@patternfly/react-charts';
import {VictoryZoomContainer} from 'victory-zoom-container';

const random = () => (
    <div style={{height: '400px', width: '450px'}}>
        <Chart
            ariaDesc="Average number of pets"
            ariaTitle="Bar chart example"
            containerComponent={<VictoryZoomContainer/>}
            domainPadding={{x: [30, 25]}}
            legendData={[{name: 'Cats'}, {name: 'Dogs'}, {name: 'Birds'}, {name: 'Mice'}]}
            legendPosition="bottom-left"
            height={400}
            padding={{
                bottom: 75, // Adjusted to accommodate legend
                left: 50,
                right: 100, // Adjusted to accommodate tooltip
                top: 50
            }}
            themeColor={ChartThemeColor.multiOrdered}
            width={450}
        >
            <ChartAxis/>
            <ChartAxis dependentAxis showGrid/>
            <ChartGroup offset={11} horizontal>
                <ChartBar data={[{name: 'Cats', x: '2015', y: 1}, {name: 'Cats', x: '2016', y: 2}, {
                    name: 'Cats',
                    x: '2017',
                    y: 5
                }, {name: 'Cats', x: '2018', y: 3}]}/>
                <ChartBar data={[{name: 'Dogs', x: '2015', y: 2}, {name: 'Dogs', x: '2016', y: 1}, {
                    name: 'Dogs',
                    x: '2017',
                    y: 7
                }, {name: 'Dogs', x: '2018', y: 4}]}/>
                <ChartBar data={[{name: 'Birds', x: '2015', y: 4}, {name: 'Birds', x: '2016', y: 4}, {
                    name: 'Birds',
                    x: '2017',
                    y: 9
                }, {name: 'Birds', x: '2018', y: 7}]}/>
                <ChartBar data={[{name: 'Mice', x: '2015', y: 3}, {name: 'Mice', x: '2016', y: 3}, {
                    name: 'Mice',
                    x: '2017',
                    y: 8
                }, {name: 'Mice', x: '2018', y: 5}]}/>
            </ChartGroup>
        </Chart>
    </div>
)