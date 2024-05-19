import { createFileRoute } from "@tanstack/react-router";
import Homepage from "../templates/Homepage/Homepage";

export const Route = createFileRoute("/")({
  component: () => <Homepage />,
});
