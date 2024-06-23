export interface Template {
  url: string;
  title: string;
}

const one: Template = {
  url: "https://www.shellbuildingsystems.com/rok-on/",
  title: "ROK-ON",
};

const two: Template = {
  url: "https://www.fieldbot.com",
  title: "Fieldbot",
};

const three: Template = {
  url: "http://good4global.com",
  title: "Good4Global/KONKA",
};

const four: Template = {
  url: "https://www.biolargo.com",
  title: "Biolargo, Inc.",
};

const five: Template = {
  url: "http://uselitewine.com",
  title: "U. S. Elite Winery",
};

const seven: Template = {
  url: "https://ConservationCentralNetwork.com",
  title: "Conservation Central Network",
};

const eight: Template = {
  url: "https://www.peoplescare.org",
  title: "Peoples Care, LLC",
};

const nine: Template = {
  url: "https://www.synergystrips.com",
  title: "Synergy Strips, Inc.",
};

const ten: Template = {
  url: "https://www.medprosafety.com",
  title: "Med Pro Safety Products",
};

const eleven: Template = {
  url: "https://home.meetme.com",
  title: "Quepasa (Meet Me)",
};

const twelve: Template = {
  url: "https://www.healthdiscoverycorp.com",
  title: "Health Discovery Corp.",
};

const thirteen: Template = {
  url: "https://www.airdyesolutions.com",
  title: "Colorep (Air Dye Solutions",
};

const fourteen: Template = {
  url: "https://www.zippi.com",
  title: "Zippi Networks",
};

const fifteen: Template = {
  url: "https://www.svssolutions.com",
  title: "Sun Valley Solar",
};

const sixteen: Template = {
  url: "https://www.benchmarkfr.com",
  title: "Benchmark FR",
};

const seventeen: Template = {
  url: "https://www.originalsprout.com",
  title: "Orignal Sprout LLC",
};

export const byName = {
  one,
  two,
  three,
  four,
  five,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
};
export const features = Object.values(byName);
