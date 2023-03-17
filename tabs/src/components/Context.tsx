import { TeamsUserCredential, Channel, TeamsUserCredentialAuthConfig, TeamsFx } from "@microsoft/teamsfx";
import { createContext } from "react";
import { ThemePrepared } from "@fluentui/react-northstar";

export const TeamsFxContext = createContext<{
  theme?: ThemePrepared,
  themeString: string,
  teamsUserCredential?: TeamsUserCredential,
  channel?: Channel,
  teamsUserCredentialAuthConfig?: TeamsUserCredentialAuthConfig,
  teamsFx?: TeamsFx,
}>({
  theme: undefined,
  themeString: "",
  teamsUserCredential: undefined,
  channel: undefined,
  teamsUserCredentialAuthConfig: undefined,
  teamsFx: undefined,
});
