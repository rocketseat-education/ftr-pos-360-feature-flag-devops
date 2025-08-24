import { OpenFeature } from "@openfeature/server-sdk";
import { FlagdProvider } from "@openfeature/flagd-provider";

const FLAG = 'NEW_FLAG';
const CONTEXT = { user: "rocketseat-user", group: "rocketseat-group" };

const provider = new FlagdProvider({
    host: "127.0.0.1",
    port: 8014
});

(async () => { 
    await OpenFeature.setProviderAndWait(provider);
    const client = await OpenFeature.getClient();
    const flag = await client.getBooleanValue(FLAG, false, CONTEXT);
    const details = await client.getBooleanDetails(FLAG, false, CONTEXT);
    console.log(flag);
    console.log(details);
})();