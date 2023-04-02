import { Accessibility } from '@fluentui/react-northstar';
import { Enter, Spacebar } from 'keyboard-key';

const repliesButtonBehavior: Accessibility = () => ({
  keyActions: {
    root: {
      performClick: {
        keyCombinations: [{ keyCode: Enter }, { keyCode: Spacebar }],
      },
    },
  },
});
export default repliesButtonBehavior;
