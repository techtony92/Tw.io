import { CanvasSpace, Form, Line, Vector, Const } from "ptjs";
(() => {
  let canvasSpace = null;
  let canvasForm = null;
  let canvasLine = null;
  let canvasCenter = null;
  let canvasPoints = [];
  let angle = null; // -(window.innerWidth * 0.5);
  let pointCount = null; // window.innerWidth * 0.05;
  let rotationBondry = null;
  let boundryPoint = null;
  let mouse = null;
  let colors = ["#FF3F8E", "#396639", "#2E55C1"];

  const populateCanvasPoints = (
    rotationBondry,
    boundryPoint,
    pointCount,
    canvasCenter
  ) => {
    for (let iterator = 0; iterator < pointCount; iterator++) {
      boundryPoint = new Vector(
        Math.random() * rotationBondry - Math.random() * rotationBondry,
        Math.random() * rotationBondry - Math.random() * rotationBondry
      );
      boundryPoint
        .moveBy(canvasCenter)
        .rotate2D((iterator * Math.PI) / pointCount, canvasCenter);
      boundryPoint.brightness = 0.1;
      canvasPoints.push(boundryPoint);
    }
  };

  const defineCanvasAttributes = (window) => {
    canvasSpace = new CanvasSpace("#canvas");
    canvasSpace.setup({
      bgcolor:"transparent",
      retina: true,
      resize: true
    });
    canvasForm = new Form(canvasSpace);
    canvasCenter = canvasSpace.size.$divide(1.8);
    angle = -(window.innerWidth * 0.5);
    pointCount = window.innerWidth * 0.05;
    mouse = canvasCenter.clone();
    rotationBondry = Math.min(canvasSpace.size.x, canvasSpace.size.y) * 1;
    if (pointCount > 150) pointCount = 150;
    canvasLine = new Line(0, angle).to(canvasSpace.size.x, 0);
    populateCanvasPoints(
      rotationBondry,
      boundryPoint,
      pointCount,
      canvasCenter,
    );
  };

  const generateAnimation = (
    canvasSpace,
    canvasForm,
    canvasPoints,
    canvasCenter,
    canvasLine,
    rotationBondry,
  ) => {
    canvasSpace.add({
      animate: (time, fps, context) => {
        for (let iterator = 0; iterator < canvasPoints.length; iterator++) {
          // rotate the points slowly
          let point = canvasPoints[iterator];

          point.rotate2D(Const.one_degree / 20, canvasCenter);
          canvasForm
            .stroke(false)
            .fill(colors[iterator % 3])
            .point(point, 1);

          // get line from pt to the mouse line
          let mouseLine = new Line(point).to(
            canvasLine.getPerpendicularFromPoint(point)
          );

          // opacity of line derived from distance to the line
          let opacity = Math.min(
            0.8,
            1 -
              Math.abs(canvasLine.getDistanceFromPoint(point)) / rotationBondry
          );
          let distFromMouse = Math.abs(mouseLine.getDistanceFromPoint(mouse));

          if (distFromMouse < 150) {
            if (canvasPoints[iterator].brightness < 0.3) {
              canvasPoints[iterator].brightness += 0.025;
            }
          } else {
            if (canvasPoints[iterator].brightness > 0.1) {
              canvasPoints[iterator].brightness -= 0.01;
            }
          }

          let color =
            "rgba(77,175,200," + canvasPoints[iterator].brightness + ")";
          canvasForm.stroke(color).fill(true).line(mouseLine);
        }
      },

      onMouseAction: (type, x, y, evt) => {
        if (type === "move") {
          mouse.set(x, y);
        }
      },
      onTouchAction: (type, x, y, evt) => {
        this.onMouseAction(type, x, y);
      }
    });
    canvasSpace.bindMouse();
  };

  
  const playAnimation = (window) => {
    canvasSpace !== null ? canvasSpace.play() : defineCanvasAttributes(window);
  };

  const initCanvas = (window) => {
    defineCanvasAttributes(window);
    generateAnimation(
      canvasSpace,
      canvasForm,
      canvasPoints,
      canvasCenter,
      canvasLine,
      pointCount
    );
  };

  module.exports = {
    initCanvas,
    playAnimation
  };
})();
