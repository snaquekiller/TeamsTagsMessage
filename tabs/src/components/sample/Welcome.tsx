import { useContext, useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { Graph } from "./Graph";
import { CurrentUser } from "./CurrentUser";
import { useData } from "@microsoft/teamsfx-react";
import { Deploy } from "./Deploy";
import { Publish } from "./Publish";
import { TeamsFxContext } from "../Context";
import { app, pages } from "@microsoft/teams-js";


export function Welcome(props: { showFunction?: boolean; environment?: string }) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["local", "azure", "publish"];
  const friendlyStepsName: { [key: string]: string } = {
    local: "1. Build your app locally",
    azure: "2. Provision and Deploy to the Cloud",
    publish: "3. Publish to Teams",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("local");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  const { teamsUserCredential, channel , teamsUserCredentialAuthConfig, teamsFx} = useContext(TeamsFxContext);
  console.log("channel",channel?.info)
  console.log("teamsUserCredentialAuthConfig",teamsUserCredentialAuthConfig)
  console.log("teamsUserCredential",teamsUserCredential)
  console.log("teamsFx",teamsFx?.getConfigs())
  app.getContext().then(dd => console.log("app", dd));
//   {
//     "app": {
//         "locale": "fr-fr",
//         "sessionId": "67203164-c21b-4348-98a5-3685859f95c4",
//         "theme": "default",
//         "iconPositionVertical": 79,
//         "parentMessageId": "",
//         "userClickTime": 1679014856823,
//         "userFileOpenPreference": "inline",
//         "host": {
//             "name": "Teams",
//             "clientType": "web",
//             "sessionId": "f67f7e43-111e-6e84-e5b4-c950c8d33458",
//             "ringId": "general"
//         },
//         "appLaunchId": "bea63ae3-9906-4851-a980-87d483e003e9"
//     },
//     "page": {
//         "id": "Test",
//         "frameContext": "content",
//         "subPageId": "",
//         "isFullScreen": false,
//         "isMultiWindow": false,
//         "sourceOrigin": null
//     },
//     "user": {
//         "id": "c263f78c-e471-4f0e-a921-89f2b1ba315d",
//         "licenseType": "Unknown",
//         "loginHint": "Guitton@2bhmn5.onmicrosoft.com",
//         "userPrincipalName": "Guitton@2bhmn5.onmicrosoft.com",
//         "tenant": {
//             "id": "17bf9f9d-ca1f-4aa6-a6ec-fb33020c21ec",
//             "teamsSku": "unknown"
//         }
//     },
//     "channel": {
//         "id": "19:a9ca117d2a654342960b76148f275837@thread.tacv2",
//         "displayName": "Général",
//         "relativeUrl": "/sites/DigitalInitiativePublicRelations39/Shared Documents/General",
//         "membershipType": "Regular",
//         "defaultOneNoteSectionId": ""
//     },
//     "team": {
//         "internalId": "19:a9ca117d2a654342960b76148f275837@thread.tacv2",
//         "displayName": "Digital Initiative Public Relations",
//         "type": 0,
//         "groupId": "6c8ca4b7-6aad-428f-b69e-1850fc4dc4f1",
//         "templateId": "",
//         "isArchived": false,
//         "userRole": 0
//     },
//     "sharePointSite": {
//         "teamSiteUrl": "https://2bhmn5.sharepoint.com/sites/DigitalInitiativePublicRelations39",
//         "teamSiteDomain": "2bhmn5.sharepoint.com",
//         "teamSitePath": "/sites/DigitalInitiativePublicRelations39",
//         "teamSiteId": "",
//         "mySitePath": "/personal/guitton_2bhmn5_onmicrosoft_com",
//         "mySiteDomain": "2bhmn5-my.sharepoint.com"
//     }
// }
  const { loading, data, error } = useData(async () => {
    if (teamsUserCredential) {
      const userInfo = await teamsUserCredential.getUserInfo();
      return userInfo;
    }
  });
  const userName = (loading || error) ? "": data!.displayName;
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="center">Congratulations{userName ? ", " + userName : ""}!</h1>
        <p className="center">Your app is running in your {friendlyEnvironmentName}</p>
        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "local" && (
            <div>
              <CurrentUser userName={userName} />
              <Graph />
            </div>
          )}
          {selectedMenuItem === "azure" && (
            <div>
              <Deploy />
            </div>
          )}
          {selectedMenuItem === "publish" && (
            <div>
              <Publish />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
