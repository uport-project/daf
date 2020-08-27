## API Report File for "daf-did-comm"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AbstractMessageHandler } from 'daf-message-handler';
import { IAgentContext } from 'daf-core';
import { IAgentPlugin } from 'daf-core';
import { IHandleMessage } from 'daf-core';
import { IIdentityManager } from 'daf-core';
import { IKeyManager } from 'daf-core';
import { IMessage } from 'daf-core';
import { IPluginMethodMap } from 'daf-core';
import { IResolveDid } from 'daf-core';
import { Message } from 'daf-message-handler';

// @public (undocumented)
export class DIDComm implements IAgentPlugin {
    constructor();
    // (undocumented)
    readonly methods: IDIDComm;
    // (undocumented)
    sendMessageDIDCommAlpha1(args: ISendMessageDIDCommAlpha1Args, context: IAgentContext<IIdentityManager & IKeyManager & IResolveDid & IHandleMessage>): Promise<IMessage>;
}

// @public (undocumented)
export class DIDCommMessageHandler extends AbstractMessageHandler {
    constructor();
    // Warning: (ae-forgotten-export) The symbol "IContext" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    handle(message: Message, context: IContext): Promise<Message>;
}

// @public (undocumented)
export interface IDIDComm extends IPluginMethodMap {
    // (undocumented)
    sendMessageDIDCommAlpha1(args: ISendMessageDIDCommAlpha1Args, context: IAgentContext<IIdentityManager & IKeyManager & IResolveDid & IHandleMessage>): Promise<IMessage>;
}

// @public (undocumented)
export interface ISendMessageDIDCommAlpha1Args {
    // (undocumented)
    data: {
        id?: string;
        from: string;
        to: string;
        type: string;
        body: any;
    };
    // (undocumented)
    save?: boolean;
    // (undocumented)
    url?: string;
}


// (No @packageDocumentation comment for this package)

```