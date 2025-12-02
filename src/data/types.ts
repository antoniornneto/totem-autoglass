export type ClientKey = "client1" | "client2" | "client3" | "client4";

export interface Client {
  id: number;
  name: string;
  avatar: string;
  key: ClientKey;
}
