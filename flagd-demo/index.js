import { OpenFeature } from "@openfeature/server-sdk";
import { FlagdProvider } from "@openfeature/flagd-provider";

const FLAG = 'LOGIN_PAGE';

const provider = new FlagdProvider({
    host: "127.0.0.1",
    port: 8014
});

(async () => { 
    await OpenFeature.setProviderAndWait(provider);
    const client = await OpenFeature.getClient();
    const flag = await client.getBooleanValue(FLAG, false);
    const details = await client.getBooleanDetails(FLAG, false);
    console.log(flag);
    console.log(details);
})();