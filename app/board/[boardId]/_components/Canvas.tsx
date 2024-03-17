"use client";
import  { useCallback, useState } from 'react'
import Participants from './Participants'
import {Info} from './Info'
import Tooblbar from './Tooblbar'
import { 
  Camera, 
  CanvasMode, 
  CanvasState, 
  Color,
  LayerType,
  Point,
  Side,
  XYWH,
} from "@/types/canvas";

import { 
  useHistory, 
  useCanUndo, 
  useCanRedo,
  useMutation,
  useStorage,
  useOthersMapped,
  useSelf,
} from "@/liveblocks.config";
import { CursorsPresence } from './CursorPresence';
import { pointerEventToCanvasPoint } from '@/lib/utils';

interface CanvasProps{
  boardId:string;
}


function Canvas({boardId}:CanvasProps) {

  // const layerIds = useStorage((root) => root.layerIds);

  // const pencilDraft = useSelf((me) => me.presence.pencilDraft);
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [lastUsedColor, setLastUsedColor] = useState<Color>({
    r: 0,
    g: 0,
    b: 0,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);
  
  const onPointerMove = useMutation((
    { setMyPresence }, 
    e: React.PointerEvent
  ) => {
    e.preventDefault();

    const current = pointerEventToCanvasPoint(e, camera);

    // if (canvasState.mode === CanvasMode.Pressing) {
    //   startMultiSelection(current, canvasState.origin);
    // } else if (canvasState.mode === CanvasMode.SelectionNet) {
    //   updateSelectionNet(current, canvasState.origin);
    // } else if (canvasState.mode === CanvasMode.Translating) {
    //   translateSelectedLayers(current);
    // } else if (canvasState.mode === CanvasMode.Resizing) {
    //   resizeSelectedLayer(current);
    // } else if (canvasState.mode === CanvasMode.Pencil) {
    //   continueDrawing(current, e);
    // }

    setMyPresence({ cursor: current });
  }, 
  [
    // continueDrawing,
    camera,
    canvasState,
    // resizeSelectedLayer,
    // translateSelectedLayers,
    // startMultiSelection,
    // updateSelectionNet,
  ]);


  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none"  >
<Info boardId={boardId}/>
<Participants/>
<Tooblbar
canvasState={canvasState}
setCanvasState={setCanvasState}
canRedo={false}
canUndo={false}
undo={history.undo}
redo={history.redo}
/>
<svg className='h-[100vh] w-[100vw]'
onWheel={onWheel}
onPointerMove={onPointerMove}

>
  <g>
    <CursorsPresence/>

  </g>
</svg>


    </main>
  )
}

export default Canvas