const ReactPrimitivesArt = require("../ReactPrimitivesArt");
import { ART } from 'react-native';

const {
  ClippingRectangle,
  Group,
  LinearGradient,
  Path,
  Pattern,
  RadialGradient,
  Shape,
  Surface,
  Text,
  Transform,
} = ART;

ReactPrimitivesArt.inject({
  ClippingRectangle,
  Group,
  LinearGradient,
  Path,
  Pattern,
  RadialGradient,
  Shape,
  Surface,
  Text,
  Transform,
});
