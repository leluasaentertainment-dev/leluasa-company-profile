const BASE_URL = "http://api.esportsearnings.com/v0";

type ApiErrorResponse = {
  ErrorCode: number;
};

export type EsportsEarningsGame = {
  GameName: string;
  TotalUSDPrize: string | number;
  TotalTournaments: string | number;
  TotalPlayers: string | number;
};

export type EsportsEarningsRecentTournament = {
  TournamentId: string | number;
  GameId: string | number;
  TournamentName: string;
  StartDate?: string;
  EndDate?: string;
  Location?: string;
  Teamplay: boolean | string | number;
  TotalUSDPrize: string | number;
};

export type EsportsEarningsPlayer = {
  PlayerId: string | number;
  NameFirst?: string;
  NameLast?: string;
  CurrentHandle: string;
  CountryCode?: string;
  TotalUSDPrize: string | number;
};

export type EsportsEarningsTeam = {
  TeamId: string | number;
  TeamName: string;
  TotalUSDPrize: string | number;
  TotalTournaments: string | number;
};

function getApiKey() {
  const apiKey = process.env.ESPORTS_EARNINGS_API_KEY;

  if (!apiKey) {
    throw new Error("ESPORTS_EARNINGS_API_KEY belum diisi di .env");
  }

  return apiKey;
}

function toNumber(value: string | number | null | undefined) {
  if (value === null || value === undefined) return 0;
  return Number(value) || 0;
}

function buildUrl(method: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${BASE_URL}/${method}`);

  url.searchParams.set("apikey", getApiKey());
  url.searchParams.set("format", "json");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  return url.toString();
}

async function fetchFromEsportsEarnings<T>(
  method: string,
  params: Record<string, string | number> = {}
): Promise<T> {
  const response = await fetch(buildUrl(method, params), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request gagal. HTTP status: ${response.status}`);
  }

  const data = (await response.json()) as T | ApiErrorResponse;

  if (
    typeof data === "object" &&
    data !== null &&
    "ErrorCode" in data
  ) {
    throw new Error(`Esports Earnings API ErrorCode: ${data.ErrorCode}`);
  }

  return data as T;
}

export async function lookupGameById(gameId: number) {
  const data = await fetchFromEsportsEarnings<EsportsEarningsGame>(
    "LookupGameById",
    {
      gameid: gameId,
    }
  );

  return {
    gameIdFromApi: gameId,
    name: data.GameName,
    totalPrizeUsd: toNumber(data.TotalUSDPrize),
    totalTournaments: toNumber(data.TotalTournaments),
    totalPlayers: toNumber(data.TotalPlayers),
  };
}

export async function lookupRecentTournaments(offset = 0) {
  const data = await fetchFromEsportsEarnings<EsportsEarningsRecentTournament[]>(
    "LookupRecentTournaments",
    {
      offset,
    }
  );

  return data.map((item) => ({
    tournamentIdFromApi: toNumber(item.TournamentId),
    gameIdFromApi: toNumber(item.GameId),
    name: item.TournamentName,
    startDate: item.StartDate ? new Date(item.StartDate) : null,
    endDate: item.EndDate ? new Date(item.EndDate) : null,
    location: item.Location ?? null,
    isTeamplay:
      item.Teamplay === true ||
      item.Teamplay === "true" ||
      item.Teamplay === "1" ||
      item.Teamplay === 1,
    totalPrizeUsd: toNumber(item.TotalUSDPrize),
  }));
}

export async function lookupHighestEarningPlayers(offset = 0) {
  const data = await fetchFromEsportsEarnings<EsportsEarningsPlayer[]>(
    "LookupHighestEarningPlayers",
    {
      offset,
    }
  );

  return data.map((item) => ({
    playerIdFromApi: toNumber(item.PlayerId),
    nickname: item.CurrentHandle,
    firstName: item.NameFirst ?? null,
    lastName: item.NameLast ?? null,
    countryCode: item.CountryCode ?? null,
    totalPrizeUsd: toNumber(item.TotalUSDPrize),
  }));
}

export async function lookupHighestEarningTeams(offset = 0) {
  const data = await fetchFromEsportsEarnings<EsportsEarningsTeam[]>(
    "LookupHighestEarningTeams",
    {
      offset,
    }
  );

  return data.map((item) => ({
    teamIdFromApi: toNumber(item.TeamId),
    name: item.TeamName,
    totalPrizeUsd: toNumber(item.TotalUSDPrize),
    totalTournaments: toNumber(item.TotalTournaments),
  }));
}