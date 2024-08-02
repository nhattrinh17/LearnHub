import { Buffer } from 'buffer';

export const convertBufferToObject = (data: any) => {
  // var buffer = new Uint8Array(data);
  // var fileString = String.fromCharCode.apply(null, Array.from(buffer));
  // return JSON.parse(fileString);
  const buffer = new Buffer(data);
  const fileString = buffer.toString('utf-8');
  return JSON.parse(fileString);
};
