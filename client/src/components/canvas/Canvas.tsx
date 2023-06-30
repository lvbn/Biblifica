import { useEffect, useState } from 'react'
import { fabric } from "fabric";

export default function Canvas() {

  const [canvas, setCanvas] = useState<any>();

  useEffect(() => {
    return setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 50,
      width: 50,
      backgroundColor: 'pink'
    })
  )

  return(
    <canvas id="canvas" />
  );

}
