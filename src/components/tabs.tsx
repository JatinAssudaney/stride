"use client";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  homeOutline,
  personOutline,
  fileTrayStackedOutline,
  bookmarksOutline,
} from "ionicons/icons";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Resources from "./pages/resources";
import Saved from "./pages/saved";
setupIonicReact({});

function Tabs() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="" exact render={() => <Redirect to="/home" />} />
          <Route path="/home" exact render={() => <Home />} />
          <Route path="/resources" exact render={() => <Resources />} />
          <Route path="/saved" exact render={() => <Saved />} />
          <Route path="/profile" exact render={() => <Profile />} />
        </IonRouterOutlet>
        <IonTabBar
          slot="bottom"
          className="bg-black-primary bg-transparent border-t border-black-secondary p-2 cursor-pointer rounded-b-lg"
        >
          <IonTabButton tab="home" href="/home" className="bg-black-primary">
            <IonIcon icon={homeOutline} mode="ios" title="home" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="resources"
            href="/resources"
            className="bg-black-primary"
          >
            <IonIcon icon={fileTrayStackedOutline} />
            <IonLabel>Resources</IonLabel>
          </IonTabButton>

          <IonTabButton tab="saved" href="/saved" className="bg-black-primary">
            <IonIcon icon={bookmarksOutline} />
            <IonLabel>Saved</IonLabel>
          </IonTabButton>

          <IonTabButton
            tab="profile"
            href="/profile"
            className="bg-black-primary"
          >
            <IonIcon icon={personOutline} mode="ios" title="profile" />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export default Tabs;
