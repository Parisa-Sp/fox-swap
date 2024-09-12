export type GetInfoAck = {
  balance: number;
  energy: number;
  lastClickDate: number;
  levels: {
    energyLimit: number;
    multiTap: number;
    offlineBot: number;
    rechargingSpeed: number;
  };
  phoneNumber: number;
};

export type GetUpgradesAck = {
  cost: number;
  description: string;
  id: string;
  name: string;
  userLevel: number;
};

export type GetMaxAck = {
  energyLimit: number;
  energyRecovery: number;
  tapRate: number;
};
