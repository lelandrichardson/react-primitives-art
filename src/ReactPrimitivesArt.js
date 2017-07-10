const ReactPrimitivesArt = {
  LinearGradient: null,
  RadialGradient: null,
  Pattern: null,
  Transform: null,
  Path: null,
  Surface: null,
  Group: null,
  ClippingRectangle: null,
  Shape: null,
  Text: null,

  inject(api) {
    if (api.LinearGradient) {
      ReactPrimitivesArt.LinearGradient = api.LinearGradient;
    }
    if (api.RadialGradient) {
      ReactPrimitivesArt.RadialGradient = api.RadialGradient;
    }
    if (api.Pattern) {
      ReactPrimitivesArt.Pattern = api.Pattern;
    }
    if (api.Transform) {
      ReactPrimitivesArt.Transform = api.Transform;
    }
    if (api.Path) {
      ReactPrimitivesArt.Path = api.Path;
    }
    if (api.Surface) {
      ReactPrimitivesArt.Surface = api.Surface;
    }
    if (api.Group) {
      ReactPrimitivesArt.Group = api.Group;
    }
    if (api.ClippingRectangle) {
      ReactPrimitivesArt.ClippingRectangle = api.ClippingRectangle;
    }
    if (api.Shape) {
      ReactPrimitivesArt.Shape = api.Shape;
    }
    if (api.Text) {
      ReactPrimitivesArt.Text = api.Text;
    }
  }
};

module.exports = ReactPrimitivesArt;
