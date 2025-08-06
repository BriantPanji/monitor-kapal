'use client';

import { useState } from "react";
import Content from "./Content";

interface GeoTagInfos {
    day: string;
    date: string;
    time: string;
    sogKnot: number;
    sogKmh: number;
    cog: number;
    coordinate: string;
}

const exampleGeoTagInfo: GeoTagInfos = {
    day: "Saturday",
    date: "7/12/2025",
    time: "4:28:29 PM",
    sogKnot: 3.2,
    sogKmh: 5.9,
    cog: 45,
    coordinate: "5.548128°N, 95.323753°E"
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        alert("GeoTag Info copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text to clipboard.");
        console.error("Failed to copy:", err);
    });
}

export default function GeoTagInfo() {

    const [geoTagInfo, setGeoTagInfo] = useState<GeoTagInfos>(exampleGeoTagInfo);

    return (
        <Content flex={ 4 } buttonIcon="fa-copy" buttonAction={ () => { copyToClipboard(JSON.stringify(geoTagInfo, null, 2)); }} buttonTitle="Copy Geotag info Logs">
            <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
                <h1>GEO-TAG INFOS</h1>
                <div className="w-full h-full flex items-start justify-around px-5 gap-x-3 text-wk-text/90 flex-wrap">
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Day</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.day}</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Date</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.date}</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Time</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.time}</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">SOG (Knot)</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.sogKnot}</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">SOG (Km/h)</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.sogKmh}</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">COG</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.cog}°</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Coordinate</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{geoTagInfo.coordinate}</span>
                    </div>
                </div>
            </div>
        </Content>
    )
}
