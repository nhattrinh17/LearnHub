// import { Socket, io } from 'socket.io-client';
// import { getStorageByName } from './storageClient';
// import { ACCESS_TOKEN, EventSocket } from '@constants/index';
// import { Buffer } from 'buffer';

// class WebSocketSingleton {
//   private static instance: WebSocketSingleton | null = null;
//   private socket: Socket | null = null;

//   private constructor() {}

//   public static getInstance(): WebSocketSingleton {
//     if (!WebSocketSingleton.instance) {
//       WebSocketSingleton.instance = new WebSocketSingleton();
//     }

//     return WebSocketSingleton.instance;
//   }

//   async checkAndConnectSocket() {
//     if (!this.socket) {
//       return this.connect();
//     }
//     return this.socket;
//   }

//   private convertBufferToObject(data: any) {
//     // var buffer = new Uint8Array(data);
//     // var fileString = String.fromCharCode.apply(null, Array.from(buffer));
//     // return JSON.parse(fileString);
//     const buffer = new Buffer(data);
//     const fileString = buffer.toString('utf-8');
//     return JSON.parse(fileString);
//   }

//   private async connect(): Promise<void> {
//     const url: string = process.env.URL_WSK || '';
//     // console.log('🚀 ~ WebSocketSingleton ~ url: ', url);
//     const access_token = await getStorageByName(ACCESS_TOKEN);
//     this.socket = io(url, {
//       transports: ['websocket', 'polling'],

//       extraHeaders: {
//         Authorization: access_token,
//       },
//       autoConnect: true,
//     });

//     this.socket.on(EventSocket.Connection, () => {
//       console.log(this.socket?.id);
//     });

//     this.socket.on(EventSocket.Disconnect, this.disconnect);

//     // this.socket.on('data', (data: any) => {
//     //   return this.convertBufferToObject(data);
//     // });

//     // this.socket.on(EventSocket.Messages, (data: any) => {
//     //   const dataParse = this.convertBufferToObject(data);
//     //   console.log('🚀 ~ WebSocketSingleton ~ this.socket.on ~ dataParse:', dataParse);
//     // });
//   }

//   public listeningEvent(event: string, callback: Function): void {
//     if (this.socket) {
//       this.socket.on(event, (data: any) => {
//         const dataParse = this.convertBufferToObject(data);
//         callback(dataParse);
//       });
//     }
//   }

//   public offListeningEvent(event: string, callback?: Function): void {
//     if (this.socket) {
//       callback
//         ? this.socket.off(event, (data: any) => {
//             const dataParse = this.convertBufferToObject(data);
//             callback(dataParse);
//           })
//         : this.socket.off(event);
//     }
//   }

//   public joinRoom(idGroup: string) {
//     if (this.socket) {
//       this.socket.emit(EventSocket.JoinRoom, {
//         idGroup,
//       });
//     }
//   }

//   public leaveRoom(idGroup: string) {
//     if (this.socket) {
//       this.socket.emit(EventSocket.LeaveRoom, {
//         idGroup,
//       });
//     }
//   }

//   public disconnect(): void {
//     if (this.socket) {
//       this.socket.close();
//       this.socket = null;
//     }
//   }

//   public emit(event: string, data: any): void {
//     if (this.socket) {
//       this.socket.emit(event, data);
//     }
//   }
// }

// export default WebSocketSingleton;
