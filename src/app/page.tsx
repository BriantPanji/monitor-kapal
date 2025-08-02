'use client';

import Content from "@c/Content";
import ContentWrapper from "@c/ContentWrapper";
import Container from "@c/Container";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import StatusKapal from "@/components/StatusKapal";
// import MapContent from "@/components/MapContent";
const MapContent = dynamic(() => import("@c/MapContent"), {
  ssr: false
});

type KapalBerlayar = null | "A" | "B";

export default function Home() {
  const [lintasan, setLintasan] = useState("A");
  const [kapalBerlayar, setKapalBerlayar] = useState<KapalBerlayar>("A");

  return (
    <Container header="Dashboard Monitor" headerIcon="fa-gauge-high">
      <StatusKapal />
      <ContentWrapper>
        <Content>
          <div className="w-full h-fit min-h-full flex items-center justify-between flex-col gap-4">
            {/* <h1 className="w-full text-center bg-wk-secondary rounded-md border-[0.5px] border-wk-text/10 py-1 max-xl:text-xs">Navigasi Lintasan</h1> */}
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
        {/* <Content customBg="bg-[#072d09]">
          <div className="w-full h-full flex items-center justify-center flex-col gap-0.5 uppercase font-extralight text-xs">
            <h1 className="text-3xl">⚓</h1>
            <p>Sikonek marine</p>
            <p>Robotics Team</p>
          </div>
        </Content>
        <Content>
          <span className="text-xs font-extralight uppercase">Universitas Sumatera Utara</span>
        </Content>
        <Content>
          <h1 className="text-2xl font-light">P-II</h1>
        </Content> */}

        <Content flex={4}>
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
              {/* <div className="min-w-25 w-full flex-1 flex gap-1.5 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs text-nowrap">Position (X,Y)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Lintasan { lintasan }</span>
              </div> */}
            </div>
          </div>
        </Content>
        {/* <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-5 pb-1">
            <h1 className="font-normal">Status Kapal</h1>
            <strong className={`${kapalBerlayar === lintasan ? "text-emerald-600" : "text-red-600"}`}>{kapalBerlayar === lintasan ? "Berlayar" : "Tidak Berlayar"}</strong>
          </div>
        </Content> */}

      </ContentWrapper>
      <ContentWrapper>
        {/* <Content>
          <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
            <h1>GEO-TAG INFOS</h1>
            <div className="w-full h-full flex items-center justify-center px-10 gap-x-3 text-wk-text/90 flex-wrap">
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Day</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Saturday</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Date</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">7/12/2025</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Time</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">4:28:29 PM</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Coordinate</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">5.548128°N, 95.323753°E</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">SOG (Knot)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">3.2</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">SOG (Km/h)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">5.9</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">COG</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">45°</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Position (X,Y)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Lintasan { lintasan }</span>
              </div>
            </div>
          </div>
        </Content> */}

        
        <Content>
          <MapContent />
        </Content>

        <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-2.5 pb-1">
            <h1>Surface Imaging</h1>
            <div className="w-full h-full flex items-center justify-center !aspect-square">
              <Image src={"/surface_imaging_ph.png"} alt="Imaging Mission" width={400} height={400} className="w-full h-full rounded-md" />
            </div>
          </div>
        </Content>
        
        <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-2.5 pb-1">
            <h1>Underwater Imaging</h1>
            <div className="w-full h-full flex items-center justify-center !aspect-square">
              <Image src={"/underwater_imaging_ph.png"} alt="Imaging Mission" width={400} height={400} className="w-full h-full rounded-md" />
            </div>
          </div>
        </Content>

        {/* <Content>
          <div className="w-full min-h-full h-fit flex items-center justify-between flex-col gap-6 py-1">
            <h1>GEO-TAG INFOS</h1>
            <div className="w-full h-full flex items-start justify-center gap-3 text-wk-text/90 flex-wrap">
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">SOG (Knot)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">3.2</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">SOG (Km/h)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">5.9</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">COG</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">45°</span>
              </div>
              <div className="min-w-24 w-full flex-1 flex gap-1 items-center justify-between flex-col">
                <span className="text-gray-400 text-xs ">Position (X,Y)</span>
                <span className="text-xs bg-wk-secondary w-full text-center py-2 rounded-md border-[0.5px] border-wk-text/10">Lintasan { lintasan }</span>
              </div>
            </div>
          </div>
        </Content> */}

      </ContentWrapper>
      {/* <ContentWrapper>
        <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-1 py-1">
            <h1>Surface Imaging</h1>
            <div className="w-full h-full flex items-center justify-center !aspect-square">
              <Image src={"/surface_imaging_ph.png"} alt="Imaging Mission" width={400} height={400} className="w-full h-full rounded-md" />
            </div>
          </div>
        </Content>
        <Content>
          <div className="w-full h-full flex items-center justify-center flex-col gap-1 py-1">
            <h1>Underwater Imaging</h1>
            <div className="w-full h-full flex items-center justify-center !aspect-square">
              <Image src={"/underwater_imaging_ph.png"} alt="Imaging Mission" width={400} height={400} className="w-full h-full rounded-md" />
            </div>
          </div>
        </Content>
      </ContentWrapper> */}
      {/* <ContentWrapper>
        <Content>
          <div className="flex flex-col w-full h-full py-4 px-4 justify-between gap-6">
            <span className="w-full h-fit">
              <h1 className="text-base  font-normal text-center">TRAJECTORY MAP</h1>
            </span>
            <div className="flex w-full h-full max-md:flex-col transition-all gap-y-10 gap-4 items-start justify-between pb-10">
              <div className="relative w-full flex-1">
                <div className="text-center mb-3">
                  <span className="bg-gray-800 text-red-400 px-4 py-2 rounded-md text-sm font-medium">LINTASAN-A</span>
                </div>
                <div className="relative w-full aspect-square border border-gray-700 rounded-md overflow-hidden max-w-sm mx-auto">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 250">
                    <rect width="100%" height="100%" fill="#111827" />

                    <defs>
                      <pattern id="gridA" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#374151" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridA)" />

                    <text x="25" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">E</text>
                    <text x="75" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">D</text>
                    <text x="125" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">C</text>
                    <text x="175" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">B</text>
                    <text x="225" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">A</text>

                    <text x="10" y="40" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">5</text>
                    <text x="10" y="90" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">4</text>
                    <text x="10" y="140" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">3</text>
                    <text x="10" y="190" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">2</text>
                    <text x="10" y="240" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">1</text>

                    <circle cx="232" cy="160" r="2" fill="#10b981" />
                    <circle cx="217" cy="160" r="2" fill="#ef4444" />
                    <circle cx="210" cy="135" r="2" fill="#ef4444" />
                    <circle cx="225" cy="135" r="2" fill="#10b981" />
                    <circle cx="225" cy="100" r="2" fill="#ef4444" />
                    <circle cx="240" cy="100" r="2" fill="#10b981" />
                    <circle cx="165" cy="30" r="2" fill="#ef4444" />
                    <circle cx="165" cy="45" r="2" fill="#10b981" />
                    <circle cx="145" cy="30" r="2" fill="#ef4444" />
                    <circle cx="145" cy="45" r="2" fill="#10b981" />
                    <circle cx="125" cy="30" r="2" fill="#ef4444" />
                    <circle cx="125" cy="45" r="2" fill="#10b981" />
                    <circle cx="105" cy="30" r="2" fill="#ef4444" />
                    <circle cx="105" cy="45" r="2" fill="#10b981" />
                    <circle cx="39" cy="75" r="2" fill="#ef4444" />
                    <circle cx="54" cy="75" r="2" fill="#10b981" />
                    <circle cx="32" cy="115" r="2" fill="#ef4444" />
                    <circle cx="47" cy="115" r="2" fill="#10b981" />
                    <circle cx="32" cy="154" r="2" fill="#ef4444" />
                    <circle cx="47" cy="154" r="2" fill="#10b981" />

                    <rect x="217" y="235" width="15" height="8" fill="#ef4444" stroke="#6b7280" strokeWidth="1" />
                  </svg>

                  { lintasan === "A" && (
                    <div
                      className="absolute w-3 h-3 bg-yellow-400 rounded-full border border-gray-300 animate-pulse"
                      style={ { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' } }
                    ></div>
                  ) }
                </div>
              </div>

              <div className="relative w-full flex-1">
                <div className="text-center mb-3">
                  <span className="bg-gray-800 text-green-400 px-4 py-2 rounded-md text-sm font-medium">LINTASAN-B</span>
                </div>
                <div className="relative w-full aspect-square border border-gray-700 rounded-md overflow-hidden max-w-sm mx-auto">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 250 250">
                    <rect width="100%" height="100%" fill="#111827" />

                    <defs>
                      <pattern id="gridB" width="50" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#374151" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridB)" />

                    <text x="25" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">A</text>
                    <text x="75" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">B</text>
                    <text x="125" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">C</text>
                    <text x="175" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">D</text>
                    <text x="225" y="15" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">E</text>

                    <text x="10" y="40" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">5</text>
                    <text x="10" y="90" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">4</text>
                    <text x="10" y="140" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">3</text>
                    <text x="10" y="190" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">2</text>
                    <text x="10" y="240" fill="#6b7280" textAnchor="middle" fontSize="10" fontFamily="monospace">1</text>

                    <circle cx="207" cy="155" r="2" fill="#10b981" />
                    <circle cx="222" cy="155" r="2" fill="#ef4444" />
                    <circle cx="207" cy="120" r="2" fill="#10b981" />
                    <circle cx="222" cy="120" r="2" fill="#ef4444" />
                    <circle cx="198" cy="80" r="2" fill="#10b981" />
                    <circle cx="213" cy="80" r="2" fill="#ef4444" />
                    <circle cx="137" cy="30" r="2" fill="#10b981" />
                    <circle cx="137" cy="45" r="2" fill="#ef4444" />
                    <circle cx="122" cy="30" r="2" fill="#10b981" />
                    <circle cx="122" cy="45" r="2" fill="#ef4444" />
                    <circle cx="107" cy="30" r="2" fill="#10b981" />
                    <circle cx="107" cy="45" r="2" fill="#ef4444" />
                    <circle cx="92" cy="30" r="2" fill="#10b981" />
                    <circle cx="92" cy="45" r="2" fill="#ef4444" />
                    <circle cx="20" cy="104" r="2" fill="#10b981" />
                    <circle cx="35" cy="104" r="2" fill="#ef4444" />
                    <circle cx="35" cy="134" r="2" fill="#10b981" />
                    <circle cx="50" cy="134" r="2" fill="#ef4444" />
                    <circle cx="28" cy="160" r="2" fill="#10b981" />
                    <circle cx="43" cy="160" r="2" fill="#ef4444" />

                    <rect x="17" y="235" width="15" height="8" fill="#10b981" stroke="#6b7280" strokeWidth="1" />
                  </svg>

                  { lintasan !== "A" && (
                    <div
                      className="absolute w-3 h-3 bg-yellow-400 rounded-full border border-gray-300 animate-pulse"
                      style={ { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' } }
                    ></div>
                  ) }
                </div>
              </div>
            </div>
          </div>
        </Content>
      </ContentWrapper> */}
    </Container>
  );
}
