import { io, type Socket } from "socket.io-client";

export let SocketInstance: Socket | null = null;

export const SocketHelper = {
  async connect() {
    SocketInstance = io("https://coint-socket.darkube.app", {
      reconnectionDelayMax: 10000,
    });

    if (!localStorage.getItem("token")) {
      try {
        const result = await (
          await fetch("https://coint-socket.darkube.app/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token wdnuiadwnuajnfvjn1818u18njeqndkjaAAA`,
            },
            body: JSON.stringify({
              phoneNumber: Math.random(),
            }),
          })
        ).json();

        localStorage.setItem("token", result.token);
      } catch (e) {
        console.log(e);
      }
    }
  },

  disconnect() {
    if (SocketInstance) {
      SocketInstance.disconnect();
    }
  },
};
