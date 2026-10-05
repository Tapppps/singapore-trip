Singapore Trip App V25

Critical fix:
- V24 still referenced removed legacy Route Now elements, especially planBanner, during startup.
- Those references are now guarded or removed.
- The new journey dashboard uses explicit DOM lookups rather than browser-created ID globals.
- Startup isolates hidden-map problems so they cannot stop the route cards loading.
- Too Hot and Wet/Dry no longer call removed Route Now functions.
- GPS no longer calls removed renderNext.
- Added visible 'Dashboard V25' label so you can confirm the new version is deployed.
- JavaScript syntax validated before packaging.
