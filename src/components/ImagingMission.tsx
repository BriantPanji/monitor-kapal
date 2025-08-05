import Image from "next/image";
import Content from "./Content";
import { useState, useEffect } from "react";

interface ImagingMissionProps {
    missionName: string;
    src: string;
    alt?: string;
    downloadFilename?: string;
};

export default function ImagingMission({missionName, src, alt, downloadFilename}: ImagingMissionProps) {
    alt = alt || missionName || 'Imaging Mission';
    const defaultFileExt = src.split('.').pop() || 'png';
    const [formattedFilename, setFormattedFilename] = useState(`${downloadFilename || missionName}.${defaultFileExt}`);

    useEffect(() => {
        const date = new Date(new Date().getTime() + (7 * 60 * 60 * 1000)).toISOString().replace(/[-:T]/g, '');
        const formattedTime = date.slice(0, 8) + '_' + date.slice(8, 14);
        setFormattedFilename(`${downloadFilename || missionName}_${formattedTime}.${defaultFileExt}`);
    }, [missionName, downloadFilename, defaultFileExt]);


    return (
        <Content>
            <div className="w-full h-full flex items-center justify-center flex-col gap-2.5 pb-1">
                <h1>{missionName}</h1>
                <div className="w-full h-full flex items-center justify-center !aspect-square">
                    <Image src={src} alt={alt} width={400} height={400} className="w-full h-full rounded-md" />
                </div>
                <a href={src} className="text-blue-500 underline font-light mt-1 " download={formattedFilename}>Download</a>
            </div>
        </Content>
    )
}
