export enum ProgramType {
  MOVE = "move",
  MIX = "mix",
  SUPERSTART = "superstart",
  ENGAGE = "engage",
  YMS = "yms",
  WILDERNESS = "wilderness",
}

export enum RouteType {
  APP = "app",
  CONTACTS = "contacts",
  CONNECT = "connect",
  EMBEDDED = "embedded",
  EXTERNAL = "external",
  GRID = "grid",
  IMAGE = "image",
  MENU = "menu",
  ROOT = "root",
  SCHEDULE = "schedule",
  VIDEO = "video",
}

export interface Event {
  id: number;
  slug: string;
  title: string;
  program: ProgramType;
  location: string;
  startDate: string;
  endDate: string;
}
export interface Route {
  // meta?: Event;
  slug: string;
  type: RouteType;
  // title: string;
  // event: Event;
  path: string;
}

// pages
export interface AppPage extends Route {
  data: {
    name: string;
    appleStoreUrl: string;
    googlePlayStoreUrl: string;
    description: string;
    icon: string;
  };
}

export interface ContactsPage extends Route {
  data: {
    description: string;
    contacts: Contact[];
  };
}

export interface ConnectPage extends Route {
  data: {
    connections: Connection[];
  };
}

export interface EmbeddedPage extends Route {
  data: {
    title: string;
    url: string;
  };
}

export interface ExternalPage extends Route {
  data: {
    url: string;
  };
}

export interface GridPage extends Route {
  data: {
    description: string;
    images: GridImages[];
  };
}

export interface ImagePage extends Route {
  data: {
    title: string;
    image: string;
  };
}

export interface MenuPage extends Route {
  data: {
    description: string;
    buttons: Button[];
  };
}

export interface RootPage extends Route {
  data: {
    buttons: Button[];
  };
}

export interface SchedulePage extends Route {
  data: {
    days: Days[];
  };
}

export interface VideoPage extends Route {
  data: {
    video: string;
  };
}

export interface ComingSoonPage extends Route {
  data: {
    message: string;
    label: string;
    url: string;
  };
}

// elements
export interface Contact {
  name: string;
  email: string;
  phone: string;
  url: string;
  image: string;
  description: string;
  role: string;
  city: string;
  state: string;
}

export interface Connection {
  title: string;
  url: string;
  icon: string;
}

export interface GridImages {
  label: string;
  image: string;
  url: string;
}

export interface Days {
  day: Day[];
}

export interface Day {
  name: string;
  time: string;
  icon: string;
  color: Color[];
}

export interface Color {
  color: string;
  label: string;
}

export interface Button {
  slug: string;
  label: string;
  internal: boolean;
  url: string;
  type: RouteType;
  icon?: string;
}
