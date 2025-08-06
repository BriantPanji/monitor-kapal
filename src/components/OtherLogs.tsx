'use client';

import Content from "./Content";
import { useState } from "react";

type MissionStatus = "Unbegun" | "Completed" | "Failed";

interface OtherLogs {
    missionStatus: MissionStatus | "Ongoing";
    boatStatus: "Off" | "On";
    imagingMissionStatus: MissionStatus | "Waiting";
    battery: number;
    missionProgress: number; // in percentage
    eta: number;
    averageSpeed: number; // in m/s, optional
}

const defaultLog: OtherLogs = {
    missionStatus: "Unbegun",
    boatStatus: "Off",
    imagingMissionStatus: "Unbegun",
    battery: 100,
    missionProgress: 0,
    eta: 0,
    averageSpeed: 0
}

function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Logs copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text to clipboard.");
        console.error("Failed to copy:", err);
    });
}

export default function OtherLogs() {

    const [log, setLog] = useState<OtherLogs>(defaultLog);

    return (
        <Content buttonIcon="fa-copy" buttonAction={ () => { copyToClipboard(JSON.stringify(log, null, 2)); } } buttonTitle="Copy Logs">
            <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
                <h1>Other Logs</h1>
                <div className="w-full h-full flex items-start justify-around px-5 gap-x-3 text-wk-text/90 flex-wrap">
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Mission Status</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.missionStatus }</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Boat Status</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.boatStatus }</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Imaging Mission</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.imagingMissionStatus }</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs  text-nowrap">Battery</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.battery }%</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs text-nowrap">Mission Progress</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.missionProgress }%</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs text-nowrap">ETA</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.eta } min</span>
                    </div>
                    <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                        <span className="text-gray-400 text-xs text-nowrap">Average Speed</span>
                        <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">{ log.averageSpeed } m/s</span>
                    </div>
                </div>
            </div>
        </Content>
    )
}
