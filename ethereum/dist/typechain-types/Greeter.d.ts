import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { OnEvent, TypedEvent, TypedEventFilter, TypedListener } from "./common";
export interface GreeterInterface extends utils.Interface {
    functions: {
        "greet()": FunctionFragment;
        "setGreeting(string)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "greet", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
    decodeFunctionResult(functionFragment: "greet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGreeting", data: BytesLike): Result;
    events: {};
}
export interface Greeter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GreeterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        greet(overrides?: CallOverrides): Promise<[string]>;
        setGreeting(_greeting: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    greet(overrides?: CallOverrides): Promise<string>;
    setGreeting(_greeting: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        greet(overrides?: CallOverrides): Promise<string>;
        setGreeting(_greeting: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        greet(overrides?: CallOverrides): Promise<BigNumber>;
        setGreeting(_greeting: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        greet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGreeting(_greeting: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
