import { PartialReadonlyContractAbi } from './types';
import { AnnotatedFunctionABI } from 'wyvern-js/lib/types';
export declare const getMethod: (abi: PartialReadonlyContractAbi, name: string) => AnnotatedFunctionABI;
export declare const event: (abi: PartialReadonlyContractAbi, name: string) => any;
export declare const DECENTRALAND_AUCTION_CONFIG: {
    '1': string;
};
export { ERC20 } from './abi/ERC20';
export { ERC721 } from './abi/ERC721v3';
export { ERC1155 } from './abi/ERC1155';
export { StaticCheckTxOrigin } from './abi/StaticCheckTxOrigin';
export { StaticCheckCheezeWizards } from './abi/StaticCheckCheezeWizards';
export { StaticCheckDecentralandEstates } from './abi/StaticCheckDecentralandEstates';
export { CheezeWizardsBasicTournament } from './abi/CheezeWizardsBasicTournament';
export { DecentralandEstates } from './abi/DecentralandEstates';
export { CanonicalWETH } from './abi/CanonicalWETH';
export { WrappedNFT } from './abi/WrappedNFT';
export { WrappedNFTFactory } from './abi/WrappedNFTFactory';
export { WrappedNFTLiquidationProxy } from './abi/WrappedNFTLiquidationProxy';
export { UniswapFactory } from './abi/UniswapFactory';
export { UniswapExchange } from './abi/UniswapExchange';
