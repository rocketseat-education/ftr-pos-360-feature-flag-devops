import { OpenFeature } from "@openfeature/server-sdk";
import { FlagdProvider } from "@openfeature/flagd-provider";

const provider = new FlagdProvider();

(async () => { 
    await OpenFeature.setProvider(provider);
    const client = await OpenFeature.getClient();
})();