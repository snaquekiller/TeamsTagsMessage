import { TeamsUserCredential } from "@microsoft/teamsfx";
import { createContext } from "react";
import { ThemePrepared } from "@fluentui/react-components";

export const TeamsFxContext = createContext<{
  theme?: ThemePrepared,
  themeString: string,
  teamsUserCredential?: TeamsUserCredential,
}>({
  theme: undefined,
  themeString: "",
  teamsUserCredential: undefined
});
