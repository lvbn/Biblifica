import React, { useEffect, useState } from 'react'

export default function Canvas() {

  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    })
  )

  return(
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <canvas id="canvas" />
    </div>
  );

}
