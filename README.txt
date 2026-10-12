Singapore Trip App V77

Fix:
- Corrected the zoomed-map-dot drift introduced in V76.
- The cause was the dot CSS changing MapLibre markers from absolute positioning to relative positioning.
- Dots now remain pinned to their true latitude/longitude while zooming.
- Location labels still appear when zoomed in, but no longer disturb marker anchoring.
