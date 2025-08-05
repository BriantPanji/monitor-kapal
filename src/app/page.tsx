'use client';

import Content from "@c/Content";
import ContentWrapper from "@c/ContentWrapper";
import Container from "@c/Container";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import VirtualMap from "@/components/VirtualMap";
import BoatStatus from "@/components/BoatStatus";
import ImagingMission from "@/components/ImagingMission";
const MapContent = dynamic(() => import("@c/MapContent"), {
  ssr: false
});

type KapalBerlayar = null | "A" | "B";
type Lintasan = 'A' | 'B' | null;

export default function Home() {
  const [lintasan, setLintasan] = useState<Lintasan>("A");
  const [kapalBerlayar, setKapalBerlayar] = useState<KapalBerlayar>("A");

  return (
    <Container header="Dashboard Monitor" headerIcon="fa-gauge-high">
      <BoatStatus />

      <ContentWrapper>

        <Content>
          <div className="w-full h-fit min-h-full flex items-center justify-between flex-col gap-4">
            {/* <h1 className="w-full text-center bg-wk-secondary rounded-md border-[0.5px] border-wk-text/10 py-1 max-xl:text-xs">Navigasi Lintasan</h1> */ }
            <div className="w-full h-full flex flex-col items-center justify-center px-6 gap-2">
              <button className={ `w-full px-2 py-1 border ${lintasan === "A" ? 'lintasanBtnActive' : 'lintasanBtnInactive'} max-xl:text-xs rounded-md cursor-pointer transition-all duration-100` } onClick={ () => setLintasan("A") } type="button">
                Lintasan A
              </button>
              <button className={ `w-full px-2 py-1 border ${lintasan !== "A" ? 'lintasanBtnActive' : 'lintasanBtnInactive'} max-xl:text-xs rounded-md cursor-pointer transition-all duration-100` } onClick={ () => setLintasan("B") } type="button">
                Lintasan B
              </button>
            </div>
          </div>
        </Content>

        <Content flex={ 4 }>
          <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
            <h1>GEO-TAG INFOS</h1>
            <div className="w-full h-full flex items-start justify-around px-5 gap-x-3 text-wk-text/90 flex-wrap">
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Day</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Saturday</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Date</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">7/12/2025</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Time</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">4:28:29 PM</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">SOG (Knot)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">3.2</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">SOG (Km/h)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">5.9</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">COG</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">45°</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Coordinate</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">5.548128°N, 95.323753°E</span>
              </div>
            </div>
          </div>
        </Content>

      </ContentWrapper>

      <ContentWrapper>

        <Content>
          <MapContent />
        </Content>


        <Content>
          <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
            <h1>Other Logs</h1>
            <div className="w-full h-full flex items-start justify-around px-5 gap-x-3 text-wk-text/90 flex-wrap">
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Mission Status</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Unbegun</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Boat Status</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Off</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Imaging Mission</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Unbegun</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs  text-nowrap">Battery</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">85%</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs text-nowrap">Mission Progress</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">10%</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs text-nowrap">ETA</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">15 min</span>
              </div>
              <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs text-nowrap">Average Speed</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">2.5 m/s</span>
              </div>
            </div>
          </div>
        </Content>



        <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-2.5 pb-1">
            <h1>Virtual Map</h1>
            <div className="w-full h-full flex items-center justify-center !aspect-square">
              <VirtualMap lintasan={ lintasan } />
            </div>
          </div>
        </Content>


      </ContentWrapper>

      <ContentWrapper>

        <ImagingMission missionName="Surface Imaging" src="/surface_imaging_ph.png" downloadFilename="surface_imaging" />


        <Content flex={ 0.75 }>
          <div className="w-full h-full flex items-center justify-around flex-col py-2 gap-2">
            <h1 className="text-xl font-semibold">Universitas Sumatera Utara</h1>
            <Image src={ "/logo_usu.png" } alt="Universitas Sumatera Utara" width={ 500 } height={ 500 } className="w-2/3 h-auto rounded-md" />
            <strong className="uppercase">Sikonek</strong>
          </div>
        </Content>


        <ImagingMission missionName="Underwater Imaging" src="/underwater_imaging_ph.png" downloadFilename="underwater_imaging" />


      </ContentWrapper>

    </Container>
  );
}
