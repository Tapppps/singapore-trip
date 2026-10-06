Singapore Trip App V33

Fixes:
- Core buttons are now explicitly wired with event listeners.
- Choose Day, GPS, Current Step, Full Route, Zoom, Today’s Route and More/Hide work without relying on browser-generated element globals.
- A highly visible route is drawn above the simplified real map:
  thick white halo, thick coloured route line and repeated direction arrows.
- MapLibre line layout properties are corrected so the route line renders properly.
- App opens at route step 1 rather than the full-route overview.
- Short/local walking legs use actual mapped foot-route geometry.
