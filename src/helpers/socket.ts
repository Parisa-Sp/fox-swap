import { io, type Socket } from "socket.io-client";

export let SocketInstance: Socket | null = null;

export const SocketHelper = {
  async connect() {
    SocketInstance = io("https://coint-socket.darkube.app", {
      reconnectionDelayMax: 10000,
    });

    if (!localStorage.getItem("token")) {
      try {
        const result = await fetch(
          "https://coint-socket.darkube.app/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token wdnuiadwnuajnfvjn1818u18njeqndkjaAAA`,
            },
            body: JSON.stringify({
              phoneNumber: Math.random(),
            }),
          }
        );

        if (result.ok) {
          localStorage.setItem("token", (await result.json()).token);
        } else {
          alert("Server Error!");
        }
      } catch (e) {
        console.log(e);
      }
    }
  },

  disconnect() {
    if (SocketInstance && localStorage.getItem("token")) {
      SocketInstance.disconnect();
    }
  },
};
