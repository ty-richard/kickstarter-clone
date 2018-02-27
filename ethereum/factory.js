import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xc2Cd105E5d3Fe805651A9f2EdAF8340DcB752995'
);

export default instance;
