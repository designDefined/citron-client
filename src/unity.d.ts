interface UnityInstance {
  SendMessage: (
    gameObject: string,
    method: string,
    param?: string | number,
  ) => void;
}

declare function createUnityInstance(
  canvas: HTMLCanvasElement,
  config: unknown,
  onProgress: (progress: number) => void,
): Promise<UnityInstance>;
