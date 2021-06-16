::: tip Summary
- [io](#io)
- [canvas](#canvas)
- [selector](#selector)
- [selectorGui](#selectorgui)
- [selectorCanvas](#selectorcanvas)
- [globalConfig](#globalconfig)
:::
---
### io
- **Property**: `io`
- **Type**: SocketIO or other
- **Optional**: `false` 
- **Usage**:

 
Represents socket io client but you can put something else (which is the same schema as socket io)


---
### canvas
- **Property**: `canvas`
- **Type**: object
- **Optional**: `true` 
- **Usage**:

 
Canvas Options

* {boolean} [options.transparent=false] - If the render view is transparent, default false
* {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
  resolutions other than 1
* {boolean} [options.antialias=false] - sets antialias
* {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer. The
 resolution of the renderer retina would be 2.
* {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation,
 enable this if you need to call toDataUrl on the webgl context.
* {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     not before the new render pass.
* {number} [options.backgroundColor=0x000000] - The background color of the rendered area
 (shown if not transparent).


---
### selector
- **Property**: `selector`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The element selector that will display the canvas. By default, `#rpg`


---
### selectorGui
- **Property**: `selectorGui`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The selector that corresponds to the GUIs. By default, `#gui`
If you didn't put a GUI element in the div, an element will be automatically created.


---
### selectorCanvas
- **Property**: `selectorCanvas`
- **Type**: string
- **Optional**: `true` 
- **Usage**:

 
The selector that corresponds to the element contains canvas. By default, `#canvas`
If you didn't put element in the main div, an element will be automatically created.


---
### globalConfig
- **Property**: `globalConfig`
- **Type**: object
- **Optional**: `true` 
- **Usage**:

 
The general configurations of the game. For example, default keyboard keys, cursor noise. This is information that external modules can reuse

