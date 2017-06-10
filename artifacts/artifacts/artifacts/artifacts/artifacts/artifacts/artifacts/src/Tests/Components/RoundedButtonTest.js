// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
import test from 'ava';
import React from 'react';
import RoundedButton from '../../App/Components/RoundedButton';
import { shallow } from 'enzyme';
// Basic wrapper
const wrapper = shallow(React.createElement(RoundedButton, { onPress: () => { }, text: 'howdy' }));
test('component exists', (t) => {
    t.is(wrapper.length, 1); // exists
});
test('component structure', (t) => {
    t.is(wrapper.name(), 'TouchableOpacity'); // the right root component
    t.is(wrapper.children().length, 1); // has 1 child
    t.is(wrapper.children().first().name(), 'Text'); // that child is Text
});
test('onPress', (t) => {
    let i = 0; // i guess i could have used sinon here too... less is more i guess
    const onPress = () => i++;
    const wrapperPress = shallow(React.createElement(RoundedButton, { onPress: onPress, text: 'hi' }));
    t.is(wrapperPress.prop('onPress'), onPress); // uses the right handler
    t.is(i, 0);
    wrapperPress.simulate('press');
    t.is(i, 1);
});
test('renders children text when passed', (t) => {
    const wrapperChild = shallow(React.createElement(RoundedButton, { onPress: () => { } }, "Howdy"));
    t.is(wrapperChild.children().length, 1); // has 1 child
    t.is(wrapperChild.children().first().name(), 'Text'); // that child is Text
});
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map 
//# sourceMappingURL=RoundedButtonTest.js.map