Singapore Trip App V5

Fixes:
- Switched the visual map tile layer to the standard OpenStreetMap tile server.
- Added a visible message if map tiles cannot load in a local/preview environment.
- Added map.invalidateSize handling for mobile/browser resizing.
- Smoking locations now include a Route button.
- Smoking Route uses the same real foot-routing engine from your GPS position.
- Changi T4 smoking points are treated as terminal-area guidance; follow on-site signs.
- Orchard Road is not given a fake pin because smoking is only allowed at marked DSAs.

If the ChatGPT file preview still does not show map tiles, host the folder on HTTPS (for example your existing Render setup). GPS, camera, map tiles and routing are browser/network features and are more reliable when hosted.
