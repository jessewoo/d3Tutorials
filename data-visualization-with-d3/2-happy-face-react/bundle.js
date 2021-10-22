
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM, d3) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

    const BackgroundCircle = ({
      radius,
      strokeWidth
    }) => /*#__PURE__*/React__default["default"].createElement("circle", {
      r: radius,
      fill: "yellow",
      stroke: "black",
      "stroke-width": strokeWidth
    });

    const Eyes = ({
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius
    }) => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: -eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }), /*#__PURE__*/React__default["default"].createElement("circle", {
      cx: eyeOffsetX,
      cy: -eyeOffsetY,
      r: eyeRadius
    }));

    // Pass argument - then what gets returned, gets chained to next method

    const Mouth = ({
      mouthRadius,
      mouthWidth
    }) => {
      const mouthArc = d3.arc().innerRadius(mouthRadius).outerRadius(mouthRadius + mouthWidth).startAngle(Math.PI / 2).endAngle(Math.PI * 3 / 2);
      return /*#__PURE__*/React__default["default"].createElement("path", {
        d: mouthArc()
      });
    };

    const FaceContainer = ({
      children,
      width,
      height,
      centerX,
      centerY
    }) => /*#__PURE__*/React__default["default"].createElement("svg", {
      width: width,
      height: height
    }, /*#__PURE__*/React__default["default"].createElement("g", {
      transform: `translate(${centerX},${centerY})`
    }, children));

    const Face = ({
      width,
      height,
      centerX,
      centerY,
      strokeWidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      mouthRadius,
      mouthWidth
    }) => /*#__PURE__*/React__default["default"].createElement(FaceContainer, {
      width: width,
      height: height,
      centerX: centerX,
      centerY: centerY
    }, /*#__PURE__*/React__default["default"].createElement(BackgroundCircle, {
      radius: centerY - strokeWidth / 2,
      strokeWidth: strokeWidth
    }), /*#__PURE__*/React__default["default"].createElement(Eyes, {
      eyeOffsetX: eyeOffsetX,
      eyeOffsetY: eyeOffsetY,
      eyeRadius: eyeRadius
    }), /*#__PURE__*/React__default["default"].createElement(Mouth, {
      mouthRadius: mouthRadius,
      mouthWidth: mouthWidth
    }));

    const width = 160;
    const height = 160;
    const array = d3.range(6 * 3);

    const App = () => array.map(() => /*#__PURE__*/React__default["default"].createElement(Face, {
      width: width,
      height: height,
      centerX: width / 2,
      centerY: height / 2,
      strokeWidth: 6 + Math.random() * 3,
      eyeOffsetX: 20 + Math.random() * 9,
      eyeOffsetY: 20 + Math.random() * 15,
      eyeRadius: 5 + Math.random() * 10,
      mouthWidth: 7 + Math.random() * 9,
      mouthRadius: 30 + Math.random() * 10
    }));

    const rootElement = document.getElementById('root');
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].createElement(App, null), rootElement);

})(React, ReactDOM, d3);
//# sourceMappingURL=bundle.js.map
