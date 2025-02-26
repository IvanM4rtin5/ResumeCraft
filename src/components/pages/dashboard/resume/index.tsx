"use client"; 

import { 
    Panel, 
    PanelGroup, 
    PanelResizeHandle 
} from "react-resizable-panels"
import { InfosSidebar } from "./infos-sidebar"
import { ResumeContent } from "./resume-content"
import { StructureSidebar } from "./structure-sidebar"

export const ResumePage = () => {
  return (
    <main className="w-full h-screen overflow-hidden">
      <PanelGroup direction="horizontal" className="w-full h-full">
        <Panel minSize={20} maxSize={40} defaultSize={30}>
        <InfosSidebar />
        </Panel>
        <PanelResizeHandle className="w-px bg-gray-300 flex items-center justify-center cursor-ew-resize">
        <div className="w-1 h-6 bg-gray-500 rounded"></div> 
        </PanelResizeHandle>

        <Panel>
        <ResumeContent />
        </Panel>
        <PanelResizeHandle className="w-px bg-gray-300 flex items-center justify-center cursor-ew-resize">
        <div className="w-1 h-6 bg-gray-500 rounded"></div> 
        </PanelResizeHandle>

        <Panel minSize={20} maxSize={35} defaultSize={25}>
        <StructureSidebar />
        </Panel>

      </PanelGroup>
    </main>
  )
}
