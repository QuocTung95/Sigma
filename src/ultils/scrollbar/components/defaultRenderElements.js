import Helper from "../../helper";
import React from "react";

export default {
    renderViewDefault: function (props) {
        return React.createElement("div", props);
    },

    renderTrackHorizontalDefault: function (_ref) {
        let style = _ref.style,
            props = Helper.objectWithoutProperties(_ref, ['style']);
        let finalStyle = Helper.extendObject({}, style, { right: 2, bottom: 2, left: 2, borderRadius: 3 });
        return React.createElement('div', Helper.extendObject({ style: finalStyle }, props));
    },

    renderTrackVerticalDefault: function (_ref) {
        let style = _ref.style,
            props = Helper.objectWithoutProperties(_ref, ['style']);
        let finalStyle = Helper.extendObject({}, style, { right: 0, bottom: 2, top: 2, borderRadius: 3 });
        return React.createElement('div', Helper.extendObject({ style: finalStyle }, props));
    },

    renderThumbHorizontalDefault: function (_ref) {
        let style = _ref.style,
            props = Helper.objectWithoutProperties(_ref, ['style']);
        let finalStyle = Helper.extendObject({}, style, { cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)' });
        return React.createElement('div', Helper.extendObject({ style: finalStyle }, props));
    },

    renderThumbVerticalDefault: function (_ref) {
        let style = _ref.style,
            props = Helper.objectWithoutProperties(_ref, ['style']);
            
        let finalStyle = Helper.extendObject({}, style, { cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)' });
        return React.createElement('div', Helper.extendObject({ style: finalStyle }, props));
    }
};
