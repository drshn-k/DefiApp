import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compound' : () => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'total' : () => Promise<number>,
  'withdraw' : (arg_0: number) => Promise<number>,
}
