import type { APIModalSubmitInteraction } from 'discord-api-types/v10';
import type { Env } from '../@types/Env';
import type { APIResponse } from './APIResponse';

export abstract class Modal {
    public readonly env: Env;

    public readonly customID: string;

    public constructor({ env, customID }: { env: Env; customID: string }) {
        this.env = env;
        this.customID = customID;
    }

    public abstract respond(interaction: APIModalSubmitInteraction): Promise<APIResponse>;
}
