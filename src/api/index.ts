import ky from "ky";

export const api = ky.create({
  prefixUrl: "https://hhgnfcsswaeykpxe.tunnel.elice.io",
});
