import LeftNavbar from "./components/LeftNavbar";
import Content from "./components/Content";
import {useRef,useEffect} from "react";
import * as D3 from "d3";

export default function dashboard(){
    const myRef = useRef();
    useEffect(()=>{

        const data = [
            [1,1], [12,20], [24,36],
        [32, 50], [40, 70], [50, 100],
        [55, 106], [65, 123], [73, 130],
        [78, 134], [83, 136], [89, 138],
        [100, 140]
    ];

    const svg = D3.select(myRef.current);
    const margin = {top: 20, right: 20, bottom: 30, left: 50};
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;
    const g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = D3.scaleLinear()
        .domain(D3.extent(data, d => d[0]))
        .rangeRound([0, width]);

    const y = D3.scaleLinear()
        .domain(D3.extent(data, d => d[1]))
        .rangeRound([height, 0]);

    const line = D3.line()
        .x(d => x(d[0]))
        .y(d => y(d[1]));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(D3.axisBottom(x));

    g.append("g")
        .call(D3.axisLeft(y));

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);

        // const data = [3,7,9,1,4,6,8,2,5],

        // svg = D3.select(myRef.current)
        // .append("svg")
        // .attr("width",400)
        // .attr("height",400)
        // .style("background-color","#f5f5f5");

        // const xScale = D3.scaleLinear()
        // .domain([0,data.length])
        // .range([0,400]);

        // const yScale = D3.scaleLinear()
        // .domain([0,10])
        // .range([400,0]);

        // const line = D3.line()
        // .x((d,i)=>xScale(i))
        // .y(d=>yScale(d));

        // svg.append("path")
        // .attr("d",line(data))
        // .attr("stroke","blue")
        // .attr("stroke-width",2)
        // .attr("fill","none");

        // svg.selectAll("circle")
        // .data(data)
        // .enter()
        // .append("circle")
        // .attr("cx",(d,i)=>xScale(i))
        // .attr("cy",d=>yScale(d))
        // .attr("r",5)
        // .attr("fill","blue");

        // svg.selectAll("text")
        // .data(data)
        // .enter()
        // .append("text")
        // .text(d=>d)
        // .attr("x",(d,i)=>xScale(i))
        // .attr("y",d=>yScale(d))
        // .attr("font-size",20)
        // .attr("fill","red");

        // const data = [
        //     { id: 1, value: 10, region: 'North America' },
        //     { id: 2, value: 2, region: 'South America' },
        //     { id: 3, value: 5, region: 'Europe' },
        //     { id: 4, value: 8, region: 'Asia' },
        //     { id: 5, value: 3, region: 'Australia' },
        // ];

        // const svg = D3.select(myRef.current);
        // const width = +svg.attr('width');
        // const height = +svg.attr('height');

        // const render = data => {
        //     const xValue = d => d.value;
        //     const yValue = d => d.region;
        //     const margin = { top: 20, right: 20, bottom: 30, left: 90 };
        //     const innerWidth = width - margin.left - margin.right;
        //     const innerHeight = height - margin.top - margin.bottom;
            
        //     const xScale = D3.scaleLinear()
        //         .domain([0, D3.max(data, xValue)])
        //         .range([0, innerWidth]);

        //     const yScale = D3.scaleBand()
        //         .domain(data.map(yValue))
        //         .range([0, innerHeight])
        //         .padding(0.1);

        //     const g = svg.append('g')
        //         .attr('transform', `translate(${margin.left},${margin.top})`);

        //     g.append('g')
        //         .call(D3.axisLeft(yScale))  
        //         .append('text')
        //         .attr('fill', '#000')
        //         .attr('transform', 'rotate(-90)')
        //         .attr('y', 6)
        //         .attr('dy', '0.71em')
        //         .attr('text-anchor', 'end')
        //         .text('Region');

        //     g.append('g')
        //         .call(D3.axisBottom(xScale))
        //         .attr('transform', `translate(0,${innerHeight})`)
        //         .append('text')
        //         .attr('fill', '#000')
        //         .attr('x', innerWidth)
        //         .attr('y', -10)
        //         .attr('text-anchor', 'end')
        //         .text('Value');

        //     g.selectAll('.bar')
        //         .data(data)
        //         .enter().append('rect')
        //         .attr('class', 'bar')
        //         .attr('y', d => yScale(yValue(d)))
        //         .attr('width', d => xScale(xValue(d)))
        //         .attr('height', yScale.bandwidth());
        // };

        // render(data);
    },[]);

    return (
        <div>
            <LeftNavbar />
            <Content/>
            <div class="bg-purple-200">
                <svg ref={myRef} width="400" height="400"></svg>
            </div>
        </div>
    );
};
