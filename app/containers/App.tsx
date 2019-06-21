import * as React from "react";

export default function App(props: { children: React.ReactNode }) {
  return <div>{props.children}</div>;
}
