const buildUrl = "/unity/Build";
const config = {
  arguments: [],
  dataUrl: buildUrl + "/game.data",
  frameworkUrl: buildUrl + "/game.framework.js",
  codeUrl: buildUrl + "/game.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "unity-web-test",
  productVersion: "1.0",
  matchWebGLToCanvasSize: false,
};

export const createUnityGame = (canvas: HTMLCanvasElement) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // const dpr = window.devicePixelRatio || 1;
  // canvas.width = 480 * dpr;
  // canvas.height = 270 * dpr;

  return createUnityInstance(canvas, config, progress => {
    console.log(`progress: ${progress}`);
  });
};
