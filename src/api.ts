import ky from "ky";

export const baseKy = ky.create({
  credentials: "include",
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  retry: {
    limit: 0,
    afterStatusCodes: []
  }
});

export const accessTokenStorageKey = "access_token";

let timer: number | undefined;

export function clearRefreshTokenTimer() {
  window.clearTimeout(timer);
}

function refreshToken() {
  type Res = { accessToken: string; expiryMS: number };
  clearRefreshTokenTimer();
  return baseKy
    .post<Res>("auth/refresh")
    .json()
    .then(data => {
      localStorage.setItem(accessTokenStorageKey, data.accessToken);
      timer = setTimeout(refreshToken, data.expiryMS);
    });
}

export const authKy = baseKy.extend({
  retry: {
    limit: 1,
    methods: ["get"],
    statusCodes: [401],
    afterStatusCodes: []
  },
  hooks: {
    beforeRequest: [
      req => {
        const token = localStorage.getItem(accessTokenStorageKey);
        if (token) {
          req.headers.set("Authorization", `Bearer ${token}`);
        }
      }
    ],
    beforeRetry: [refreshToken]
  }
});
