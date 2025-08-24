import { initialize } from "unleash-client";

const FLAG = "LOGIN_PAGE";

const unleash = await initialize({
    url: "http://127.0.0.1:4200/api/",
    appName: "unleash-demo",
    customHeaders: { Authorization: '' },
});

const verifyToggles = () => {
    const enabled = unleash.isEnabled(FLAG, { properties: { groupId: "rocketseat-user" } });
    if (enabled) {
        const variant = unleash.getVariant(FLAG );
        if (variant.enabled) {
        console.log(`${enabled} - ${variant.name} - ${variant.payload.value}`);
        } else {
            console.log(`${enabled} - ${variant.name}`);
        }
    } else {
        console.log(`${enabled}`);
    }

    setInterval(verifyToggles, 3000);
}

unleash.on("ready", verifyToggles);