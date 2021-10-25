import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Sidebar from "./components/Sidebar";
import {useRef,useEffect} from "react";
import * as D3 from "d3";

export default function dashboard(){
    const myRef = useRef();
    useEffect(()=>{

        const data = [
            [1,1], [12,20], [24,36],
            [32, 50], [40, 70], [50, 100],
            [55, 106], [65, 123], [73, 130],
            [78, 134], [83, 136], [89, 138],[100, 140]
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
    },[]);

    return (
    <> <Sidebar/>
        <div class="grid justify-between ml-48 pl-3">
            {/* Sidebar */}
            

            {/* Navbar */}
            <div class="bg-gray-200 font-sm"><Navbar /></div>
            
            {/* Line Chart Graph */}
            <div class="bg-gray-100 border-2 rounded shadow-lg ">
                <div class="font-bold text-center m-2">Testing in D3.js</div>
                <svg ref={myRef} width="400" height="250"></svg>
            </div>

            {/* Cards */}
            <Cards/>
        </div>
        </>
    );
};
