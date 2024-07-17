import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  personOutline,
  fileTrayStackedOutline,
  bookmarksOutline,
} from "ionicons/icons";

import Profile from "./profile";
import Home from "./home";
import Resources from "./resources";
import Saved from "./saved";
import { Capacitor } from "@capacitor/core";

function Tabs() {
  const platform = Capacitor.getPlatform();
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/resources" exact={true}>
            <Resources />
          </Route>
          <Route path="/saved" exact={true}>
            <Saved />
          </Route>
          <Route path="/profile" exact={true}>
            <Profile />
          </Route>
          <Route path="" exact={true} render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
        <IonTabBar
          slot={platform === "web" ? "top" : "bottom"}
          className={` border-black-secondary p-2 cursor-pointer  ${
            platform === "web"
              ? "border-b rounded-t-lg"
              : "border-t rounded-b-lg"
          }`}
        >
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} mode="ios" title="home" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="resources" href="/resources">
            <IonIcon icon={fileTrayStackedOutline} />
            <IonLabel>Resources</IonLabel>
          </IonTabButton>

          <IonTabButton tab="saved" href="/saved">
            <IonIcon icon={bookmarksOutline} />
            <IonLabel>Saved</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personOutline} mode="ios" title="profile" />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Tabs;
