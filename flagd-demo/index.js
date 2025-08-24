import { OpenFeature } from "@openfeature/server-sdk";
import { FlagdProvider } from "@openfeature/flagd-provider";

const provider = new FlagdProvider({
    host: "127.0.0.1",
    port: 8014
});

(async () => { 
    await OpenFeature.setProvider(provider);
    const client = await OpenFeature.getClient();
})();