const buildUrl = "/unity/Build";
const storageUrl = import.meta.env.VITE_R2_URL ?? "";
console.log(storageUrl);
const config = {
  arguments: [],
  dataUrl: storageUrl + "/game.data",
  frameworkUrl: buildUrl + "/game.framework.js",
  codeUrl: storageUrl + "/game.wasm",
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
