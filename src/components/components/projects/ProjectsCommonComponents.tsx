import { AppLink } from "@/domain/entities/Project";
import { ExternalLink, Github, Globe, Server, Smartphone } from "lucide-react";

export function getAppLinkIcon(type: AppLink["type"]) {
  switch (type) {
    case "github":
      return <Github className="h-4 w-4" />;
    case "web_app":
      return <Globe className="h-4 w-4" />;
    case "mobile_app_app_store":
    case "mobile_app_play_store":
      return <Smartphone className="h-4 w-4" />;
    case "api":
      return <Server className="h-4 w-4" />;
    default:
      return <ExternalLink className="h-4 w-4" />;
  }
}

export function getAppLinkLabel(type: AppLink["type"]) {
  switch (type) {
    case "github":
      return "Code";
    case "web_app":
      return "Web";
    case "mobile_app_app_store":
      return "App Store";
    case "mobile_app_play_store":
      return "Play Store";
    case "api":
      return "REST API";
    default:
      return "Link";
  }
}
