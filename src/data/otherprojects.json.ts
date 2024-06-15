export interface Template {
  url: string;
  description: string;
  title: string;
}

const mergersandacquisitions: Template = {
  url: "http://www.sccapitalpartnersinc.com/services/mergers-and-acquisitions/",
  description:
    "Succession and exit strategy facilitation / consulting. Mergers and Acquisition representation with expertise to identify options and complete the transaction.",
  title: "Merger and Acquisition",
};

const privateplacements: Template = {
  url: "https://www.sccapitalpartnersinc.com/services/private-placements/",
  description:
    "Analyze the client’s financials and needs. Determine the amount and type of debt financing. Locate the best and most reasonable funding source. Negotiate the terms and conditions for the client. Complete the funding",
  title: "Debt",
};

const advisoryservices: Template = {
  url: "http://www.sccapitalpartnersinc.com/services/advisory-services/",
  description:
    "Public or Private, Hedge Funds, Accredited Investors, Family Offices, Mergers and Acquisitions.",
  title: "Equity",
};

const investmentbanking: Template = {
  url: "http://www.sccapitalpartnersinc.com/services/investment-banking/",
  description:
    "SC Capital Partners has a long history taking clients to the Toronto Stock Exchange (TSX) for public offerings. Lower Costs, strong Broker support and Liquidity of Shares.",
  title: "Public Offerings",
};

export const byName = {
  mergersandacquisitions,
  privateplacements,
  advisoryservices,
  investmentbanking,
};
export const otherprojects = Object.values(byName);
